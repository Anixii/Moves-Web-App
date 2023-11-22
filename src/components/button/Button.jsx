import React from "react";
import "./Button.css";
const Button = (props) => {
  return (
    <button
      className={`btn ${props.class}`}
      onClick={props.onClick ? () => props.onClick : null}
    >
      {props.children}
    </button>
  );
};
export const OutlinedButton = (props) => {
  return (
    <Button
      className={`btn-outline ${props.class}`}
      onClick={props.onClick ? () => props.onClick : null}
    >
      {props.children}
    </Button>
  );
};
export default Button;
