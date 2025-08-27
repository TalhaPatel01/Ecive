import React from 'react';
import { Container, Button } from 'react-bootstrap';

function Hero() {
  return (
    <div className="bg-success text-white text-center d-flex align-items-center" style={{ height: "90vh" }}>
      <Container>
        <h1 className="display-3 fw-bold">Manage E-Waste Responsibly</h1>
        <p className="lead">Join Ecive to recycle, reduce pollution, and create a sustainable future.</p>
        <Button variant="light" size="lg" style={{ cursor: 'pointer' }}>
          Get Started
        </Button>
      </Container>
    </div>
  );
}

export default Hero;