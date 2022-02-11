import { HeaderContainer } from "./styles"
import { useNavigate } from "react-router-dom"


  
export const Header = ()=>{
    const navigate = useNavigate()

    return (
        <HeaderContainer>
          <h1>Star Wars</h1>
                <li onClick={()=>{navigate("/")}}>Home</li>
                <li>Characters</li>
                <li>Planets</li>
                <li>Vehicles</li>
                <li>Species</li>
                <li>Starships</li>
                <li>Films</li>
        </HeaderContainer>
    )
}