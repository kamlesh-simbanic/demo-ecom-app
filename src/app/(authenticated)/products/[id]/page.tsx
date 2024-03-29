// "use client";

import { Product, products } from "@/app/assets/products";
import { Col, Container, Row } from "react-bootstrap";
import { Button, Form, Card } from "react-bootstrap";
import Image from "next/image";

const getProduct = (id: string): Product => {
  const product = products.find((p) => p.id === id) as Product;
  return product;
};

export default async function ProductDetails({
  params,
}: {
  params: { id: string };
}) {
  const product = getProduct(params.id);

  return (
    <Container>
      <Row>
        <Col md={3} sm={12}>
          <Form.Label className="fw-bolder">Name:</Form.Label>
        </Col>
        <Col md={6} sm={12}>
          <Form.Label>{product?.name}</Form.Label>
        </Col>
      </Row>
      <Row>
        <Col md={3} sm={12}>
          <Form.Label className="fw-bolder">Price:</Form.Label>
        </Col>
        <Col md={6} sm={12}>
          <Form.Label>$ {product?.price}</Form.Label>
        </Col>
      </Row>
      <Row>
        <Col md={3} sm={12}>
          <Form.Label className="fw-bolder">Short Description:</Form.Label>
        </Col>
        <Col md={6} sm={12}>
          <Form.Label>{product?.shortDesc}</Form.Label>
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
