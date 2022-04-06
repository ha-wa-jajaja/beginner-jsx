import React, { useState, useRef } from "react";
import useCustomHook from "../../hooks/useCustomHook";

const InputForm = (props) => {
  const [item, newItem] = useState("");

  // important: every time any value changes, the page reevaluates.
  // so is able to get real-time status
  const isValid = item.length > 0 ? true : false;

  // activate useRef dom
  const inputRef = useRef();

  // only use custom hooks inside of functional components, can't use inside of functions
  useCustomHook(item);

  const typed = (e) => {
    newItem(e.target.value);
  };

  const emittion = (e) => {
    e.preventDefault();

    if (isValid) {
      // if only need to validate input once, use the ref method would be better
      console.log(inputRef.current.value);

      props.onEmit({ content: item });
      newItem("");
    }
  };

  return (
    <form onSubmit={emittion}>
      <input type="text" onChange={typed} value={item} ref={inputRef} />
      {!isValid && <p>Enter more than one character</p>}
      <button type="submit" disabled={!isValid}>
        add!
      </button>
    </form>
  );
};

export default InputForm;
