import React from "react";
import "./style.css";

const DrawerToggle = ({ clicked }) => (
  <div onClick={clicked} className="DrawerToggle">
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default DrawerToggle;
