import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Chat from './components/Chat'
import SignIn from './components/Signin'
import Home from './components/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
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
          <Nav>
          <Nav.Link href="#deets">Sign In</Nav.Link>
        </Nav>
          </Container>
        </Navbar>

        <Home /> 
      </div>
  );
}

export default App;
