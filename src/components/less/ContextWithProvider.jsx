import React from "react";

import busContext from "../../context/busContext";

const ContextWithProvider = () => {
  // by adding consumer,
  // the component gets context from the provider value attr as function arg
  // the context is mutable by this way

  return (
    <div>
      <h3>Context With Provider</h3>
      <busContext.Consumer>
        {(context) => {
          return <p>{context.text}</p>;
        }}
      </busContext.Consumer>
    </div>
  );
};

export default ContextWithProvider;
