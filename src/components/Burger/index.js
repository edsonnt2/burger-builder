import React from "react";
import "./style.css";
import BurgerIngredient from "./BurgerIngredient";

const Burger = ({ ingredients }) => {
  const transformIngredients = Object.keys(ingredients)
    .map(igKey =>
      [...Array(ingredients[igKey])].map((_, i) => (
        <BurgerIngredient key={igKey + i} type={igKey} />
      ))
    )
    .reduce((arr, el) => arr.concat(el), []);

  return (
    <div className="Burger">
      <BurgerIngredient type="bread-top" />
      {transformIngredients.length > 0 ? (
        transformIngredients
      ) : (
        <p>Please, start adding ingredients!</p>
      )}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
