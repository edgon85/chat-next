import React, { useContext, useEffect, ReactNode } from "react";
import { createContext } from "react";
import { AuthContext } from "../AuthContext";
import { useSocket } from "@/hooks/useSocket";

interface SocketContextProps {
  socket: ReturnType<typeof useSocket>["socket"];
  online: boolean;
}

export const SocketContext = createContext<SocketContextProps>(
  {} as SocketContextProps
);
