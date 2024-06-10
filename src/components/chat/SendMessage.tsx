"use client";
import { AuthContext } from "@/context/AuthContext";
import { ChatContext } from "@/context/chat/ChatContext";
import { SocketContext } from "@/context/socket/SocketContext";
import React, { useContext, useState } from "react";

export const SendMessage = () => {
  const [message, setMessage] = useState("");
  const { socket } = useContext(SocketContext);
  const { auth } = useContext(AuthContext);
  const { state } = useContext(ChatContext);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (message.trim().length === 0) {
      return;
    }

    // Emitir un evento de socket para enviar el mensaje
    socket?.emit("mensaje-personal", {
      to: auth.uid,
      from: state.activeChat,
      message: message,
    });

    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex gap-2 py-5">
        <input
          className="w-full bg-gray-300 py-5 px-3 rounded-xl"
          type="text"
          placeholder="type your message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="border rounded-xl bg-blue-700 hover:bg-blue-500 text-white p-4"
        >
          Enviar
        </button>
      </div>
    </form>
  );
};
