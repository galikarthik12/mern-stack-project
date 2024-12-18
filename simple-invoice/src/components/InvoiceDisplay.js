// src/components/InvoiceDisplay.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function InvoiceDisplay({ invoiceData }) {
  const calculateTotal = () => {
    let total = 0;
    invoiceData.products.forEach((product) => {
      total += parseInt(product.price) * parseInt(product.quantity);
    });
    return total.toFixed(2);
  };

  return (
    <Container className="mt-5">
      <h3>Generated Invoice</h3>
      <Row>
        <Col md={6}>
          <h4>Customer Information:</h4>
          <p>{invoiceData.customerInfo}</p>
        </Col>
        <Col md={6}>
          <h4>Date:</h4>
          <p>{invoiceData.date}</p>
        </Col>
      </Row>
      <table className="table mt-4">
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {invoiceData.products.map((product) => (
            <tr key={product.name}>
              <td>{product.name}</td>
              <td>{product.quantity}</td>
              <td>${product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Row className="mt-4">
        <Col md={6}>
          <h4>Total:</h4>
          <p>${calculateTotal()}</p>
        </Col>
      </Row>
    </Container>
  );
}

export default InvoiceDisplay;
