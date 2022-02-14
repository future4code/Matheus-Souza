import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import { BASE_URL } from "../../../constants/urls"

export const VehiclesDetailsPage = () => {


    const [data, setData] = useState([])
    const [residents, setResidents] = useState([])

    const params = useParams()
    console.log(params)

    useEffect(() => {
        axios
            .get(`${BASE_URL}/vehicles/${params.id}`)
            .then((res) => {
                setData(res.data)
                /*   axios.get(res.data.homeworld)
                     .then(res => )  */
            })
            .catch(err => console.log(err))
    }, [])

    console.log(" data", data)
    const {
        cargo_capacity,
        name,
        consumables,
        cost_in_credits,
        length,
        manufacturer,
        max_atmosphering_speed,
        model,
        passengers,
        pilots
    } = data


    return (
        <div>
            <ul>
                <li>Name: {name}</li>
                <li>Cargo Capacity: {cargo_capacity}</li>
                <li>Consumables:{consumables}</li>
                <li>Cost in_credits:{cost_in_credits}</li>
                <li>Length:{length}</li>
                <li>Consumables:{consumables}</li>
                <li>Manufacturer:{manufacturer}</li>
                <li>Max Atmosphering speed:{max_atmosphering_speed}</li>
                <li>Model:{model}</li>
                <li>Passengers:{passengers}</li>
                <li>Pilots:{pilots&&pilots.length}</li>
            </ul>
        </div>
    )
}