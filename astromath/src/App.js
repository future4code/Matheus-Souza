import React from "react"
import Home from "./components/Home/Home";
import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';

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
  return (
    <Container>
      <GlobalStyle/>
      <Home/>
    </Container>
  );
}

export default App;
