import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import axios from 'axios'
import Tela from '../Tela/Tela';

export const Container = styled.div`
max-width:400px;
height:95vh;
display: flex;
border: 1px solid black;
margin: auto;
border-radius:2%;
background-color: white;
flex-direction: column;
`
export const Header = styled.div`
border-bottom: 1px solid gray;
width: 100%;
height: 50px;
display: flex;
justify-content:space-between;
align-items: center;
button{
    margin-right:20px;
}
h2{
    margin-left:125px;
}
`
const Main = styled.div`
padding: 20px;
img{
    width: 100%;
    height: 80%;
}
`

export function Home(props) {

    const [perfil, setPerfil] = useState({})
    const [escolha, setEscolha] = useState(1)


    useEffect(() => {
        pegaPerfil()
    }, [escolha]);



    const pegaPerfil = () => {
        const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/matheus-santos-lovelace/person`
        axios.get(url)
            .then((res) => {
                setPerfil(res.data.profile)
                console.log(res.data.profile)
                console.log('perfil', perfil)
            })
            .catch((err) => { console.log(err) })
    }

    const selecionaPerfil = (choice) => {
        const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/matheus-santos-lovelace/choose-person`
        const body = {
            id: perfil.id,
            choice: choice
        }
        axios.post(url, body)
            .then((res) => { console.log(res) })
            .catch((err) => { console.log(err) })

    }

    return <Container>
        <Header>
            <h2>astromatch</h2>
            <button onClick={() =>props.trocarTela("Tela")}>
                LISTA   
            </button> 
        </Header>

        <Main>
            <img src={perfil.photo} />
            {perfil.name}
            {perfil.age}
            <p> {perfil.bio}</p>
        </Main>
        <button
            onClick={() => {
                setEscolha(escolha + 1)
                selecionaPerfil(true)
            }}
        >sim
        </button>
        <button
            onClick={
                () => {
                    setEscolha(escolha + 1)
                    selecionaPerfil(false)
                }}
        >nops
        </button>
    </Container>
}
export default Home