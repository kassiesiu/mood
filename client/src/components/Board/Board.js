import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react';
import Nav from '../Nav/Nav';
import Display from '../Display/Display'

export default class Board extends Component {

    state = {
        boardName: this.props.match.params.boardName
    }

    render() {
        return (

            <Container>
            <Nav />
                <Header dividing as='h1'>{this.state.boardName}</Header>

                <Display url = { "/links/board/" + this.state.boardName } showTitle showDesc showImg showEdit />

            </Container>
            
        );
    }
}