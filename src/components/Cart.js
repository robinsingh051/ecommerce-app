import React from "react";
import { Button, Modal } from "react-bootstrap";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";

const cartElements = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity: 2,
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity: 3,
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity: 1,
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity: 3,
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity: 1,
  },
];

const Cart = (props) => {
  const cartItems = cartElements.map((item, index) => (
    <CartItem
      key={index}
      item={item}
      onRemove={() => props.onRemove(index)}
      onAdd={() => props.onAdd(index)}
    />
  ));

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onHide={props.onHideCart}
      dialogClassName={classes.xlModal}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ maxHeight: "60vh", overflowY: "auto" }}>
        {cartItems}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHideCart}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Cart;
