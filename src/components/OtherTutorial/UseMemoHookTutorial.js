import React, { useEffect, useMemo, useState } from "react";

const UseMemoHookTutorial = () => {
  const [data, setData] = useState(null);
  const [toggel, setToggel] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        console.log(response.ok);
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        setData(data);
      });
  }, []);
  const displayItem = (data) => {
    let fullTitle = "";
    Array.isArray(data) &&
      data.forEach((item) => {
        fullTitle += item.title;
      });
    console.log("i get called");
    return fullTitle;
  };
//*****************   useMemo called here *************************
  const displayItemUsingMemo = useMemo(() => {
    return displayItem(data);
  }, [data]);
  
  const displaydata = (data) => {
    if (!data) {
      return (
        <div>
          <h1>Lodading....</h1>
          <img
            src={require("../../images/Spinner-1s-276px.gif").default}
            alt="sping image"
          />
        </div>
      );
    } else {
      return (
        <div>
          {/* {Array.isArray(data) &&
            data.map((item, index) => {
              return <p key={index}>{item.title}</p>;
            })} */}
          {displayItemUsingMemo}
        </div>
      );
    }
  };
  return (
    <div>
      <button onClick={() => setToggel(!toggel)}>toggel</button>
      {toggel ? <h1>toggel</h1> : null}
      {displaydata(data)}
    </div>
  );
};

export default UseMemoHookTutorial;
