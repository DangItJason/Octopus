import React, { Component } from "react";
import classNames from "classnames";

class Deliveries extends Component {
    render() {
        return (
            <div className="container">
                <div class="container-fluid">
                    <h2 className={classNames("mt-4", "hr")}>Deliveries</h2>
                </div>
                <div class="container-fluid">
                    <p>Delivery Information</p>
                </div>
            </div>
        );
    }
}

export default Deliveries;