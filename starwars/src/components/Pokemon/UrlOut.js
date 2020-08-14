import React from 'react';

import Styled from '../Styled/Styled';

const UrlOut = (props) => {
  console.log(props);
  return (
    <div>
      <Styled>
        <h1>Ability: {props.character.ability.name}</h1>
      </Styled>
    </div>
  );
}
export default UrlOut;