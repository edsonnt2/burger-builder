import React from "react";
import "./style.css";

const NavigationItem = ({ link, active, children }) => (
  <li className="NavigationItem">
    <a href={link} className={active ? "active" : null}>
      {children}
    </a>
  </li>
);

export default NavigationItem;
