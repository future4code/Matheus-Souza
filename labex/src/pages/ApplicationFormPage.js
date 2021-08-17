import React from "react"
import { useHistory } from "react-router-dom";

const  ApplicationFormPage=()=>{
    const history = useHistory();

    const voltar = () => {
        history.goBack("/");
    };


    return(
        <>
        <h1>Aplication home page</h1>
        Para o usuário se candidatar à viagens, página que vai ter o formulário de inscrição
       <button
       onClick={voltar}
       >voltar</button>
       <button>enviar</button>
        </>
        )
}
export default ApplicationFormPage