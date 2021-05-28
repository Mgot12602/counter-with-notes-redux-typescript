import React from "react";
import { Counter } from "./Counter";
import { useSelector, useDispatch } from "react-redux";
import { CountState } from "../reducers/counter.reducer";
import { increment, decrement } from "../actions/counter.actions";
import { RootState } from "../store";
import NoteAdder from "./noteAdder/noteAdder";
import { AsyncText } from "./AsyncText";

function App() {
  const count = useSelector<RootState, CountState["count"]>(
    (state) => state.counter.count
  );
  const dispatch = useDispatch();
  const onIncrement = () => {
    dispatch(increment());
  };
  const onDecrement = () => {
    dispatch(decrement());
  };
  return (
    <>
      <Counter increment={onIncrement} decrement={onDecrement} count={count} />
      <NoteAdder />
      <AsyncText />
    </>
  );
}

export default App;
