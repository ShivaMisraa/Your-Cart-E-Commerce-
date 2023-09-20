import React from 'react';
import { Card, Button, Col, Row, Container } from 'react-bootstrap';

const Store = ({ addToCart }) => {
  const DummyItems = [
    {
      title: 'Colors',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    },
    {
      title: 'Black and white Colors',
      price: 50,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    },
    {
      title: 'Yellow and Black Colors',
      price: 70,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    },
    {
      title: 'Blue Color',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    },
  ];

  const itemList = DummyItems.map((item, index) => (
    <Col key={index} xs={12} md={6} className="my-3">
      <Card className="m-auto" style={{ width: '50%' }}>
        <Card.Img variant="top" src={item.imageUrl} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>$ {item.price}</Card.Text>
          <Button onClick={() => addToCart(item)}>Add to Cart</Button>
        </Card.Body>
      </Card>
    </Col>
  ));

  return (
    <Container fluid className="bg-gradient p-5 d-flex justify-content-center">
      <Row className="justify-content-center">{itemList}</Row>
    </Container>
  );
};

export default Store;
