"use client";
import React, { useContext } from "react";
import { SendMessage } from "./SendMessage";
import { IncomingMessage } from "./IncomingMessage";
import { OutgoingMessage } from "./OutgoingMessage";
import { ChatContext } from "@/context/chat/ChatContext";
import { AuthContext } from "@/context/AuthContext";
import { IMessage } from "@/interfaces";

export const Messages = () => {
  const { state } = useContext(ChatContext);
  const { auth } = useContext(AuthContext);

  return (
    <>
      {/* <!-- message --> */}
      <div className="w-full px-5 flex flex-col justify-between">
        <div id="messages" className="flex flex-col mt-5 overflow-y-auto min-h-[70vh]">
          {state.messages.map((msg: IMessage) =>
            msg.from === auth.uid ? (
              <OutgoingMessage key={msg._id} message={msg} />
            ) : (
              <IncomingMessage key={msg._id} message={msg} />
            )
          )}
          {/* <IncomingMessage />
          <OutgoingMessage /> */}
        </div>
        <SendMessage />
      </div>
      {/* <!-- end message --> */}
    </>
  );
};
