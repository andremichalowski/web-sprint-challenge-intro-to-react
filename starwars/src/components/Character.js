import React from 'react';

import Styled from './Styled';

const Character = (props) => {
  return (
    <div>
      <Styled>
        <h1> {props[1].name}</h1>
        <h2> Birth Year: {props[1].birth_year}</h2>
        <h2> Home: {props[1].homeworld}</h2>
        <h2> Height: {props[1].height}</h2>
        <h2> Mass: {props[1].mass}</h2>
      </Styled>
    </div>
  );
}
export default Character;