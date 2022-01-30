import React, { useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
// import "./App.css";
import { auth, db } from "./firebase/firebase-config";
import { Alert, Card, Form, Button } from "react-bootstrap";

function SignUp() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [iName, setName] = useState("");
  const [iUniveristy, setUniversity] = useState("");
  const [iCountry, setCountry] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  useEffect(
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    })
  );

  const register = async () => {
    try {
      setLoading(true);
      setError("");
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      // ).then((creds) => {
      //   db.collection("users")
      //     .addDoc({
      //       uid: creds.user.uid,
      //       name: iName,
      //       univeristy: iUniveristy,
      //       country: iCountry,
      //     })
      //     .then(() => {
      //       console.log("Document successfully written!");
      //     })
      //     .catch((e) => {
      //       console.error("Error writing document: ", e);
      //     });
      //   console.log(creds.user.uid);
      // });
    } catch (error) {
      setError("Unable to Sign Up");
    }
    setLoading(false);
  };

  const login = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
    } catch (error) {
      setError("Unable to Sign in");
    }
    setLoading(false);
  };

  const logout = async () => {
    await signOut(auth);
  };

  const styleCard = {
    width:"50%",
    margin:"auto",
  };
  return (
    <>
    <div style = {styleCard}>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4 p-4">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}

          <Form onSubmit={register}>
            <Form.Group id="Name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                onChange={(event) => {
                  setName(event.target.value);
                }}
                required
              />
            </Form.Group>
            <Form.Group id="University">
              <Form.Label>University</Form.Label>
              <Form.Control
                type="text"
                onChange={(event) => {
                  setUniversity(event.target.value);
                }}
                required
              />
            </Form.Group>
            <Form.Group id="Country">
              <Form.Label>Country</Form.Label>
              <Form.Control
                type="text"
                onChange={(event) => {
                  setCountry(event.target.value);
                }}
                required
              />
            </Form.Group>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                onChange={(event) => {
                  setRegisterEmail(event.target.value);
                }}
                required
              />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                onChange={(event) => {
                  setRegisterPassword(event.target.value);
                }}
                required
              />
            </Form.Group>
            <div style={{alignItems:"end"}}>
            <Button disabled={loading} className="w-100" type="submit">
              Sign Up
            </Button>

            <Button onClick={logout} className="w-100" type="submit">
              Sign Out
            </Button>
            </div>
            
          </Form>
        </Card.Body>
      </Card>
      </div>
      <div className="w-100 text-center mt-2">
        Already have an account? <a href="#signin">Sign In</a>
      </div>
    </>
  );
}

export default SignUp
