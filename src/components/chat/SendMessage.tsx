import React from "react";

export const SendMessage = () => {
  return (
    <form>
      <div className="flex gap-2 py-5">
        <input
          className="w-full bg-gray-300 py-5 px-3 rounded-xl"
          type="text"
          placeholder="type your message here..."
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
