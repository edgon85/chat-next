import { ChatContext } from "@/context/chat/ChatContext";
import { fetchConToken } from "@/helpers/fetch";
import { scrollToBottom } from "@/helpers/scrollToBottom";
import React, { useContext } from "react";

type Props = {
  item: any;
};
export const SidebarChatItem = ({ item }: Props) => {
  const { dispatch, state } = useContext(ChatContext);

  const onClick = async () => {
    dispatch({
      type: "[Chat] - activar-chat",
      payload: item.uid,
    });

    // Cargar los mensajes del chat
    const data = await fetchConToken(`mensajes/${item.uid}`);

    dispatch({
      type: "[Chat] - cargar-mensajes",
      payload: data.mensajes,
    });

    scrollToBottom("messages");
  };

  return (
    <>
      <div
        onClick={onClick}
        className={`flex flex-row py-4 px-2 justify-center items-center cursor-pointer border-b-2 ${
          state.activeChat === item.uid ? "border-l-4 border-blue-400" : ""
        }`}
      >
        <div className="w-1/4">
          <img
            src="/vercel.svg"
            className="object-cover h-12 w-12 rounded-full"
            alt=""
          />
        </div>
        <div className="w-full">
          <div className="text-lg font-semibold">{item.name}</div>
          <span className="text-gray-500">
            {item.online
              ? "Online"
              : item.lastMessage
              ? item.lastMessage
              : "Offline"}
          </span>
        </div>
      </div>
    </>
  );
};
