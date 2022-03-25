import React from "react";
import ContextWithProvider from "../components/less/ContextWithProvider";
import Context from "../components/less/Context";
import ReducerFn from "../components/less/Reducer";

import busContext from "../context/busContext";

const LessUsed = () => {
  const ProviderDescription = "Gets context by arg passed into provider";

  return (
    <div className="page">
      <h2>Less Used</h2>

      {/* by adding provider, the consumers gets context by the value attr */}
      {/* only possible to use mutable context by using provider */}
      <busContext.Provider value={{ text: ProviderDescription }}>
        <ContextWithProvider></ContextWithProvider>
      </busContext.Provider>

      <Context></Context>
      <ReducerFn></ReducerFn>
    </div>
  );
};

export default LessUsed;
