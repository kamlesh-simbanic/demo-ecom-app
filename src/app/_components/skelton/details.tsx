"use client";

import React from "react";
import { Placeholder, Card, Row, Col, Container } from "react-bootstrap";

const LoadingSkeleton = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col md={4}>
          <Placeholder
            as={Card.Img}
            variant="top"
            animation="wave"
            style={{ height: "200px" }}
          />
        </Col>
        <Col md={8}>
          <Card>
            <Card.Body>
              <Placeholder as={Card.Title} animation="wave">
                <Placeholder xs={6} />
              </Placeholder>
              <Placeholder as={Card.Text} animation="wave">
                <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
                <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
                <Placeholder xs={8} />
              </Placeholder>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col md={12}>
          <Card>
            <Card.Body>
              <Placeholder as={Card.Text} animation="wave">
                <Placeholder xs={12} />
                <Placeholder xs={12} />
                <Placeholder xs={12} />
                <Placeholder xs={12} />
              </Placeholder>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoadingSkeleton;
