import Nav from "./Nav";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import img from "../images/camp-1.jpg";
import abc from "../images/camp-2.jpg";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Box() {
  return (
    <div className="mmm">
      <div>
        <Nav />
      </div>
      <div>
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {Array.from({ length: 4 }).map((_, idx) => (
            <Col key={idx}>
              <Card style={{ width: "18rem" }}>
                <Card.Img src={img} variant="top" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={abc} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
              <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={abc} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default Box;
