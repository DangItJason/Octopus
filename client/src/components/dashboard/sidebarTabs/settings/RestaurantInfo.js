import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem } from "react-bootstrap";
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
            desc: "The best authentic food in Kansas."
        }
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
                    <ListGroupItem>Description: {this.state.desc}<FontAwesomeIcon icon={faEdit} className="icon-edit" /></ListGroupItem>
                </ListGroup>
            </Container>
        );
    }
}

export default RestaurantInfo;