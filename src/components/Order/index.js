import React from "react";
import "./style.css";

const Order = ({ ingredients, price }) => {
  const newIngredients = [];
  for (const igName in ingredients) {
    newIngredients.push({
      name: igName,
      amount: ingredients[igName]
    });
  }

  return (
    <div className="Order">
      <p>
        Ingredients:{" "}
        {newIngredients.map((ig, i) => (
          <span
            style={{
              textTransform: "capitalize",
              display: "inline-block",
              margin: "0 8px",
              border: "1px solid #ccc",
              padding: "5px"
            }}
            key={ig.name + i}
          >
            {ig.name}: ({ig.amount})
          </span>
        ))}
      </p>
      <p>
        Price:{" "}
        <strong>
          USD{" "}
          {Number.parseFloat(price)
            .toFixed(2)
            .replace(".", ",")}
        </strong>
      </p>
    </div>
  );
};

export default Order;
