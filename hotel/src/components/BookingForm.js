import React, { useState } from 'react';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import './BookingForm.css';  // Import your custom styles
import axios from 'axios'; // Import Axios for HTTP requests

function BookingForm() {
  const [checkinDate, setCheckinDate] = useState('');
  const [checkoutDate, setCheckoutDate] = useState('');
  const [roomType, setRoomType] = useState('single');  // Default to single room
  const [guests, setGuests] = useState(1);
  const [rate, setRate] = useState(0);
  const [bookingDetails, setBookingDetails] = useState(null); // State to store booking details
  const [error, setError] = useState(''); // State to store errors

  // Updated room prices including new room types
  const roomPrices = {
    single: 1000,
    double: 1500,
    suite: 2000,
    'luxury suite': 3000,
    'presidential suite': 5000,
    'ocean view room': 3500,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Calculate the number of nights between checkin and checkout
    const checkin = new Date(checkinDate);
    const checkout = new Date(checkoutDate);
    const timeDifference = checkout - checkin;
    const numNights = timeDifference / (1000 * 3600 * 24); // Convert milliseconds to days

    if (numNights > 0) {
      // Calculate the estimated rate based on room type, number of guests, and nights
      const roomPrice = roomPrices[roomType]; // Get the price for the selected room type
      const estimatedRate = roomPrice * numNights * guests; // Calculate total price

      // Store booking details in state
      setBookingDetails({
        checkinDate,
        checkoutDate,
        roomType,
        guests,
        rate: estimatedRate
      });

      // Send booking data to the backend
      try {
        const response = await axios.post('http://localhost:5000/api/bookings', {
          checkinDate,
          checkoutDate,
          roomType,
          guests,
          rate: estimatedRate
        });

        console.log('Booking saved:', response.data);
        setError(''); // Reset any previous error
      } catch (error) {
        console.error('Error saving booking:', error);
        setError('Error saving booking. Please try again.');
      }
    } else {
      setRate(0); // Reset if dates are invalid (checkout before checkin)
      setBookingDetails(null); // Reset booking details
    }
  };

  return (
    <Container className="booking-form-container">
      <Row className="w-100">
        <Col xs={12} sm={8} md={6} lg={5}>
          <h2 className="text-center mb-4">Book Your Stay</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="checkinDate">
              <Form.Label>Check-in Date</Form.Label>
              <Form.Control 
                type="date" 
                value={checkinDate} 
                onChange={(e) => setCheckinDate(e.target.value)} 
                required 
              />
            </Form.Group>

            <Form.Group controlId="checkoutDate">
              <Form.Label>Check-out Date</Form.Label>
              <Form.Control 
                type="date" 
                value={checkoutDate} 
                onChange={(e) => setCheckoutDate(e.target.value)} 
                required 
              />
            </Form.Group>

            <Form.Group controlId="roomType">
              <Form.Label>Room Type</Form.Label>
              <Form.Control 
                as="select" 
                value={roomType} 
                onChange={(e) => setRoomType(e.target.value)} 
                required
              >
                <option value="single">Single Room</option>
                <option value="double">Double Room</option>
                <option value="suite">Suite</option>
                <option value="luxury suite">Luxury Suite</option>
                <option value="presidential suite">Presidential Suite</option>
                <option value="ocean view room">Ocean View Room</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="guests">
              <Form.Label>Number of Guests</Form.Label>
              <Form.Control 
                type="number" 
                value={guests} 
                onChange={(e) => setGuests(e.target.value)} 
                min="1" 
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">Submit Booking</Button>
          </Form>

          {/* Display error if any */}
          {error && <p className="text-danger text-center">{error}</p>}

          {/* Display booking details after submission */}
          {bookingDetails && (
            <div className="mt-4">
              <h3 className="text-center">Booking Details</h3>
              <ul className="list-group">
                <li className="list-group-item"><strong>Check-in Date:</strong> {bookingDetails.checkinDate}</li>
                <li className="list-group-item"><strong>Check-out Date:</strong> {bookingDetails.checkoutDate}</li>
                <li className="list-group-item"><strong>Room Type:</strong> {bookingDetails.roomType}</li>
                <li className="list-group-item"><strong>Number of Guests:</strong> {bookingDetails.guests}</li>
                <li className="list-group-item"><strong>Total Price:</strong> {bookingDetails.rate} rupees</li>
              </ul>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default BookingForm;
