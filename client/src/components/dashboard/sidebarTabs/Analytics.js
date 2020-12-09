import React, { Component } from "react";
import classNames from "classnames";
import RevenueChart from "./Chart";
import "./analytics.css";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

class Analytics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: true,
    };
  }

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    })
  }

  render() {
    return (
      <div className="container">
        <div class="container-fluid">
          <h2 className={classNames("mt-4", "hr")}>Analytics</h2>
        </div>
        <div class="title">Revenue over time</div>
        <div class= "legend">
          <div class="red"></div> Uber
          <div class="blue"></div> Postmates
        </div>
        <span>
          <RevenueChart></RevenueChart>
          <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle caret>Monthly</DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Annualy</DropdownItem>
              <DropdownItem>Quarterly</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </span>
      </div>
    );
  }
}

export default Analytics;
