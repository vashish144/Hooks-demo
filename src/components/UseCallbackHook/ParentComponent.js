import React, { useCallback, useState } from "react";
import ButtonComponent from "./ButtonComponent";
import CountComponent from "./CountComponent";
import TitleComponent from "./TitleComponent";

const ParentComponent = () => {
  const [age, setAge] = useState(15);
  const [salary, setSalary] = useState(15000);
  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);
  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);
  return (
    <div>
      <TitleComponent />
      <CountComponent count={age} />
      <ButtonComponent increaseData={incrementAge}>
        Increase Age
      </ButtonComponent>
      <CountComponent count={salary} />
      <ButtonComponent increaseData={incrementSalary}>
        Increase salary
      </ButtonComponent>
    </div>
  );
};

export default ParentComponent;
// use Callback cased the provided function instance itself
// where as useMemo invoke the provided function and cased its result