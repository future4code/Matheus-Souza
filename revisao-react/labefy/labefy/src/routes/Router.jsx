
import {Routes,Route} from "react-router-dom"
import { PlayListPage } from "../pages/PlayListsPage/PlayListPage"
import {SearchPage} from "../pages/SearchPage/SearchPage"
import { TracksListPage } from "../pages/TracksListPage/TracksListPage"


export const Router = ()=>{
    return (
    
        <Routes>
            <Route path="/" element={<PlayListPage/>} />
            <Route path='/search' element={<SearchPage/>} />
            <Route path='/:id/tracks' element={<TracksListPage/>} />
        </Routes>
        
    )
}