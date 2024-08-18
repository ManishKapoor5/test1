import {configureStore} from "@reduxjs/toolkit"
import { combineReducers } from "redux";
import { createStore } from "redux";
import rootReducer from "./rootReducer";


  const INIT_STATE = {
    carts: []
};


  

const store= createStore(
    rootReducer,
);
  
export default store

