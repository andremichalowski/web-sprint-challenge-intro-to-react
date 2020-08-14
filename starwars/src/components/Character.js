import React from 'react';

import Styled from './Styled';

const Character = (props) => {
  
  return (
    <div>
      <Styled>
        <h1> {props.character.name}</h1>
        <h2> Birth Year: {props.character.birth_year}</h2>
        <h2> Home: {props.character.homeworld}</h2>
        <h2> Height: {props.character.height}</h2>
        <h2> Mass: {props.character.mass}</h2>
      </Styled>
    </div>
  );
}
export default Character;