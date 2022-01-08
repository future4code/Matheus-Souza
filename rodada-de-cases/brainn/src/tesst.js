import axios from "axios";
import { useState, useEffect } from "react";
import MegaCenaScreen from "./MegaCenaScreen"

export default function Teste() {
  const url = "https://brainn-api-loterias.herokuapp.com/api/v1/loterias";

  const [escolha, setEscolha] = useState("");

  /*   useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
        alert("Ocorreu um erro, tente novamente");
      });
  }, []); */

  let select = document.getElementById("options");

  switch (escolha) {
    case 0:
      break;
      case 1:console.log('quina')
      break;
      case 2:console.log('lotofaciil')
      break;
      case 3:console.log('lotomania')
      break;
      case 4:console.log('timemania')
      break;
      case 5:console.log('dia de sorte')
      break;
    default:
      break;
  }

  return (
    <div>
      <select id="options">
        <option>MAGA-CENA</option>
        <option>QUINA</option>
        <option>LOTOFACIL</option>
        <option>LOTOMANIA</option>
        <option>TIMEMANIA</option>
        <option>DIA DE SORTE</option>
      </select>
      <button
        onClick={() => {
          setEscolha(select && select.selectedIndex);
        }}
      >
        vai
      </button>
      <MegaCenaScreen/>
    </div>
  );
}
