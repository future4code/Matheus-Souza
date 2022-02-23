import { useParams } from "react-router-dom"
import { BASE_URL } from "../../../constants/urls"
import { Container, Img, ImgCharacterContainer, DetailsContainer, AutomoveisContainer, MainContainer } from "./styles"
import { charactersUrls, planetsUrls, starshipsUrls, vehiclesUrls ,urls} from "../../../assets/imgUrls"
import {useRequestDataDetails } from "../../../hooks/useRequestData"

export const CharacterDetailPage = () => {

    const {id} = useParams()

    const data = useRequestDataDetails(`${BASE_URL}/people/${id}`,[]) 

    const {
        name,
        birth_year,
        hair_color,
        eye_color,
        gender,
        height,
        mass
    } =data.data

   

    return (
        <Container>

            <MainContainer>
                <DetailsContainer>

                    <ImgCharacterContainer>
                        <Img src={charactersUrls[id]} />
                    </ImgCharacterContainer>

                    <ul>

                        <h3>{name}</h3>
                        <li>Birth Year: {birth_year}</li>
                        <li>Hair color: {hair_color}</li>
                        <li>Eye Color: {eye_color}</li>
                        <li>Gender: {gender}</li>
                        <li>Height: {height}</li>
                        <li>Mass: {mass}</li>

                    </ul>

                </DetailsContainer>

                <AutomoveisContainer>



                    <div>
                        <h2>Starships</h2>
                        <img src={starshipsUrls[5]} />
                        <img src={starshipsUrls[2]} />
                        <img src={starshipsUrls[3]} />
                    </div>

                    <div>
                        <h2>Vehicles</h2>
                        <img src={vehiclesUrls[1]} />
                        <img src={vehiclesUrls[2]} />
                    </div>

                    <div>
                        <h2>Planets</h2>
                        <img src={planetsUrls[1]} />
                    </div>


                </AutomoveisContainer>

            </MainContainer>

        </Container>
    )

}