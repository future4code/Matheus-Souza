import express, { Express, Response, Request } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { user, arrayDeUsers } from "./types";

dotenv.config();

export const connection = knex({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME
    }
});

const app: Express = express();
app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});

app.get("/user", (req: Request, res: Response) => {
    try {

        const { name, nickName, email}: user = req.body

        const id=Date.now()
        
        if(!name||!nickName||!email){
            res.statusCode = 404
            throw new Error ("preencha todos os campos")
        }
        arrayDeUsers.push({ name, nickName, email,id})

        res.send(arrayDeUsers)

    } catch (error: any) {
        res.send(error.message)
    }


})

app.get("/user/:id",(req:Request,res:Response)=>{
    try {
        
        const user = arrayDeUsers.filter((user)=>user.id===Number(req.params.id))

        if(!user ||!user.length){
            res.statusCode = 404
            throw new Error ("usuario não encontrado")
        }

        res.send(user)

    } catch (error:any) {
        res.send(error.message)
    }
})

app.put("/user/edit/:id",(req:Request,res:Response)=>{

    const { name, nickName, email}: user = req.body

    console.log(name)

    

})
