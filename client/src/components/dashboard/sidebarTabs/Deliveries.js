import React, { Component } from "react";
import classNames from "classnames";
import { Accordion, Card, Button } from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import '../../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

class Deliveries extends Component {
    constructor(props) {
        super(props);
        this.state = { deliveries: [] };
    }

    componentDidMount() {
        let url = "http://localhost:9000/deliveries";
        let headers = {
        "Content-Type": "application/json",
        };
        fetch(url, { method: "GET", headers: headers })
        .then((res) => {
            return res.json();
        })
        .then((deliveries) => {
            deliveries.map((delivery) =>
                this.setState((prevState) => ({
                    deliveries: [...prevState.deliveries, delivery],
                }))
            );
        });
    }

    formatTime = date => {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let md = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        let timeStr = (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear().toString().substring(0, 2) + ', ' + hours + ':' + minutes + ' ' + md;
        return timeStr;
    }

    formatPrice = price => {
        return "$" + price;
    }

    formatOrder = items => {
        return (
        <Accordion>
            <Card>
                <Card.Header>
                {items.length + " Items"}
                    <Accordion.Toggle as={Button} variant="link" eventKey="0"><FontAwesomeIcon icon={faBars} /></Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        {items.map((item, i) => <p key={i}>{item.name}</p>)}
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>);
    }

    render() {
        return (
            <div className="container">
                <div class="container-fluid">
                    <h2 className={classNames("mt-4", "hr")}>Deliveries</h2>
                </div>
                <div class="container-fluid">
                    <BootstrapTable data={this.state.deliveries} striped hover>
                        <TableHeaderColumn isKey dataFormat={this.formatTime} dataField='whenPlaced'>Order Time</TableHeaderColumn>
                        <TableHeaderColumn dataField='buyerName'>Customer Name</TableHeaderColumn>
                        <TableHeaderColumn dataFormat={this.formatPrice} dataField='totalPrice'>Total Price</TableHeaderColumn>
                        <TableHeaderColumn dataFormat={this.formatOrder} dataField='order'>Order Contents</TableHeaderColumn>
                    </BootstrapTable>
                </div>
            </div>
        );
    }
}

export default Deliveries;