"use client";
import { Product } from "@/app/assets/products";
import { Col, Container, Row } from "react-bootstrap";
import { Form } from "react-bootstrap";
import Image from "next/image";
import { ChangeEvent } from "react";
import Input from "../input";
import { ErrorValidation } from "@/app/types/common";

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
      <Input
        type="number"
        name="price"
        label="Price"
        value={product.price}
        onChange={onChangeHandle}
        disabled={readOnly}
        error={validations["price"]}
      />
      <Input
        type="number"
        name="quantity"
        label="Quantity"
        value={product.quantity}
        onChange={onChangeHandle}
        disabled={readOnly}
        error={validations["quantity"]}
      />
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
