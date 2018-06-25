import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import Nav from '../Nav/Nav';
import Display from '../Display/Display';

class App extends Component {
  render() {
    return (

        <Container>
          <Nav />
          <Display url = "boards" showBoard/>
        </Container>
        
    );
  }
}

export default App;