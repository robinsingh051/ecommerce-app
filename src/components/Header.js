import React, { useContext } from "react";
import { Nav, Navbar, Container, Button } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink, useHistory } from "react-router-dom"; // Import NavLink
import CartContext from "../store/cart-context";
import AuthContext from "../store/auth-context";

const Header = (props) => {
  const history = useHistory();

  const cartCtx = useContext(CartContext);
  const authCtx = useContext(AuthContext);

  const numberOfCartItems = cartCtx.items.reduce((startValue, item) => {
    return startValue + item.amount;
  }, 0);

  const loginHandler = () => {
    history.push("/login");
  };

  const registerHandler = () => {
    history.push("/register");
  };

  const logoutHandler = () => {
    authCtx.logout();
    history.replace("/");
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Nav className="me-auto">
          <NavLink to="/home" className="nav-link">
            Home
          </NavLink>
          {authCtx.isLoggedIn && (
            <NavLink to="/store" className="nav-link">
              Store
            </NavLink>
          )}
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
          <NavLink to="/contactUs" className="nav-link">
            Contact Us
          </NavLink>
        </Nav>
        {authCtx.isLoggedIn && (
          <Button
            variant="outline-light"
            onClick={props.onShowCart}
            style={{ marginRight: 6 }}
          >
            <FaShoppingCart /> Cart {numberOfCartItems}
          </Button>
        )}
        {authCtx.isLoggedIn && (
          <Button variant="outline-light" onClick={logoutHandler}>
            Log Out
          </Button>
        )}
        {!authCtx.isLoggedIn && (
          <Button
            variant="outline-light"
            onClick={registerHandler}
            style={{ marginRight: 6 }}
          >
            Register
          </Button>
        )}
        {!authCtx.isLoggedIn && (
          <Button variant="outline-light" onClick={loginHandler}>
            Log In
          </Button>
        )}
      </Container>
    </Navbar>
  );
};

export default Header;
