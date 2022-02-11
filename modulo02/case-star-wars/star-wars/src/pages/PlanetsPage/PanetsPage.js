import { useContext,useEffect } from "react"
import { charactersContext } from "../../contexts/GlobalState"
import { ImgContainer, PlanetsPageContainer } from "./styles"
import {planetsUrls} from "../../assets/imgUrls"


export const PlanetsPage=()=>{


   const {data, setData,getData} = useContext(charactersContext)

   
  useEffect(()=>{
    getData("/planets")

  },[])

  console.log(data)

  console.log(data&&data.map((i)=> i.name))

    return (
      <PlanetsPageContainer>
      {data && data.map((item, index) =>
          <div>
              <ImgContainer>
              <img src={planetsUrls[index + 1]} />
              </ImgContainer>
              <li>
                  {item.name}
              </li>

          </div>)}

  </PlanetsPageContainer>
    )
}