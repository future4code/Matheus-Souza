import React from "react"
import { useHistory } from "react-router-dom";
import useProtectedPage from "../hooks/useProtectedPage";

const CreateTripPage = () => {
    useProtectedPage()
    const history = useHistory();

    const voltar = () => {
        history.goBack("/");
    };


    return (
        <>
            <h1>create trip Page</h1>
            <form>
            <input
                placeholder="nome"
            />
            <input
                placeholder="escolha um planeta"
            />
            <input
                placeholder="data"
            />
            <input
                placeholder="descrição"
            />
            <input
                placeholder="duração em dias"
            />
            </form>
            <button
                onClick={voltar}
            >voltar</button>
            <button>criar</button>

        </>
    )
}
export default CreateTripPage