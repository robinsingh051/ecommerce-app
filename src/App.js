import React, { useContext, useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Header from "./components/Header";
import Cart from "./components/Cart";
import About from "./pages/About";
import Home from "./pages/Home";
import Store from "./pages/Store";
import ContactUs from "./pages/ContactUs";
import ProductDetails from "./pages/ProductDetails";

import CartProvider from "./store/CartProvider";
import AuthContext from "./store/auth-context";
import Login from "./components/Login";
import Register from "./components/Register";

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

function App() {
  const authCtx = useContext(AuthContext);

  const [cartIsVisible, setCartIsVisible] = useState(false);

  const showCartHandler = () => {
    console.log("button pressed");
    setCartIsVisible(true);
  };

  const hideCartHandler = () => {
    setCartIsVisible(false);
  };

  return (
    <CartProvider>
      {cartIsVisible && (
        <Cart show={cartIsVisible} onHideCart={hideCartHandler} />
      )}
      <Header onShowCart={showCartHandler} />
      <Switch>
        <Route path="/" exact>
          {authCtx.isLoggedIn && <Redirect to="/store" />}
          {!authCtx.isLoggedIn && <Redirect to="/login" />}
        </Route>
        <Route path="/store" exact>
          {authCtx.isLoggedIn && <Store products={productsArr} />}
          {!authCtx.isLoggedIn && <Redirect to="/" />}
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/contactUs">
          <ContactUs />
        </Route>
        <Route path="/store/:productId">
          <ProductDetails products={productsArr} />
        </Route>
      </Switch>
    </CartProvider>
  );
}

export default App;
