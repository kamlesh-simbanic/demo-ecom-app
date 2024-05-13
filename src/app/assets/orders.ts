export type Order = {
  _id: number;
  userId: string;
  amount: number;
  orderDate?: string;
  houseNo: string;
  street: string;
  city: string;
  province: string;
  postalCode: string;
  items?: {
    productId: string;
    quantity: number;
    price: number;
    name: string;
    total: number;
  }[];
};

export type OrderListEntity = Pick<
  Order,
  "_id" | "amount" | "orderDate" | "userId"
>;

export type OrderPayload = Pick<Order, "items" | "amount">;

type ColumnType<T> = {
  key: keyof T;
  label: string;
  sortable?: boolean;
  render?: (value: T) => React.ReactNode;
};

export const orderColumns: ColumnType<Order>[] = [
  { key: "_id", label: "ID", sortable: true },
  { key: "userId", label: "User", sortable: true },
  { key: "amount", label: "Amount", sortable: true },
  { key: "orderDate", label: "Order Date", sortable: true },
];

export const orders: OrderListEntity[] = [
  {
    _id: 1,
    userId: "John Doe",
    amount: 100,
    orderDate: "2024-03-22",
  },
  {
    _id: 2,
    userId: "Jane Smith",
    amount: 150,
    orderDate: "2024-03-21",
  },
  {
    _id: 3,
    userId: "Bob Johnson",
    amount: 200,
    orderDate: "2024-03-20",
  },
  {
    _id: 4,
    userId: "Alice Brown",
    amount: 120,
    orderDate: "2024-03-19",
  },
  {
    _id: 5,
    userId: "Eve Williams",
    amount: 180,
    orderDate: "2024-03-18",
  },
  {
    _id: 6,
    userId: "Michael Davis",
    amount: 220,
    orderDate: "2024-03-17",
  },
  {
    _id: 7,
    userId: "Sarah Wilson",
    amount: 130,
    orderDate: "2024-03-16",
  },
  {
    _id: 8,
    userId: "Kevin Miller",
    amount: 190,
    orderDate: "2024-03-15",
  },
  {
    _id: 9,
    userId: "Linda Garcia",
    amount: 210,
    orderDate: "2024-03-14",
  },
  {
    _id: 10,
    userId: "Brian Martinez",
    amount: 140,
    orderDate: "2024-03-13",
  },
];
