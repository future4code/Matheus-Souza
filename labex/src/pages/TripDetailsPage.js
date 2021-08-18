import React from "react"
import { useHistory } from "react-router-dom";
import useProtectedPage from "../hooks/useProtectedPage";

const  TripDetailsPage=()=>{
    useProtectedPage()
    const history = useHistory();


    const voltar = () => {
        history.goBack("/");
    };


    return(
        <>
        <h1>ver detalhes de viagens  e candidatos que aplicaram para ela</h1>
        <button onClick={voltar}>voltar</button>
        <button>criar</button>
        </>
        )
}
export default TripDetailsPage 