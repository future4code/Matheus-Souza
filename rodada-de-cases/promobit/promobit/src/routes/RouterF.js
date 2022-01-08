import { Router, Route, Routes, BrowserRouter } from "react-router-dom"
import DetailsPage from "../pages/DetailsPage/DetailsPage"
import HomePage from "../pages/HomePage/homePage"
import GenreListPage from "../pages/GenreListPage/genreListPage"

const RouterF = () => {

    return (

        <BrowserRouter>
            <Routes>

                <Route exact path="/" element={<HomePage/>} />
                <Route exact path="/movies/:id" element={<DetailsPage/>} />
                <Route exact path="/genre/movie/list" element={<GenreListPage/>} />

            </Routes>
        </BrowserRouter>
    )
}

export default RouterF 