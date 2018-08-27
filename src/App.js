import React, { Component } from "react";
import Landing from "./components/Landing";
import Home from "./components/Home";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";

import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import LoginContainer from "./containers/Login/LoginContainer";
import SignUpContainer from "./containers/SignUp/SignUpContainer";

// USER AUTH CHECK
const checkAuth = () => {
    var user = JSON.parse(window.sessionStorage.getItem("user"));

    if (user) return true;
    else return false;
};

// Like Auth guard
const AfterLoginRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            checkAuth() ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: "/login",
                    }}
                />
            )
        }
    />
);

class App extends Component {
    render = () => {
        return (
            <Router>
                <Switch>
                    <Route exact path="/login" component={LoginContainer} />
                    <Route exact path="/signup" component={SignUpContainer} />
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/home" component={Landing} />
                    <Route exact path="/Home" component={Home} />
                    <Route exact path="/Services" component={Services} />
                    <Route exact path="/AboutUs" component={AboutUs} />
                    <Route exact path="/ContactUs" component={ContactUs} />
                </Switch>
            </Router>
        );
    };
}

export default App;
