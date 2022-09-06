import React, { useReducer, useState } from "react";

const ACTIONS = {
  INCREMENTE: "incremente",
  DECREMENTE: "decremente",
};
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENTE:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENTE:
      return { count: state.count - 1 };
    default:
      return state;
  }
}
function UseReducer() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const [count, setCount] = useState(0);
  function incr() {
    return dispatch({ type: ACTIONS.INCREMENTE });
  }
  function decr() {
    return dispatch({ type: ACTIONS.DECREMENTE });
  }

  return (
    <>
      <h1>Usereducer</h1>
      <button onClick={decr}>-</button>
      <span>{state.count}</span>
      <button onClick={incr}>+</button>
    </>
  );
}

export default UseReducer;

// UseReducer permet de gerer une logique complexe 
// On peut voir qu'il repose sur le même principe que Redux 