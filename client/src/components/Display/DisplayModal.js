import React, { Component } from 'react';
import { Dropdown, Modal, Image, Card } from 'semantic-ui-react';
// import DisplayCard from './DisplayCard';
import './Display.css';
import DisplayDesc from './DisplayDesc'
import axios from 'axios';

export default class ModalExampleControlled extends Component {
    state = { 
        edit: false,
        modalOpen: false 
    }

    handleOpen = () => this.setState({ modalOpen: true });
    handleClose = () => this.setState({ modalOpen: false });
    handleEditOpen = () => this.setState({ edit: true, modalOpen: true });
    handleEditClose = () => this.setState({ modalOpen: true, edit: false });
    handleDelete = () => {
        axios.delete('/api/links/' + this.props.item._id)
            .then((res) => {
                console.log("res");
            })
            .catch((err) => {
                console.log("err");
            })
            window.location.reload(true);
    }




    render() {
        return (
            <Modal
            trigger={

                <Card key = {this.props.item._id} onClick = {this.handleOpen}>
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
            open={this.state.modalOpen}
            onClose={this.handleClose}
            closeOnDimmerClick={false}
            closeIcon
            >
                    <Modal.Header>
                        {this.props.item.meta.title} 
                        <Dropdown icon = "wrench" className = "ico" size = "tiny" direction = "right">
                            <Dropdown.Menu direction = "right">
                                <Dropdown.Item text='Edit' onClick = {this.handleEditOpen}/>
                                <Dropdown.Item text='Delete' onClick = {this.handleDelete} />
                            </Dropdown.Menu>
                        </Dropdown>
                    </Modal.Header>         
                    <Modal.Content className = "img" >
                            <Image 
                                size='medium' 
                                src={this.props.item.meta.image}
                            />
                        <Modal.Description className = "desc">
                            { this.state.edit ? <DisplayDesc {...this.props} cancel = {this.handleEditClose}/> : <div><label>Description</label>{this.props.item.desc}</div> }
                        </Modal.Description>
                    </Modal.Content>
            </Modal>
        )
    }
}
