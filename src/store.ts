import { combineReducers, createStore } from "redux";
import { countReducer } from "./counter.reducer";
import { composeWithDevTools } from "redux-devtools-extension";

// export const store = createStore(countReducer, composeWithDevTools());

const rootReducer = combineReducers({ counter: countReducer });
export type RootState = ReturnType<typeof rootReducer>;
export const store = createStore(rootReducer, composeWithDevTools());
