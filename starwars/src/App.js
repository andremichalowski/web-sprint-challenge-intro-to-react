import React, { useState, useEffect } from 'react';
import './App.css';

import Styled from './components/Styled/Styled';

import StarWarsContainer from './components/StarWars/StarWarsContainer';
import MortyContainer from './components/Morty/MortyContainer';

const App = () => {

  return (
    <div className="App">
      <Styled>
        <div className="section"> 
        <StarWarsContainer />
        <MortyContainer />
        {/* <PokemonContainer /> */}
        </div>
      </Styled>
    </div>
  );
}

export default App;
