import React from "react";
import { Counter } from "./Counter";
import { useSelector, useDispatch } from "react-redux";
import { CountState } from "./countReducer";
import { increment, decrement } from "./actions";
// <CountState, CountState["count"]>
function App() {
  const count = useSelector<CountState, CountState["count"]>(
    (state) => state.count
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
    </>
  );
}

export default App;
