import {Request,Response} from "express"
import insertUser from "../data/insertUser"
import updateUser from "../data/updateUser"
import {connection} from "../index"


export default async function editUser(
    req:Request,res:Response
    ){
        try {
            if(
                req.body.name===''|| 
                req.body.nickName==='' ||
                req.body.email===''
            ){
                res
                .status(400)
                .send("preecha os campos")
            }

            if(!req.body.name&&!req.body.nickName&&!req.body.email){
                res
                .status(400)
                .send("algum valor deve mudar")
            }

            await updateUser(
                req.params.id,
                req.body.name,
                req.body.nickName,
                req.body.email
            )


            res.status(200)
            .send("usuario editado ")

        } catch (error:any) {
            res.status(400).send({
                message:error.message|| error.sqlMessage
            })
        }
    }