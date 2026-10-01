import { Router } from "express";
import { veiculoService } from "../services/veiculo.service.js";

export const veiculoRouter = Router()

veiculoRouter.post('/', async (req,res))