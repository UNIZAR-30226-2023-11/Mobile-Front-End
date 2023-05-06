// socketContext.js
import React from 'react';
import io from 'socket.io-client';
import { socketUrl } from '../url/socket';

export const SocketContext = React.createContext();

export function SocketProvider({ children }) {
  const socket = React.useMemo(() => io(socketUrl), []);

  React.useEffect(() => {
    return () => socket.disconnect();
  }, [socket]);

  return <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>;
}
