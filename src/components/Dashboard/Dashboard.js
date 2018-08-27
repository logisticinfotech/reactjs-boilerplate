import React, { Component } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Dashboard.scss";

class Dashboard extends Component {
    render = () => {
        return (
            <div className="App">
                <Header />
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <Footer />
            </div>
        );
    };
}

export default Dashboard;
