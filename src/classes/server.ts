import express from 'express';
import { PORT } from '../config/server.config';
import socketIO from 'socket.io';
import SOCKET from '../sockets/sockets';
import http from 'http';


export default class Server {
  private static _instance: Server;
  private httpServer: http.Server;

  public app: express.Application;
  public io: socketIO.Server;

  private constructor() {
    this.app = express();
    this.app.set('port', PORT);
    this.httpServer = new http.Server(this.app);
    this.io = socketIO(this.httpServer);
    this.sockets();
  }

  listen(callback: () => void) {
    this.httpServer.listen(this.app.get('port'), callback);
  }

  public static get instance() {
    return this._instance || (this._instance = new this());
  }

  private sockets() {
    this.io.on('connection', client => {
      SOCKET.connect(client);
      SOCKET.user(client);
      SOCKET.disconnect(client);
      SOCKET.message(client, this.io);
    });
  }
}