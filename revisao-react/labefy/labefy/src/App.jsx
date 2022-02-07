import { NavBar } from "./components/NavBar/NavBar";
import { PlayBar } from "./components/PlayBar/PlayBar";
import styled from "styled-components"
import { Router } from "./routes/Router";

const MainContainer = styled.div`
display:grid;
grid-template-columns:0.5fr 2fr;
background-color:gray;
text-align:center;
`

function App() {
  return (
    <MainContainer>
  <NavBar/>
    <Router/>
   <PlayBar/>
    </MainContainer>
  );
}

export default App;