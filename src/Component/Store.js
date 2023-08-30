import DummyItems from "./Items";
import { Card, Button, Col, Row, Container } from "react-bootstrap";

const Store = () => {
  const itemList = DummyItems.map((item) => (
    <Col key={item.title} xs={12} md={6} className=" my-3 ">
      <Card className="m-auto" style={{ width: "50%" }}>
        <Card.Img variant="top" src={item.imageUrl} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>

          <Card.Text>$ {item.price}</Card.Text>
          <Button type="button">Add to Cart</Button>
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
