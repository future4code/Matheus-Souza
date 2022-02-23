import { useParams } from "react-router-dom"
import { useRequestDataDetails } from "../../../hooks/useRequestData"
import { BASE_URL } from "../../../constants/urls"


export const FilmsDetailsPage = () => {

    const { id } = useParams()

    const data = useRequestDataDetails(`${BASE_URL}/films/${id}`, [])
    console.log(data)

    const {
        director,
        opening_crawl,
        title
    } =data.data

    return (
        <div>
            <ul>
                <h3>title: {title}</h3>
                <p>Director: {director}</p>
                <li>openiing crawl: {opening_crawl}</li>
            </ul>
        </div>
    )
}