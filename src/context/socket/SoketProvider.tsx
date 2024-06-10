import { use, useContext, useEffect } from "react";
import { SocketContext } from "./SocketContext";
import { AuthContext } from "../AuthContext";
import { useSocket } from "@/hooks/useSocket";
import { ChatContext } from "../chat/ChatContext";
import { scrollToBottomAnimated } from "@/helpers/scrollToBottom";

interface SocketProviderProps {
  children: JSX.Element | JSX.Element[];
}

export const SocketProvider: React.FC<SocketProviderProps> = ({ children }) => {
  const { socket, online, conectarSocket, desconectarSocket } = useSocket(
    "http://localhost:5000"
  );
  const { auth } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

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

  // escuchar los cambios de los usuarios conectados
  useEffect(() => {
    socket?.on("lista-usuarios", (usuarios) => {
      dispatch({
        type: "[Chat] - cargar-usuarios",
        payload: usuarios,
      });
    });
  }, [socket, dispatch]);

  useEffect(() => {
    socket?.on("mensaje-personal", (mensaje) => {
      dispatch({
        type: "[Chat] - nuevo-mensaje",
        payload: mensaje,
      });

      // mover el scroll
      scrollToBottomAnimated("messages");
    });
  }, [socket, dispatch]);

  return (
    <SocketContext.Provider value={{ socket, online }}>
      {children}
    </SocketContext.Provider>
  );
};
