import { useContext,useEffect } from "react"
import { charactersContext } from "../../../contexts/GlobalState"
import { ImgContainer, SpeciesPageContainer } from "./styles"
import { speciesUrls} from "../../../assets/imgUrls"
import { useState } from "react"
import axios from "axios"
import { BASE_URL } from "../../../constants/urls"
import { useNavigate } from "react-router-dom"


export const SpeciesPage=()=>{


  const [dados, setDados] = useState([])

  useEffect(() => {

      const getData = async () => {

          await axios
              .get(`${BASE_URL}/species`)
              .then((response) => {
                  setDados(response.data.results)
              })

      }
      getData()
          .catch(console.error);
  }, [])


  const navigate = useNavigate()

  console.log('dados', dados)


    return (
      <SpeciesPageContainer>
      {dados && dados.map((item, index) =>
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