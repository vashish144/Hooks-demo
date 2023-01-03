import React from "react";
import ContextTutorialConsume from "./ContextTutorial/ContextTutorialConsume";
import FrowardCounsume from "./forwardRef/FrowardCounsume";
import RefTutorial from "./RefTutorial";
import UseLayoutEffectTutorial from "./UseLayoutEffectTutorial";
import UseMemoHookTutorial from "./UseMemoHookTutorial";

const OtherTutorialConsume = () => {
  return (
    <>
      {/* <RefTutorial /> */}
      {/* <UseLayoutEffectTutorial/> */}
      {/* <FrowardCounsume/> */}
      {/* <ContextTutorialConsume/> */}
      <UseMemoHookTutorial/>
    </>
  );
};

export default OtherTutorialConsume;


// useForwardEffect  useImperativeHandle used with that