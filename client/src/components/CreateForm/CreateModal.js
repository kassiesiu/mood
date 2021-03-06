import React, { Component } from 'react';
import { Modal, Menu, Card, Icon } from 'semantic-ui-react';
import CreateForm from './CreateForm';

class CreateModal extends Component {
    
    render() {

        return (
            <Modal
                trigger={

                    this.props.card ?
                    <Card className = "cardContainer">
                        <Icon name = "plus" className = "addNewIcon" size = "large"/>
                        <Card.Content>
                            <Card.Header>
                                Add New Link
                            </Card.Header>
                        </Card.Content>
                    </Card>
                    :
                    <Menu.Item
                    name = 'Add New Link'
                    />



                }
                closeIcon
            >


                <Modal.Header>Add New</Modal.Header> 
                <Modal.Content>

                    <CreateForm />
                        
                </Modal.Content>
            </Modal>
        );
    }

}

export default CreateModal;