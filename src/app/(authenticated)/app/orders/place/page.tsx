"use client";

import Input from "@/app/_components/input";
import TableComponent from "@/app/_components/table";
import { CartItem, orderViewCartColumns } from "@/app/assets/cart";
import { useShoppingCart } from "@/app/providers/cart";
import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

export default function PlaceOrder() {
  const { cart } = useShoppingCart();

  const [address, setAddress] = useState({
    houseNo: "",
    street: "",
    city: "",
    province: "",
    postalCode: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress({
      ...address,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Place order logic here
  };

  return (
    <Container>
      <h1>Place Order</h1>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col lg={3} sm={12}>
            <Input
              label="House No"
              name="houseNo"
              value={address.houseNo}
              onChange={handleChange}
            />
          </Col>
          <Col lg={9} sm={12}>
            <Input
              label="Street"
              name="street"
              value={address.street}
              onChange={handleChange}
            />
          </Col>
          <Col lg={6} sm={12}>
            <Input
              label="City"
              name="city"
              value={address.city}
              onChange={handleChange}
            />
          </Col>
          <Col lg={6} sm={12}>
            <Input
              label="Province"
              name="province"
              value={address.province}
              onChange={handleChange}
            />
          </Col>
          <Col lg={6} sm={12}>
            <Input
              label="Postal Code"
              name="postalCode"
              value={address.postalCode}
              onChange={handleChange}
            />
          </Col>
        </Row>

        <Row className="p-2">
          <h3>Order Items</h3>
          <TableComponent<CartItem>
            rows={cart}
            columns={orderViewCartColumns}
          />
        </Row>

        <Button variant="primary" type="submit">
          Place Order
        </Button>
      </Form>
    </Container>
  );
}
