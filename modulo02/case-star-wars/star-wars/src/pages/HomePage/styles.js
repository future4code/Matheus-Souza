import styled from "styled-components"

export const HomePageContainer=styled.div.attrs((props) => props)`
background-image: url('https://hddesktopwallpapers.in/wp-content/uploads/2015/06/pictures-star-wars-soldiers.jpg');
background-size: cover;
height:500px;
border-top:1px solid black;
display:flex;

li{
  cursor:pointer;
    color:black;
    font-size:1.8rem;
    list-style-type: none;
    width:300px;
    height:250px;
    margin:40px 0 0 0;
    text-align:center;
    :hover {
        background-image: url('${(props) => props.color}');
        background-repeat: no-repeat;
        background-position: center ;
        background-size:140px;
  }

}
`
