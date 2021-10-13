import { Request, Response } from "express"
import insertUser from "../data/insertUser"
import selectUserById from "../data/selectUserById"
import { connection } from "../index"


export default async function getUserById(
    req: Request, res: Response
) {
    try {
        const user = await selectUserById(req.params.id)

        if (!user) {
            res.status(404).send({
                message: "user not found"
            })

        }

        res.status(200)
        .send({
            id:user.id,
            nickName:user.nickName
        })
    } catch (error: any) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}