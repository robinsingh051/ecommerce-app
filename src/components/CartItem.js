import React from "react";
import { Button, Col, Image, Row } from "react-bootstrap";

const CartItem = ({ item, onRemove, onAdd }) => {
  return (
    <Row className="cart-item mt-2">
      <Col>
        <Row>
          <Col>
            <Image src={item.imageUrl} alt={item.title} thumbnail />
          </Col>
          <Col>
            <div className="item-details">
              <h6>{item.title}</h6>
            </div>
          </Col>
        </Row>
      </Col>
      <Col>
        <Row>
          <Col>
            <p>Price: ${item.price}</p>
          </Col>
          <Col>
            <p>Quantity: {item.quantity}</p>
          </Col>
          <Col>
            <div className="item-actions">
              <Button
                className="m-2"
                variant="outline-danger"
                onClick={onRemove}
              >
                -
              </Button>
              <Button variant="outline-success" onClick={onAdd}>
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
