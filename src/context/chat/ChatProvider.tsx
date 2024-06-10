import { useReducer } from "react";
import { ChatContext } from "./ChatContext";
import { chatReducer } from "./chatReducer";
import { IMessage } from "@/interfaces";

export interface ChatState {
  uid: string;
  activeChat: null | string;
  users: any[];
  messages: IMessage[];
}

const CHAT_INITIAL_STATE: ChatState = {
  uid: "",
  activeChat: null,
  users: [],
  messages: [],
};

type Props = {
  children: JSX.Element | JSX.Element[];
};

export const ChatProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(chatReducer, CHAT_INITIAL_STATE);

  return (
    <ChatContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
