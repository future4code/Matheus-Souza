import React from "react"
import axios from "axios"




const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

const headers = {
  headers: {
    Authorization: "matheus-de-souza-dos-santos-lovelace"

  }
}

export default class App extends React.Component {

  state={
    usuarios:['usuario 1']
  }



  componentDidMount() {
    this.pegarUsuariosCadastrados()
  }

  pegarUsuariosCadastrados = () => {
    axios.get(url, headers)
      .then((res) => {
         this.setState({ usuarios:res.data })
        })

      .catch((err) => { alert(err) })
  }
  render() {

    const mostraUsuarios=this.state.usuarios.map((item,index)=>{
      return(
        <li
        key={index}
        
        >{item}</li>
      )
    })





    return (
      <>
        {mostraUsuarios}
      </>
    )
  }
}