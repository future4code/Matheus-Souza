import React from "react"
import { useHistory } from "react-router-dom";

const ListTripsPage = () => {

    const history = useHistory();


    const voltar = () => {
        history.goBack("/");
    };

    const goApplicationFormPage = () => {
        history.push("/trips/application");
    };


    return (
        <>
            <h1>list trips page</h1>
            Para vermos todas as viagens

            <button
                onClick={voltar}
            >voltar</button>

            <button
            onClick={goApplicationFormPage}
            >inscreverse</button>
        </>
    )
}
export default ListTripsPage