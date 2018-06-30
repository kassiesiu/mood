import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react';
import Nav from '../Nav/Nav';
import Display from '../Display/Display';

class App extends Component {
  render() {
    return (

        <Container>
          <Nav />
          <Header as='h1' textAlign='center'>Boards</Header>
          <Display url = "boards" showBoard/>
        </Container>
        
    );
  }
}

export default App;