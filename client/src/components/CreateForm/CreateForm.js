import React, { Component } from 'react';
import axios from 'axios';
import { Form } from 'semantic-ui-react';

class CreateForm extends Component {
    
    constructor() {
        super();
        this.state = {
            boards: [],
            options: [],
            link: '',
            desc: '',
            boardName: '',
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        // get list of boards and format it into options
        axios.get('/api/boards').then(res => {
            this.setState({ boards: res.data });

            this.state.boards.map(board => 
                this.setState({ 
                    options: this.state.options.concat({text: board.boardName, value: board.boardName})
                  })
            );
        })
    }

    handleAddition = (e, { value }) => {
        // do this when someone adds something
        this.setState({
            options: [{ text: value, value }, ...this.state.options],
        })
    }

    // dropdown change
    handleDropdownChange = (e, { value }) => 
        this.setState({ currentValue: value, boardName: value }
    )
    
    handleInputChange (e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        // const item = {
        //     link: this.state.link,
        //     desc: this.state.desc,
        //     board: this.state.board
        // }

        axios.post('/api/boards', {boardName: this.state.boardName}).then( res => {
            console.log("res.data");
        }).catch( err => {
            console.log("error");
        })
    }

    render() {

        const { currentValue } = this.state;

        return (
            <Form onSubmit = {this.handleSubmit}>
                <Form.Field>
                    <Form.Input
                    label = 'Link'
                    name = "link"
                    onChange = {this.handleInputChange}
                    />
                </Form.Field>

                <Form.Field>
                    <Form.Input
                    label = 'Description'
                    name = "desc"
                    onChange = {this.handleInputChange}
                    />
                </Form.Field>

                <Form.Field>
                    <Form.Dropdown
                    label = 'Board'
                    name = "boardName"
                    options = {this.state.options}
                    placeholder='Choose Language'
                    search
                    selection
                    fluid
                    allowAdditions
                    value = {currentValue}
                    onAddItem = {this.handleAddition}
                    onChange = {this.handleDropdownChange}
                    />
                </Form.Field>

                <Form.Button>Submit</Form.Button>


            </Form>
        );
    }

}

export default CreateForm;