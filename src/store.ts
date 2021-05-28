import { combineReducers, createStore, applyMiddleware } from "redux";
import { countReducer } from "./reducers/counter.reducer";
import { notesReducer } from "./reducers/notes.reducer";
import { asyncTextReducer } from "./reducers/asyncText.reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

// export const store = createStore(countReducer, composeWithDevTools());

const rootReducer = combineReducers({
  counter: countReducer,
  noteAdder: notesReducer,
  asyncShowText: asyncTextReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
