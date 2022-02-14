import styled from "styled-components"
import { backgroundUrl } from "../../../constants/back-ground-url"

export const PlanetsPageContainer = styled.div`
display:grid;
grid-template-columns:repeat(5,15vw);
column-gap:40px;
padding-top:20px ;
text-align:center;
justify-content: center;
height:85vh;
background-image:url(${backgroundUrl});
color:white;
li{
    padding:5px;
  list-style-type: none;
`
export const ImgContainer = styled.div`
width:100%;
img{
    cursor:pointer;
    width:200px;
    height:200px;
    border-radius:10px;
    border:1px solid gray;
}
`