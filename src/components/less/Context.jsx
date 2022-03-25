import React, { useContext } from "react";

import busContext from "../../context/busContext";

const Context = () => {
  // by using useContext(), gets data directly from context file
  // * THE CONTEXT IS IMMUTABLE
  const ctx = useContext(busContext);

  return (
    <div>
      <h3>Context without provider, using useContext()</h3>
      {ctx.content}
    </div>
  );
};

export default Context;
