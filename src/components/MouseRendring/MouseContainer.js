import React, { useState } from "react";
import MouseCodinateClass from "./MouseCodinateClass";
import MouseRendringHook from "./MouseRendringHook";

function MouseContainer() {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle Display</button>
      {display && <MouseRendringHook />}
    </div>
  );
}

export default MouseContainer;
