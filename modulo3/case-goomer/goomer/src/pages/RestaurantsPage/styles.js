import styled from "styled-components"


export const RestaurantPageContainer=styled.div`
align-items:center;
text-align:center;
`
export const Title  =styled.h2`
#404040
top: 94px;
text-align: center;
font: normal normal medium 24px/29px Montserrat;
color: #404040;
opacity: 1;
`

export const Input=styled.input`
 width: 840px;
    box-shadow: 0px 2px 4px #00000029;
    border: none;
    border-radius: 50px;
    padding: 10px;
`
export const InputContainer=styled.div`
  display: flex;
    justify-content: center;
    margin: 30px;
    position: relative;

`
export const SearchIconContainer = styled.div`
    &:hover{ 
        cursor: pointer;
    }
    transform: translate(-35px,5px);
`;

export const  RestaurantsContainer=styled.div`


@media screen and (max-width: 948px) {
    grid-template-columns:repeat(2,1fr);
    column-gap:1rem;
  
  
}
@media screen and (max-width: 600px) {
    grid-template-columns:1fr;

  
  
}

display:grid;
align-self:center;
margin:0px 5vw;
grid-template-columns:repeat(3,1fr);
grid-template-rows:repeat(2,1fr);
column-gap:3.5vw;
row-gap:15px;
`
