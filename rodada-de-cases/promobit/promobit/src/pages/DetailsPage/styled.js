import styled from "styled-components"


export const MainContainer = styled.div`
max-height: 100vh;
box-sizing: border-box;
`
export const MovieBox = styled.div`
display: flex;
flex-direction: column;
margin: auto;
padding: 20px;
width: 400px;
img{
  height: 350px;
  margin: auto;
}
`
export const MovieTitle = styled.div`
font-size: 30px;
padding: 15px;
`
export const Detail = styled.div`
text-align: justify;
`

export const ButtonContainer = styled.div`
text-align: center;
`

export const StyledButton = styled.button`
  font-size: 1.2em;
  margin: 1em;
  padding: 0.25em 1em;
  color:black;
` 