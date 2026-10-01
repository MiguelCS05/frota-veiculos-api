import { Router } from "express";
import { veiculoService } from "../services/veiculo.service.js";

export const veiculoRouter = Router()

veiculoRouter.post('/', async (req,res) =>{
  try{
    const veiculo = await
    veiculoService.create(req.body)

    res.status(201).json(veiculo)
  }catch(error){
    console.error(error)

    res.status(500).json({
        mensagem: 'Erro ao cadastrar veículo'
    })
  }
})

veiculoRouter.get('/', async(req,res) => {
    try{
        const veiculos = await
        veiculoService.getAll()

        res.status(200).json(veiculos)
    }catch (error){
        console.error(error)
        res.status(500).json({
            mensagem: 'Erro ao listar veículos'
        })
    }
})