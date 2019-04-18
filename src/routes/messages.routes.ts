import { Router } from "express";
import MESSAGE_CTRL from "../controllers/messages.controller";

const MESSAGE_ROUTE = Router();

MESSAGE_ROUTE.post('/messages', MESSAGE_CTRL.sendMessage);
MESSAGE_ROUTE.post('/messages/:id', MESSAGE_CTRL.sendMessageById);

export default MESSAGE_ROUTE;