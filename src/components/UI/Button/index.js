import React from "react";
import "./style.css";

const Button = ({ btnType, clicked, children, disabled }) => (
  <button disabled={disabled} className={`Button ${btnType}`} onClick={clicked}>
    {children}
  </button>
);

export default Button;
