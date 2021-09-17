import React, { useState } from "react"
import cards from "./tarot.json"
import styled from "styled-components"
import Card from "./compontents/Cards";



const ContainerCards = styled.div`
background-color: lightsteelblue;
display: grid;
grid-template-columns: repeat(18,1fr);
`
const Header=styled.div`
width: 100%;
height: 50px;
background-color: lightsteelblue;
align-items: center;
text-align: center;
button{
  background-color:lightcyan;
  padding:10px;
}
`


function App() {

  return (
    <div>
      <Header><button>iniciar jogo</button></Header>
    <ContainerCards >
      
      {cards.cards.map((item,index)=>(
        <Card carta={item} key={`card-${index}`} />
      ))}
    </ContainerCards>
    </div>
  );
}

export default App;
