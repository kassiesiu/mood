import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import Nav from '../Nav/Nav';

class App extends Component {
  render() {
    return (

        <Container>
          <Nav />
          Hello
        </Container>
    );
  }
}

export default App;