import React,{useEffect,useState} from "react"
import { useHistory,useParams } from "react-router-dom";
import TripDetailsPage from "./TripDetailsPage";
import useProtectedPage from "../hooks/useProtectedPage";
import axios from "axios";

const AdminHomePage=()=>{
  const [lista, setLista] = useState([])
  const [id,setId]=useState("")
  console.log('setid',id)

    const history = useHistory();

    useProtectedPage()

    const voltar = () => {
        history.goBack("/");
    };

    const goLoginPage= () => {
        history.push("/login");
      };
      const goCreateTripPage= () => {
        history.push("/admin/trips/create");
      };

      const goTripDetailsPage= (id) => {
        
        history.push(`/admin/trips/${id}`);
      };

      useEffect(() => {
        getTrips()
    }, []);
  
    const getTrips = () => {
      const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/matheus-dos-santos-lovelace/trips`
      axios
          .get(url)
          .then((res) => {
              setLista(res.data.trips)
              console.log('deu certo', res.data.trips)
          })
          .catch((err) => { console.log('deu errado', err) })


  }
    const mostra = lista.map((i) => {
      return <ul>
          <li  onClick={()=>{
            setId(i.id)
            goTripDetailsPage(i.id)}}>{i.name}</li>
      </ul>
  })
    return(
        <>
        <h1>painel administrativo</h1>
        <button
        onClick={voltar}
        >voltar</button>
        <button
       onClick={goCreateTripPage}
        >criar viagem</button>
        <button onClick={()=>{
          goLoginPage()
          localStorage.clear()}}>logout</button>
    
    {mostra}
     
      </>
        )
}
export default AdminHomePage