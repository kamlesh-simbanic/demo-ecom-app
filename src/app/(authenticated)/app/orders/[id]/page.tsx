"use client";

import { Container } from "react-bootstrap";
import { getOrder } from "@/app/_actions/orders";
import { Order, initialOrder } from "@/app/assets/orders";
import DetailsSkeleton from "@/app/_components/skelton/details";
import OrderContent from "../content/details";
import React, { useEffect, useState } from "react";

export default function OrderDetails({ params }: { params: { id: string } }) {
  const { id } = params;
  const [order, setOrder] = useState<Order>(initialOrder);

  useEffect(() => {
    async function fetchOrder() {
      const orderData = await getOrder(id);
      setOrder(orderData);
    }

    fetchOrder();
  }, [id]);

  if (!order?.id) {
    return <DetailsSkeleton />;
  }

  return (
    <Container>
      <h1>Order Details: {order.id}</h1>
      <OrderContent address={order} items={order.items} readOnly={true} />
    </Container>
  );
}
