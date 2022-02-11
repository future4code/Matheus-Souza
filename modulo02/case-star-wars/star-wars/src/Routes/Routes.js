import { Routes, Route } from "react-router-dom"
import { CharacterListPage } from "../pages/CharacterListPage/CharacterListPage"
import { CharacterDetailPage } from "../pages/CharacterDetailPage/CharacterDetailPage"
import { HomePage } from "../pages/HomePage/HomePage"
import { PlanetsPage } from "../pages/PlanetsPage/PanetsPage"
import { VehiclesPage } from "../pages/VehiclesPage/VehiclesPage"
import { SpeciesPage } from "../pages/SpeciesPage/SpeciesPage"
import { StarShipPage } from "../pages/StarshipsPage/StarShipPage"
import { FilmsPage } from "../pages/FilmsPage.js/FilmsPage"

export const Routers = () => {
    return (

        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/planets" element={<PlanetsPage />} />
            <Route path="/films" element={<FilmsPage />} />
            <Route path="/vehicles" element={<VehiclesPage />} />
            <Route path="/species" element={<SpeciesPage />} />
            <Route path="/starships" element={<StarShipPage />} />
            <Route path="/characters" element={<CharacterListPage />} />
            <Route path="/character/:id" element={<CharacterDetailPage />} />
            <Route />
        </Routes>

    )
}