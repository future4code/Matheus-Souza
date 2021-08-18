import React from "react"
import { useHistory } from "react-router-dom";
import useProtectedPage from "../hooks/useProtectedPage";
import { useEffect } from "react";
import axios from "axios"
const  TripDetailsPage=()=>{


    useProtectedPage()
    const history = useHistory();

    const voltar = () => {
        history.goBack("/");
    };

    useEffect(() => {
        console.log('useeffect')
        const token = localStorage.getItem("token");
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/matheus-dos-santos-lovelace/trip/HF3V6C2VFWoQ3QUOVJON`;
    
        axios
          .get(url, {
            headers: {
              auth: token
            }
          })
          .then((res) => {
            console.log('deu certo',res.data);
          })
          .catch((err) => {
            console.log('deu errado',err.response);
          });
      }, []);
    

    return(
        <>
        <h1>ver detalhes de viagens  e candidatos que aplicaram para ela</h1>
        <button onClick={voltar}>voltar</button>
        <button>criar</button>
        </>
        )
}
export default TripDetailsPage 