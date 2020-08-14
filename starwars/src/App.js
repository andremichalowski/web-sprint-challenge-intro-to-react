import React, { useState, useEffect } from "react";
import "./App.css";

import Styled from "./components/Styled/Styled";

import StarWarsContainer from "./components/StarWars/StarWarsContainer";
import MortyContainer from "./components/Morty/MortyContainer";
import PokemonContainer from "./components/Pokemon/PokemonContainer";

const App = () => {
  return (
    <div className="App">
      <h3> ~~~ MY FAVORITE ALIENS ~~~</h3>
      <Styled>
        <div className="section">
          <StarWarsContainer />
          <MortyContainer />
          <PokemonContainer />
        </div>
      </Styled>
    </div>
  );
};

export default App;
