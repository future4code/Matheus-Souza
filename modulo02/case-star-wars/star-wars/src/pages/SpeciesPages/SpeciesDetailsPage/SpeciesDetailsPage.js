import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import { BASE_URL } from "../../../constants/urls"
import { useRequestDataDetails } from "../../../hooks/useRequestData"


export const SpeciesDetailsPage = () => {


    const {id} = useParams()

    const data = useRequestDataDetails(`${BASE_URL}/species/${id}`,[]) 

    console.log(" data", data)

    const {
        name,
        language,
        average_height,
        average_lifespan,
        classification,
        designation,
        skin_colors,
        eye_colors,
        people
    }= data.data

    return (
        <div>
            <ul>

                <h3>{name}</h3>
                <li>Language: {language}</li>
                <li>Average heigth: {average_height}</li>
                <li>Average Lifespan: {average_lifespan}</li>
                <li>classification: {classification}</li>
                <li>Designation: {designation}</li>
                <li>Skin Colors: {skin_colors}</li>
                <li>Eye Colors: {eye_colors}</li>
                <li>Total Specie {name}: {people&&people.length}</li>
            </ul>
        </div>

    )
}