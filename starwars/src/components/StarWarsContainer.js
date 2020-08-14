import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Character from './Character';

const StarWarsContainer = () => {
  const [starWarsData, setStarWarsData] = useState([]);

  useEffect(() => {
    axios
      .get('https://swapi.py4e.com/api/people')
      .then(res => {
        console.log(res.data.results);
        setStarWarsData(res.results);
      })
      .catch(err => {
        console.log('404 This is not the droid you are looking for', err);
      })
  }, [starWarsData])

  return (
    <div className="CardContainer">
      {/* <h1 className="Header">Characters</h1> */}
      <Character props={starWarsData} />

    </div>
  );
}

export default StarWarsContainer;