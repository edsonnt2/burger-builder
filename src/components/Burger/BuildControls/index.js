import React from "react";
import "./style.css";
import BuildControl from "./BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];

const BuildControls = ({ ingredientAdded, ingredientRemoved, disabled }) => {
  return (
    <div className="BuildControls">
      {controls.map(({ label, type }) => (
        <BuildControl
          key={label}
          label={label}
          added={() => ingredientAdded(type)}
          removed={() => ingredientRemoved(type)}
          disabled={disabled[type]}
        />
      ))}
    </div>
  );
};

export default BuildControls;
