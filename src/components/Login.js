import { useState, useRef, useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import AuthContext from "../store/auth-context";

import { Card, Form, Button, Container } from "react-bootstrap";

const Login = () => {
  const history = useHistory();

  const authCtx = useContext(AuthContext);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const submitHandler = async (event) => {
    setIsLoading(true);
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    try {
      const response = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_API_KEY}`,
        {
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }
      );
      console.log(response.data.idToken);
      authCtx.login(response.data.idToken);
      history.replace("/");
    } catch (err) {
      let errorMessage = "Authentication failed";
      if (err.response.data.error && err.response.data.error.message)
        errorMessage = err.response.data.error.message;
      alert(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center mt-5">
      <Card
        style={{
          width: "20rem",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Card.Body>
          <h5>Log In</h5>
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                ref={emailInputRef}
                required
              />
            </Form.Group>

            <Form.Group controlId="formPhoneNumber" className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                name="password"
                ref={passwordInputRef}
                required
              />
            </Form.Group>
            {!isLoading && (
              <Button variant="primary" type="submit">
                Submit
              </Button>
            )}
            {isLoading && <p>Sending Request</p>}
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;
