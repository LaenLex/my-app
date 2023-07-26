import {combineReducers, legacy_createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";
import sidebarReducer from "./sidebarReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogReducer,
    sidebar: sidebarReducer
});

let store = legacy_createStore(reducers);

export default store;