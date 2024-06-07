"use client";
import { AuthContext } from "@/context/AuthContext";
import Link from "next/link";
import React, { useContext, useState } from "react";
import Swal from "sweetalert2";

export const RegisterComponent = () => {
  const { register } = useContext(AuthContext);

  const [form, setForm] = useState({
    email: "test6@test.com",
    password: "123456",
    name: "Susana Paz",
  });

  const onChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const onSubmit = async (ev: any) => {
    ev.preventDefault();

    const { email, password, name } = form;
    const msg = await register(name, email, password);

    if (msg !== true) {
      Swal.fire("Error", msg || "", "error");
    }
  };

  const todoOk = () => {
    return form.email.length > 0 &&
      form.password.length > 0 &&
      form.name.length > 0
      ? true
      : false;
  };

  return (
    <section className="flex justify-center items-center bg-blue-50 min-h-[100vh] ">
      <div className="w-full lg:w-4/12 px-4 mx-auto">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blue-200 border-0">
          <div className="rounded-t mb-0 px-6 py-6">
            <div className="text-center mb-3">
              <h6 className="text-blue-500 text-sm font-bold">Registrarse</h6>
            </div>
          </div>
          <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            <form onSubmit={onSubmit}>
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blue-600 text-xs font-bold mb-2"
                  htmlFor="grid-name"
                >
                  Name
                </label>
                <input
                  type="text"
                  className="border-0 px-3 py-3 placeholder-blue-300 text-blue-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  name="name"
                  placeholder="Nombre"
                  value={form.name}
                  onChange={onChange}
                />
              </div>
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blue-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="border-0 px-3 py-3 placeholder-blue-300 text-blue-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  name="email"
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
                  name="password"
                  placeholder="Password"
                  value={form.password}
                  onChange={onChange}
                />
              </div>
              <div className="flex justify-between items-center">
                <div></div>
                <Link
                  href={"/auth/login"}
                  className="text-xs text-blue-500 hover:text-blue-800"
                >
                  ya tengo cuenta, login
                </Link>
              </div>
              <div className="text-center mt-6">
                <button
                  className="bg-blue-800 text-white active:bg-blue-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                  type="submit"
                  disabled={!todoOk()}
                >
                  Crear cuenta
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
