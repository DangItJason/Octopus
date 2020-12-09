import React, { Component } from "react";
import classNames from "classnames";
import RestaurantInfo from "./settings/RestaurantInfo";
import { Container, Row, Col, Card, } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle, faUtensils, faBookOpen, faCar } from '@fortawesome/free-solid-svg-icons'

class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = { currentCard: "0" };
    }

    changeCard = card => {
        this.setState({ currentCard: card });
    }

    render() {
        return (
            <div className="container">
                <div class="container-fluid">
                    <h2 className={classNames("mt-4", "hr")}>User Settings</h2>
                </div>
                <div class="container-fluid">
                    <Row>
                        <Col>
                            <Row>
                                <Card 
                                    className={classNames("settings-card", this.state.currentCard === "0" ? "card-active" : "")} onClick={() => this.changeCard("0")}>
                                    <Card.Title className="card-icon"><FontAwesomeIcon icon={faInfoCircle} /></Card.Title>
                                    <Card.Text>Restaurant Info</Card.Text>
                                </Card>
                                <Card className={classNames("settings-card", this.state.currentCard === "1" ? "card-active" : "")} onClick={() => this.changeCard("1")}>
                                    <Card.Title className="card-icon"><FontAwesomeIcon icon={faUtensils} /></Card.Title>
                                    <Card.Text>Meals</Card.Text>
                                </Card>
                                <Card className={classNames("settings-card", this.state.currentCard === "2" ? "card-active" : "")} onClick={() => this.changeCard("2")}>
                                    <Card.Title className="card-icon"><FontAwesomeIcon icon={faBookOpen} /></Card.Title>
                                    <Card.Text>Menus</Card.Text>
                                </Card>
                                <Card className={classNames("settings-card", this.state.currentCard === "3" ? "card-active" : "")} onClick={() => this.changeCard("3")}>
                                    <Card.Title className="card-icon"><FontAwesomeIcon icon={faCar} /></Card.Title>
                                    <Card.Text>Delivery Services</Card.Text>
                                </Card>
                            </Row>
                        </Col>
                        <Col>
                            {this.state.currentCard == "0" ?
                                <RestaurantInfo />
                            : null}
                            {this.state.currentCard == "1" ?
                                <Container className="edit-container">
                                    <h4>Edit Meals</h4>
                                    <p>Add, remove, or modify meals.</p>
                                </Container>
                            : null}
                            {this.state.currentCard == "2" ?
                                <Container className="edit-container">
                                    <h4>Edit Menus</h4>
                                    <p>Add, remove, or modify menu information.</p>
                                </Container>
                            : null}
                            {this.state.currentCard == "3" ?
                                <Container className="edit-container">
                                    <h4>Delivery Services</h4>
                                    <p>Add, remove, or pause supported delivery services.</p>
                                </Container>
                            : null}
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default Settings;