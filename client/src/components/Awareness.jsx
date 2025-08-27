import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Awareness() {
  const articles = [
    {
      title: "Why E-Waste Recycling Matters",
      text: "E-waste contains harmful chemicals that damage the environment if not managed properly.",
    },
    {
      title: "Benefits of Recycling",
      text: "Recycling saves energy, reduces pollution, and recovers valuable raw materials.",
    },
    {
      title: "Your Role in Sustainability",
      text: "Individuals can contribute by properly disposing of electronics and choosing eco-friendly options.",
    },
  ];

  return (
    <Container className="my-5" id="awareness">
      <h2 className="text-center mb-4">Awareness About E-Waste</h2>
      <Row>
        {articles.map((article, index) => (
          <Col md={4} key={index} className="mb-3">
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title>{article.title}</Card.Title>
                <Card.Text>{article.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Awareness;