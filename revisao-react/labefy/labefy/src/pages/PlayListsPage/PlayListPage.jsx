import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import { CardPlayListContainer, PlayListPageContainer } from "./styles";
import {BASE_URL} from  "../../constants/urls/Urls"
import { Authorization } from "../../constants/urls/Auth";
import { useNavigate } from "react-router-dom";



export const PlayListPage = () => {

    let navigate = useNavigate();

    useEffect(() => {
        axios.get(BASE_URL, Authorization)
        .then((res) => {
            console.log('Authorization que funciona',Authorization)
            setPlayList(res.data.result.list)

        })
        .catch((err) => { 
            console.log(err.response) })
    }, []);

    const [playList, setPlayList] = useState([])

   

    return (
        <PlayListPageContainer>
            {playList.map((play) =>
                <CardPlayListContainer  onClick={()=>{navigate(`/${play.id}/tracks`)}}>
                    {play.name}
                </CardPlayListContainer>)}
        </PlayListPageContainer>

    )
}