import React, { Component } from "react";
import Aux from "../hoc/Aux";
import Burger from "../components/Burger";
import BuildControls from "../components/Burger/BuildControls";
import Modal from "../components/UI/Modal";
import OrderSummary from "../components/Burger/OrderSummary";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

class BurgerBuilder extends Component {
  // constructor(){
  //   super();
  //   this.state = {...}
  // }

  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    purchasable: true,
    purchasing: false
  };

  updatePurchaseState = ingredients => {
    const sum = Object.keys(ingredients)
      .map(igKey => ingredients[igKey])
      .reduce((su, el) => su + el, 0);
    this.setState({ purchasable: sum === 0 });
  };

  addRemoveIngredientHandler = (type, addRemove) => {
    const { ingredients, totalPrice } = this.state;
    const updatedCount =
      addRemove === "add" ? ingredients[type] + 1 : ingredients[type] - 1;
    if (updatedCount < 0) return;
    const updatedIngredients = { ...ingredients };
    updatedIngredients[type] = updatedCount;
    const newPrice =
      addRemove === "add"
        ? totalPrice + INGREDIENT_PRICES[type]
        : totalPrice - INGREDIENT_PRICES[type];
    this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
    this.updatePurchaseState(updatedIngredients);
  };

  purchaseHendler = () => {
    this.setState({ purchasing: !this.state.purchasing });
  };

  purchaseContinueHendler = () => {
    alert("You continue !");
    // this.setState({ purchasing: !this.state.purchasing });
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredients
    };

    for (const key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    return (
      <Aux>
        <Modal show={this.state.purchasing} clicked={this.purchaseHendler}>
          <OrderSummary
            ingredients={this.state.ingredients}
            purchaseCanceled={this.purchaseHendler}
            purchaseContinued={this.purchaseContinueHendler}
            price={this.state.totalPrice}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAddedRemoved={this.addRemoveIngredientHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}
          ordered={this.purchaseHendler}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
