import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const About = (props) => {
  const containerStyle = {
    paddingTop: "20px",
    paddingBottom: "20px",
    textAlign: "center",
  };

  const headingStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
  };

  const textStyle = {
    fontSize: "16px",
    lineHeight: "1.5",
  };

  return (
    <>
      <Container style={containerStyle}>
        <Row>
          <Col>
            <h1 style={headingStyle}>About Us</h1>
            <p style={textStyle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              sagittis, dolor eget bibendum vehicula, est libero porta velit, eu
              ullamcorper nunc dui id lorem.
            </p>
            <p style={textStyle}>
              Aliquam cursus quis nunc non cursus. Cras vestibulum posuere quam,
              eu varius dolor dapibus non. Integer consequat massa eget urna
              pharetra viverra.
            </p>
            <p style={textStyle}>
              Fusce rhoncus mauris a aliquam. Phasellus eget metus et odio
              fermentum sollicitudin. Sed eu purus ac lorem varius vehicula.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default React.memo(About);
