import React, { useContext } from "react";

import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";

import CartContext from "../store/cart-context";

const Header = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((startValue, item) => {
    return startValue + item.amount;
  }, 0);

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#store">Store</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
        </Nav>
        <Button variant="outline-light" onClick={props.onShowCart}>
          <FaShoppingCart /> Cart {numberOfCartItems}
        </Button>
      </Container>
    </Navbar>
  );
};

export default Header;
