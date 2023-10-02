import React from "react";
import { Button, Col, Image, Row } from "react-bootstrap";

const CartItem = (props) => {
  const price = `\u20B9 ${props.item.price.toFixed(2)}`;
  return (
    <Row className="cart-item mt-2">
      <Col>
        <Row>
          <Col>
            <Image src={props.item.imageUrl} alt={props.item.name} thumbnail />
          </Col>
          <Col>
            <div className="item-details">
              <h6>{props.item.name}</h6>
            </div>
          </Col>
        </Row>
      </Col>
      <Col>
        <Row>
          <Col>
            <p>Price: {price}</p>
          </Col>
          <Col>
            <p>Quantity: {props.item.amount}</p>
          </Col>
          <Col>
            <div className="item-actions">
              <Button
                className="m-2"
                variant="outline-danger"
                onClick={props.onRemove}
              >
                -
              </Button>
              <Button variant="outline-success" onClick={props.onAdd}>
                +
              </Button>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default CartItem;
