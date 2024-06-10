"use client";

import { AuthProvider } from "@/context/AuthProvider";
import { ChatProvider } from "@/context/chat/ChatProvider";
import { SocketProvider } from "@/context/socket/SoketProvider";

type Props = {
  children: JSX.Element | JSX.Element[];
};

export function Providers({ children }: Props) {
  return (
    <ChatProvider>
      <AuthProvider>
        <SocketProvider>{children}</SocketProvider>
      </AuthProvider>
    </ChatProvider>
  );
}
