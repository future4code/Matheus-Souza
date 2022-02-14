import axios from "axios"
import { useEffect, useState } from "react"

export const useRequestData=(url,initialState)=>{

    const [data, setData] = useState(initialState)

    useEffect(() => {
        axios
            .get(url)
            .then(res => setData(res.data))
            .catch(err => console.log(err.response))
    
    }, [])

    return data
    
}

export const useRequestDataDetails=(url,initialState)=>{

    const [data, setData] = useState(initialState)
    const[home, setHome] = useState('')

    useEffect(() => {
        axios
            .get(url)//retorna a primeira request e dessa request tenho q pegar as url
            .then((res)=>{
                setData(res.data)
                axios
                .get(res.data.homeworld)
                .then(res=>setHome(res.data))
                .catch(e => console.log(e))
            }
            )
            .catch(err => console.log(err.response))
    
    }, [])

    return {data , home}
    
}