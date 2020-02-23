import React, { Component } from "react";
import "./style.css";
import Backdrop from "../Backdrop";

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.show === this.props.show) return false;
    else if (nextProps.children === this.props.children) return false;
    else return true;
  }

  render() {
    const { show, clicked, children } = this.props;
    return (
      <>
        <Backdrop show={show} clicked={clicked} />
        <div
          className="Modal"
          style={{
            transform: show ? "translateY(0)" : "translatey(-100vh)",
            opacity: show ? "1" : "0"
          }}
        >
          {children}
        </div>
      </>
    );
  }
}

export default Modal;
