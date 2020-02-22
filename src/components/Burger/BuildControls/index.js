import React from "react";
import "./style.css";
import BuildControl from "./BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];

const BuildControls = ({
  ingredientAddedRemoved,
  disabled,
  price,
  purchasable,
  ordered
}) => {
  return (
    <div className="BuildControls">
      <p>
        Current Price: <strong>R$ {price.toFixed(2).replace(".", ",")}</strong>
      </p>
      {controls.map(({ label, type }) => (
        <BuildControl
          key={label}
          label={label}
          addedRemoved={ingredientAddedRemoved}
          type={type}
          disabled={disabled}
        />
      ))}
      <button className="OrderButton" disabled={purchasable} onClick={ordered}>
        ORDER NOW
      </button>
    </div>
  );
};

export default BuildControls;
