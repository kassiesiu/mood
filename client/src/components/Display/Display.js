import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import axios from 'axios';
import './Display.css';
import DisplayModal from './DisplayModal';
import DisplayCard from './DisplayCard';
import CreateModal from '../CreateForm/CreateModal';

export default class Display extends Component {

    state = {
        items: []
    };

    componentDidMount() {
        axios.get('/api/' + this.props.url).then(res => {
            this.setState({ items: res.data });
        })
    }
    
    render() {

        return (

            <Card.Group itemsPerRow = {4} className = "grid">

            {this.state.items.length > 0 ?
                this.state.items.map(item =>
                this.props.showBoard ? <DisplayCard {...this.props} item = { item } key = {item._id} /> : <DisplayModal {...this.props} item = {item} key = {item._id}  />       
                )
                : // else
                <CreateModal card />
            }
                
            </Card.Group>
        );
    }

}