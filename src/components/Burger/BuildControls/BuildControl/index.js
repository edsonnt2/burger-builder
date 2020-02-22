import React from "react";
import "./style.css";

const BuildControl = ({ label, addedRemoved, type, disabled }) => {
  return (
    <div className="BuildControl">
      <div className="Label">{label}</div>
      <button
        className="Less"
        onClick={() => addedRemoved(type, "remove")}
        disabled={disabled[type]}
      >
        Less
      </button>
      <button className="More" onClick={() => addedRemoved(type, "add")}>
        More
      </button>
    </div>
  );
};

export default BuildControl;
