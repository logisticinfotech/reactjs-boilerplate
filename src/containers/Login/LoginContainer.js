import { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Login from "../../components/Login/Login";
import { loginAction, socialLoginAction } from "../../actions/auth";

class LoginContainer extends Component {}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ loginAction, socialLoginAction }, dispatch);
}

function mapStateToProps(state) {
    return {
        user: state.UserReducer.userdetail,
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
