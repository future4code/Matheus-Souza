import { Routers } from "./Routes/Routes";
import {Header} from "./components/header/Header"
import { BrowserRouter } from "react-router-dom";
import { StateProvider} from "./contexts/GlobalState"

//coloquei o BrowseRouter aqui para o Header ter acesso ao navigate

function App() {
  return (
    <StateProvider>
    <BrowserRouter>
      <Header/>
    <Routers/>
    </BrowserRouter>
    </StateProvider>
  );
}

export default App;
