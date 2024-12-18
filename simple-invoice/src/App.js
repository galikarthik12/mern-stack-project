// src/App.js
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import InvoicePage from './components/InvoicePage';

function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">SimpleInvoice</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#invoice">Generate Invoice</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <InvoicePage />
    </div>
  );
}

export default App;
