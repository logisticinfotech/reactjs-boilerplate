import { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import SignUp from "../../components/SignUp/SignUp";
import { loginAction, socialLoginAction } from "../../actions/auth";

class SignUpContainer extends Component {}

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
)(SignUp);
