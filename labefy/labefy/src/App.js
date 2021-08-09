import React from "react"
import axios from "axios"
import CriaPlayList from "./Components/CriaPlayList"
import CriaMusica from "./Components/CriaMusicas"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle =createGlobalStyle `
* { 
padding: 0;
margin: 0;
max-width:80vw;
margin:auto;
}
` 
const Container = styled.header`
`


export default class App extends React.Component {
    render() {
        return (
            <Container>
                <GlobalStyle/>
                <Header />
                <CriaPlayList />
                <CriaMusica />
                <Footer/>
            </Container>
        )
    }
}
