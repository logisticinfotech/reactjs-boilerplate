import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk"; //USING THUNK
import promiseMiddleware from "redux-promise-middleware";

import rootReducer from "./reducers/index";

let store = createStore(rootReducer, applyMiddleware(thunk, promiseMiddleware()));

export default store;
