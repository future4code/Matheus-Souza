import { Request, Response } from "express"
import { connection } from "../data/connection"
import { authenticator } from "../services/authenticator"
import { HashMananger } from "../services/hashManager"

export const login = async (
    req: Request,
    res: Response
) => {
    try {

        const { email, password } = req.body

        const [user] = await connection("to_do_list_users")
            .where({ email })


        const verificaLogin:boolean=new HashMananger().compareHash(password,user.password)

        console.log(verificaLogin)


        if (!user || !verificaLogin) {
            res.statusCode = 401
            throw new Error("email ou senha inválido")
        }

        const token = new authenticator().generateToken({ id: user.id })

        res.send(token)

    } catch (error) {
        if (res.statusCode === 200) {
            res.status(500).send({ message: "Internal server error" })
        } else {
            res.send({ message: error.message })
        }
    }
}