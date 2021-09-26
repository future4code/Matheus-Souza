import React from "react"
import  Router  from "./route/Router";
import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    text-align: center;
  }
`;

function App() {
  return (
    <> 
    <GlobalStyle/>
     <Router/>
    </>
  );
}

export default App;
