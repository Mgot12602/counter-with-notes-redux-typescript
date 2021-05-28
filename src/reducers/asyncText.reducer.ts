import { Action } from "../actions/asyncText.actions";

export interface ShowTextState {
  showText: boolean;
}
const initialState = { showText: false };

export const asyncTextReducer = (
  state: ShowTextState = initialState,
  action: Action
) => {
  switch (action.type) {
    case "SHOW_TEXT": {
      return { ...state, showText: true };
    }
    case "HIDE_TEXT": {
      return { ...state, showText: false };
    }
    default:
      return state;
  }
};
