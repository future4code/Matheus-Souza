 import React from "react";
import axios from "axios";
import styled from "styled-components"
import tedio from "./img/tedio.jpg"



export default class App extends React.Component {
  state = {
    activity: {}
  }

  getActivity = () => {
    axios
      .get("https://www.boredapi.com/api/activity/")
      .then((res) => {
        console.log(res.data);
        this.setState({activity: res.data})
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    const {activity, type, participants, price } = this.state.activity
    return (
      <div className="App">
        <h1>Está entediado?</h1>

        <img src={'https://picsum.photos/200/300'} alt='ss'/>
        <button onClick={this.getActivity}>Clique aqui!</button>
        <h3>Atividade</h3>
        <p>Nome: {activity} </p>
        <p>Tipo: {type}</p>
        <p>Participantes: {participants} </p>
        <p>Preço: ${price} </p>
      </div>
    );
  }
}
