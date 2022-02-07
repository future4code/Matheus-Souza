import { useParams } from "react-router-dom"
import { TracksListPageContainer } from "./styles"
import axios from "axios"
import { useEffect } from "react";
import { BASE_URL } from "../../constants/urls/Urls";
import { headers } from "../../constants/urls/Auth";

export const TracksListPage = () => {

   
    const params = useParams()
    console.log('params', params.id)

    useEffect(() => {
        axios.get(`${BASE_URL}${params.id}/tracks`, headers)
        .then((res) => {
            console.log(res.data.result.tracks)
        })
        .catch((err) => { console.log(err.response.data.message)})
    }, []);




    return (
        <TracksListPageContainer>
        
        </TracksListPageContainer>
    )
}