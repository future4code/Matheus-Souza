import { Request, Response } from "express"
import { connection } from "../data/connection"

export const createProduct = async (req: Request, res: Response) => {
    try {

        const { name, tags } = req.body

        const id = Date.now()

        await connection('amaro_products')
            .insert({
                id,
                name,
                tags
            })

            if (typeof name !== "string") {
                throw new Error("Parâmetro 'name' deve ser do tipo 'string'")
              }
            
              if (typeof tags !== "string") {
                throw new Error("Parâmetro 'tags' deve ser do tipo 'string'")
              }
            
              const [product] = await connection("amaro_products").where({ name })
            
              if (product) {
                throw new Error("Produto já cadastrado")
              }

    } catch (error) {
       res.send(error)
    }
}