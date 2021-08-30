import React from "react";
import axios from "axios"


export default class App extends React.Component {

  state = {
    lista: [],
    inputPlayList: ""
  }

  componentDidMount() {
    { this.getPlayLists() }
  }

  mostraDetalhesDaPlayList = (playId) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playId}/tracks`
    const headers = {
      headers: {
        Authorization: "matheus-de-souza-dos-santos-lovelace"
      }

    }
    axios.get(url,headers)
    .then((res)=>{
      
      console.log(res.data.result)
      return <p>{res.data.result}</p>
    }
      
      
      )
    .catch((err)=>{console.log(err.response.data)})
  }

  pegaInputPlayList = (event) => {
    this.setState({
      inputPlayList: event.target.value
    })
  }




  getPlayLists = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
    const headers = {
      headers: {
        Authorization: "matheus-de-souza-dos-santos-lovelace"
      }
    };
    axios.get(url, headers)
      .then((res) => {
        console.log(res.data.result.list)
        this.setState({
          lista: res.data.result.list
        })
      })
      .catch((err) => { console.log(err)})
  }



  criaPlayList = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
    const headers = {
      headers: {
        Authorization: "matheus-de-souza-dos-santos-lovelace"
      }
    };
    const body = {
      name: this.state.inputPlayList
    }
    axios.post(url, body, headers)
      .then((res) => {
        console.log(res)
        this.setState({ inputPlayList: "" })

      })
      .catch((err) => { console.log(err.response.data.message) })
  }


  excluiPlayList = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
    const headers = {
      headers: {
        Authorization: "matheus-de-souza-dos-santos-lovelace"
      }
    }
    axios.delete(url, headers)
      .then((res) => {
        alert("deletado com sucesso")
        this.getPlayLists()
      }
      )
      .catch((err) => { console.log(err) })


  }

  render() {

    const mostraLista = this.state.lista.map((item) => {
      return (
        <li key={item.id}>
          {item.name}

          <button
      onClick={this.mostraDetalhesDaPlayList(item.id)}
      >detalhes</button>

          <button
            onClick={() => { this.excluiPlayList(item.id) }}
          >X</button>

        </li>
      )
    })

    return (
      <>


        {mostraLista}

        <button

          onClick={this.criaPlayList}
        >criar</button>

        <input
          placeholder="nome da playlist"
          value={this.state.inputPlayList}
          onChange={this.pegaInputPlayList}

        />


      </>
    )
  }
}