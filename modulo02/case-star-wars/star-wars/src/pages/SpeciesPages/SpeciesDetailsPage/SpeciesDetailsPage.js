import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import { BASE_URL } from "../../../constants/urls"


export const SpeciesDetailsPage = () => {


    const [data, setData] = useState([])
    const [homeworld, setHomeWorld] = useState('')
    const [people, setPeople] = useState([]) //personagens da espécies


    const params = useParams()

    useEffect(() => {
        axios
            .get(`${BASE_URL}/species/${params.id}`)
            .then((res) => {
                setData(res.data)
                /*  axios.get(res.data.homeworld)
                     .then(res => setHomeWorld(res.data))  */
            })
            .catch(err => console.log(err))
    }, [])

    console.log(" data", data)

    return (
        <div>
            <ul>

                <h3>{data.name}</h3>
                <li>Language: {data.language}</li>
                <li>Average heigth: {data.average_height}</li>
                <li>Average Lifespan: {data.average_lifespan}</li>
                <li>classification: {data.classification}</li>
                <li>Designation: {data.designation}</li>
                <li>Skin Colors: {data.skin_colors}</li>
                <li>Eye Colors: {data.eye_colors}</li>
                <li>Total da epécie {data.name}: {data.people&&data.people.length}</li>
            </ul>
        </div>

    )
}