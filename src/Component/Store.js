import React from "react";
import { Card, Button, Col, Row, Container } from "react-bootstrap";
import "./Store.css";
import ProductDetails from "../Product Details/ProductDetails";
import { Link, Route, Routes } from "react-router-dom";
import DummyItems from "./Items";
const Store = ({ addToCart }) => {
  

  const itemList = DummyItems.map((item, index) => (
    <Col key={index} xs={12} md={6} className="my-3">
      <Card className="m-auto" style={{ width: "50%" }}>
        <Card.Img variant="top" src={item.imageUrl} />
        <Card.Body>
          <Link to={`/products/${item.id}`}>
            <Card.Title>{item.title}</Card.Title>
          </Link>

          <Card.Text>$ {item.price}</Card.Text>

          <Button onClick={() => addToCart(item)}>Add to Cart</Button>
        </Card.Body>
      </Card>
    </Col>
  ));

  return (
    <Container
      fluid
      className="store-container p-5 d-flex justify-content-center"
    >
      <Row className="justify-content-center">{itemList}</Row>
      <Routes>
        <Route
          path="/products/:productId"
          element={<ProductDetails items={DummyItems} />}
        />
      </Routes>
    </Container>
  );
};

export default Store;
