import { ImgContainer, VeiclesPageContainer } from "./styles"
import { vehiclesUrls } from "../../../assets/imgUrls"
import { BASE_URL } from "../../../constants/urls"
import { useNavigate } from "react-router-dom"
import { useRequestData } from "../../../hooks/useRequestData"

export const VehiclesPage = () => {

  const data = useRequestData(`${BASE_URL}/vehicles`, [])

  const navigate = useNavigate()

  console.log('data', data)

  return (
    <VeiclesPageContainer>
      {data.results&&data.results.map((item, index) =>
        <div
          key={index}
          onClick={() => { navigate(`/vehicles/${item.url.replace(/[^0-9]/g, '')}`) }}>
          <ImgContainer>
            <img src={vehiclesUrls[index + 1]} />
          </ImgContainer>
          <li>
            {item.name}
          </li>

        </div>)} 

    </VeiclesPageContainer>
  )
}
//regex que obtem apenas o numero da url do item