import React, { Component } from 'react';
// import logo from './logo.svg';
import styled from 'styled-components';

const TitleName = styled.h1`
    padding: 0.5em;
    margin: 1em;
    color: red;
`

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
