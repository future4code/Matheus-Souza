import axios from "axios"
import { useEffect, useState } from "react"
import { BASE_URL } from "../constants/urls"

export const useRequestData = (url, initialState) => {

    const [data, setData] = useState(initialState)

    useEffect(() => {
        axios
            .get(url)
            .then(res => setData(res.data))
            .catch(err => console.log(err))

    }, [])

    return data
}

export const getData = async (url) => {

    let response = []
    let error 

    try {
       const { data } = await axios.get(url);
        response = data
    } catch (err) {
        error = err
    }
    return {response, error }

}

