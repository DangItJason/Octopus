import React, { Component } from "react";
import classNames from "classnames";

class Home extends Component {
    render() {
        return (
            <div className="container">
                <div class="container-fluid">
                    <h2 className={classNames("mt-4", "hr")}>User Home</h2>
                </div>
                <div class="container-fluid">
                    <p>Information</p>
                </div>
            </div>
        );
    }
}

export default Home;