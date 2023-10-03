import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import Store from "./pages/Store";
import ContactUs from "./pages/ContactUs";

import CartProvider from "./store/CartProvider";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Store} />
          <Route path="/store" component={Store} />
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contactUs" component={ContactUs} />
        </Switch>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
