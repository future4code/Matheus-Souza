import styled from "styled-components";
 import { backgroundUrl } from "../../../constants/back-ground-url"

export const Container = styled.div`

background-image:url(${backgroundUrl});
color:white;
background-repeat: no-repeat;
background-size:cover;
height:88.5vh;
margin:0px;

`
export const NameContainer = styled.div`
padding-top:10px;
text-align:center;
`
export const ImgCharacterContainer = styled.div`
  margin:15px;
  width:250px;
  height:300px;
`
export const Img = styled.img`
border-radius:15px;
    width:100%;
    height:100%;
`
export const DetailsContainer=styled.div`
display:flex;
width:465px;
font-size:1.4rem;

h3{
  margin:0px 0 2;
}

li{
  width:200px;
  list-style-type: none;
  border-bottom:1px solid gray;
  margin-bottom:10px;
  margin-right:30px;
 
}
ul{
  margin:0px;
  padding:0px;
}
`

export const MainContainer=styled.div`
display:flex;
height:100%;
`

export const AutomoveisContainer=styled.div`
width:100%;
height:76.7vh;
display: grid;
text-align:center;
grid-template-columns:1fr 1fr 1fr  ;
grid-template-rows:110px ;
column-gap:70px;
padding:20px;
h2{
  margin-top:0px;
}
img{
  width:100%;
  height:100%;
  border-radius:10px;
}

`
