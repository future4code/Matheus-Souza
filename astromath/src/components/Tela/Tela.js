import axios from "axios"
import { Container , Header } from "../Home/Home"
import React, { useState, useEffect } from 'react';


export const Tela=(props)=>{


    const [perfil, setPerfil] = useState([])


    useEffect(() => {
       mostraLista()
    }, []);

    const mostraLista=()=>{
        const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/matheus-santos-lovelace/matches`
        axios.get(url)
        .then((res)=>{
            setPerfil(res.data.matches)
            console.log('res.data',res.data)
            console.log('perfil->',perfil)})
        .catch((err)=>{console.log(err)})
    
    }

    const mostra = perfil.map((p)=>{
        return<p>{p.name}</p>
    }) 

    return <Container>
        <Header>
        <button onClick={() =>props.trocarTela("Home")}>
                home   
            </button> 
            astromatch 
            </Header>
            content
            {perfil.name}
            {perfil.name}
            {mostra}
            </Container>
}
export default Tela