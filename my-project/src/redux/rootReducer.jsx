import countReducer from "./countReducer";
import taskReducer from "./taskReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers(
    [
        taskReducer,
        countReducer
    ]
);

export default rootReducer;