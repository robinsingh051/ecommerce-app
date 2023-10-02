import React, { useContext } from "react";
import { Button, Modal } from "react-bootstrap";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import CartContext from "../store/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `\u20B9 ${cartCtx.totalAmount.toFixed(2)}`;

  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandle = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const cartItems = cartCtx.items.map((item, index) => (
    <CartItem
      key={index}
      item={item}
      onRemove={cartItemRemoveHandle.bind(null, item.id)}
      onAdd={cartItemAddHandler.bind(null, item)}
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
        <section>{`Total Amount: ${totalAmount}`}</section>
        {hasItems && <Button>Purchase</Button>}
      </Modal.Footer>
    </Modal>
  );
};

export default Cart;
