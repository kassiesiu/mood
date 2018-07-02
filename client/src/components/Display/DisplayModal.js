import React, { Component } from 'react';
import { Header, Dropdown, Modal, Image, Card } from 'semantic-ui-react';
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
                console.log("Item successfully deleted.");
                window.location.reload(true);
            })
            .catch((err) => {
                console.log("Item could not be deleted.");
            })
    }




    render() {
        return (
            <Modal
            trigger={

                <Card key = {this.props.item._id} onClick = {this.handleOpen} className = "cardContainer" >
                    {/* <div style = {style}></div> */}
                    { this.props.showImg ? <Image src={this.props.item.meta.image} className = "aspectRatio"/> : "" }
                    { this.props.item.title ? 
                        <Card.Content>
                            <Card.Header>
                                { this.props.showBoard ? <a href = {'/board/' + this.props.item.boardName}>{this.props.item.boardName}</a> : ""}
                                { this.props.showTitle ? <div className = "wrap">{this.props.item.title}</div> : ""}
                            </Card.Header>
                        </Card.Content>
                    :
                    ""
                    }
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
            <Modal.Content className = "img" >

                <Image 
                    size='medium' 
                    src={this.props.item.meta.image}
                />

                <Modal.Description className = "desc">

                    { this.state.edit ? // when edit is on
                        <DisplayDesc {...this.props} cancel = {this.handleEditClose}/> 
                        : // when edit is off
                            <div>
                                <Dropdown icon = "wrench" className = "ico" size = "tiny" direction = "right">
                                    <Dropdown.Menu>
                                        <Dropdown.Item text='Edit' onClick = {this.handleEditOpen}/>
                                        <Dropdown.Item text='Delete' onClick = {this.handleDelete} />
                                    </Dropdown.Menu>
                                </Dropdown>
                                
                                <Header as = "h2" className = "noVerticalMargins"><a className = "wrap" href = {this.props.item.link} target = "_blank">{this.props.item.title}</a></Header>
                                <div className = "subheading wrap">{this.props.item.link}</div>
                                <Header as = "h3" className = "noVerticalMargins">Description</Header><p>{this.props.item.desc}</p>              
                            </div>
                    }
                </Modal.Description>

                </Modal.Content>

            </Modal>
        )
    }
}
