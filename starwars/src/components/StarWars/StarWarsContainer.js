import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Character from './Character';

const StarWarsContainer = () => {
  const [starWarsData, setStarWarsData] = useState([]);

  useEffect(() => {
    axios
      .get('https://swapi.py4e.com/api/people')
      .then(res => {
        // console.log(res.data.results);
        setStarWarsData(res.data.results);
      })
      .catch(err => {
        console.log('404 This is not the droid you are looking for', err);
      })
  }, [])

  return (
    <div className="CardContainer" id="sw">
        {starWarsData.map((character, id) => {
          return (
            <Character key={id} character={character} />
          );
        })}
    </div>
  );
}

export default StarWarsContainer;