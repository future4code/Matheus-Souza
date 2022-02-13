import { HeaderContainer } from "./styles"
import { useNavigate } from "react-router-dom"


  
export const Header = ()=>{
    const navigate = useNavigate()

    return (
        <HeaderContainer>
          <h1  onClick={()=>{navigate("/")}}>Star Wars</h1>
                <li onClick={()=>{navigate("/")}}>Home</li>
                <li onClick={()=>{navigate("/characters")}}>Characters</li>
                <li onClick={()=>{navigate("/planets")}}>Planets</li>
                <li onClick={()=>{navigate("/vehicles")}}>Vehicles</li>
                <li onClick={()=>{navigate("/species")}}>Species</li>
                <li onClick={()=>{navigate("/starships")}}>Starships</li>
                <li onClick={()=>{navigate("/films")}}>Films</li>
        </HeaderContainer>
    )
}