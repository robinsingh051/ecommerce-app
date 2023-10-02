import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";

import About from "./pages/About";
import Home from "./pages/Home";
import Store from "./pages/Store";

import CartProvider from "./store/CartProvider";

const router = createBrowserRouter([
  { path: "/", element: <Store /> },
  { path: "/store", element: <Store /> },
  { path: "/home", element: <Home /> },
  { path: "/about", element: <About /> },
]);

function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;
