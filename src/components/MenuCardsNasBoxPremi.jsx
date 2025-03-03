import { Card, ListGroup } from "react-bootstrap";

const MenuCardsNasBoxPremi = ({ title, price, items, ...aosProps }) => {
  return (
    <div className="justify-content-center mt-5 " {...aosProps}>
      <Card className="menu-card-prem">
        <Card.Body>
          <Card.Title className="fw-bold">{title}</Card.Title>
          <Card.Subtitle className="mb-2">{price}</Card.Subtitle>
        </Card.Body>
        <div className="scrollable-prem">
          <ListGroup variant="flush">
            {items.map((item, index) => (
              <ListGroup.Item key={index}>{item}</ListGroup.Item>
            ))}
          </ListGroup>
        </div>
        <Card.Body>
          <Card.Link href="https://wa.me/+6287776441192?text=Halo%20Kak,%20saya%20mau%20bertanya%20mengenai%20menu%20di%20Resto%203%20Raja">
            <i className="fa-brands fa-whatsapp"></i>
          </Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MenuCardsNasBoxPremi;
