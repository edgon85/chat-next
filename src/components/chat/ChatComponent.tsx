"use client";
import React, { useContext, useEffect } from "react";
import { Sidebar } from "./Sidebar";
import { Messages } from "./Messages";
import { ChatHeader } from "./ChatHeader";
import { ChatSelect } from "./ChatSelect";
import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export const ChatComponent = () => {
  const { verificaToken, auth } = useContext(AuthContext);
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
      <div className="container mx-auto shadow-lg rounded-lg mt-8">
        {/* <!-- headaer --> */}
        <ChatHeader />
        {/* <!-- end header --> */}
        {/* <!-- Chatting --> */}
        <div className="flex flex-row justify-between bg-white max-h-[80vh]">
          {/* <!-- chat list --> */}
          <Sidebar />
          {/* <!-- end chat list --> */}
          {/* <!-- message --> */}
          {/* <Messages /> */}
          <ChatSelect />
          {/* <!-- end message --> */}
        </div>
      </div>
    </>
  );
};
