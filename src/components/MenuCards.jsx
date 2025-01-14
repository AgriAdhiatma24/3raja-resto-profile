import { Card, ListGroup } from "react-bootstrap";

const MenuCards = ({ title, price, items, ...aosProps }) => {
  return (
    <div className="justify-content-center mt-5 " {...aosProps}>
      <Card className="menu-card">
        <Card.Body>
          <Card.Title className="fw-bold">{title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{price}</Card.Subtitle>
        </Card.Body>
        <div className="scrollable-container">
          <ListGroup variant="flush">
            {items.map((item, index) => (
              <ListGroup.Item key={index}>{item}</ListGroup.Item>
            ))}
          </ListGroup>
        </div>
        <Card.Body>
          <Card.Link href="https://wa.me/+6287776441192">
            <i className="fa-brands fa-whatsapp"></i>
          </Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MenuCards;
