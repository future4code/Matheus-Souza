import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import { BASE_URL } from "../../../constants/urls"



export const PlanetsDetalsPage=()=>{

    const [data, setData] = useState([])
    const [residents, setResidents] = useState([])
   
    const params = useParams()

    useEffect(() => {
        axios
            .get(`${BASE_URL}/planets/${params.id}`)
            .then((res) => {
                setResidents(res.data.residents)
                setData(res.data)
               /*   axios.get(res.data.homeworld)
                    .then(res => )  */
            })
            .catch(err => console.log(err))
    }, [])

    console.log(" data", data)
    return (
       <div>
           <ul>
               <li>Name: {data.name}</li>
               <li>Climate: {data.climate}</li>
               <li>Diameter: {data.diameter}</li>
               <li>Gravity: {data.gravity}</li>
               <li>Orbital Period: {data.orbital_period}</li>
               <li>Rotation Period: {data.rotation_period}</li>
               <li>Population: {data.population}</li>
               <li>Residents: {data.residents&&data.residents.length}</li>
               <li>Terrain: {data.terrain}</li>
           </ul>
       </div>
    )
}