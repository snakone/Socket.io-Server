import { Socket } from 'socket.io';
import socketIO from 'socket.io';
import { User } from '../classes/user.class';
import { UserList } from '../classes/user-list.class';

export const UsersConnected = UserList.instance;

const SOCKET = {
  connect: (client: Socket) => {
    console.log('Connected');
    const user = new User(client.id);
    UsersConnected.add(user);
  },
  disconnect: (client: Socket) => {
    client.on('disconnect', () => {
      UsersConnected.deleteUser(client.id);
      console.log('Disconnected');
    })
  },
  message: (client: Socket, io: socketIO.Server) => {
    client.on('message', (data) => {
      console.log('Message Recived', data);
      io.emit('message-send', data);
    });
  },
  user: (client: Socket, io?: socketIO.Server) => {
    client.on('user', (name: string, callback) => {
      console.log('User Recieved', name);
      UsersConnected.updateUser(client.id, name);
      callback({
        ok: true,
        message: 'User ' + name + ' recieved.'
      })
    });
  }
};

export default SOCKET;


