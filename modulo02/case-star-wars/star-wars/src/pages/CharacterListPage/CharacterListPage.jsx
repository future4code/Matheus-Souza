import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { BASE_URL } from "../../constants/urls"
import { CharacterDetailPage } from "../CharacterDetailPage/CharacterDetailPage"
import { CharacterListPageContainer } from "./styles"


export const CharacterListPage = ()=>{

    const navigate= useNavigate()

    const params = useParams()

    console.log(params)

    const [characters, setCharacter] = useState([])
    console.log(characters)

    useEffect(()=>{
        axios
        .get(`${BASE_URL}/people`)
        .then(res => setCharacter(res.data.results))
        .catch(err => console.log(err))
        
    },[])

    return (
        <CharacterListPageContainer>
        <h1>Characters</h1>
        <ul>
        {characters.map((character,index) =>{
            return (
               
                <CharacterDetailPage character = {character}/>
                
            )
        })}
        </ul>
       
        </CharacterListPageContainer>
    )

}