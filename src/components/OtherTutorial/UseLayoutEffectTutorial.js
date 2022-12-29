import React, { useEffect, useLayoutEffect, useState } from "react";

const UseLayoutEffectTutorial = () => {
  const [toggelbtn, setToggelBtn] = useState(true);
  useEffect(() => {
    console.log("i get called from useEffect");
    return () => {
      console.log("unmount form useEffect");
    };
  }, [toggelbtn]);
  useLayoutEffect(() => {
    console.log("i get called from useLayoutEffect");
    return () => {
      console.log("unmount form LayoutuseEffect");
    };
  }, []);
  return (
    <div>
      <button onClick={() => setToggelBtn(!toggelbtn)}>toggelbtn</button>
      <h1> {toggelbtn ? "toggel" : null}</h1>
    </div>
  );
};

export default UseLayoutEffectTutorial;
