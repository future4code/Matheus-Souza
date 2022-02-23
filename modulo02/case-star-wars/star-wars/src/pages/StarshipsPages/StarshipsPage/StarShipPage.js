import { ImgContainer, StarShipsPageContainer } from "./styles"
import { starshipsUrls } from "../../../assets/imgUrls"
import { BASE_URL } from "../../../constants/urls"
import { useNavigate } from "react-router-dom"
import { useRequestData } from "../../../hooks/useRequestData"


export const StarShipPage = () => {

  const navigate = useNavigate()

  const data = useRequestData(`${BASE_URL}/starships`, [])

  return (
    <StarShipsPageContainer>
      {data && data.results && data.results.map((item, index) =>
        <div key={index}>
          <ImgContainer>
            <img
              onClick={() => { navigate(`/starships/${item.url.replace(/[^0-9]/g, '')}`) }}
              src={starshipsUrls[index + 1]} />
          </ImgContainer>
          <li>
            {item.name}
          </li>
        </div>)}

    </StarShipsPageContainer>
  )
}