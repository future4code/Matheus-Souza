import { useParams } from "react-router-dom"
import { TracksListPageContainer } from "./styles"
import axios from "axios"
import { useEffect } from "react";
import { BASE_URL } from "../../constants/urls/Urls";
import { Authorization } from "../../constants/urls/Auth";
import { useState } from "react";

export const TracksListPage = () => {

    const params = useParams()
    const [tracks, setTracks] = useState([])
    console.log('tracks', tracks.length)

    useEffect(() => {

        axios.get(`${BASE_URL}/${params.id}/tracks`, Authorization)
            .then((res) => {
                setTracks(res.data.result.tracks)
            })
            .catch((err) => { console.log(err.response.data.message) })
    }, []);


    return (
        <TracksListPageContainer>

            {
                tracks.length !== 0 ?
                    tracks.map(track =>
                        <div>
                            {track.name}
                        </div>)
                    :
                    <h1>
                        Play List Vazia
                    </h1>
            }


        </TracksListPageContainer>
    )
}