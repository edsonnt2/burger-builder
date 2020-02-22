import React from "react";
import Logo from "../../Logo";
import NavigationItems from "../NavigationItems";
import "./style.css";
import Backdrop from "../../UI/Backdrop";

const SideDrawer = ({ closed, open }) => {
  return (
    <>
      <Backdrop show={open} clicked={closed} />
      <div className={open ? "SideDrawer Open" : "SideDrawer Close"}>
        <Logo style={{ height: "10%", marginBottom: "32px" }} />
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </>
  );
};

export default SideDrawer;
