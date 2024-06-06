import React from "react";
import { SendMessage } from "./SendMessage";
import { IncomingMessage } from "./IncomingMessage";
import { OutgoingMessage } from "./OutgoingMessage";

export const Messages = () => {
  const msgs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      {/* <!-- message --> */}
      <div className="w-full px-5 flex flex-col justify-between">
        <div className="flex flex-col mt-5 overflow-y-auto">
          {msgs.map((msg, i) =>
            i % 2 === 0 ? (
              <IncomingMessage key={i} />
            ) : (
              <OutgoingMessage key={i} />
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
