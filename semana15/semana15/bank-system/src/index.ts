import express,{Express,Request,Response} from "express"
import cors from "cors"
import {accounts} from "./accounts"

const app:Express = express()

app.use(express.json())
app.use(cors())
app.listen(3003,()=>{
    console.log('server on')
})


app.get("/users",(req:Request,res:Response)=>{
    try {
        if(!accounts.length){
            res.statusCode = 404
            throw new Error ('nenhuma conta encontrada')
        }

     res.status(200).send(accounts)
    } catch (error:any) {
        res.send(error.message)
    }

})

app.post("/users/create",(req:Request,res:Response)=>{
  try {
      const {name, CPF, dateOfBirthString} = req.body
      const[day, month, year]=dateOfBirthString.split("/")
      const dateOfBirth:Date=new Date(`${year}-${month}-${day}`)

      const age:number =2021-year

      if(age<18){
          throw new Error("tem que ser maior de idade")
      }

      accounts.push({
          name,
          CPF,
          dateOfBirth,
          balance:0,
          statement:[]
      })

      res.status(201).send("conta criada com sucesso")
  } catch (error:any) {
      res.status(400).send(error.message)
  }  
})
