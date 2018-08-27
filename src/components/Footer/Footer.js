import React, { Component } from "react";
import "./Footer.scss";
/*eslint-disable no-script-url*/
class Footer extends Component {
    render = () => {
        return (
            <footer>
                <div className="container">
                    <div className="footer-bottom">
                        <div className="btm-btm">
                            <div className="d-flex justify-content-between align-items-center">
                                <p>
                                    © 2018{" "}
                                    <a href="javascript:void(0)" className="blue">
                                        Logistic Infotech Pvt. Ltd.
                                    </a>{" "}
                                    - All Rights Reserved.
                                </p>
                                <ul>
                                    <li>
                                        <a href="javascript:void(0)">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">
                                            <i className="fab fa-twitter" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">
                                            <i className="fab fa-google-plus-g" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">
                                            <i className="fab fa-instagram" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    };
}

export default Footer;
