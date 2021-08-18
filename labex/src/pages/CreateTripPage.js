import React, { useEffect } from "react"
import { useHistory } from "react-router-dom";
import useProtectedPage from "../hooks/useProtectedPage";
const  CreateTripPage=()=>{
    useProtectedPage()
    const history = useHistory();

    const voltar = () => {
        history.goBack("/");
    };


    return(
        <>
        <h1>create trip Page</h1>
        Formulário para o administrador criar uma nova viagem        
        <button
        onClick={voltar}
        >voltar</button>
        <button>criar</button>

        </>
        )
}
export default CreateTripPage 