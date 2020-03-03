import React from "react";
import "./style.css";
import Burger from "../../Burger";
import Button from "../../UI/Button";

const CheckoutSummary = ({
  ingredients,
  checkoutCancelled,
  checkoutContinued
}) => {
  return (
    <>
      <div className="CheckoutSummary">
        <h1>We hope it tastes well!</h1>
      </div>
      <Burger ingredients={ingredients} />
      <div className="CheckoutSummary">
        <Button btnType="Danger" clicked={checkoutCancelled}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={checkoutContinued}>
          CONTINUE
        </Button>
      </div>
    </>
  );
};

export default CheckoutSummary;
