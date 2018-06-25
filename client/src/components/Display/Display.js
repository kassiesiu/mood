import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import axios from 'axios';

import './Display.css';

class Display extends Component {

    constructor() {
        super();
        this.server = 
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
            <Grid container columns = {3}>
            {this.state.items.map(item =>
            
                <Grid.Column key = { item._id }>
                    { this.props.showBoard ? item.boardName : ""}
                    { this.props.showLink ? item.link : ""}
                    { this.props.showDescription ? item.desc : ""}
                </Grid.Column>
            
            )}
                
            </Grid>
        );
    }

}

export default Display;