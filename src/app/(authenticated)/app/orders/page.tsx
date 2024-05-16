import { getOrders } from "@/app/_actions/orders";
import Table from "@/app/_components/table";
import { orderColumns, OrderListEntity } from "@/app/assets/orders";

export default async function Orders() {
  const orders = await getOrders();

  return (
    <>
      <h1>Orders</h1>
      <Table<OrderListEntity> rows={orders} columns={orderColumns} />
    </>
  );
}
