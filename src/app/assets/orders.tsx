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
  "id" | "amount" | "orderDate" | "userId" | "createdAt"
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
    // Render: (item) => {
    //   return <RenderDate date={item.createdAt!} />;
    // },
  },
];
