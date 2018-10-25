import React, { Component } from 'react';
// import logo from './logo.svg';
import Title from './components/Title'
import Button from './components/Button.js'
import styled from 'styled-components';


const Wrapper = styled.div`
  background: pink;
  padding: 3em;
  margin: 3em;
  text-align: center;
`;

class App extends Component {
  render() {
    return (
        <Wrapper>
          <Title />
          <Button />
        </Wrapper>
    );
  }
}

export default App;
