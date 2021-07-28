import React, { useEffect, useState } from "react";

function CounterUsingUseEffect() {
  const initialState = 0;
  const [count, setcount] = useState(initialState);

  useEffect(() => {
    console.log("fired form useEffect");
    document.title = `you clicked ${count} time`;
  });
  return (
    <div>
      <button onClick={() => setcount((preState) => preState + 1)}>
        click {count} time
      </button>
    </div>
  );
}

export default CounterUsingUseEffect;
