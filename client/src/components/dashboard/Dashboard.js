import React, { Component } from "react";
import classNames from "classnames";
import Sidebar from "./Sidebar";
import Panel from "./Panel";
import 'bootstrap/dist/css/bootstrap.min.css';
import './dashboard.css';

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.toggleMenu = this.toggleMenu.bind(this);
        this.state = { sidebarToggled: false, tab: "home" };
    }

    toggleMenu = () => {
        this.setState({ sidebarToggled: !this.state.sidebarToggled })
    }

    updateTab = (tab) => {
        this.setState({ tab: tab });
    }

    render() {
        return (
            <div className={classNames("d-flex", (this.state.sidebarToggled) ? "toggled":"")} id="dashboard-wrapper">
                <Sidebar changeTab={this.updateTab} />
                <Panel action={this.toggleMenu} extension={this.state.tab} />
            </div>
        );
    }
}

export default Dashboard;