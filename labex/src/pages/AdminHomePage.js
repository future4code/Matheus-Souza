import React from "react"
import { useHistory } from "react-router-dom";
import TripDetailsPage from "./TripDetailsPage";

const AdminHomePage=()=>{
    const history = useHistory();

    const voltar = () => {
        history.goBack("/");
    };

    const goLoginPage= () => {
        history.push("/login");
      };
      const goCreateTripPage= () => {
        history.push("/admin/trips/:id");
      };

      const goTripDetailsPage= () => {
        history.push("/admin/trips/create");
      };

    return(
        <>
        <h1>painel administrativo</h1>
        <button
        onClick={voltar}
        >voltar</button>
        <button
       onClick={goCreateTripPage}
        >criar viagem</button>
        <button onClick={goLoginPage}>logout</button>
     <p onClick={goTripDetailsPage}>paraguai </p>
     <p onClick={goTripDetailsPage}>states </p>
     <p onClick={goTripDetailsPage}>espanha</p>
     
      </>
        )
}
export default AdminHomePage