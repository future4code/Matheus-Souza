import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import axios from 'axios'

const Container = styled.div`
max-width:400px;
height:95vh;
display: flex;
border: 1px solid black;
margin: auto;
border-radius:2%;
background-color: white;
flex-direction: column;
`
const Header = styled.div`
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

export function Home() {

    const [perfil, setPerfil] = useState([])
    const [escolha, setEscolha] = useState(false)


        useEffect(() => {
            pegaPerfil()
        }, []);



    const pegaPerfil = () => {
        const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person`
        axios.get(url)
            .then((res) => {
                setPerfil(res.data.profile)
                console.log(res.data.profile)
                console.log('perfil', perfil)
            })
            .catch((err) => { console.log(err) })
    }


    return <Container>
        <Header>
            <h2>astromatch</h2>
            <button>list</button>
        </Header>

        <Main>
            <img src={perfil.photo} />
            {perfil.name}
            {perfil.age}
            <p> {perfil.bio}</p>
        </Main>
        <button
    onClick={()=>{setEscolha(true)}}
    >sim</button>
    <button
    onClick={
        ()=>{setEscolha(false)}}
    >nops</button>
    </Container>
}
export default Home