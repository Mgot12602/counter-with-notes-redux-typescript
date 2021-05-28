import React from "react";

interface CounterInputProps {
  increment(): void;
  decrement(): void;
  count: number;
}

export const Counter: React.FC<CounterInputProps> = ({
  increment,
  decrement,
  count,
}) => {
  const incrementCount = () => {
    increment();
  };
  const decrementCount = () => {
    decrement();
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
      <hr />
    </div>
  );
};
