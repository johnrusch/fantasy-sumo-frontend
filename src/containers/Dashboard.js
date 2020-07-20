import React, { Component } from "react";
import AuthHOC from "../HOCs/AuthHOC";
import { Route, Switch, NavLink } from "react-router-dom";
import { api } from "../services/api";

class Dashboard extends Component {


    render() {
        return (
            <div>

            </div>
        )
    }
}

export default AuthHOC(Dashboard);