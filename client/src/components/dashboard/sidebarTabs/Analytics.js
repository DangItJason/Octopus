import React, { Component } from "react";
import classNames from "classnames";
import RevenueChart from "./Chart";

class Analytics extends Component {
  render() {

    return (
      <div className="container">
        <div class="container-fluid">
          <h2 className={classNames("mt-4", "hr")}>Analytics</h2>
        </div>
        <RevenueChart></RevenueChart>
      </div>
    );
  }
}

export default Analytics;
