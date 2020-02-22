import React from "react";
import Button from "../../UI/Button";

const OrderSummary = ({
  ingredients,
  purchaseContinued,
  purchaseCanceled,
  price
}) => {
  const ingredientsSummary = Object.keys(ingredients).map((igKey, i) => (
    <li key={i + igKey}>
      <span
        style={{
          textTransform: "capitalize"
        }}
      >
        {igKey}
      </span>
      : {ingredients[igKey]}
    </li>
  ));
  return (
    <>
      <h3>Your Order</h3>
      <p>A delicious burger with the follwing ingredients:</p>
      <ul>{ingredientsSummary}</ul>
      <p>
        <strong>Total Price: {price.toFixed(2).replace(".", ",")}</strong>
      </p>
      <p>Continue to Checkout ?</p>
      <Button btnType="Danger" clicked={purchaseCanceled}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={purchaseContinued}>
        CONTINUE
      </Button>
    </>
  );
};

export default OrderSummary;
