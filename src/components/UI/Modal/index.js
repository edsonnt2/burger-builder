import React, { Component } from "react";
import "./style.css";
import Backdrop from "../Backdrop";

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show;
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
