import styled from "styled-components"

export const VeiclesPageContainer = styled.div`
display:grid;
grid-template-columns:repeat(5,15vw);
column-gap:40px;
margin:20px auto;
text-align:center;
justify-content: center;
`
export const ImgContainer = styled.div`
width:100%;
img{
    width:200px;
    height:210px;
    border-radius:10px;
}
`