// socketContext.js
import React, {useEffect} from 'react';
import io from 'socket.io-client';
import { socketUrl } from '../url/socket';

export const SocketContext = React.createContext();

export function SocketProvider({ children }) {

  const [desconectado, setDesconectado] = React.useState(true);
  const [socket, setSocket] = React.useState(io(socketUrl));
  const [loggedIn, setLoggedIn] = React.useState(false);

  const contextValue = {
    socket,
    loggedIn,
    setLoggedIn
  };
  
  useEffect(() => {
    // console.log("Socket id: " + socket.id);
    if(socket){
    socket.on('disconnect', () => {
      console.log('Desconectado del servidor de socket');
      // Intentar reconectar después de un breve período de tiempo
      setTimeout(() => {
        setDesconectado(true);
      }, 2000);
    });
    }

    return () => socket.disconnect();
  }, [socket]);

  useEffect(() => {
    if(desconectado){
      setDesconectado(false);
      const sock = io(socketUrl);

      if(sock){
        sock.on('connect_error', (error) => {
          console.log('Error de conexión:', error);
          setDesconectado(true);
        });
        
        setSocket(sock);
      }
  }},
  [desconectado]);

  return <SocketContext.Provider value={contextValue}>{children}</SocketContext.Provider>;
}
