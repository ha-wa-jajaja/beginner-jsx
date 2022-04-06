// a custom hook must start with "use" so react is able to identify.
// custom hooks are useful for reducing function duplication
// explainations: https://medium.com/hannah-lin/react-hook-%E7%AD%86%E8%A8%98-custom-hooks-%E4%B9%8B%E6%89%93%E9%80%A0%E8%87%AA%E5%B7%B1%E7%9A%84-hook-b046f6778f33

// used in inputform.jsx

import { useEffect } from "react";

// this example is just console logging something
const useCustomHook = (text) => {
  // in this case, the listener reacts everytime the text arg changes.
  useEffect(() => {
    console.log(text);
  }, [text]);
};

export default useCustomHook;
