import { useCallback, useState } from "react";
import { AuthContext } from "./AuthContext";
import { fetchConToken, fetchSinToken } from "@/helpers/fetch";

const initialState = {
  uid: null,
  checking: true,
  logged: false,
  name: null,
  email: null,
};

type Props = {
  children: JSX.Element | JSX.Element[];
};

export const AuthProvider = ({ children }: Props) => {
  const [auth, setAuth] = useState(initialState);

  const login = async (email: string, password: string) => {
    // console.log(email, password);
    const resp = await fetchSinToken("login", { email, password }, "POST");

    if (resp.ok) {
      localStorage.setItem("token", resp.token);
      const { user } = resp;

      // console.log(user)
      setAuth({
        uid: user.uid,
        checking: false,
        logged: true,
        name: user.name,
        email: user.email,
      });
    }

    return resp.ok;
  };

  const register = async (nombre: string, email: string, password: string) => {
    const resp = await fetchSinToken(
      "login/new",
      { name: nombre, email, password },
      "POST"
    );

    if (resp.ok) {
      localStorage.setItem("token", resp.token);
      const { user } = resp;

      setAuth({
        uid: user.uid,
        checking: false,
        logged: true,
        name: user.name,
        email: user.email,
      });

      return true;
    }

    return resp.msg;
  };

  const verificaToken = useCallback(async () => {
    const token = localStorage.getItem("token");
    // console.log({token})
    // Si token no existe
    if (!token) {
      setAuth({
        uid: null,
        checking: false,
        logged: false,
        name: null,
        email: null,
      });

      return false;
    }

    const resp = await fetchConToken("login/renew");
    if (resp.ok) {
      localStorage.setItem("token", resp.token);
      const { user } = resp;

      setAuth({
        uid: user.uid,
        checking: false,
        logged: true,
        name: user.name,
        email: user.email,
      });

      return true;
    } else {
      setAuth({
        uid: null,
        checking: false,
        logged: false,
        name: null,
        email: null,
      });

      return false;
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    setAuth({
      uid: null,
      checking: false,
      logged: false,
      name: null,
      email: null,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        auth,
        login,
        register,
        verificaToken,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
