import { isTemplateElement } from "@babel/types";
import axios from "axios";
import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom";

const ListTripsPage = () => {


    const [lista, setLista] = useState([])

    const history = useHistory();

    useEffect(() => {
        getTrips()
    }, [])

    const voltar = () => {
        history.goBack("/");
    };
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
    const goApplicationFormPage = () => {
        history.push("/trips/application");
    };

    const mostra = lista.map((i) => {
        return <ul>
            <li>{i.name}</li>
            <li>{i.description}</li>
            <li>{i.date}</li>
            <li>{i.planet}</li>
        </ul>
    })
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


            {mostra}
        </>
    )
}
export default ListTripsPage