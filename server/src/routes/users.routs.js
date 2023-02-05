import { Router } from "express";
import { createUserController, listUserController, updateUserController, deleteUserController } from "../controllers/users.controller";
import checkExistingEmailMiddleware from "../middlewares/checkExistingEmail.middleware";
import verifyAuthTokenMiddleware from "../middlewares/verifyAuthToken.middleware";

const UserRoutes = Router()

UserRoutes.post("",createUserController);

UserRoutes.get("", listUserController);

UserRoutes.patch("/:id",verifyAuthTokenMiddleware, updateUserController);

UserRoutes.delete("/:id",verifyAuthTokenMiddleware, deleteUserController);
    

export default UserRoutes
