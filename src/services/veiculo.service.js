import { pool } from "../database/db.js";

class VeiculoService {

    async create(veiculo){
        const { modelo, marca, ano, placa } = veiculo

        const result = await
        pool.query(
            `INSERT INTO veiculos (modelo, marca, ano, placa)
            VALUES ($1, $2, $3, $4)
            RETURNING *`,
            [modelo, marca, ano, placa]
        )
        return result.rows[0]
    }
    async getAll() {
        const result = await
        pool.query(
            `SELECT * FROM veiculos ORDER BY modelo`
        )
        return result.rows
    }
}

export const veiculoService = new VeiculoService()