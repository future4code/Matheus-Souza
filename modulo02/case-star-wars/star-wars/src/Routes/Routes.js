import { Routes, Route } from "react-router-dom"
import { CharacterListPage } from "../pages/CharactersPages/CharacterListPage/CharacterListPage"
import { CharacterDetailPage } from "../pages/CharactersPages/CharacterDetailPage/CharacterDetailPage"
import { HomePage } from "../pages/HomePage/HomePage"
import { PlanetsPage } from "../pages/PlanetsPages/PlanetsPage/PanetsPage"
import { PlanetsDetalsPage } from "../pages/PlanetsPages/PlanetsDetailsPage/PlanetsDetailsPage"
import { VehiclesPage } from "../pages/VehiclesPages/VehiclesPage/VehiclesPage"
import { SpeciesPage } from "../pages/SpeciesPages/SpeciesPage/SpeciesPage"
import { StarShipPage } from "../pages/StarshipsPages/StarshipsPage/StarShipPage"
import { FilmsPage } from "../pages/FilmsPages/FilmsPage/FilmsPage"
import { FilmsDetailsPage } from "../pages/FilmsPages/FilmsDetailsPage/FilmsDetailsPage"
import {VehiclesDetailsPage} from "../pages/VehiclesPages/VehiclesDetailsPage/VehiclesDetailsPage"
import {SpeciesDetailsPage} from "../pages/SpeciesPages/SpeciesDetailsPage/SpeciesDetailsPage"
import {StarshipsDetailsPage} from "../pages/StarshipsPages/StarshipsDetailsPage/StarshipsDetailsPage"

export const Routers = () => {
    return (

        <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/planets" element={<PlanetsPage />} />
            <Route path="/planets/:id" element={<PlanetsDetalsPage />} />

            <Route path="/films" element={<FilmsPage />} />
            <Route path="/films/:id" element={<FilmsDetailsPage />} />

            <Route path="/vehicles" element={<VehiclesPage />} />
            <Route path="/vehicles/:id" element={<VehiclesDetailsPage />} />

            <Route path="/species" element={<SpeciesPage />} />
            <Route path="/species/:id" element={<SpeciesDetailsPage />} />

            <Route path="/starships" element={<StarShipPage />} />
            <Route path="/starships/:id" element={<StarshipsDetailsPage />} />

            <Route path="/characters" element={<CharacterListPage />} />
            <Route path="/character/:id" element={<CharacterDetailPage />} />

            <Route />
        </Routes>

    )
}