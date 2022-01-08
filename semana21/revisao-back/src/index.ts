import dotenv from "dotenv";
import {Request,Response} from "express"
import app from "./app";
import { connection } from "./data/connection";
import {pokemons} from "./pokemons"


dotenv.config();

app.get('/ping',(req:Request,res:Response)=>{

console.log('esta funfando')
connection("redfox_pokemons")
.insert(pokemons.map((pokemon:any)=>{
  pokemon.Row_Value = pokemon.Row
  delete pokemon.Row
  return pokemon
}))
.then(() => { console.log("Sucesso!") })
.catch(err => console.log(err))
.finally(() => { connection.destroy() })
    res.status(200).send(pokemons)
})