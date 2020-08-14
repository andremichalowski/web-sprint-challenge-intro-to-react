import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Pokemon from './Pokemon';

const PokemonContainer = () => {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20')
      .then(res => {
        // console.log(res.data.results);
        setPokemonData(res.data.results);
      })
      .catch(err => {
        console.log('404 A wild error appeared', err);
      })
  }, [])

  return (
    <div className="CardContainer">
        {pokemonData.map((character, id) => {
          return (
            <Pokemon key={id} character={character} />
          );
        })}
    </div>
  );
}

export default PokemonContainer;