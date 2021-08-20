import React from "react"
import { useHistory } from "react-router-dom";
import styled from "styled-components"


const Container=styled.div`
display: flex;
align-items: center;
flex-direction: column;
`

const Form = styled.form`
display: flex;
flex-direction: column;
width: 400px;
input{
    padding: 10px;
    margin-bottom: 10px;
}
`



const  ApplicationFormPage=()=>{
    const history = useHistory();

    const voltar = () => {
        history.goBack("/");
    };

    return(
        <Container>
        <h1>Inscreverse para uma viagem</h1>

       <Form>
       <input
       placeholder='escolher viagem'
       />
       <input
       placeholder='Nome'
       />
       <input
       placeholder='Idade'
       />
       <input
       placeholder='texto de candidatura'
       />
       <input
       placeholder='Profissão'
       />
       <input
       placeholder='escolha um pais'
       />
       </Form>
       <button
       onClick={voltar}
       >voltar</button>
       <button>enviar</button>
        </Container>
        )
}
export default ApplicationFormPage