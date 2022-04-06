import React from "react";

// import useParams to get router link param
import { useParams } from "react-router-dom";

const RouterTemp = () => {
  // activate useParams() to get paramater
  const params = useParams();

  return (
    <div>
      <h2>Router Template</h2>
      <p>the param is {params.name}</p>
    </div>
  );
};

export default RouterTemp;
