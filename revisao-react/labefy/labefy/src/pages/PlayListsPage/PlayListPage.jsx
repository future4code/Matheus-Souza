import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import { CardPlayListContainer, PlayListPageContainer } from "./styles";
import {BASE_URL} from  "../../constants/urls/Urls"
import { Authorization } from "../../constants/urls/Auth";
import { useNavigate } from "react-router-dom";



export const PlayListPage = () => {

    let navigate = useNavigate();
    const [playList, setPlayList] = useState([])

    useEffect(() => {
        axios.get(BASE_URL, Authorization)
        .then((res) => {
            setPlayList(res.data.result.list)

        })
        .catch((err) => { 
            console.log(err.response) })
    }, [playList]);

    
    const deletePlayList=(id)=>{
       axios.delete(`${BASE_URL}/${id}`,Authorization)
       .then(alert('play List Excluida'))
       .catch((err)=>{console.log(err) })
    }


    return (
        <PlayListPageContainer>
            {playList.map((play) =>
                <CardPlayListContainer >
                    <div onClick={()=>{navigate(`/${play.id}/tracks`)}}> {play.name}</div>
                   <button onClick={()=>{deletePlayList(play.id) }}>X</button>
                </CardPlayListContainer>)}
                
        </PlayListPageContainer>

    )
}