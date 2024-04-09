import Table from "@/app/_components/table";
import { orders, orderColumns, Order } from "@/app/assets/orders";

export default function Orders() {
  return (
    <>
      <h1>Orders</h1>
      <Table<Order> rows={orders} columns={orderColumns} />
    </>
  );
}
