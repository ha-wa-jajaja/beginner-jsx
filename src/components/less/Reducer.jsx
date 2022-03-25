import React, { useReducer } from "react";

const initialVal = 0;

const ReducerFn = () => {
  // the dispatch funciton takes the state arg as the first one as default
  const numChange = (state, act) => {
    if (act === "plus") {
      return state + 1;
    } else {
      return state - 1;
    }
  };

  // reducer works kina like useState(),
  // but the first arg is the mutating function, and the second is the default value
  const [val, dispatchFn] = useReducer(numChange, initialVal);

  return (
    <div>
      <h3>UseReducer</h3>
      <p>{val}</p>
      <button
        onClick={() => {
          dispatchFn("plus");
        }}
      >
        plus
      </button>
      <button
        onClick={() => {
          dispatchFn("minus");
        }}
      >
        minus
      </button>
    </div>
  );
};

export default ReducerFn;
