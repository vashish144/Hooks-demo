import React, { useState } from "react";

function HookCounterWithObject() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  const lastNameHandler = (e) => {
    setName({
      [e.target.name]: e.target.value,
    });
  };
  return (
    <form>
      <input
        type="text"
        name="firstName"
        value={name.firstName}
        onChange={(e) => setName({ firstName: e.target.value })}
      />
      <br />
      <input type="text" name="lastName" onChange={lastNameHandler} />
      <h2>your First Name is: {name.firstName}</h2>
      <h2>your Second Name is: {name.lastName}</h2>
    </form>
  );
}

export default HookCounterWithObject;
