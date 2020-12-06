import React, { Component } from "react";
import classNames from "classnames";

class Analytics extends Component {
    render() {
        return (
            <div className="container">
                <div class="container-fluid">
                    <h2 className={classNames("mt-4", "hr")}>Analytics</h2>
                </div>
                <div class="container-fluid">
                    <p>Analytics Information</p>
                </div>
            </div>
        );
    }
}

export default Analytics;