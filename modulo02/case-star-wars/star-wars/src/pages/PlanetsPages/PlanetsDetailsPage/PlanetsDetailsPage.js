import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"
import { BASE_URL } from "../../../constants/urls"
import { useRequestDataDetails } from "../../../hooks/useRequestData"



export const PlanetsDetalsPage=()=>{

    const {id} = useParams()

    const data = useRequestDataDetails(`${BASE_URL}/planets/${id}`,[]) 

    const {
        name,
        climate,
        diameter,
        gravity,
        orbital_period,
        population,
        rotation_period,
        residents,
        terrain,
    } = data.data


    return (
       <div>
           <ul>
               <li>Name: {name}</li>
               <li>Climate: {climate}</li>
               <li>Diameter: {diameter}</li>
               <li>Gravity: {gravity}</li>
               <li>Orbital Period: {orbital_period}</li>
               <li>Rotation Period: {rotation_period}</li>
               <li>Population: {population}</li>
               <li>Residents: {residents&&residents.length}</li>
               <li>Terrain: {terrain}</li>
           </ul>
       </div>
    )
}