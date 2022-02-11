import { useContext,useEffect } from "react"
import { charactersContext } from "../../contexts/GlobalState"
import { ImgContainer, StarShipsPageContainer } from "./styles"
import {speciesUrls, starshipsUrls} from "../../assets/imgUrls"


export const StarShipPage=()=>{


   const {data, setData,getData} = useContext(charactersContext)

   
  useEffect(()=>{
    getData("/starships")

  },[])

  console.log(data)

  console.log(data&&data.map((i)=> i.name))

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