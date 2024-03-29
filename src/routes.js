import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authHeader from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);

routes.put('/users', authHeader, UserController.update);

routes.post('/sessions', SessionController.store);

export default routes;
