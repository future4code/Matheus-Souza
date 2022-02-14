import styled from "styled-components"
import {backgroundUrl} from "../../../constants/back-ground-url"

export const SpeciesPageContainer = styled.div`
display:grid;
grid-template-columns:repeat(5,15vw);
column-gap:40px;
padding-top:5px;
text-align:center;
justify-content: center;
justify-content: center;
height:87.9vh;
background-image:url(${backgroundUrl});
color:white;
`
export const ImgContainer = styled.div`
width:100%;
img{
    width:200px;
    height:200px;
    border-radius:10px;
    cursor:pointer;
    border:1px solid gray;
}
`