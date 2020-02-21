import React from "react";
import "./style.css";

const BuildControl = ({ label, added, removed, disabled }) => {
  return (
    <div className="BuildControl">
      <div className="Label">{label}</div>
      <button className="Less" onClick={removed} disabled={disabled}>
        Less
      </button>
      <button className="More" onClick={added}>
        More
      </button>
    </div>
  );
};

export default BuildControl;
