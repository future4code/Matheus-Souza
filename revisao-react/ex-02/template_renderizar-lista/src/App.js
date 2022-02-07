import { useState } from "react";
import "./styles.css";
import { data } from "./data/data";
import { CardPeople } from "./components/CardPeople/CardPeople";
import { Container } from "./components/CardPeople/styles";
import { useEffect } from "react";

export default function App() {

  useEffect(() => {
    setPeople(data);
  })

  const [people, setPeople] = useState([]);
 

  const lista = people.map((item) => {
    return(
      <>
     <CardPeople lista = {item}/>
      </>

    )
  });

  return (
    <div className="App">
      <h3>Renderização de lista</h3>
    
      <div className="List">
        <Container>
          {lista}
        </Container>
      </div>
    </div>
  );
}
