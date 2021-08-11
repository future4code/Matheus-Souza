import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
max-width:400px;
height:95vh;
display: flex;
border: 1px solid black;
margin: auto;
border-radius:2%;
background-color: white;
`

const Header= styled.div`
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

export function Home() {
    return <Container>
        <Header>
            <h2>astromatch</h2>
            <button>list</button>
        </Header>

        
    </Container>
}
export default Home