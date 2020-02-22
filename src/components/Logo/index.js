import React from "react";
import burgerLogo from "../../assets/images/burger-logo.png";
import "./style.css";

const Logo = ({ style }) => (
  <div className="Logo" style={style}>
    <img src={burgerLogo} alt="MyBurger" />
  </div>
);

export default Logo;
