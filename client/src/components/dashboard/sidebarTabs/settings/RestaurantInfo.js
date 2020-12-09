import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Modal, Button, InputGroup, FormControl } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

class RestaurantInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Jack's Diner",
            location: "Troy, NY",
            number: "999-999-9999",
            hours: "10AM - 8PM, M-F",
            desc: "The best authentic food in Kansas.",
            tempDesc: "The best authentic food in Kansas.",
            descModal: false
        }
    }

    setRestaurantInfo = (event, field, obj) => {
        if (field === "desc") {
            this.setState({ desc: obj["desc"] });
            this.toggleDescModal(event);
        }
    }

    toggleDescModal = () => {
        this.setState({ descModal: !this.state.descModal });
    };

    handleDescChange = (e) => {
        this.setState({ tempDesc: e.target.value });
    }
    
    cancelDescChange = (e) => {
        this.setState({ tempDesc: this.state.desc });
        this.toggleDescModal(e);
    }

    render() {
        return (
            <Container className="edit-container">
                <h4>Edit Restaurant Info</h4>
                <p>Change general restaurant information.</p>
                <ListGroup>
                    <ListGroupItem>Name: {this.state.name}<FontAwesomeIcon icon={faEdit} className="icon-edit" /></ListGroupItem>
                    <ListGroupItem>Location: {this.state.location}<FontAwesomeIcon icon={faEdit} className="icon-edit" /></ListGroupItem>
                    <ListGroupItem>Phone Number: {this.state.number}<FontAwesomeIcon icon={faEdit} className="icon-edit" /></ListGroupItem>
                    <ListGroupItem>Hours: {this.state.hours}<FontAwesomeIcon icon={faEdit} className="icon-edit" /></ListGroupItem>
                    <ListGroupItem>
                        Description: {this.state.desc}<FontAwesomeIcon icon={faEdit} onClick={this.toggleDescModal} className="icon-edit" />
                        <Modal show={this.state.descModal} onHide={this.toggleDescModal}>
                            <Modal.Header closeButton>
                                <Modal.Title>Edit Description</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                Change your restaurant's description here.
                                <hr/>
                                <InputGroup>
                                    <FormControl value={this.state.tempDesc} as="textarea" rows={3} onChange={this.handleDescChange} />
                                </InputGroup>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="primary" onClick={() => this.setRestaurantInfo(this, "desc", {desc: this.state.tempDesc})}>Save</Button>
                                <Button variant="secondary" onClick={this.toggleDescModal}>Cancel</Button>
                            </Modal.Footer>
                        </Modal>
                    </ListGroupItem>
                </ListGroup>
            </Container>
        );
    }
}

export default RestaurantInfo;