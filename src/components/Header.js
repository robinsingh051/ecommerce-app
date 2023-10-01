import React from "react";

import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";

const Header = (props) => {
  const numberOfProducts = 0;
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#store">Store</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
        </Nav>
        <Button variant="outline-light" onClick={props.onShowCart}>
          <FaShoppingCart /> Cart {numberOfProducts}
        </Button>
      </Container>
    </Navbar>
  );
};

export default Header;
