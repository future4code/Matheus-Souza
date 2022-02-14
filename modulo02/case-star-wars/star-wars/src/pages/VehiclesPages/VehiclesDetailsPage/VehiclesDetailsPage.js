import { useParams } from "react-router-dom"
import { BASE_URL } from "../../../constants/urls"
import { useRequestDataDetails } from "../../../hooks/useRequestData"

export const VehiclesDetailsPage = () => {

    const {id} = useParams()

    const data = useRequestDataDetails(`${BASE_URL}/vehicles/${id}`,[]) 

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
    } = data.data

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