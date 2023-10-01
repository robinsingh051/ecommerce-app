import React from "react";

import { Card, Button } from "react-bootstrap";

const Product = (props) => {
  return (
    <Card className="m-3" style={{ width: "20rem" }}>
      <Card.Header>{props.product.title}</Card.Header>
      <Card.Img variant="top" src={props.product.imageUrl} />
      <Card.Body>
        <Card.Title>{props.product.name}</Card.Title>
        <div className="d-flex justify-content-between align-items-center">
          <Card.Text>Price: ${props.product.price}</Card.Text>
          <Button variant="primary">Add to Cart</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Product;
