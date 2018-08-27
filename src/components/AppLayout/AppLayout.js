import React, { Component } from "react";
import logo from "../../logo.svg";
import Header from "../Header";
import Footer from "../Footer";
import "./AppLayout.scss";

class AppLayout extends Component {
    constructor(props) {
        super(props);
    }
    render = () => {
        return (
            <div>
                <Header routeActive={this.props.routeActive} />
                <div className="App-intro">{this.props.children}</div>

                <Footer />
            </div>
        );
    };
}

export default AppLayout;
