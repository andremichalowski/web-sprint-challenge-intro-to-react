import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Character from './Character';

const StarWarsContainer = () => {
  const [starWarsData, setStarWarsData] = useState([]);
  const stringVersion = JSON.stringify(starWarsData[0]);

  useEffect(() => {
    axios
      .get('https://swapi.py4e.com/api/people')
      .then(res => {
        console.log(res.data.results);
        setStarWarsData(res.data.results);
          //Component wont render testing
          console.log(res.data.results[0].name);
          console.log(stringVersion);



      })
      .catch(err => {
        console.log('404 This is not the droid you are looking for', err);
      })
  }, [])

  return (
    <div className="CardContainer">
      {/* <h1 className="Header">Characters</h1> */}
      {/* <Character props={starWarsData} /> */}
      {/* <h1>{stringVersion}</h1> */}

    </div>
  );
}

export default StarWarsContainer;