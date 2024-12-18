import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './HomePage.css';  // Import the custom styles for this page

function HomePage() {
  return (
    <Container className="home-page-container">
      <Row className="justify-content-center align-items-center">
        <Col xs={12} md={8} lg={6}>
          <div className="content">
            <h1>Welcome to Our Hotel</h1>
            <p>Your perfect stay awaits!</p>
            <Link to="/book">
              <Button variant="primary" size="lg">Book Now</Button>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;
