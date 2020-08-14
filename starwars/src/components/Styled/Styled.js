import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Styled = styled.div`
    padding: 25px;
    margin: 15px;
    width: 450px;
    color: white;
    background-color: beige;
    border: 2px dashed brown;
    border-radius: 5px;
    
    h1 {
        color: gray;
        animation: ${rotate} 2s linear infinite;
    }

    h2 {
        color: lightgray;
    }

    .section {
        display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    }
`;

export default Styled;