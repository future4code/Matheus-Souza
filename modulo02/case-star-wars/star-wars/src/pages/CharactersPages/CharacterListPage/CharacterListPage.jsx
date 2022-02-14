import { useNavigate } from "react-router-dom"
import { BASE_URL } from "../../../constants/urls"
import { useRequestData } from "../../../hooks/useRequestData"
import { CardCharacterContainer, CharacterListPageContainer, } from "./styles"
import { charactersUrls, urls } from "../../../assets/imgUrls"


export const CharacterListPage = () => {

    const data = useRequestData(`${BASE_URL}/people`, [])

    const navigate = useNavigate()

    console.log(data.results)
    console.log('urls', urls[0])

    return (
        <CharacterListPageContainer>

            {data && data.results && data.results.map(
                (character, index) => {
                    return (
                        <CardCharacterContainer
                            key={index}
                            onClick={() => {
                                navigate(`/character/${index + 1}`)
                            }}
                        >
                            <img src={charactersUrls[index+1]}></img>
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