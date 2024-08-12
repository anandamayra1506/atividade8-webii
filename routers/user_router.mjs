import { Router } from "express";
import UserController from "../controllers/user_controller.mjs";

const userRouter = Router();

userRouter.post('/', UserController.new);
/*ROTA PARA VERIFICAR SE EXISTE USUÁRIO*/
userRouter.get('/existeusuario', UserController.existeUsuario);
userRouter.post('/login', UserController.login);
userRouter.get('/logged', UserController.logged);
userRouter.get('/logout', UserController.logout);

export default userRouter;