import React from "react";
import { Counter } from "./Counter";
import { useSelector, useDispatch } from "react-redux";
import { CountState } from "./counter.reducer";
import { increment, decrement } from "./counter.actions";
import { RootState } from "./store";

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
    </>
  );
}

export default App;
