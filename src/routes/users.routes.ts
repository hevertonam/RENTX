import {Router} from "express";
import multer from "multer";
import { CreateUserController } from "../modules/accounts/entities/useCases/createUser/CreateUserController";
import { UpdateUserAvatarController } from "../modules/accounts/entities/useCases/createUser/updateUserAvatar/UpdateUserAvatarController";

const usersRoutes = Router();

const upload = multer({
    dest: "./avatar"
})

const createUserController = new CreateUserController();

const updateUserAvatarController = new UpdateUserAvatarController();

usersRoutes.post("/", createUserController.handle);

usersRoutes.patch("/avatar", upload.single("file"), updateUserAvatarController.handle);

export {usersRoutes};