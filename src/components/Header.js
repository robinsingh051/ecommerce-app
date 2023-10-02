import React, { useContext } from "react";
import { Nav, Navbar, Container, Button } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom"; // Import NavLink
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
          <NavLink to="/home" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/store" className="nav-link">
            Store
          </NavLink>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
        </Nav>
        <Button variant="outline-light" onClick={props.onShowCart}>
          <FaShoppingCart /> Cart {numberOfCartItems}
        </Button>
      </Container>
    </Navbar>
  );
};

export default Header;
