import React, { useState } from "react"
import cards from "./tarot.json"
import styled from "styled-components"
import Card from "./compontents/Cards";



const ContainerCards = styled.div`
display: grid;
grid-template-columns: repeat(12, 1fr);
`

function App() {



  return (
    <ContainerCards >
      {cards.cards.map((item,index)=>(
        <Card carta={item} key={`card-${index}`} />
      ))}
    </ContainerCards>
  );
}

export default App;
