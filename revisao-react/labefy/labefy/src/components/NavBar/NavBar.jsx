import { useState } from "react"
import { CreatePlayList} from "../CreatePlayList"
import { NavBarContainer } from "./styles"


export const NavBar =()=>{

    const [isOpen, setIsOpen] =useState(false)
   
    return (
        <NavBarContainer>
        <h1>Labefy</h1>
        <h3>search</h3>
        <h3 onClick={()=>{isOpen?setIsOpen(false):setIsOpen(true)}}>Create PlayList</h3>
        {isOpen?<CreatePlayList/>:<></>}
        </NavBarContainer>
    )
}