import React, { useState } from "react"
import { useHistory } from "react-router-dom";
import useProtectedPage from "../hooks/useProtectedPage";
import axios from "axios"

const CreateTripPage = () => {
    const [name,setName]= useState('')
    const [planet,setPlanet]= useState('')
    const [date,setDate]= useState('')
    const [description,setDescription]= useState('')
    const [durationInDays,setDurationInDays]= useState()

    useProtectedPage()
    const history = useHistory();

    const voltar = () => {
        history.goBack("/");
    };

   const createTrip=()=>{
        const token = localStorage.getItem("token");
        const url=`https://us-central1-labenu-apis.cloudfunctions.net/labeX/matheus-dos-santos-lovelace/trips`

        const body={
            name:name ,
            planet: planet,
            date:date,
            description: description,
            durationInDays: durationInDays
        }
        axios.post(url,body,{
            headers: {
                'Content-Type' : 'application/json',
                auth: token
            }
        })
        .then((res)=>{console.log('trip criada',res.data.trip)})
        .catch((err)=>{
            console.log('deu errado',err)})

    } 


    return (
        <>
            <h1>create trip Page</h1>
          <form>
            <input
            onChange={(e)=>{setName(e.target.value)}}
            value={name}
                placeholder="nome"
            />
            <input
            onChange={(e)=>{setPlanet(e.target.value)}}
             value={planet}
                placeholder="escolha um planeta"
            />
            <input
            type="date"
            onChange={(e)=>{setDate(e.target.value)}}
             value={date}
                placeholder="data"
            />
            <input
            onChange={(e)=>{setDescription(e.target.value)}}
             value={description}
                placeholder="descrição"
            />
            <input
            onChange={(e)=>{setDurationInDays(e.target.value)}}
              value={durationInDays}
                placeholder="duração em dias"
            />
            </form> 
            <button
                onClick={voltar}
            >voltar</button>
            <button
            onClick={createTrip}
            >criar</button>

        </>
    )
}
export default CreateTripPage