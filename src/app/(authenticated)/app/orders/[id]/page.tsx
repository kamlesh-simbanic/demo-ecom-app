"use server";

import { Container } from "react-bootstrap";
import { getOrder } from "@/app/_actions/orders";
import OrderContent from "../content/details";
import React from "react";

export default async function OrderDetails({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const order = await getOrder(id);

  return (
    <Container>
      <h1>Order Details: {order.id.toString().slice(6)}</h1>
      <OrderContent address={order} items={order.items} readOnly={true} />
    </Container>
  );
}
