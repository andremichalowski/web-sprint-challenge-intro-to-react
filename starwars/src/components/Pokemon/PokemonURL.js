import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Pokemon from './Pokemon';
import UrlOut from './UrlOut';

const URL = (props) => {
  const [urlData, setUrlData] = useState([]);

  useEffect(() => {
    axios
      .get(`${props.url}`)
      .then(res => {
        console.log(res);
        setUrlData(res.data.abilities);
      })
      .catch(err => {
        console.log('404 A wild error appeared', err);
      })
  }, [])

  return (
    <div className="CardContainer">
        {urlData.map((character, id) => {
          return (
            <UrlOut key={id} character={character} />
          );
        })}
    </div>
  );
}

export default URL;