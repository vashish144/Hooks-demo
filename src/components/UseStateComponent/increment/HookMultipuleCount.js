import React, { useState } from "react";

function HookMultipuleCount() {
  const initialState = 0;
  const [count, setCount] = useState(initialState);
  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevState) => prevState + 1);
    }
  };
  const decrementFive = () => {
    setCount((prevState) => prevState - 5);
  };
  return (
    <div>
      <p>Count: {count}</p>
      <div>
        <button
          onClick={() => {
            setCount(initialState);
          }}
        >
          Reset
        </button>
        <button
          onClick={() => {
            setCount((prevState) => prevState + 1);
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            setCount((prevState) => prevState - 1);
          }}
        >
          Decrement
        </button>
        <button onClick={incrementFive}>Increment 5</button>
        <button onClick={decrementFive}>Decrement 5</button>
      </div>
    </div>
  );
}

export default HookMultipuleCount;
