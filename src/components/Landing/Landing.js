import React, { Component } from "react";
import "./Landing.scss";
import AppLayout from "../AppLayout";
import { connect } from "react-redux";
/*eslint-disable no-script-url*/

class Landing extends Component {
    render = () => {
        return (
            <AppLayout>
                <section className="banner text-center">
                    <div className="container">
                        <h1>Welcome to Logistic Infotech Pvt. Ltd.</h1>
                        <p>
                            
                        </p>
                    </div>
                </section>
            </AppLayout>
        );
    };
}

function mapStateToProps(state) {
    return {
        user: state.UserReducer.userdetail,
    };
}

export default connect(mapStateToProps)(Landing);
