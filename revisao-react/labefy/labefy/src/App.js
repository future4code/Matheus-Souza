//pagina para exibir as plays
// formulário para criar uma nova playlist
//Depois que uma playlist for criada, a lista de playlists deve ser atualizada automaticamente

import { NavBar } from "./components/NavBar/NavBar";
import { PlayBar } from "./components/PlayBar/PlayBar";
import { TracksListPage } from "./pages/TracksListPage/TracksListPage";
import { createGlobalStyle } from 'styled-components';
import styled from "styled-components"
import { PlayListPage } from "./pages/PlayListsPage/PlayListPage";
 
const MainContainer = styled.div`
display:grid;
grid-template-columns:0.5fr 2fr;
background-color:gray;
`

function App() {
  return (
    <>
    <MainContainer>
      <NavBar />
     <PlayListPage/>
    </MainContainer>
    <PlayBar />
    </>
  );
}

export default App;