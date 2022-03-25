import React, { useState } from "react";

import ItemRow from "../components/basics/ItemRow";
import InputForm from "../components/basics/InputForm";

const Basics = () => {
  // create mutable variables by using useState()
  const [demoData, updateDemo] = useState([{ content: "demo data" }]);

  const onEmit = (arg) => {
    // when updating state that depends on prev values,
    // the function passes in prev automatically
    updateDemo((prev) => {
      return [arg, ...prev];
    });
  };

  return (
    <div className="page">
      <h2>Basics</h2>
      <InputForm onEmit={onEmit}></InputForm>
      <div>
        <ul>
          {demoData.map((ele, index) => (
            <ItemRow data={ele} key={index}></ItemRow>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Basics;
