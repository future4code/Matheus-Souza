import styled from "styled-components"


export const CharacterListPageContainer= styled.div`
margin-top:10px;
text-align:center;
display:grid;
grid-template-columns:repeat(5,200px);
column-gap:1rem;
justify-content: center;

img{
    cursor:pointer;
    width:100%;
    height:85%;
    border-radius:10px;
   
}
`

export const CardCharacterContainer = styled.div`
height:100%;

`
