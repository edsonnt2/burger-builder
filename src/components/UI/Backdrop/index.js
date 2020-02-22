import React from "react";
import "./style.css";

const Backdrop = ({ show, clicked }) =>
  show && <div className="Backdrop" onClick={clicked}></div>;
export default Backdrop;
