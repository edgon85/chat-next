"use client";
import React, { useContext } from "react";
import { SidebarChatItem } from "./SidebarChatItem";
import { ChatContext } from "@/context/chat/ChatContext";
import { AuthContext } from "@/context/AuthContext";

export const Sidebar = () => {
  const { state } = useContext(ChatContext);
  const { auth } = useContext(AuthContext);

  return (
    <>
      {/* <!-- chat list --> */}
      <div className="flex flex-col w-2/5 border-r-2 overflow-y-auto">
        {/* <!-- user list --> */}

        {state.users
          .filter((usuario: any) => usuario.uid !== auth.uid)
          .map((usuario: any) => (
            <SidebarChatItem key={usuario.uid} item={usuario} />
          ))}

        {/* <!-- end user list --> */}
      </div>
      {/* <!-- end chat list --> */}
    </>
  );
};
