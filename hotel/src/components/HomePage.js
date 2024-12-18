import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <Container className="text-center">
      <Row>
        <Col>
          <h1>Welcome to Our Hotel</h1>
          <p>Your perfect stay awaits!</p>
          
          {/* Book Now button */}
          <Link to="/book">
            <Button variant="primary" size="lg" className="mr-3">
              Book Now
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;
