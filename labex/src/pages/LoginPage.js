import React from "react"
import { useHistory } from "react-router-dom";


const  LoginPage=()=>{
    const history = useHistory();

    const voltar = () => {
        history.goBack("/");
    };

    const goAdminHomePage = () => {
        history.push("/admin/trips/list");
      };

    return(
        <>
        <h1>login page</h1>
        Para fazermos login como administrador
        <button onClick={voltar}>voltar</button>
        <button onClick={goAdminHomePage}>entrar</button>
        </>
        )
}
export default LoginPage 