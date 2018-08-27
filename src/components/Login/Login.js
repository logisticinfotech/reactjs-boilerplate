import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import classNames from "classnames";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login";

import AppLayout from "../AppLayout";
import * as environment from "../../services/environment";
import "./Login.scss";
import * as validation from "../../services/formValidation";
import renderInputField from "../Form/Input";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: {
                email: "",
                password: "",
            },
            isRedirect: false,
            loginErrorMsg: "",
        };
    }

    loginHandler = event => {
        let inputName = event.target.name;
        let inputValue = event.target.value;
        let loginCopy = { ...this.state };

        loginCopy.login[inputName] = inputValue;
        this.setState(loginCopy);
    };

    loginSubmitHandler = event => {
        event.preventDefault();
        this.props.loginAction(this.state.login);
    };

    googleLoginResponse(response) {
        if (!response) return;

        let userGoogle = response.profileObj;

        let registerData = {
            firstname: userGoogle.familyName,
            lastname: userGoogle.givenName,
            email: userGoogle.email,
            login_type: "google",
            social_id: userGoogle.googleId,
        };
        this.props.socialLoginAction(registerData);
    }

    facebookLoginResponse(response) {
        if (!response) return;
        let registerData = {};

        let fbName = response.name.split(" ");

        registerData.firstname = fbName[0];

        if (fbName.length > 1) registerData.lastname = fbName[1];

        registerData.email = response.email;
        registerData.login_type = "facebook";
        registerData.social_id = response.userID;

        this.props.socialLoginAction(registerData);
    }

    componentWillReceiveProps = nextProps => {
        if (nextProps.user.length > 0) {
            window.sessionStorage.setItem("user", nextProps.user);
            this.setState({ isRedirect: true });
        }
    };

    render = () => {
        if (this.state.isRedirect) {
            return <Redirect to="/home" />;
        }

        const { invalid } = this.props;

        const responseGoogle = response => {
            this.googleLoginResponse(response);
        };

        const responseFailGoogle = response => {
            this.setState({ loginErrorMsg: "Google not responding" });
        };

        const responseFacebook = response => {
            //console.log("response FB", response);
            this.facebookLoginResponse(response);
        };

        return (
            <AppLayout>
                <div className="container">
                    <div className="row vertical-offset-100">
                        <div className="col-md-4 col-md-offset-4">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h3 className="panel-title">Please sign in</h3>
                                </div>
                                <div className="panel-body">
                                    <form method="post" id="login" onSubmit={this.loginSubmitHandler}>
                                        <fieldset>
                                            <Field
                                                name="email"
                                                type="text"
                                                className="form-control"
                                                component={renderInputField}
                                                validate={[validation.required, validation.email]}
                                                label="Email"
                                                placeholder="Enter email id"
                                                autoComplete="off"
                                                onChange={this.loginHandler}
                                            />
                                            <Field
                                                name="password"
                                                type="password"
                                                className="form-control"
                                                component={renderInputField}
                                                validate={[validation.required]}
                                                label="Password"
                                                placeholder="Enter password"
                                                autoComplete="off"
                                                onChange={this.loginHandler}
                                            />

                                            <input
                                                type="submit"
                                                value="Login"
                                                className={classNames(
                                                    invalid && "disabled",
                                                    "btn",
                                                    "btn-lg",
                                                    "btn-success",
                                                    "btn-block"
                                                )}
                                                disabled={invalid}
                                            />
                                        </fieldset>
                                    </form>
                                </div>
                                {/* <div>
                                    <GoogleLogin
                                        clientId={environment.GOOGLE_KEY}
                                        onSuccess={responseGoogle}
                                        onFailure={responseFailGoogle}
                                        disabledStyle
                                        className="login-social"
                                        style={{ borderRadius: 0 }}
                                    >
                                        Google
                                    </GoogleLogin>
                                </div>
                                <div>
                                    <FacebookLogin
                                        appId={environment.FACEBOOK_KEY}
                                        fields="name,email,picture"
                                        callback={responseFacebook}
                                        cssClass="my-facebook-button-class"
                                        icon="fa-facebook"
                                    />
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </AppLayout>
        );
    };
}

Login = reduxForm({
    form: "loginForm",
})(Login);
export default Login;
