import { useContext,useEffect } from "react"
import { charactersContext } from "../../contexts/GlobalState"
import { ImgContainer, SpeciesPageContainer } from "./styles"
import {speciesUrls} from "../../assets/imgUrls"


export const SpeciesPage=()=>{


   const {data, setData,getData} = useContext(charactersContext)

   
  useEffect(()=>{
    getData("/species")

  },[])

  console.log(data)

  console.log(data&&data.map((i)=> i.name))

    return (
      <SpeciesPageContainer>
      {data && data.map((item, index) =>
          <div>
              <ImgContainer>
              <img src={speciesUrls[index + 1]} />
              </ImgContainer>
              <li>
                  {item.name}
              </li>

          </div>)}

  </SpeciesPageContainer>
    )
}