import React, { Component } from "react";
import classNames from "classnames";
import { Navbar, Button } from "reactstrap";
import Settings from "./sidebarTabs/Settings";
import Deliveries from "./sidebarTabs/Deliveries";
import Analytics from "./sidebarTabs/Analytics";

class Panel extends Component {
    render() {
        return (
            <div id="panel-wrapper">
                <Navbar className={classNames("navbar-expand-lg", "navbar-light", "bg-light", "border-bottom", "shadow")}>
                    <Button className="btn-red" id="menu-toggle" onClick={this.props.action}>☰</Button>
                </Navbar>
                {this.props.extension === "deliveries" ? <Deliveries></Deliveries> : null}
                {this.props.extension === "settings" ? <Settings></Settings> : null}
                {this.props.extension === "analytics" ? <Analytics></Analytics> : null}
            </div>
        );
    }
}

export default Panel;