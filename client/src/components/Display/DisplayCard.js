import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react';

class DisplayCard extends Component {
    
    render() {

        return (
            <Card key = {this.props.item._id}>
                { this.props.showImg ? <Image src={this.props.item.meta.image} /> : "" }
                <Card.Content>
                    <Card.Header>
                        { this.props.showBoard ? <a href = {'/board/' + this.props.item.boardName}>{this.props.item.boardName}</a> : ""}
                        { this.props.showTitle ? this.props.item.meta.title : ""}
                    </Card.Header>
                </Card.Content>
            </Card>
        );
    }

}

export default DisplayCard;