"use client";

import { AuthProvider } from "@/context/AuthProvider";

type Props = {
  children: JSX.Element | JSX.Element[];
};

export function Providers({ children }: Props) {
  return <AuthProvider>{children}</AuthProvider>;
}
