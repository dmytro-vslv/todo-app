import { combineReducers } from "redux";
import todoReducer from "./todo.js";
import darkModeReducer from "./darkMode.js";

const rootReducer = combineReducers({ todo: todoReducer, darkMode: darkModeReducer });

export default rootReducer;
