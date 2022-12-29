import React, { createContext, useState } from "react";
import { Login } from "./Login";
import User from "./User";
export const userContext = createContext();
const ContextTutorialConsume = () => {
  const [userName, setUserName] = useState({
    firstName: "vikram",
    lastName: "vishal",
  });
  console.log(userName);
  return (
    <userContext.Provider value={{ userName, setUserName }}>
      <Login />
      <User />
      {/* <input
        placeholder=" firstName"
        onChange={(event) =>
          setUserName({ ...userName, firstName: event.target.value })
        }
      />
      <input
        placeholder=" lastname"
        onChange={(event) =>
          setUserName({ ...userName, lastName: event.target.value })
        }
      /> */}
    </userContext.Provider>
  );
};

export default ContextTutorialConsume;
