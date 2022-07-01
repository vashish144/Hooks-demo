import React, { useMemo, useState } from "react";

const UseMemoParentComponent = () => {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);
  const incrementCountOne = () => {
    setCountOne(countOne + 1);
  };
  const incrementCountTwo = () => {
    setCountTwo(countTwo + 1);
  };
  // const isEven = () => {
  //   let i=0;
  //   while(i<2000000000)
  //   i++
  //   return countOne % 2 === 0;
  // };
  // useMemo return a value
  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    return countOne % 2 === 0;
  }, [countOne]);
  console.log("useMemo",isEven);
  return (
    <div>
      <button onClick={incrementCountOne}>CounterOne- {countOne}</button>
      <span>{isEven ? "even" : "odd"}</span>
      <button onClick={incrementCountTwo}>CounterTwo- {countTwo}</button>
    </div>
  );
};

export default UseMemoParentComponent;
// use Callback cased the provided function instance itself
// where as useMemo invoke the provided function and cased its result