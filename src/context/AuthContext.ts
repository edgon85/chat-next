import { createContext } from "react";
// import { fetchConToken, fetchSinToken } from '../helpers/fetch';

type ContextProps = {
  auth: {
    uid: string | null;
    checking: boolean;
    logged: boolean;
    name: string | null;
    email: string | null;
  };
  login: (email: string, password: string) => Promise<boolean>;
  register: (
    nombre: string,
    email: string,
    password: string
  ) => Promise<boolean | string>;
  verificaToken: () => Promise<boolean>;
  logout: () => void;
};

export const AuthContext = createContext<ContextProps>({} as ContextProps);

/* ······················································································· */
