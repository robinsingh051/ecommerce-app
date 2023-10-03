import React, { useState } from "react";
import axios from "axios";
import { Card, Form, Button, Container } from "react-bootstrap";
import HeaderWithoutCart from "../components/HeaderWithoutCart";

const ContactUs = (props) => {
  const [dataSent, setDataSent] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios.post(
      "https://react-practice-9b982-default-rtdb.firebaseio.com/contactUs.json",
      formData
    );
    setFormData({ name: "", email: "", phoneNumber: "" });
    setDataSent(true);
  };

  return (
    <>
      <HeaderWithoutCart />
      {dataSent && <h1>Thank you For Contacting Us</h1>}
      {!dataSent && (
        <Container className="d-flex justify-content-center align-items-center mt-5">
          <Card
            style={{
              width: "20rem",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Card.Body>
              <h5>Contact Us</h5>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName" className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formEmail" className="mb-3">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formPhoneNumber" className="mb-3">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your phone number"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Container>
      )}
    </>
  );
};

export default ContactUs;
