import styled from "styled-components"
import { backgroundUrl } from "../../../constants/back-ground-url"


export const VeiclesPageContainer = styled.div`
display:grid;
grid-template-columns:repeat(5,14vw);
grid-template-rows:1fr 1fr ;
column-gap:50px;
padding-top:10px;
text-align:center;
justify-content: center;
height:87vh;
background-image:url(${backgroundUrl});
color:white;
li{
  list-style-type: none;
}

`
export const ImgContainer = styled.div`
width:100%;
img{
    cursor:pointer;
    width:200px;
    height:210px;
    border-radius:10px;
    border:1px solid gray;
}
`