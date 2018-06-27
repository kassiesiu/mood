import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import Nav from '../Nav/Nav';
import Display from '../Display/Display';

class App extends Component {
  render() {
    return (

        <Container>
          <Nav />
          <h1>Boards</h1>
          <Display url = "boards" showBoard/>
        </Container>
        
    );
  }
}

export default App;