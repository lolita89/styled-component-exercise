import React, { Component } from 'react';
// import logo from './logo.svg';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const TitleName = styled.h1`
    padding: 0.5em;
    margin: 1em;
    color: red;
    animation: ${rotate} 6s linear infinite;
    :hover {
      color: black;
    }
`;

class Title extends Component {
  render() {
    return (
      <TitleName>
          Counter
      </TitleName>
    );
  }
}

export default Title;
