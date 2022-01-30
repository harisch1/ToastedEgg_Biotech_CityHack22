import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Chat from "./components/Chat";
import SignIn from "./components/SignIn";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import { onAuthStateChanged } from "firebase/auth"; //To see if user is logged in or not
import { auth } from "./components/firebase/firebase-config";

const App = () => {
  //see if user logged in
  const [user, setUser] = useState({});
  useEffect(
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    }),
    []
  );

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Study Buddy</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Chat</Nav.Link>
            <Nav.Link href="#pricing">Feature x</Nav.Link>
          </Nav>
          <span style={{ color: "white" }}>Logged in as: {user?.email}</span>
          {user ? (
            <Nav>
              <Nav.Link href="#deets">Sign Out</Nav.Link>
            </Nav>
          ) : (
            <Nav>
              <Nav.Link href="#deets">Sign In</Nav.Link>
            </Nav>
          )}
        </Container>
      </Navbar>
      <Home />
      <SignUp />
    </div>
  );
};

export default App;
