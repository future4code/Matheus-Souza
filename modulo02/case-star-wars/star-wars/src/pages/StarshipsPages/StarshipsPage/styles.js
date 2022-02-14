import styled from "styled-components"
import { backgroundUrl } from "../../../constants/back-ground-url"


export const StarShipsPageContainer = styled.div`
display:grid;
grid-template-columns:repeat(5,200px);
column-gap:30px;
padding-top:15px;
text-align:center;
justify-content: center;
height:86vh;
background-image:url(${backgroundUrl});
color:white;
li{
  list-style-type: none;
}
`
export const ImgContainer = styled.div`
width:100%;
img{
    cursor: pointer;
    width:200px;
    height:200px;
    border-radius:10px;
}
`