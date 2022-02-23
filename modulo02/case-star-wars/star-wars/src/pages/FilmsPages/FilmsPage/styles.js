import styled from "styled-components"
import { backgroundUrl } from "../../../constants/back-ground-url"


export const FilmsPageContainer = styled.div`
display:grid;
grid-template-columns:repeat(6,15vw);
column-gap:20px;
padding-top:80px;
text-align:center;
justify-content: center;
height:74.7vh;
background-image:url(${backgroundUrl});
color:white;
li{
    padding:10px;
  list-style-type: none;
`
export const ImgContainer = styled.div`
width:100%;

img{
    width:100%;
    border-radius:10px;
    border:1px solid gray;
    cursor:pointer;
}
`