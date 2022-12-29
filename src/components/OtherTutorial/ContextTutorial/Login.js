import React, { useContext } from "react";
import { userContext } from "./ContextTutorialConsume";

export const Login = () => {
  const _userName = useContext(userContext);
  const inputHandle1 = (event) => {
    _userName.setUserName({
      ..._userName.userName,
      firstName: event.target.value,
    });
  };
  const inputHandle2 = (event) => {
    _userName.setUserName({
      ..._userName.userName,
      lastName: event.target.value,
    });
  };
  return (
    <div>
      <input placeholder="Enter your user id" onChange={inputHandle1} />
      <input placeholder="Enter your user id" onChange={inputHandle2} />
    </div>
  );
};
