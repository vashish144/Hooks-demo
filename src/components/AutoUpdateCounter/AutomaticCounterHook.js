import React, { useState, useEffect } from "react";

function AutomaticCounterHook() {
  const [count, setCount] = useState(0);
  const [display, setDisplay] = useState(true);

  useEffect(() => {
    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [count]);

  const tick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <button
        onClick={() => {
          setDisplay(!display);
        }}
      >
        toogelHookcounter
      </button>
      {display && <h1>CountHook: {count}</h1>}
    </div>
  );
}

export default AutomaticCounterHook;
