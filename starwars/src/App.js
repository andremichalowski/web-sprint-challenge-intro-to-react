import React, { useState, useEffect } from 'react';
import './App.css';

import StarWarsContainer from './components/StarWarsContainer';

const App = () => {

  return (
    <div className="App">
      <StarWarsContainer />
      {/* <RickMortyContainer /> */}
      {/* <PokemonContainer /> */}
    </div>
  );
}

export default App;
