import { Request,Response } from "express";
import {UserDataBase} from "../database/UserDataBase"
import { User } from "../entities/User";

export const createUser =async (req:Request,res:Response):Promise<void>=>{
    try {
        const {name,email,age}=req.body
        const id = Date.now().toString()
     
        const user = new User(
            id,
            name,
            email,
            age
        )

        const userDateBase = new UserDataBase()
        await userDateBase.create(user)

        res.status(201).send("user  created")


    } catch (error:any) {
        console.log(error.message)
    }
}