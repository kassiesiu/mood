import React, { Component } from 'react';
import { Grid, Card } from 'semantic-ui-react';
import axios from 'axios';
// import LinkPreview from 'react-native-link-preview';

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
            
                <Grid.Column key = { item._id } className = "square">
                <Card>
                    <Card.Content>
                        <Card.Header>
                            {/* { LinkPreview.getPreview('https://www.youtube.com/watch?v=DGzy8FE1Rhk').then(data => console.debug(data)) } */}
                        { this.props.showBoard ? <a href = {'/board/' + item.boardName}>{item.boardName}</a> : ""}
                        { this.props.showDesc ? <a href = {item.link} > {item.desc} </a> : ""}
                        {/* { this.props.showDescription ? item.desc : ""} */}
                        </Card.Header>
                    </Card.Content>
                </Card>
                </Grid.Column>
            
            )}
                
            </Grid>
        );
    }

}

export default Display;