import React from "react";
import axios from "axios"

export default class TelaListaUsuario extends React.Component {

  state={
    listaDeUsuarios:[]
  }




componentDidMount(){
  this.pegaListaDeUsuarios()
}

  pegaListaDeUsuarios=()=>{
    const url ='https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
  
    axios.get(url,{
      headers:{
        Authorization:"matheus-de-souza-dos-santos-lovelace"
      }
    }
     )
    .then((res)=>{
      this.setState({
        listaDeUsuarios:res.data
      })
      
    })
    .catch((err)=>{console.log('algo saiu errado')})
    
  }

deletaUsuario=(id)=>{
  const url=`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
  axios.delete(url,{
    headers:{
      Authorization:"matheus-de-souza-dos-santos-lovelace"
    }
  })
  .then((res)=>{
    alert("usuario removido")
    this.pegaListaDeUsuarios()})
  .catch((err)=>{alert(err.response.data.message)})
  
}



  render() {
const   mostra =this.state.listaDeUsuarios.map((user)=>{
  return <li key={user.id}>
  {user.name}
  
  <button
  
  onClick={()=>{this.deletaUsuario(user.id)}}
  
  >X</button>
  
  </li>
})

    return (
    <>
    <h1>tela de lista dos usuarios</h1>

    <button  
    
    onClick={this.props.irParaCadastro}
    
    >ir para tela cadastro </button>
{mostra}
   
    </>
    );
  }
} 
