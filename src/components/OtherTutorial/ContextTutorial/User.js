import React, { useContext } from "react";
import { userContext } from "./ContextTutorialConsume";

const User = () => {
  const _userName = useContext(userContext);
  return (
    <div>
      firstName&&lastName:
      {_userName.userName.firstName + " " + _userName.userName.lastName}
    </div>
  );
};

export default User;
