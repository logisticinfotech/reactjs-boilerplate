import axios from "axios";
import * as environemnt from "./environment";

export const login = request => {
    return axios
        .post(environemnt.BASE_API + environemnt.LOGIN, request)
        .then(function(response) {
            return response.data;
        })
        .catch(function(error) {
            return error.response.data;
        });
};

export const socialLogin = request => {
    return axios
        .post(environemnt.BASE_API + environemnt.SOCIAL_LOGIN, request)
        .then(function(response) {
            return response.data;
        })
        .catch(function(error) {
            return error.response.data;
        });
};
