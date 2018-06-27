import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import Nav from '../Nav/Nav';
import Display from '../Display/Display'

class Board extends Component {

    constructor(props) {
        super(props);
        this.state = {
            boardName: props.match.params.boardName
        }
    }

    render() {
        return (

            <Container>
            <Nav />
            <h1>{this.state.boardName}</h1>

            <Display url = { "/links/board/" + this.state.boardName } showTitle showDesc showImg showEdit />

            </Container>
            
        );
    }
}

export default Board;