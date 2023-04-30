import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [accepted, setAccepted] = useState(false);

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;

    const password = form.password.value;
    console.log(name, email, password, photo);

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
      })
      .catch((error) => console.log(error));
  };
  const handleAccepted = event => {
    setAccepted(event.target.checked);
  }

  return (
    <Container className="w-25 mx-auto">
      <h3>Please Register</h3>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            name="name"
            required
            type="text"
            placeholder="Your Name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            required
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo Url</Form.Label>
          <Form.Control name="photo" type="text" placeholder="Photo Url" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            required
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            onClick={handleAccepted}
            type="checkbox"
            name="accept"
            label={<>Accept <Link to="/terms">Terms and Condition</Link> </>}
          />
        </Form.Group>
        <Button disabled={!accepted} variant="primary" type="submit">
          Register
        </Button>
        <br></br>

        <Form.Text className="text-success">
          Already have an account? <Link to="/login">Login</Link>
        </Form.Text>
        <br></br>
        <Form.Text className="text-danger">danger</Form.Text>
        <Form.Text className="text-success">success</Form.Text>
      </Form>
    </Container>
  );
};

export default Register;
