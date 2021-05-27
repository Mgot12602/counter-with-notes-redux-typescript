import { combineReducers, createStore } from "redux";
import { countReducer } from "./countReducer";

export const store = createStore(countReducer);

// const rootReducer = combineReducers({ counter: countReducer });

// export const store = createStore(rootReducer);
