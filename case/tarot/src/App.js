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

    const [isFlipped, setIsFlipped] =useState(false)


     const shuffleArray=(arr)=>{
      console.log('embaralhadas')
      setIsFlipped(true)
      if(isFlipped){
        
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
      }
    return arr;
  }

  const map=cards.cards.map((item,index)=>(
  
    <Card carta={item} key={`card-${index}`} isFlipped={isFlipped} setIsFlipped={setIsFlipped} />

  ))


  return (
    <div>
      <Header><button onClick={()=>{shuffleArray(cards.cards)}}>Jogar</button></Header>
    <ContainerCards >
      
      {map}
    </ContainerCards>
    </div>
  );
}

export default App;
