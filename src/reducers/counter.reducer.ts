import { Action } from "../actions/counter.actions";

export interface CountState {
  count: number;
}

const initialState = { count: 0 };

export const countReducer = (
  state: CountState = initialState,
  action: Action
) => {
  switch (action.type) {
    case "INCREMENT": {
      return { ...state, count: state.count + 1 };
    }
    case "DECREMENT": {
      return { ...state, count: state.count - 1 };
    }
    default:
      return state;
  }
};
