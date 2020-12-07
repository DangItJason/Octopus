import React, { Component } from "react";
import classNames from "classnames";

class Settings extends Component {
    render() {
        return (
            <div className="container">
                <div class="container-fluid">
                    <h2 className={classNames("mt-4", "hr")}>User Settings</h2>
                </div>
                <div class="container-fluid">
                    <p>Settings Information</p>
                </div>
            </div>
        );
    }
}

export default Settings;