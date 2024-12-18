import React from 'react';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './RoomAvailability.css';  // Make sure your custom CSS is imported

function RoomAvailability() {
  const navigate = useNavigate();  // Hook to navigate to the booking page

  const rooms = [
    { 
      type: 'Single Room', 
      price: 1000, 
      available: true, 
      image: 'https://hotelgarden-ks.com/wp-content/uploads/2020/09/room-deluxe-1.jpg'  
    },
    { 
      type: 'Double Room', 
      price: 1500, 
      available: true, 
      image: 'https://www.hotelsugar.in/images/slid1.jpg'  
    },
    { 
      type: 'Suite', 
      price: 2000, 
      available: true, 
      image: 'https://www.lottehotel.com/content/dam/lotte-hotel/lotte/seoul/accommodation/executive-tower/suite/charlotte-suite-room/181026-36-2000-roo-LTSE.jpg.thumb.768.768.jpg'  
    },
    { 
      type: 'Luxury Suite', 
      price: 3000, 
      available: true, 
      image: 'https://www.mokshaspa.com/assets/images/MokshaLuxury-Suite.jpg'  
    },
    { 
      type: 'Presidential Suite', 
      price: 5000, 
      available: true, 
      image: 'https://www.theleela.com/prod/content/assets/styles/tl_1920_735/public/aio-banner/dekstop/presidential-suite-leela-chennai-hotel.jpg.webp?VersionId=AYVKxJtUIe439oMP_yb.7VoJM4VXuG.q&itok=ypoYoB1k' 
    },
    {
      type: 'Ocean View Room',
      price: 3500,
      available: true,
      image: 'https://static.vecteezy.com/system/resources/previews/049/092/665/non_2x/relaxing-beach-view-from-a-cozy-chair-in-a-modern-living-space-free-photo.jpeg'  // New room with image
    }
  ];

  // Navigate to the booking page
  const handleBookNow = (roomType) => {
    navigate(`/book?room=${roomType}`); // Passing the room type as a query parameter
  };

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Available Rooms</h2>
      <Row>
        {rooms.map((room, index) => (
          <Col sm={12} md={6} lg={4} key={index}>
            <Card className="room-card mb-3 shadow-sm">
              <Card.Img variant="top" src={room.image} alt={room.type} />
              <Card.Body>
                <Card.Title>{room.type}</Card.Title>
                <Card.Text>
                  Price: <strong>{room.price} rupees</strong> per night
                </Card.Text>
                <Button 
                  variant="primary" 
                  disabled={!room.available} 
                  onClick={() => handleBookNow(room.type)}
                  className="w-100"
                >
                  {room.available ? 'Book Now' : 'Unavailable'}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default RoomAvailability;
