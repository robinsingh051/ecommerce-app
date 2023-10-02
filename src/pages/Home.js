import React from "react";
import HeaderWithoutCart from "../components/HeaderWithoutCart";

const Home = (props) => {
  return (
    <>
      <HeaderWithoutCart />
      <div className="container mt-4">
        <h1>Welcome to Our Online Store</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          fringilla nibh id est vulputate, at tincidunt orci scelerisque.
          Vestibulum tempor pharetra tellus, ac pellentesque ipsum interdum sit
          amet. Fusce bibendum augue quis metus condimentum, eget vehicula odio
          scelerisque. In id ex at elit fermentum condimentum. Nulla euismod
          libero eget risus auctor, id varius justo bibendum. Sed ullamcorper
          facilisis turpis, nec posuere erat dignissim nec.
        </p>
        <p>
          Our store offers a wide range of products, including clothing,
          electronics, accessories, and more. Explore our selection and start
          shopping today!
        </p>
      </div>
    </>
  );
};

export default Home;
