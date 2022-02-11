import {  createContext, useState } from "react";
import { useRequestData } from "../hooks/useRequestData";
import { BASE_URL } from "../constants/urls";
import axios from "axios";

export const charactersContext=createContext()


export const StateProvider=({children})=>{

   const [data, setData] = useState([])

   const getData=(path)=>{
      axios.get(`${BASE_URL}/${path}`)
      .then((res)=>{
          setData(res.data.results)
      })
      .catch(err => console.log(err))
   }
    
    return (
        <charactersContext.Provider value ={{data,setData,getData}}>
            {children}
        </charactersContext.Provider>
    )
}
