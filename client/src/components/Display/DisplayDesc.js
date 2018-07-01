import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';
import './Display.css';

class DisplayDesc extends Component {
    
    render() {

        return (
            <Form>
                <Form.Field>
                    <Form.TextArea
                    label = 'Description'
                    name = "desc"
                    onChange = {this.handleInputChange}
                    value = {this.props.item.desc}
                    autoHeight
                    />
                </Form.Field>
                    <Button basic floated = "right" onClick = {this.props.cancel}>Cancel</Button>
                    <Button basic floated = "right">Submit</Button>
            </Form>
        );
    }

}

export default DisplayDesc;