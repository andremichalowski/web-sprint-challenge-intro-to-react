import React from 'react';

import Styled from '../Styled/Styled';
import URL from './PokemonURL';

const Pokemon = (props) => {
  
  return (
    <div>
      <Styled>
        <h1> {props.character.name}</h1>
        {/* <h2> Birth: {props.character.created}</h2> */}
        {/* <h2> Species: {props.character.species}</h2> */}
        {/* <h2> Home: {props.character.location.name}</h2> */}
        {/* <img src={props.character.image}/> */}
        <URL url={props.character.url}/>
      </Styled>
    </div>
  );
}
export default Pokemon;