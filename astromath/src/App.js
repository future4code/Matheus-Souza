import React, { useState, useEffect } from 'react';
import Home from "./components/Home/Home";
import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';
import Tela from "./components/Tela/Tela";
const GlobalStyle = createGlobalStyle`
  body {
    background-color: lightblue;
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;
 
const Container = styled.div`
height:95vh;
margin-top: 10px;
`

function App() {

  const [tela, setTela] = useState('Tela')

  const trocarTela=(tela)=>{
   setTela(tela)
  }

  const escolheTelas=()=>{
    switch(tela){
        case 'Home':
           return  <Home trocarTela={trocarTela}/>
            case 'Tela':
                return <Tela trocarTela={trocarTela}/>
    }
}

  return (
    <Container>
      <GlobalStyle/>
      {escolheTelas()}
    </Container>
  );
}

export default App;
