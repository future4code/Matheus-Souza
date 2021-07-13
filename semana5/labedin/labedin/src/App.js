import React from 'react';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import styled, { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle `
* { 
padding: 0;
margin: 0;
box-sizing: border-box;
}
` 
const DivGlobal = styled.div `
display: flex;
flex-direction: column;
align-items: center;
margin-top: 30px;
`

const PageSectionContainer = styled.div `
width: 40vw;
margin: 10px 0;

h2{
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
} 
`


function App() {
  return (
    <DivGlobal>
      <GlobalStyle/>
      <PageSectionContainer>
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://uploads-ssl.webflow.com/5d640f4558306be99cf47a0e/5dd57846babb597b77c6bb1d_PerfilFuture4_cor.png" 
          nome="matheus" 
          descricao="Oi, eu sou matheus e vou ficar feliz quando aprender react"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </PageSectionContainer>

      <PageSectionContainer>
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />

        <CardPequeno
        email="javali_amigo@gmail.com"
        endereço="floresta das araucarias"
        />

        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="restaurante molim" 
          descricao="o melhor churrasco da cidade." 
        />
      </PageSectionContainer>

      <PageSectionContainer>
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </PageSectionContainer>
    </DivGlobal>
  );
}

export default App;
