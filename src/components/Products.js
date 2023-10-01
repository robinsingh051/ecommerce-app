import React from "react";
import Product from "./Product";

import { Row, Col } from "react-bootstrap";

const Products = (props) => {
  const products = props.products.map((product) => {
    return (
      <Col key={product.id} sm={6} md={6} lg={4} xl={3}>
        <Product product={product} />
      </Col>
    );
  });

  return <Row>{products}</Row>;
};

export default Products;
