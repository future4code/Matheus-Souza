import { useNavigate } from "react-router-dom"
import { BASE_URL } from "../../../constants/urls"
import { useRequestData } from "../../../hooks/useRequestData"
import { CardCharacterContainer, CharacterListPageContainer, } from "./styles"
import { charactersUrls } from "../../../assets/imgUrls"
import { useContext, useEffect } from "react"
import { charactersContext } from "../../../contexts/GlobalState"
import { useState } from "react"
import axios from "axios"

export const CharacterListPage = () => {


    const [dados, setDados] = useState([])

    useEffect(() => {

        const getData = async () => {

            await axios
                .get(`${BASE_URL}/people`)
                .then((response) => {
                    setDados(response.data.results)
                })

        }
        getData()
            .catch(console.error);
    }, [])


    const navigate = useNavigate()

    console.log('dados', dados)

    return (
        <CharacterListPageContainer>

            {dados && dados.map(
                (character, index) => {
                    return (

                        <CardCharacterContainer
                            key={index}
                            onClick={() => { navigate(`/character/${index + 1}`) }}
                        >
                            <img src={charactersUrls[index + 1]}></img>
                            {character.name}</CardCharacterContainer>

                    )

                })
            }

        </CharacterListPageContainer>
    )

}
//suvida se é pra subir o estado até o router
//para essa api em especifico peguei o "id" pelo index no array
//eu ia fazer duas request no mesmo arquivo mas ai seria repetir código