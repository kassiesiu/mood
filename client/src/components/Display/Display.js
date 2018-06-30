import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import axios from 'axios';
import './Display.css';
import DisplayModal from './DisplayModal';
import DisplayCard from './DisplayCard'

class Display extends Component {

    constructor() {
        super();
        this.state = {
            items: []
        };

    }

    componentDidMount() {
        axios.get('/api/' + this.props.url).then(res => {
            this.setState({ items: res.data });
        })
    }
    
    render() {

        return (
            <Card.Group itemsPerRow = {4} className = "grid">

            {this.state.items.map(item =>
                this.props.showBoard ? <DisplayCard {...this.props} item = { item } /> : <DisplayModal {...this.props} item = {item} />       
            )}
                
            </Card.Group>
        );
    }

}

export default Display;