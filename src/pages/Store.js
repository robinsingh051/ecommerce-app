import React, { useState } from "react";

import Products from "../components/Products";
import Header from "../components/Header";
import Cart from "../components/Cart";

const productsArr = [
  {
    id: 1,
    name: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    id: 2,
    name: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    id: 3,
    name: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    id: 4,
    name: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

function Store() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const showCartHandle = () => {
    console.log("button pressed");
    setCartIsVisible(true);
  };

  const hideCartHandler = () => {
    setCartIsVisible(false);
  };
  return (
    <>
      {cartIsVisible && (
        <Cart show={cartIsVisible} onHideCart={hideCartHandler} />
      )}
      <Header onShowCart={showCartHandle} />
      <Products products={productsArr} />
    </>
  );
}

export default Store;
