import { ImgContainer, PlanetsPageContainer } from "./styles"
import { planetsUrls } from "../../../assets/imgUrls"
import { BASE_URL } from "../../../constants/urls"
import { useNavigate } from "react-router-dom"
import { useRequestData } from "../../../hooks/useRequestData"


export const PlanetsPage = () => {

  const data = useRequestData(`${BASE_URL}/people`, [])

  const navigate = useNavigate()

  console.log('dados', data)

  return (
    <PlanetsPageContainer>
      {data && data.results && data.results.map((item, index) =>
        <div key={index}>
          <ImgContainer>
            <img
              onClick={() => { navigate(`/planets/${index + 1}`) }}
              src={planetsUrls[index + 1]} />
          </ImgContainer>
          <li>
            {item.name}
          </li>

        </div>)}

    </PlanetsPageContainer>
  )
}