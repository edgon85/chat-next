"use client";
import { AuthContext } from "@/context/AuthContext";
import Link from "next/link";
import { useRouter } from "next/navigation";

import React, { useContext, useEffect, useState } from "react";

import Swal from "sweetalert2";

export const LoginComponent = () => {
  const { login, verificaToken, auth } = useContext(AuthContext);
  const router = useRouter();
  useEffect(() => {
    const verificar = async () => {
      const resultado = await verificaToken();
      if (resultado) {
        // Si verificaToken retorna true, redirige a '/'
        router.replace("/");
      }
    };

    verificar();
  }, [verificaToken]);

  const [form, setForm] = useState({
    email: "test1@test.com",
    password: "123456",
    rememberme: false,
  });

  useEffect(() => {
    const email = localStorage.getItem("email");
    if (email) {
      setForm((form) => ({
        ...form,
        email,
        rememberme: true,
      }));
    }
  }, []);

  const onChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const toggleCheck = () => {
    console.log("??");
    setForm({
      ...form,
      rememberme: !form.rememberme,
    });
  };

  const onSubmit = async (ev: any) => {
    ev.preventDefault();

    console.log(ev);
    form.rememberme
      ? localStorage.setItem("email", form.email)
      : localStorage.removeItem("email");

    const { email, password } = form;
    const ok = await login(email, password);

    if (!ok) {
      Swal.fire("Error", "Verifique el usuario y contraseña", "error");
    }
  };

  const todoOk = () => {
    return form.email.length > 0 && form.password.length > 0 ? true : false;
  };

  return (
    <section className="flex justify-center items-center bg-blue-50 min-h-[100vh] ">
      <div className="w-full lg:w-4/12 px-4 mx-auto">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blue-200 border-0">
          <div className="rounded-  t mb-0 px-6 py-6">
            <div className="text-center mb-3">
              <h6 className="text-blue-500 text-sm font-bold">
                Iniciar sesión
              </h6>
            </div>
          </div>
          <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            <form onSubmit={onSubmit}>
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blue-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="border-0 px-3 py-3 placeholder-blue-300 text-blue-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Email"
                  value={form.email}
                  onChange={onChange}
                />
              </div>
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blue-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Password
                </label>
                <input
                  type="password"
                  className="border-0 px-3 py-3 placeholder-blue-300 text-blue-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Password"
                  name="password"
                  value={form.password}
                  onChange={onChange}
                />
              </div>
              <div className="flex justify-between items-center">
                <label
                  className="inline-flex items-center cursor-pointer"
                  onClick={() => toggleCheck()}
                >
                  <input
                    id="customCheckLogin"
                    type="checkbox"
                    className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                    name="rememberme"
                    checked={form.rememberme}
                    readOnly
                  />
                  <span className="ml-2 text-sm font-semibold text-blueGray-600">
                    Remember me
                  </span>
                </label>
                <Link
                  href={"/auth/register"}
                  className="text-xs text-blue-500 hover:text-blue-800"
                >
                  No tengo cuenta, Registrarme
                </Link>
              </div>

              <div className="text-center mt-6">
                <button
                  type="submit"
                  className="bg-blue-800 text-white active:bg-blue-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                  disabled={!todoOk()}
                >
                  Iniciar sesión
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
