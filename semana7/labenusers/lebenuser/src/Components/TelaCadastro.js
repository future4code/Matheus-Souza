import React from "react";
import axios from "axios"

export default class TelaCadastro extends React.Component {
state={
  nome:"",
  email:""
}

  mudaNome=(event)=>{
    this.setState({
      nome:event.target.value
    })
  }
  mudaEmail=(event)=>{
    this.setState({
      email:event.target.value
    })
  }
  guardaDados=()=>{
    const url="https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    const body ={name:this.state.nome,email:this.state.email}
  
  axios.post(url,body,{
    headers:{
      Authorization:"matheus-de-souza-dos-santos-lovelace"
    }
  }
   )
  .then((res)=>{
    console.log("usuarios cadastrado")
  this.setState({
    nome:"",
    email:""
  })
  })
  .catch((err)=>{console.log(err.response.data.message)})
  
  }

  
  render() {
    return (
    <>
<button 
onClick={this.props.irParaLista} 
    >ir para lista
    </button>

    <h1>tela de cadastro </h1>

    <input
  placeholder="nome"
  value={this.state.nome}
  onChange={this.mudaNome}
  />

  <input
  placeholder="E-mail"
  value={this.state.email}
  onChange={this.mudaEmail}
  />

<button

onClick={this.guardaDados}

>ENVIAR</button>
    </>
    );
  }
} //prettier-ignore
