import { Dispatch, createContext } from "react";

type ContextProps = {
  state: any;
  dispatch: Dispatch<any>;
  
};

export const ChatContext = createContext<ContextProps>({} as ContextProps);
