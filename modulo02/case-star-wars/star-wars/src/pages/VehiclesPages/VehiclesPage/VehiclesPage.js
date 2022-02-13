import { useContext,useEffect } from "react"
import { charactersContext } from "../../../contexts/GlobalState"
import { ImgContainer, VeiclesPageContainer } from "./styles"
import {planetsUrls, vehiclesUrls} from "../../../assets/imgUrls"


export const VehiclesPage=()=>{


   const {data, setData,getData} = useContext(charactersContext)

   
  useEffect(()=>{
    getData("/vehicles")

  },[])

  console.log(data)

  console.log(data&&data.map((i)=> i.name))

    return (
      <VeiclesPageContainer>
      {data && data.map((item, index) =>
          <div>
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