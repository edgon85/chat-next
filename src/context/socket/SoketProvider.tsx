import { useContext, useEffect } from "react";
import { SocketContext } from "./SocketContext";
import { AuthContext } from "../AuthContext";
import { useSocket } from "@/hooks/useSocket";

interface SocketProviderProps {
  children: JSX.Element | JSX.Element[];
}

export const SocketProvider: React.FC<SocketProviderProps> = ({ children }) => {
  const { socket, online, conectarSocket, desconectarSocket } = useSocket(
    "http://localhost:5000"
  );
  const { auth } = useContext(AuthContext);

  useEffect(() => {
    if (auth.logged) {
      conectarSocket();
    }
  }, [auth, conectarSocket]);

  useEffect(() => {
    if (!auth.logged) {
      desconectarSocket();
    }
  }, [auth, desconectarSocket]);

  return (
    <SocketContext.Provider value={{ socket, online }}>
      {children}
    </SocketContext.Provider>
  );
};
