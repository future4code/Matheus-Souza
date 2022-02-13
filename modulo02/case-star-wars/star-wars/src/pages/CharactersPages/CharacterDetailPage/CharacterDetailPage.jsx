import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { BASE_URL } from "../../../constants/urls"
import { Container, Img, ImgCharacterContainer, NameContainer, DetailsContainer, AutomoveisContainer, MainContainer, FilmsContainer } from "./styles"
import { charactersUrls, filmsUrls, planetsUrls, starshipsUrls, vehiclesUrls } from "../../../assets/imgUrls"

export const CharacterDetailPage = () => {

    const [homeWorl, setHomeWorld] = useState('')
    const [characterDetail, setCharacterDetail] = useState([])
    const [films, setFilms] = useState([])
    const [starships, setStarships] = useState([])
    const [vehicles, setVehicles] = useState([])

    const params = useParams()

    useEffect(() => {
        axios
            .get(`${BASE_URL}/people/${params.id}`)
            .then((res) => {
                setVehicles(res.data.vehicles)
                setStarships(res.data.starships)
                setFilms(res.data.films)
                setCharacterDetail(res.data)
                axios.get(res.data.homeworld)
                    .then(res => setHomeWorld(res.data))                                  //eu queria fazer essas request com hooks mas nao deu certo ,não podem ser chamadas condicionalmente e não da pra colocar .then em uma variavel,não se pode chamar hooks em fuçoes e nem no useEffect
            })
            .catch(err => console.log(err))
    }, [])

    console.log('Character Detals', characterDetail)
    console.log(" filmes", films)
    console.log(" starships", starships)
    console.log(" vehicles", vehicles)

    return (
        <Container>

            <MainContainer>
                <DetailsContainer>

                    <ImgCharacterContainer>
                        <Img src={charactersUrls[params.id]} />
                    </ImgCharacterContainer>

                    <ul>
                       
                            <h3>{characterDetail.name}</h3>
                            <li>Birth Year: {characterDetail.birth_year}</li>
                            <li>Hair color: {characterDetail.hair_color}</li>
                            <li>Eye Color: {characterDetail.eye_color}</li>
                            <li>Gender: {characterDetail.gender}</li>
                            <li>Height: {characterDetail.height}</li>
                            <li>Mass: {characterDetail.mass}</li>
                        
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