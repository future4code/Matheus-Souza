import { filmsUrls } from "../../../assets/imgUrls"
import { FilmsPageContainer, ImgContainer } from "./styles"
import { useRequestData, useRequestDataDetails } from "../../../hooks/useRequestData"
import { BASE_URL } from "../../../constants/urls"

export const FilmsPage = () => {

    const data = useRequestData(`${BASE_URL}/films`,[]) 

    return (
        <FilmsPageContainer>
            
             {data&&data.results&&data.results.map((item, index) =>
                <div
                key={index}
                >
                    <ImgContainer>
                    <img src={filmsUrls[index + 1]} />
                    </ImgContainer>
                    <li>
                        {item.title}
                    </li>

                </div>)}

        </FilmsPageContainer>
    )
}