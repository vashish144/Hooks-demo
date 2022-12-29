import React, { useRef } from "react";
import ComponentB from "./ComponentB";

const ComponentA = () => {
  const btnRef = useRef(null);
  console.log("btnRef>>>",btnRef);
  const toggel=()=>{

  }
  return (
    <div>
      {" "}
      <button
        onClick={() => {
          btnRef.current.toggel();
        }}
      >
        FromParentBtn
      </button>
      <ComponentB ref={btnRef} />
    </div>
  );
};

export default ComponentA;
