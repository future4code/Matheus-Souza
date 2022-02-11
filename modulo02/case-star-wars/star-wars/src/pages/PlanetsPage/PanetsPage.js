import { useContext,useEffect } from "react"
import { charactersContext } from "../../contexts/GlobalState"


export const PlanetsPage=()=>{


   const {data, setData,getData} = useContext(charactersContext)

   
  useEffect(()=>{
    getData("/planets")

  },[])


  console.log(data&&data.map((i)=> i.name))

    return (
        <div>
             {data&&data.map((i)=> i.name)}
            <h1>Planets Page</h1>
        </div>
    )
}