import { CartItem, orderViewCartColumns } from "@/app/assets/cart";
import { Container, Row, Col } from "react-bootstrap";
import { getOrder } from "@/app/_actions/orders";
import Input from "@/app/_components/input";
import React from "react";
import TableComponent from "@/app/_components/table";

export default async function OrderDetails({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const order = await getOrder(id);

  return (
    <>
      <Container>
        <h1>Order Details</h1>

        <Row>
          <Col lg={3} sm={12}>
            <Input label="House No" name="houseNo" value={order.houseNo} />
          </Col>
          <Col lg={9} sm={12}>
            <Input label="Street" name="street" value={order.street} />
          </Col>
          <Col lg={6} sm={12}>
            <Input label="City" name="city" value={order.city} />
          </Col>
          <Col lg={6} sm={12}>
            <Input label="Province" name="province" value={order.province} />
          </Col>
          <Col lg={6} sm={12}>
            <Input
              label="Postal Code"
              name="postalCode"
              value={order.postalCode}
            />
          </Col>
        </Row>

        <Row className="p-2">
          <h3>Order Items</h3>
          <TableComponent<CartItem>
            rows={order.items}
            columns={orderViewCartColumns}
          />
        </Row>
      </Container>
    </>
  );
}
