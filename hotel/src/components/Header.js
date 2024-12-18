import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

function Header() {
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm">
      <Container>
        <Navbar.Brand href="/" id='qs'>Quick Stay</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/" className="nav-link" id='lin'>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/book" className="nav-link" id='lin'>
              Book a Room
            </Nav.Link>
            <Nav.Link as={Link} to="/rooms" className="nav-link" id='lin'>
              Room Availability
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
