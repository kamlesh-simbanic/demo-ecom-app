"use client";

import { Card, Placeholder } from "react-bootstrap";

export default function CardList() {
  return (
    <div className="d-flex flex-wrap">
      {Array.from({ length: 5 }).map((_, idx) => (
        <Card style={{ width: "18rem", margin: "1rem" }} key={idx}>
          <Card.Img variant="top" as={Placeholder} animation="wave">
            <Placeholder xs={12} style={{ height: "150px" }} />
          </Card.Img>
          <Card.Body>
            <Card.Title as={Placeholder} animation="wave">
              <Placeholder xs={6} />
            </Card.Title>
            <Card.Text as={Placeholder} animation="wave">
              <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
              <Placeholder xs={4} /> <Placeholder xs={6} />
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}
