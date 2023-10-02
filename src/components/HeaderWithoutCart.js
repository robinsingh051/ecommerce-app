import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom"; // Import NavLink

const HeaderWithoutCart = (props) => {
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
      </Container>
    </Navbar>
  );
};

export default HeaderWithoutCart;
