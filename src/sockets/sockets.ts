import { Socket } from 'socket.io';
import socketIO from 'socket.io';

const SOCKET = {
  disconnect: (client: Socket) => {
    client.on('disconnect', () => {
      console.log('Disconnected');
    })
  },
  message: (client: Socket, io: socketIO.Server) => {
    client.on('message', (data) => {
      console.log('Message Recived', data);
      io.emit('message-send', data);
    });
  }
};

export default SOCKET;


