import React, { useEffect, useState } from "react";

function CounterUsingUseEffect() {
  const initialState = 0;
  const [count, setcount] = useState(initialState);
  const [name, setName] = useState("");
  useEffect(() => {
    console.log("fired form useEffect");
    document.title = `you clicked ${count} time`;
  }, [count]);
  return (
    <div>
      <input
        type="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setcount((preState) => preState + 1)}>
        click {count} time
      </button>
    </div>
  );
}

export default CounterUsingUseEffect;
