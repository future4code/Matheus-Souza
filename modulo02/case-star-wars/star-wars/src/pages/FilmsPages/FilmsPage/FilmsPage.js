import { filmsUrls } from "../../../assets/imgUrls"
import { FilmsPageContainer, ImgContainer } from "./styles"
import { useRequestData, useRequestDataDetails } from "../../../hooks/useRequestData"
import { BASE_URL } from "../../../constants/urls"
import { useNavigate } from "react-router-dom"

export const FilmsPage = () => {

    const data = useRequestData(`${BASE_URL}/films`,[]) 

    console.log('data',data)

    const navigate = useNavigate()

    return (
        <FilmsPageContainer>
            
             {data&&data.results&&data.results.map((item, index) =>
                <div
                key={index}
                >
                    <ImgContainer>
                    <img 
                     onClick={() => { navigate(`/films/${index + 1}`) }}
                    src={filmsUrls[index + 1]} />
                    </ImgContainer>
                    <li>
                        {item.title}
                    </li>

                </div>)}

        </FilmsPageContainer>
    )
}