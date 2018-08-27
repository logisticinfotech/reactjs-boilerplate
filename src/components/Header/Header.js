import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import * as route from "../../services/routeConst";
import classNames from "classnames";
/*eslint-disable no-script-url*/

class Header extends Component {
    render = () => {
        return (
            <header>
                <nav className="navbar navbar-expand-lg trust_menu">
                    <Link className="navbar-brand" to={route.ROOT_ROUTE}>
                        <img src={process.env.PUBLIC_URL + "/img/logo.png"} alt="logo" />
                    </Link>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>

                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li
                                className={classNames(
                                    "nav-item ",
                                    route.ROOT_ROUTE === this.props.routeActive && "active"
                                )}
                            >
                                <Link className="nav-link" to={route.Home_ROUTE}>
                                Home <span className="sr-only">(current)</span>
                                </Link>
                            </li>
                            <li
                                className={classNames(
                                    "nav-item ",
                                    route.ROOT_ROUTE === this.props.routeActive && "active"
                                )}
                            >
                                <Link className="nav-link" to={route.Services_ROUTE}>
                                Services <span className="sr-only">(current)</span>
                                </Link>
                            </li>
                            <li
                                className={classNames(
                                    "nav-item ",
                                    route.ROOT_ROUTE === this.props.routeActive && "active"
                                )}
                            >
                                <Link className="nav-link" to={route.AboutUs_ROUTE}>
                                About Us <span className="sr-only">(current)</span>
                                </Link>
                            </li>
                            <li
                                className={classNames(
                                    "nav-item ",
                                    route.ROOT_ROUTE === this.props.routeActive && "active"
                                )}
                            >
                                <Link className="nav-link" to={route.ContactUs_ROUTE}>
                                Contact Us <span className="sr-only">(current)</span>
                                </Link>
                            </li>
                            <li className="nav-item login_btn">
                                <Link className="nav-link " to={route.LOGIN_ROUTE}>
                                    Log in
                                </Link>
                            </li>
                            <li className="nav-item login_btn signup">
                                <Link className="nav-link" to={route.SIGNUP_ROUTE}>
                                    Sign Up
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    };
}

export default Header;
