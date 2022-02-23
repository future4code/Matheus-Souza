import { Routers } from "./Routes/Routes";
import {Header} from "./components/header/Header"
import { BrowserRouter } from "react-router-dom";

//coloquei o BrowseRouter aqui para o Header ter acesso ao navigate

function App() {
  return (
    <BrowserRouter>
      <Header/>
    <Routers/>
    </BrowserRouter>
  );
}

export default App;
