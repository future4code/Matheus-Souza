import React from "react"
import axios from "axios"
import styled from "styled-components"

const Container1 = styled.div`
display: flex;
justify-content:space-between;
width:80vw;
margin: auto;
height:80vh;
h2{
margin-top:6px;
}

input{
    width:60%;
    padding:4px;
    border:1px solid black;
}
button{
    margin-top:30px;
    width:80px;
    padding:10px;
    border:1px solid black;
}

`
const CriaPlayListContainer = styled.div`
background: rgba(3, 29, 29, 0.219);
border: 4px solid gray;
height:35vh;
text-align:center;
align-items:center;
display: flex;
flex-direction: column;
margin:3rem 0px  30px 3rem;
`

const SuasPlayListsContainer = styled.div`
border: 1px solid black;
`
const ListaDePlayListContainer = styled.li``


export default class CriaPlayList extends React.Component {
    render() {
        return (
            <Container1>

                <CriaPlayListContainer>
                    <h2>Criar Play List </h2>
                    <input
                        placeholder="Nome da Playlist"
                    />
                    <button>SALVAR</button>
                </CriaPlayListContainer>

                <SuasPlayListsContainer>
                    <h2> Suas PlayLists</h2>
                    <ListaDePlayListContainer>
                        musica1
                    </ListaDePlayListContainer>
                </SuasPlayListsContainer>


            </Container1>
        )
    }
}
