import RenderDate from "@/app/_components/RenderDate";
import { NavLink } from "../_components";
import Link from "next/link";

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
  items: {
    productId: string;
    quantity: number;
    price: number;
    name: string;
    total: number;
  }[];
};

export type OrderListEntity = Pick<
  Order,
  "id" | "amount" | "orderDate" | "userId" | "createdAt" | "items"
>;

export type OrderPayload = Pick<Order, "items" | "amount">;

type ColumnType<T> = {
  key: keyof T;
  label: string;
  sortable?: boolean;
  Render?: (value: T) => JSX.Element;
};

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
