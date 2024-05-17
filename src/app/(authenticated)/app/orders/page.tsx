"use client";
import { getOrders } from "@/app/_actions/orders";
import Table from "@/app/_components/table";
import { orderColumns, OrderListEntity } from "@/app/assets/orders";
import { useEffect, useState } from "react";

export default function Orders() {
  const [isLoading, setIsLoading] = useState(false);
  const [orders, setOrders] = useState<OrderListEntity[]>([]);

  const fetchOrders = async () => {
    setIsLoading(true);
    const result = await getOrders();
    setIsLoading(false);
    setOrders(result);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <>
      <h1>Orders</h1>
      <Table<OrderListEntity>
        rows={orders}
        columns={orderColumns}
        isLoading={isLoading}
      />
    </>
  );
}
