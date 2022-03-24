import React, { useState } from "react";

const InputForm = (props) => {
  const [item, newItem] = useState("");

  const typed = (e) => {
    newItem(e.target.value);
  };

  const emittion = (e) => {
    e.preventDefault();
    props.onEmit({ content: item });
    newItem("");
  };

  return (
    <form onSubmit={emittion}>
      <input type="text" onChange={typed} value={item} />
      <button type="submit">add!</button>
    </form>
  );
};

export default InputForm;
