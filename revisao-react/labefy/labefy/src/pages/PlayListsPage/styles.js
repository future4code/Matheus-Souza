import styled from "styled-components"

export const CardPlayListContainer = styled.div`
width:90%;
height:130px;
border:1px solid gray;
background-color: lightblue;
display: flex;
justify-content:space-between;
button{
   height:15px;
   width:15px;
   color:red;
}
`

export const PlayListPageContainer = styled.div`
display: grid;
grid-template-columns:1fr 1fr 1fr 1fr ;
grid-template-rows:1fr 1fr 1fr 1fr ;
gap:1rem;
margin-top:10px;

`
