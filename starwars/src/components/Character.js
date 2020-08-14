import React from 'react';

import Styled from './Styled';

const Character = (props) => {
  console.log(props.props[0]);
  return (
    <div>
      <Styled>
        
        {/* <h1> {props.props[0].name}</h1> */}
        {/* <h2> Birth Year: {props[1].birth_year}</h2>
        <h2> Home: {props[1].homeworld}</h2>
        <h2> Height: {props[1].height}</h2>
        <h2> Mass: {props[1].mass}</h2> */}
      </Styled>
    </div>
  );
}
export default Character;