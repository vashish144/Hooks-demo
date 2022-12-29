import React, { forwardRef, useImperativeHandle, useState } from "react";

const ComponentB = forwardRef((props, ref) => {
  const [toggel, setToggel] = useState(true);
  console.log("props>>>", props, "ref>>>", ref);
  useImperativeHandle(ref, () => ({
    toggel() {
      setToggel(!toggel);
    },
  }));
  return (
    <div>
      <button>formChildBtn</button>
      <h1>{toggel ? "toggel" : null}</h1>
    </div>
  );
});

export default ComponentB;
