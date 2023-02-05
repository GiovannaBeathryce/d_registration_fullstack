import { Router } from "express";
import { loginController } from "../controllers/login.controller";

const LoginRoute = Router()

LoginRoute.post('', loginController)

export default LoginRoute