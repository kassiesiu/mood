import React, { Component } from 'react';
import axios from 'axios';
import { Dropdown, Container, Header } from 'semantic-ui-react';
import Nav from '../Nav/Nav';
import Display from '../Display/Display'

export default class Board extends Component {

    state = {
        boardName: this.props.match.params.boardName,
        board: {}
    }


    componentDidMount() {
        axios.get('/api/boards/' + this.props.match.params.boardName).then(res => {
            this.setState({ board: res.data });
            console.log(this.state.board[0]);
        })
    }

    handleDelete = () => {
        // console.log(this.state.board.boardName);
        // console.log(this.state.board._id);
        axios.delete('/api/boards/' + this.state.board[0]._id)
            .then((res) => {
                console.log("res");
            })
            .catch((err) => {
                console.log("err");
            })

        axios.delete('/api/links/board/' + this.state.board[0].boardName)
            .then((res) => {
                console.log("res");
            })
            .catch((err) => {
                console.log("err");
            })

            window.location.href = "/";
    }

    render() {
        return (

            <Container>
            <Nav />
                <Header as = 'h1'>{this.state.boardName}
                    <Dropdown icon = "wrench" className = "ico" direction = "right">
                        <Dropdown.Menu>
                            <Dropdown.Item text='Delete' onClick = {this.handleDelete} />
                        </Dropdown.Menu>
                    </Dropdown>
                
                </Header>

                <Display url = { "/links/board/" + this.state.boardName } showTitle showDesc showImg showEdit />

            </Container>
            
        );
    }
}