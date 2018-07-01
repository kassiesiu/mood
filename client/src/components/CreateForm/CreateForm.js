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
    
    handleInputChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        axios.post('/api/links', {
            link: this.state.link,
            desc: this.state.desc,
            boardName: this.state.boardName
        }).then((res) => {
            window.location = "/board/" + this.state.boardName;
        }).catch((err) => {
            console.log('Error');
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
                    required
                    />
                </Form.Field>

                <Form.Field>
                    <Form.TextArea
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
                    placeholder='Choose Board'
                    search
                    selection
                    fluid
                    allowAdditions
                    value = {currentValue}
                    onAddItem = {this.handleAddition}
                    onChange = {this.handleDropdownChange}
                    required
                    />
                </Form.Field>

                <Form.Button basic>Submit</Form.Button>


            </Form>
        );
    }

}

export default CreateForm;