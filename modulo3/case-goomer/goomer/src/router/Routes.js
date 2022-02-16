import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MenuPage } from "../pages/MenuPage/MenuPage";
import { RestaurantsPage } from "../pages/RestaurantsPage/RestaurantsPage";

export const Routers=()=>{
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<RestaurantsPage/>}/>
            <Route path="/menu/:id" element={<MenuPage/>}/>
        </Routes>
        </BrowserRouter>
    )
}
