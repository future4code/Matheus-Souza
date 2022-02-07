import { NavBar } from "./components/NavBar/NavBar";
import styled from "styled-components"
import { Router } from "./routes/Router";

const MainContainer = styled.div`
height:100%;
display:grid;
grid-template-columns:0.5fr 2fr;
background-color:lightgray;
text-align:center;
`

function App() {
  return (
    <MainContainer>
  <NavBar/>
    <Router/>
    </MainContainer>
  );
}

export default App;