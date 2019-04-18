import Router from "express";
import MAIN_ROUTE from './main/main.route';
import MESSAGE_ROUTE from './messages.routes';

const ROUTES = Router();

ROUTES.use('/', [MAIN_ROUTE,
                 MESSAGE_ROUTE]);

export default ROUTES;