import React from "react";

const busContext = React.createContext({
  content: "Gets context directly from file without provider.",
});

export default busContext;
