import { Request, Response } from "express";
import { connection } from "../data/connection";
import { authenticator } from "../services/authenticator";
import { HashMananger } from "../services/hashManager";
import { IdGenerator } from "../services/idGenerator";
import { user } from "../types";

export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { name, nickname, email, password } = req.body

      if (!name || !nickname || !email || !password) {
         res.statusCode = 422
         throw new Error("Preencha os campos 'name', 'nickname' e 'email' e password")
      }

      const [user] = await connection('to_do_list_users')
         .where({ email })

      if (user) {
         res.statusCode = 409
         throw new Error('Email já cadastrado')
      }

      const id: string = new IdGenerator().generateId()

      const cipherText=new HashMananger().generateHash(password)

      const newUser: user = { id, name, nickname, email, password:cipherText }

      await connection('to_do_list_users')
         .insert(newUser)

      const token = new authenticator().generateToken({ id })

      res.status(201).send({ newUser,token })

   } catch (error) {

      if (res.statusCode === 200) {
         res.status(500).send({ message: "Internal server error" })
      } else {
         res.send({ message: error.sqlMessage || error.message })
      }
   }
}