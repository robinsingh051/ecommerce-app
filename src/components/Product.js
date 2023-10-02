import React, { useContext } from "react";

import { Card, Button } from "react-bootstrap";
import CartContext from "../store/cart-context";

const Product = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `\u20B9 ${props.product.price.toFixed(2)}`;

  const addToCartHandler = () => {
    cartCtx.addItem({
      id: props.product.id,
      name: props.product.name,
      imageUrl: props.product.imageUrl,
      amount: 1,
      price: props.product.price,
    });
  };

  return (
    <Card className="m-3 shadow" style={{ width: "20rem" }}>
      <Card.Header>{props.product.name}</Card.Header>
      <Card.Img variant="top" src={props.product.imageUrl} />
      <Card.Body>
        <Card.Title>{props.product.name}</Card.Title>
        <div className="d-flex justify-content-between align-items-center">
          <Card.Text>Price: {price}</Card.Text>
          <Button variant="primary" onClick={addToCartHandler}>
            Add to Cart
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Product;
