import React, { useEffect } from "react"
import { useHistory } from "react-router-dom";
import { useState } from "react";
import axios from "axios"

const  LoginPage=()=>{
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const history = useHistory();


    const login = () => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/matheus-dos-santos-lovelace/login`;
        const body = {
          email: email,
          password: senha
        };
        axios
          .post(url, body)
          .then((res) => {
            
            history.push("/admin/trips/list");
            localStorage.setItem("token", res.data.token);
            console.log(res);
          })
          .catch((err) => {
            console.log(err.response.data.message);
          });
      };

    const voltar = () => {
        history.push("/");
    };

    const goAdminHomePage = () => {
        history.push("/admin/trips/list");
      };

    return(
        <>
        <h1>login</h1>
        <button onClick={voltar}>voltar</button>
       <br/>
       <br/>
        <input
        placeholder="email"
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        value={senha}
        onChange={(e) => {
          setSenha(e.target.value);
        }}
        placeholder="senha"
        type="password"
      />
       <button onClick={login}>entrar</button>

      <h1>matheus@gmail.com.br</h1>
      <h2>123456</h2>
       
        </>

        )
}
export default LoginPage 