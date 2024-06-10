import { HoraMes } from "@/helpers/HoraMes";
import { IMessage } from "@/interfaces";

type Props = {
  message: IMessage;
};
export const IncomingMessage = ({ message }: Props) => {
  return (
    <>
      <div className="flex justify-end mb-4">
        <div className="flex flex-col">
          <p className="mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white">
            {message.message}
          </p>
          <span className="text-xs self-end pr-2">{HoraMes(message.createdAt!)}</span>
        </div>
        <img
          src="/next.svg"
          className="object-cover h-8 w-8 rounded-full"
          alt=""
        />
      </div>
    </>
  );
};
