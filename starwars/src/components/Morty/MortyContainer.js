import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Character from './Character';

const MortyContainer = () => {
  const [mortyData, setMortyData] = useState([]);

  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/character')
      .then(res => {
        // console.log(res.data.results);
        setMortyData(res.data.results);
      })
      .catch(err => {
        console.log('404 Wabaluba whhaaaa', err);
      })
  }, [])

  return (
    
    <div className="CardContainer" id="mt">
        {mortyData.map((character, id) => {
          return (
            <Character key={id} character={character} />
          );
        })}
    </div>
  );
}

export default MortyContainer;