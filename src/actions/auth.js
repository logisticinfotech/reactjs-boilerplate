import * as api from "../services/authService";
import * as type from "./const";

export const loginAction = data => {
    return dispatch => {
        api.login(data).then(function(response) {
            console.log("loginaction", response);
            if (response.status == true) dispatch(userStore(response.token));
            else return response;
        });
    };
};

export const socialLoginAction = data => {
    return dispatch => {
        api.socialLogin(data).then(function(response) {
            console.log("loginaction", response);
            if (response.status == true) dispatch(userStore(response.token));
        });
    };
};

export const userStore = data => {
    return {
        type: type.USER_DETAIL,
        data: data,
    };
};
