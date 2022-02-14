import { useEffect } from "react"
import { ImgContainer, StarShipsPageContainer } from "./styles"
import { starshipsUrls } from "../../../assets/imgUrls"
import { useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import { BASE_URL } from "../../../constants/urls"
import { useNavigate } from "react-router-dom"


export const StarShipPage = () => {

  const [data, setData] = useState([])

  useEffect(() => {

    const getData = async () => {

      await axios
        .get(`${BASE_URL}/starships`)
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
    <StarShipsPageContainer>
      {data && data.map((item, index) =>
        <div key={index}>
          <ImgContainer>
            <img 
            onClick={navigate(`/starships/${index+1}`)}
            src={starshipsUrls[index + 1]} />
          </ImgContainer>
          <li>
            {item.name}
          </li>

        </div>)}

    </StarShipsPageContainer>
  )
}