import { HoraMes } from "@/helpers/HoraMes";
import { IMessage } from "@/interfaces";
import React from "react";

type Props = {
  message: IMessage;
};

export const OutgoingMessage = ({ message }: Props) => {
  return (
    <>
      <div className="flex justify-start mb-4">
        <img
          src="/vercel.svg"
          className="object-cover h-8 w-8 rounded-full"
          alt=""
        />
        <div className="flex flex-col">
          <p className="ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white">
            {message.message}
          </p>
          <span className="text-xs pl-2" >{HoraMes(message.createdAt!)}</span>
        </div>
      </div>
    </>
  );
};
