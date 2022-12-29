import React, { useContext } from "react";
import { CountContext } from "./UseReducerWithContextHook";
const ComponentA = () => {
  const countContext = useContext(CountContext);
  console.log("countContext",countContext);
  return (
    <div>
      ComponentA-{countContext.countState}
      <button onClick={() => countContext.countDispatch("increment")}>Increment</button>
      <button onClick={() => countContext.countDispatch("decrement")}>Decrement</button>
      <button onClick={() => countContext.countDispatch("reset")}>Reset</button>
    </div>
  );
};

export default ComponentA;
