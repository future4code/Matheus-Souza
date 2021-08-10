import React, { useState, useEffect } from 'react';
import axios from "axios";

export const PokeCard = (props) => {

  const [pokemon, setPokemon] = useState({})


 const  pegaPokemon = pokeName => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then(response => {
        setPokemon(response.data)
      })
      .catch(err => {
        console.log(err);
      });
  };
  useEffect((prevProps) => {
    if (prevProps.pokemon !==props.pokemon) {
      pegaPokemon(props.pokemon)
    }
  },[pokeName])

    return (
      <div>
        <p>{pokemon.name}</p>
        <p>{pokemon.weight} Kg</p>
        {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
        {pokemon.sprites && (
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        )}
      </div>
    );
  
}

export default PokeCard;
