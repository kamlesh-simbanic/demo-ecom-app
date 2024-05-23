import RenderDate from "@/app/_components/RenderDate";
import Link from "next/link";
import { ColumnType } from "../types/common";

export type OrderItems = {
  productId: string;
  quantity: number;
  price: number;
  name: string;
  total: number;
};

export type Order = {
  id: number;
  userId: string;
  amount: number;
  orderDate: string;
  houseNo: string;
  street: string;
  city: string;
  province: string;
  postalCode: string;
  createdAt?: string;
  items: OrderItems[];
};

export type OrderListEntity = Pick<
  Order,
  "id" | "amount" | "orderDate" | "userId" | "createdAt" | "items"
>;

export type OrderPayload = Pick<Order, "items" | "amount">;

export const orderColumns: ColumnType<OrderListEntity>[] = [
  {
    key: "id",
    label: "ID",
    sortable: true,
    Render: (item) => {
      return (
        <Link href={`/app/orders/${item.id}`} className="text-decoration-none">
          {item.id.toString().slice(6)}
        </Link>
      );
    },
  },
  {
    key: "items",
    label: "No of Items",
    sortable: true,
    Render: (item) => <span>{item.items.length}</span>,
  },
  {
    key: "amount",
    label: "Amount",
    sortable: true,
  },
  {
    key: "createdAt",
    label: "Order Date",
    sortable: true,
    Render: (item) => {
      return <RenderDate date={item.createdAt!} />;
    },
  },
];

export const initialOrder: Order = {
  id: 0,
  userId: "",
  amount: 0,
  orderDate: "",
  houseNo: "",
  street: "",
  city: "",
  province: "",
  postalCode: "",
  items: [],
};
