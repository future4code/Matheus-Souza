import styled from "styled-components"
import { backgroundUrl } from "../../../constants/back-ground-url"

export const CharacterListPageContainer= styled.div`
padding-top:10px;
text-align:center;
display:grid;
grid-template-columns:repeat(5,200px);
column-gap:1rem;
justify-content: center;
background-image:url(${backgroundUrl});
color:white;
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
