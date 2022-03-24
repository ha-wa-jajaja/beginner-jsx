import React from "react";

const ItemRow = (props) => {
  return (
    <div>
      <li>{props.data.content}</li>
    </div>
  );
};

export default ItemRow;
