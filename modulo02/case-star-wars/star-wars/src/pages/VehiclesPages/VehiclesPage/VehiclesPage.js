import { useContext,useEffect } from "react"
import { charactersContext } from "../../../contexts/GlobalState"
import { ImgContainer, VeiclesPageContainer } from "./styles"
import {planetsUrls, vehiclesUrls} from "../../../assets/imgUrls"
import { useState } from "react"
import axios from "axios"
import { BASE_URL } from "../../../constants/urls"
import { useNavigate } from "react-router-dom"

export const VehiclesPage=()=>{


  const [data, setData] = useState([])

  useEffect(() => {

    const getData = async () => {

      await axios
        .get(`${BASE_URL}/vehicles`)
        .then((response) => {
          setData(response.data.results)
        })

    }
    getData()
      .catch(console.error);
  }, [])

  const navigate = useNavigate()

  console.log('dados', data)
//regex que obtem apenas o numero da url do item
    return (
      <VeiclesPageContainer>
      {data && data.map((item, index) =>
          <div 
          key={index}
          onClick={()=>{navigate(`/vehicles/${item.url.replace(/[^0-9]/g,'')}`)}}>
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