import { combineReducers } from "redux";
import UserReducer from "./UserReducer";
import { reducer as formReducer } from "redux-form";

const rootReducer = combineReducers({
    UserReducer,
    form: formReducer,
});

export default rootReducer;
