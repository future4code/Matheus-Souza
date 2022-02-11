import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { HomePageContainer } from "./styles"
import { charactersUrls } from "../../assets/characters/characters"



export const HomePage = () => {

    const [img, setImg] = useState('')

    const navigate = useNavigate()

    console.log('char', charactersUrls[1])


    return (
        <HomePageContainer color={img}>
            <li
                onClick={() => { navigate("/character") }}
                onMouseOver={() => { setImg(charactersUrls[1]) }}>Characters</li>
            <li
                onClick={() => { navigate("/planets") }}
                onMouseOver={() => { setImg(charactersUrls[2]) }}>Planets</li>
            <li
                onClick={() => { navigate("/vehicles") }}
                onMouseOver={() => { setImg(charactersUrls[3]) }}>Vehicles</li>
            <li
                onClick={() => { navigate("/species") }}
                onMouseOver={() => { setImg(charactersUrls[4]) }}>Species</li>
            <li
                onClick={() => { navigate("starships") }}
                onMouseOver={() => { setImg(charactersUrls[5]) }}>Starships</li>
        </HomePageContainer>
    )
}