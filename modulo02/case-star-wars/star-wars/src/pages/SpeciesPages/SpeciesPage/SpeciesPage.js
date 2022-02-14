import { ImgContainer, SpeciesPageContainer } from "./styles"
import { speciesUrls } from "../../../assets/imgUrls"
import { BASE_URL } from "../../../constants/urls"
import { useNavigate } from "react-router-dom"
import { useRequestData } from "../../../hooks/useRequestData"


export const SpeciesPage = () => {

    const data = useRequestData(`${BASE_URL}/people`, [])

    const navigate = useNavigate()

    return (
        <SpeciesPageContainer>
           {data && data.results && data.results.map((item, index) =>
                <div key={index}>
                    <ImgContainer>
                        <img
                            onClick={() => { navigate(`/species/${index + 1}`) }}
                            src={speciesUrls[index + 1]} />
                    </ImgContainer>
                    <li>
                        {item.name}
                    </li>

                </div>)}

        </SpeciesPageContainer>
    )
}