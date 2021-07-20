import logo from './logo.svg';
import './App.css';
import React from 'react';
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import Final from './components/Final';

export default class form extends React.Component {
 
  state = {
    etapa: 1,
  }
  
  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1: 
        return <Etapa1 />;
      case 2: 
        return <Etapa2 />;
        case 3: 
        return <Etapa3 />;
        case 4: 
        return <Final />;
    }
  }

proximo=()=>{
  this.setState({
    etapa :this.state.etapa +1
  })
}


  render(){
  return (
    <>
    {this.renderizaEtapa()}
      <button
      onClick =  {this.proximo}>Próxima etapa
      
      </button>

    </>
  );
}}
