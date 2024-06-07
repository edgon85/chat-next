"use client";

import { AuthProvider } from "@/context/AuthProvider";
import { SocketProvider } from "@/context/socket/SoketProvider";

type Props = {
  children: JSX.Element | JSX.Element[];
};

export function Providers({ children }: Props) {
  return (
    <AuthProvider>
      <SocketProvider>{children}</SocketProvider>
    </AuthProvider>
  );
}
