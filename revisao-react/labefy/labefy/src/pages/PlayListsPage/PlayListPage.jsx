import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import { CardPlayListContainer, PlayListPageContainer } from "./styles";


export const PlayListPage = () => {

    useEffect(() => {
        getPlayLists()
    }, []);


    const [playList, setPlayList] = useState([])


    const getPlayLists = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const headers = {
            headers: {
                Authorization: "matheus-de-souza-dos-santos-marzo"
            }
        };
        axios.get(url, headers)
            .then((res) => {
                setPlayList(res.data.result.list)

            })
            .catch((err) => { console.log(err) })
    }


    return (
        <PlayListPageContainer>
            {playList.map((item) =>
                <CardPlayListContainer>
                    {item.name}
                </CardPlayListContainer>)}
        </PlayListPageContainer>

    )
}