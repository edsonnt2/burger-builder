import React from "react";
import { NavLink } from "react-router-dom";

import "./style.css";

const NavigationItem = ({ link, active, exact, children }) => (
  <li className="NavigationItem">
    <NavLink to={link} exact={exact}>
      {children}
    </NavLink>
  </li>
);

export default NavigationItem;
