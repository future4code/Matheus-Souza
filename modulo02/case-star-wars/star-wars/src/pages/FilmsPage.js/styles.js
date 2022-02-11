import styled from "styled-components"

export const FilmsPageContainer = styled.div`
display:grid;
grid-template-columns:repeat(6,15vw);
column-gap:20px;
margin:95px auto 30px;
text-align:center;
justify-content: center;
`
export const ImgContainer = styled.div`
width:100%;

img{
    width:100%;
    border-radius:10px;
}
`