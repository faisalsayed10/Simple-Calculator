import React from "react";
import "./EqualButton.css";

const EqualButton = (props) => {
  return (
    <div
      className="equal-btn"
      onClick={() => props.handleClick(props.children)}
    >
      {props.children}
    </div>
  );
};
export default EqualButton;
