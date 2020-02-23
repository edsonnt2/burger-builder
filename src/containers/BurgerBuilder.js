import React, { Component } from "react";
import Aux from "../hoc/Aux";
import Burger from "../components/Burger";
import BuildControls from "../components/Burger/BuildControls";
import Modal from "../components/UI/Modal";
import OrderSummary from "../components/Burger/OrderSummary";
import api from "../service/api";
import Spinner from "../components/UI/Spinner";
import withErrorHandler from "../hoc/withErrorHandler";

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
    ingredients: null,
    totalPrice: 4,
    purchasable: true,
    purchasing: false,
    loading: false
  };

  componentDidMount = async () => {
    const resIg = await api.get("/ingredients.json");
    if (resIg) this.setState({ ingredients: resIg.data });
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

  purchaseContinueHendler = async () => {
    this.setState({ loading: true });
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: "Edson Rodrigo",
        address: {
          street: "Test Street",
          zipCode: "32424-332",
          country: "Campinas"
        },
        email: "test@test.com"
      },
      deliveryMethod: "iFood"
    };

    const res = await api.post("/orders.json", order);
    if (res) console.log(res);

    this.setState({ loading: false, purchasing: false });
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredients
    };

    for (const key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    return (
      <>
        {this.state.ingredients ? (
          <Aux>
            <Burger ingredients={this.state.ingredients} />
            <BuildControls
              ingredientAddedRemoved={this.addRemoveIngredientHandler}
              disabled={disabledInfo}
              price={this.state.totalPrice}
              purchasable={this.state.purchasable}
              ordered={this.purchaseHendler}
            />
            <Modal show={this.state.purchasing} clicked={this.purchaseHendler}>
              {this.state.loading ? (
                <Spinner />
              ) : (
                <OrderSummary
                  ingredients={this.state.ingredients}
                  purchaseCanceled={this.purchaseHendler}
                  purchaseContinued={this.purchaseContinueHendler}
                  price={this.state.totalPrice}
                />
              )}
            </Modal>
          </Aux>
        ) : (
          <Spinner />
        )}
      </>
    );
  }
}

export default withErrorHandler(BurgerBuilder, api);
