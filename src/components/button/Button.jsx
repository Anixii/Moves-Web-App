import React from "react";
import "./Button.css";
const Button = (props) => { 
  return (
    <button
      className={`btn ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
export const OutlinedButton = (props) => { 

  return (
    <button
      className={`btn-outline ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
export default Button;
