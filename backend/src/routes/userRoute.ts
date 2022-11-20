import { Router } from 'express';
import UsersController from '../controlers/UserController';
import AuthMiddleware from '../middlewares/AuthMiddleware';
import AccountController from '../controlers/AccountController';

const UserRoute = Router();

UserRoute.post('/', UsersController.login);

export default UserRoute;
