import React, { Component } from 'react';
import { Header, Modal, Image, Card } from 'semantic-ui-react';
import DisplayCard from './DisplayCard';
import './Display.css';

class DispalyModal extends Component {
    
    render() {

        return (
            <Modal
                trigger={

                    <Card key = {this.props.item._id}>
                        { this.props.showImg ? <Image src={this.props.item.meta.image} /> : "" }
                        <Card.Content>
                            <Card.Header>
                                { this.props.showBoard ? <a href = {'/board/' + this.props.item.boardName}>{this.props.item.boardName}</a> : ""}
                                { this.props.showTitle ? this.props.item.meta.title : ""}
                            </Card.Header>
                        </Card.Content>
                    </Card>



                    // <Container>
                    //     <DisplayCard {...this.props} item = {this.props.item} />
                    // </Container>

                }
            >


                <Modal.Header> {this.props.item.meta.title} </Modal.Header> 
                <Modal.Content className = "img" >
                    <Image size='medium' src={this.props.item.meta.image}/>
                    <Modal.Description>
                        <b>Description: </b>{this.props.item.desc}
                    </Modal.Description>
                </Modal.Content>
            </Modal>
        );
    }

}

export default DispalyModal;