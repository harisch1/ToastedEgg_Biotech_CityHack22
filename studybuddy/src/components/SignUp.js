import React, { useRef, useState } from "react";
import { useAuth } from "./AuthContext";
import { Alert, Card, Form, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

const SignUp = () => {
  const name = useRef();
  const University = useRef();
  const Country = useRef();
  const email = useRef();
  const password = useRef();
  const confPassword = useRef();
  const { signup } = useAuth();
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(e) {
    e.preventDefault();
    if (password.current.value !== confPassword.current.value) {
      return;
    }
    try {
      setErr("");
      setLoading(true);
      await signup(email.current.value, password.current.value);
    } catch {
      setErr("Failed to Create Account");
    }
    setLoading(false);
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          {err && <Alert variant="danger">{err}</Alert>}
          <Form.Group id="Name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" ref={name} required />
          </Form.Group>
          <Form.Group id="University">
            <Form.Label>University</Form.Label>
            <Form.Control type="text" ref={University} required />
          </Form.Group>
          <Form.Group id="Country">
            <Form.Label>Country</Form.Label>
            <Form.Control type="text" ref={Country} required />
          </Form.Group>
          <Form onSubmit={submit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={email} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={password} required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" ref={confPassword} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </>
  );
};

export default SignUp;
