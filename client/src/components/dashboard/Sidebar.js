import React, { Component } from "react";
import classNames from "classnames";
import { ListGroup, ListGroupItem } from "reactstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faShoppingBag, faChartBar, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

class Sidebar extends Component {
    render() {
        return (
            <div className={classNames("bg-none", "border-right")} id="sidebar-wrapper">
                <div class="sidebar-heading">Octopus</div>
                <ListGroup>
                    <ListGroupItem tag="a" href="#" onClick={() => this.props.changeTab("home")} className={classNames("list-group-item", "bg-none")}><FontAwesomeIcon icon={faHome} />Home</ListGroupItem>
                    <ListGroupItem tag="a" href="#" onClick={() => this.props.changeTab("deliveries")} className={classNames("list-group-item", "bg-none")}><FontAwesomeIcon icon={faShoppingBag} />Deliveries</ListGroupItem>
                    <ListGroupItem tag="a" href="#" onClick={() => this.props.changeTab("analytics")} className={classNames("list-group-item", "bg-none")}><FontAwesomeIcon icon={faChartBar} />Analytics</ListGroupItem>
                    <ListGroupItem tag="a" href="#" className={classNames("list-group-item", "bg-none")}><FontAwesomeIcon icon={faSignOutAlt} />Logout</ListGroupItem>
                </ListGroup>
            </div>
        );
    }
}

export default Sidebar;
