"use client";
import React, { useContext, useEffect } from "react";
import { Sidebar } from "./Sidebar";
import { Messages } from "./Messages";
import { ChatHeader } from "./ChatHeader";
import { ChatSelect } from "./ChatSelect";
import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { ChatContext } from "@/context/chat/ChatContext";

export const ChatComponent = () => {
  const { verificaToken, auth } = useContext(AuthContext);
  const { state } = useContext(ChatContext);
  const router = useRouter();

  useEffect(() => {
    const verificar = async () => {
      const resultado = await verificaToken();
      if (!resultado) {
        router.replace("/auth/login");
      }
    };

    verificar();
  }, [verificaToken]);

  return (
    <>
      {/* <!-- This is an example component --> */}
      <div className="container mx-auto shadow-lg rounded-lg mt-8 min-h-[80vh]">
        {/* <!-- headaer --> */}
        <ChatHeader />
        {/* <!-- end header --> */}
        {/* <!-- Chatting --> */}
        <div className="flex flex-row justify-between bg-white max-h-[80vh]">
          {/* <!-- chat list --> */}
          <Sidebar />
          {/* <!-- end chat list --> */}
          {/* <!-- message --> */}
          {state.activeChat ? <Messages /> : <ChatSelect />}
          {/* <!-- end message --> */}
        </div>
      </div>
    </>
  );
};
