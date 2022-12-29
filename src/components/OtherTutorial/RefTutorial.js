import React, { useRef } from "react";

const RefTutorial = () => {
  const inputRef = useRef(null);
  const focusInputBox = () => {
    console.log("focusInputBox");
    inputRef.current.focus();
    inputRef.current.value="vikram";
  };
  return (
    <div>
      <h1>RefTutorial</h1>
      <input type="text" placholder="type something... " ref={inputRef} />
      <button onClick={focusInputBox}>focusOnInputBox</button>
    </div>
  );
};

export default RefTutorial;
