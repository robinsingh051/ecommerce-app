import React from "react";

import Products from "../components/Products";

function Store(props) {
  console.log(props.products);
  return (
    <>
      <Products products={props.products} />
    </>
  );
}

export default Store;
