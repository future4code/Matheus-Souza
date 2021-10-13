import {Request,Response} from "express"
import insertUser from "../data/insertUser"
import {connection} from "../index"


export default async function createUser(
    req:Request,res:Response
    ){
        try {
            if(
                !req.body.name || 
                !req.body.nickName ||
                !req.body.email
            ){
                res
                .status(400)
                .send("algum dos campos esta faltando")
            }

            const id =Date.now().toString()

            await insertUser(
                id,
                req.body.name ,
                req.body.nickName,
                req.body.email
            )

            res.status(200)
            .send("usuario criado ")
        } catch (error:any) {
            res.status(400).send({
                message:error.message|| error.sqlMessage
            })
        }
    }