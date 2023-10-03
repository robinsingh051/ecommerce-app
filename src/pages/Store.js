import React from "react";

import Products from "../components/Products";

function Store(props) {
  return (
    <>
      <Products products={props.products} />
    </>
  );
}

export default Store;
