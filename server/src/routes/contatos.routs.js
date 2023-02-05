import { Router } from "express";
import { createContatoController, listContatoController, updateContatoController, deleteContatoController } from "../controllers/contatos.controller";
import verifyAuthTokenMiddleware from "../middlewares/verifyAuthToken.middleware";

const ContatosRouts = Router()

ContatosRouts.post('', verifyAuthTokenMiddleware, createContatoController)
ContatosRouts.get('', verifyAuthTokenMiddleware, listContatoController)
ContatosRouts.patch('/:id', verifyAuthTokenMiddleware, updateContatoController)
ContatosRouts.delete('/:id', verifyAuthTokenMiddleware, deleteContatoController)

export default ContatosRouts
