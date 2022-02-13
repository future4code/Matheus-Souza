import { useContext, useEffect } from "react"
import { charactersContext } from "../../../contexts/GlobalState"
import { ImgContainer, PlanetsPageContainer } from "./styles"
import { planetsUrls } from "../../../assets/imgUrls"
import { useState } from "react"
import axios from "axios"
import { BASE_URL } from "../../../constants/urls"
import { useNavigate } from "react-router-dom"



export const PlanetsPage = () => {

  const [data, setData] = useState([])

  useEffect(() => {

    const getData = async () => {

      await axios
        .get(`${BASE_URL}/planets`)
        .then((response) => {
          setData(response.data.results)
        })

    }
    getData()
      .catch(console.error);
  }, [])


  const navigate = useNavigate()

  console.log('dados', data)

  return (
    <PlanetsPageContainer>
      {data && data.map((item, index) =>
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