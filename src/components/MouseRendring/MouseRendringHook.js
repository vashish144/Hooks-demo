import React, { useEffect, useState } from "react";

function MouseRendringHook() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (e) => {
    console.log("mouse Event");
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log("inside useEffect");
    window.addEventListener("mousemove", logMousePosition);
    return () => {
      console.log("unmount windows listener");
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);
  return (
    <div>
      Hook: x-{x} y-{y}
    </div>
  );
}

export default MouseRendringHook;
