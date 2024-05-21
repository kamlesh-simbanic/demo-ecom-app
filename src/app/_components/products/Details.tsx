"use client";
import { Product } from "@/app/assets/products";
import { Form } from "react-bootstrap";
import Image from "next/image";
import { ChangeEvent } from "react";
import Input from "../input";
import { ErrorValidation } from "@/app/types/common";
import { Placeholder, Card, Row, Col, Container } from "react-bootstrap";

export default function Content({
  product,
  readOnly,
  onChangeHandle = () => ({}),
  validations = {},
}: {
  product: Product;
  readOnly: boolean;
  onChangeHandle?: (value: ChangeEvent<HTMLInputElement>) => void;
  validations?: ErrorValidation;
}) {
  if (!product)
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

  return (
    <Container>
      <Input
        label="Name"
        name="name"
        value={product.name}
        onChange={onChangeHandle}
        disabled={readOnly}
        error={validations["name"]}
      />
      <Row>
        <Col md={6} xs={12}>
          <Input
            type="number"
            name="price"
            label="Price"
            value={product.price}
            onChange={onChangeHandle}
            disabled={readOnly}
            error={validations["price"]}
          />
        </Col>
        <Col md={6} xs={12}>
          <Input
            type="number"
            name="quantity"
            label="Quantity"
            value={product.quantity}
            onChange={onChangeHandle}
            disabled={readOnly}
            error={validations["quantity"]}
          />
        </Col>
      </Row>

      <Input
        type="text"
        name="shortDesc"
        label="Short Description"
        value={product.shortDesc}
        onChange={onChangeHandle}
        disabled={readOnly}
        error={validations["shortDesc"]}
      />

      <Row>
        <Col md={3} sm={12}>
          <Form.Label>Image:</Form.Label>
        </Col>
        <Col md={6} sm={12}>
          <Image
            src={"/images/image1.jpg"}
            alt="My Image"
            width={500}
            height={300}
          />
        </Col>
      </Row>
    </Container>
  );
}
