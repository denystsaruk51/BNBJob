import Config from './Config';
import socketIO from 'socket.io-client';

export function Socket() {
    const socket = socketIO(
        Config.domain, {            
        transports: ['websocket'],
        jsonp: false }
      );

    socket.connect();

    return socket
}



