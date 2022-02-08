import {BrowserRouter , Routes , Route} from "react-router-dom"
import {CharacterListPage} from "../pages/CharacterListPage/CharacterListPage"
import {CharacterDetailPage} from "../pages/CharacterDetailPage/CharacterDetailPage"

export const Routers =()=>{
    return (
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<CharacterListPage/>}/>
        <Route path="/character/:id" element={<CharacterDetailPage/>}/>
            <Route />
        </Routes>
        </BrowserRouter>
    )
}