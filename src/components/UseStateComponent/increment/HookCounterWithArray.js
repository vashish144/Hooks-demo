import React, { useState } from "react";

function HookCounterWithArray() {
  const [item, setItem] = useState([]);
  const addItem = () => {
    setItem([
      ...item,
      {
        id: item.length,
        num: Math.floor(Math.random() * 10) + 1,
      },
    ]);
  };
  return (
    <div>
      <button onClick={addItem}>ClickMe</button>
      <ul>
        {item.map((obj) => (
          <li key={obj.id}>{obj.num}</li>
        ))}
      </ul>
    </div>
  );
}

export default HookCounterWithArray;
