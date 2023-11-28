import React from "react";
import "./Input.css";
const Input = ({ type, placeholder, value, onChange, ...props }) => {
  return (
    <input
      type={type}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
    >
      {props.children}
    </input>
  );
};

export default Input;
