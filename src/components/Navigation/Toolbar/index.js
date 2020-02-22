import React from "react";
import "./style.css";
import Logo from "../../Logo";
import NavigationItems from "../NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle";

const Toolbar = ({ drawerToggleCliked }) => (
  <header className="Toolbar">
    <DrawerToggle clicked={drawerToggleCliked} />
    <Logo style={{ height: "80%" }} />
    <nav className="DesktopOnly">
      <NavigationItems />
    </nav>
  </header>
);

export default Toolbar;
