import { Request, Response } from 'express';
import Server from '../classes/server';

const MESSAGE_CTRL: any = {};
const server = Server.instance;

MESSAGE_CTRL.sendMessage = async (req: Request, res: Response) => {

  const body = req.body.message;
  const from = req.body.from;

  server.io.emit('message-send', { body, from });

  res.status(200).json({
    ok: true,
    message: 'Message Send',
    body,
    from
  })
};

MESSAGE_CTRL.sendMessageById = async (req: Request, res: Response) => {

  const body = req.body.message;
  const from = req.body.from;
  const id = req.params.id;

  server.io.in(id).emit('private-message', { body, from });

  res.status(200).json({
    ok: true,
    message: 'Private Message send',
    body,
    from,
    id
  })
};

export default MESSAGE_CTRL;