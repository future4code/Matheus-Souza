import axios from "axios"
import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"
import { BASE_URL } from "../../constants/urls"

export const CharacterDetailPage = () => {

    const [homeWorl, setHomeWorld] = useState('')
    const [characterDetail, setCharacterDetail] = useState([])

    const params = useParams()

    useEffect(() => {
        axios
            .get(`${BASE_URL}/people/${params.id}`)
            .then((res) => {
                 setCharacterDetail(res.data)
                 axios.get(res.data.homeworld)
                     .then(res => setHomeWorld(res.data))
                     .catch(err => console.log(err))                                   //eu queria fazer essas request com hooks mas nao deu certo ,não podem ser chamadas condicionalmente e não da pra colocar .then em uma variavel,não se pode chamar hooks em fuçoes e nem no useEffect
            })

            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <h2>Character :{characterDetail.name}</h2>
            <h3>Planet :{homeWorl.name}</h3>
        </div>
    )

}