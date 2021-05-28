import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { showText, hideText } from "../actions/asyncText.actions";
import { RootState } from "../store";
import { ShowTextState } from "../reducers/asyncText.reducer";

export const AsyncText: React.FC = () => {
  const dispatch = useDispatch();
  const showTextOrNot = useSelector<RootState, ShowTextState["showText"]>(
    (state) => state.asyncShowText.showText
  );

  useEffect(() => {
    setTimeout(() => {
      dispatch(showText());
    }, 5000);
  });

  return (
    <div>
      {showTextOrNot && <p>Wanna hide me?</p>}

      <button onClick={() => dispatch(hideText())}>Yes!</button>
    </div>
  );
};
