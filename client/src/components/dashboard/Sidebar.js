import React, { Component } from "react";
import classNames from "classnames";
import { ListGroup, ListGroupItem } from "reactstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag, faCog, faChartBar, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import logo from "./OctopusLogo.png";

class Sidebar extends Component {
    render() {
        return (
            <div className={classNames("bg-none", "border-right")} id="sidebar-wrapper">
                <div class="sidebar-heading">Octopus</div>
                <ListGroup>
                    <ListGroupItem tag="a" href="#" onClick={() => this.props.changeTab("deliveries")} className={classNames("list-group-item", "bg-none", (this.props.extension === "deliveries") ? "tab-active" : "")}><FontAwesomeIcon icon={faShoppingBag} />Deliveries</ListGroupItem>
                    <ListGroupItem tag="a" href="#" onClick={() => this.props.changeTab("settings")} className={classNames("list-group-item", "bg-none", (this.props.extension === "settings") ? "tab-active" : "")}><FontAwesomeIcon icon={faCog} />Settings</ListGroupItem>
                    <ListGroupItem tag="a" href="#" onClick={() => this.props.changeTab("analytics")} className={classNames("list-group-item", "bg-none", (this.props.extension === "analytics") ? "tab-active" : "")}><FontAwesomeIcon icon={faChartBar} />Analytics</ListGroupItem>
                    <ListGroupItem tag="a" href="#" className={classNames("list-group-item", "bg-none")}><FontAwesomeIcon icon={faSignOutAlt} />Logout</ListGroupItem>
                </ListGroup>
            </div>
        );
    }
}

export default Sidebar;
