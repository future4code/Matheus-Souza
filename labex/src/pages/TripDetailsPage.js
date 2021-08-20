import React, { useState } from "react"
import { useHistory,useParams } from "react-router-dom";
import useProtectedPage from "../hooks/useProtectedPage";
import { useEffect } from "react";
import axios from "axios"



const  TripDetailsPage=()=>{
   useProtectedPage() 

  const params=useParams()
  const id = params.id
  const [listaa,setListaa]=useState()


    useEffect(() => {
        lista()
    });
  
    const lista=()=>{
        const token = localStorage.getItem("token");
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/matheus-dos-santos-lovelace/trip/${id}`;
    
        axios
          .get(url, {
            headers: {
              auth: token
            }
          })
          .then((res) => {
            setListaa(res.data.trip.name)
            console.log('trip detail page',res.data.trip.name);
          })
          .catch((err) => {
            console.log('deu errado',err);
          });
    }
    const history = useHistory();

    const voltar = () => {
        history.push("/");
    };

  
   

    return(
        <>
        <h1>trip detail page</h1>
        <button onClick={voltar}>voltar</button>
    {listaa}
    {console.log('lista',listaa)}
        </>
        )
}
export default TripDetailsPage 