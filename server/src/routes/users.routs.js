import { Router } from "express";
import { createUserController, listUserController, listUserIdController, updateUserController, deleteUserController } from "../controllers/users.controller";
import checkExistingEmailMiddleware from "../middlewares/checkExistingEmail.middleware";
import verifyAuthTokenMiddleware from "../middlewares/verifyAuthToken.middleware";

const UserRoutes = Router()

UserRoutes.post("",createUserController);

UserRoutes.get("", listUserController);

UserRoutes.get("/:id",verifyAuthTokenMiddleware, listUserIdController);

UserRoutes.patch("/:id",verifyAuthTokenMiddleware, updateUserController);

UserRoutes.delete("/:id",verifyAuthTokenMiddleware, deleteUserController);
    

export default UserRoutes
