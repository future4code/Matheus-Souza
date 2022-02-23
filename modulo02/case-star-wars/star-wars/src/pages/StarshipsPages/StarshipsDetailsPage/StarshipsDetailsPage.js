import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import { BASE_URL } from "../../../constants/urls"
import { useRequestDataDetails } from "../../../hooks/useRequestData"



export const StarshipsDetailsPage = () => {

    const {id} = useParams()

    const data = useRequestDataDetails(`${BASE_URL}/starships/${id}`,[]) 

    console.log(data)

    const {
        name,
        MGLT,
        cargo_capacity,
        pilots,
        consumables,
        cost_in_credits,
        crew,
        starship_class,
        hyperdrive_rating,
        length,
        manufacturer,
        max_atmosphering_speed,
        model, passengers
    } = data.data
    return (
        <div>
            <ul>
                <li>Name: {name}</li>
                <li>MGLT: {MGLT}</li>
                <li>Cargo Capacity: {cargo_capacity}</li>
                <li>consumables: {consumables}</li>
                <li>Cost in Credits: {cost_in_credits}</li>
                <li>Crew: {crew}</li>
                <li>Hyperdrive Rating: {hyperdrive_rating}</li>
                <li>Length: {length}</li>
                <li>Manufacturer: {manufacturer}</li>
                <li>Max Atmosphering Speed: {max_atmosphering_speed}</li>
                <li>model: {model}</li>
                <li>Passengers: {passengers}</li>
                <li>Pilots: {pilots && pilots.length}</li>
                <li>Starships class: {starship_class}</li>
            </ul>
        </div>
    )
}