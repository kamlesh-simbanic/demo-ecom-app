import { Product } from "@/app/assets/products";
import { Col, Container, Row } from "react-bootstrap";
import { Form } from "react-bootstrap";
import Image from "next/image";
import { ChangeEvent } from "react";

export default function Content({
  product,
  readOnly,
  onChangeHandle = () => ({}),
}: {
  product: Product;
  readOnly: boolean;
  onChangeHandle?: (value: ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <Container>
      <Row>
        <Col md={3} sm={12}>
          <Form.Label className="fw-bolder">Name:</Form.Label>
        </Col>
        <Col md={6} sm={12}>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter name"
            value={product.name}
            onChange={onChangeHandle}
            disabled={readOnly}
          />
        </Col>
      </Row>
      <Row>
        <Col md={3} sm={12}>
          <Form.Label className="fw-bolder">Price:</Form.Label>
        </Col>
        <Col md={6} sm={12}>
          <Form.Control
            type="number"
            name="price"
            placeholder="Enter price"
            value={product.price}
            onChange={onChangeHandle}
            disabled={readOnly}
          />
        </Col>
      </Row>
      <Row>
        <Col md={3} sm={12}>
          <Form.Label className="fw-bolder">Quantity:</Form.Label>
        </Col>
        <Col md={6} sm={12}>
          <Form.Control
            type="number"
            name="quantity"
            placeholder="Enter quantity"
            value={product.quantity}
            onChange={onChangeHandle}
            disabled={readOnly}
          />
        </Col>
      </Row>
      <Row>
        <Col md={3} sm={12}>
          <Form.Label className="fw-bolder">Short Description:</Form.Label>
        </Col>
        <Col md={6} sm={12}>
          <Form.Control
            type="text"
            name="shortDesc"
            placeholder="Enter shortDesc"
            value={product.shortDesc}
            onChange={onChangeHandle}
            disabled={readOnly}
          />
        </Col>
      </Row>
      <Row>
        <Col md={3} sm={12}>
          <Form.Label className="fw-bolder">Image:</Form.Label>
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
