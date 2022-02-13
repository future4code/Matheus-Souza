import { useContext,useEffect } from "react"
import { charactersContext } from "../../../contexts/GlobalState"
import { ImgContainer, StarShipsPageContainer } from "./styles"
import {starshipsUrls} from "../../../assets/imgUrls"


export const StarShipPage=()=>{


   const {data, setData,getData} = useContext(charactersContext)

   
  useEffect(()=>{
    getData("/starships")

  },[])



    return (
      <StarShipsPageContainer>
      {data && data.map((item, index) =>
          <div>
              <ImgContainer>
              <img src={starshipsUrls[index + 1]} />
              </ImgContainer>
              <li>
                  {item.name}
              </li>

          </div>)}

  </StarShipsPageContainer>
    )
}