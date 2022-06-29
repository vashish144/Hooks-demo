import React, { useEffect, useReducer } from "react";
import axios from "axios";
const initialState = {
  post: {},
  loading: true,
  error: "",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        post: action.payload,
        error: " ",
      };
    case "FETCH_ERROR":
      return {
        loading: false,
        post: {},
        error: "SomeThing Went Wrong",
      };
  }
};
const DataFetchingUsingReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        dispatch({ type: "FETCH_SUCCESS", payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_ERROR" });
      });
  }, []);
  return (
    <div>
      {state.loading ? "loading..." : state.post.title}
      {state.error ? state.error : null}
    </div>
  );
};

export default DataFetchingUsingReducer;
