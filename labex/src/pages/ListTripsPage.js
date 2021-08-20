import { isTemplateElement } from "@babel/types";
import axios from "axios";
import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom";
import styled from "styled-components"


const Container = styled.div`
display: flex;
align-items: center;
flex-direction: column;
`
const CardList=styled.div`
margin: 10px;
padding: 20px;
width: 300px;
border:1px solid black;
p{
    color: gray;
}
`

const ListTripsPage = () => {


    const [lista, setLista] = useState([])

    const history = useHistory();

    useEffect(() => {
        getTrips()
    }, [])

    const voltar = () => {
        history.goBack("/");
    };
    const getTrips = () => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/matheus-dos-santos-lovelace/trips`
        axios
            .get(url)
            .then((res) => {
                setLista(res.data.trips)
                console.log('deu certo', res.data.trips)
            })
            .catch((err) => { console.log('deu errado', err) })


    }
    const goApplicationFormPage = () => {
        history.push("/trips/application");
    };

    const mostra = lista.map((i) => {
        return <CardList>
            <p>NOME:{i.name}</p>
            <p>DESCRIÇÃO:{i.description}</p>
            <p>DATA:{i.date}</p>
            <p>PLANETA:{i.planet}</p>
        </CardList>
    })
    return (
        <Container>
            <h1>lista de viagens</h1>
           
            <button
                onClick={voltar}
            >voltar</button>

            <button
                onClick={goApplicationFormPage}
            >inscreverse</button>


            {mostra}
        </Container>
    )
}
export default ListTripsPage