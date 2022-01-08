import { Request, Response } from "express";
import {connection} from "../data/connection";
import { authenticator } from "../services/authenticator";

export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { name, nickname } = req.body

      const userToken :string  = req.headers.Authorization as string

      const tokenData= new authenticator().getTokenData(userToken)

      if(!tokenData){
         res.statusCode = 401
         res.statusMessage= "token invalido ou expirado ou nem existe"
         throw new Error ()
      }

      if (!name && !nickname) {
         res.statusCode = 422
         res.statusMessage = "Informe o(s) novo(s) 'name' ou 'nickname'"
         throw new Error()
      }

      await connection('to_do_list_users')
         .update({ name, nickname })
         .where({ id: req.params.Authorization })

      res.end()

   } catch (error) {

      if (res.statusCode === 200) {
         res.status(500).end()
      }

      res.end()
   }
}