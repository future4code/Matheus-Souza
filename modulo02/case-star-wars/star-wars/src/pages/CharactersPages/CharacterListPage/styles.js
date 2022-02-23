import styled from "styled-components"
import { backgroundUrl } from "../../../constants/back-ground-url"

export const CharacterListPageContainer= styled.div`
padding-top:4.6px;
text-align:center;
display:grid;
grid-template-columns:repeat(5,200px);
grid-template-rows:250px 250px;
column-gap:1rem;
justify-content: center;
background-image:url(${backgroundUrl});
color:white;
height:88vh;
img{
    cursor:pointer;
    width:100%;
    height:85%;
    border-radius:10px;
    border:1px solid gray;
   
}
`

export const CardCharacterContainer = styled.div`
height:100%;

`
