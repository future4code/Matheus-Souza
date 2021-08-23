import React, { useEffect, useState } from "react"
import { useHistory, } from "react-router-dom";
import useProtectedPage from "../hooks/useProtectedPage";
import axios from "axios";
import styled from "styled-components"

const Container = styled.div`
padding: 10px;

`
const CardList=styled.div`
border: 1 px solid black;
padding-top:20px;
width: 300px;
margin: auto;
:hover{
  background-color:lightgray;
}
`

const AdminHomePage = () => {
  const [lista, setLista] = useState([])

  const history = useHistory();

  useProtectedPage()

  const voltar = () => {
    history.goBack("/");
  };

  const goLoginPage = () => {
    history.push("/login");
  };
  const goCreateTripPage = () => {
    history.push("/admin/trips/create");
  };

  const goTripDetailsPage = (id) => {

    history.push(`/admin/trips/${id}`);
  };

  const deleteTrip = (id) => {
    const token = localStorage.getItem("token");
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/matheus-dos-santos-lovelace/trips/${id}`,
    {
        headers: {
            'Content-Type' : 'application/json',
            auth : token
        }
    })
    .then(r => {
        console.log(r)
    })
    .catch(e => console.log(e.response))
}

  useEffect(() => {
    getTrips()
  }, [lista]);

  const getTrips = () => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/matheus-dos-santos-lovelace/trips`
    axios
      .get(url)
      .then((res) => {
        setLista(res.data.trips)
      })
      .catch((err) => { console.log('deu errado', err) })


  }
  const mostra = lista.map((i) => {
    return <>
      <CardList 
      onClick={() => {
        goTripDetailsPage(i.id)
      }}>{i.name} 
      <button
       onClick={
        
        ()=>{
          console.log('delete ')
          deleteTrip(i.id)}
      
      } 
      >X</button>
      </CardList>
    </>
  })
  return (
    <Container>
      <h1>painel administrativo</h1>

      <button
        onClick={voltar}
      >voltar
      </button>

      <button
        onClick={goCreateTripPage}
       >criar viagem
      </button>

      <button
        onClick={() => {
          goLoginPage()
          localStorage.clear()
        }}
      >logout</button>

      {mostra}

    </Container>
  )
}
export default AdminHomePage