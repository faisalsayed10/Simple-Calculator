import React, { useReducer } from "react";

import App from "./App";
import reducer from "./Operations";

function Parent() {
  const [state, dispatch] = useReducer(reducer, "");

  return (
    <>
      <App state={state} dispatch={dispatch} />
    </>
  );
}
export default Parent;
