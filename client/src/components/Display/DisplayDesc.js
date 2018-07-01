import React, { Component } from 'react';
import axios from 'axios';
import { Button, Form } from 'semantic-ui-react';
import './Display.css';

class DisplayDesc extends Component {

    state = {
        desc: this.props.item.desc
    }

    handleInputChange = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({ [name]: value });
    }

    handleSave = () => {
        axios.put('/api/links/' + this.props.item._id, {
            desc: this.state.desc
        }).then (res => {
            console.log("DisplayDesc.js Success");
        }).catch (err => {
            console.log("DisplayDesc.js Error");
        })
        this.props.item.desc = this.state.desc; // update 
        this.props.cancel();
    }
    
    render() {

        return (
            <Form>
                <Form.Field>
                    <Form.TextArea
                    label = 'Description'
                    name = "desc"
                    value = {this.state.desc}
                    onChange = {this.handleInputChange}
                    autoHeight
                    />
                </Form.Field>
                    <Button basic floated = "right" onClick = {this.props.cancel}>Cancel</Button>
                    <Button basic floated = "right" onClick = {this.handleSave}>Save</Button>
            </Form>
        );
    }

}

export default DisplayDesc;