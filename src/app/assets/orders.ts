export type Order = {
  id: number;
  user: string;
  amount: number;
  orderDate: string;
};

type ColumnType<T> = {
  key: keyof T;
  label: string;
  sortable?: boolean;
  render?: (value: T) => React.ReactNode;
};

export const orderColumns: ColumnType<Order>[] = [
  { key: "id", label: "ID", sortable: true },
  { key: "user", label: "User", sortable: true },
  { key: "amount", label: "Amount", sortable: true },
  { key: "orderDate", label: "Order Date", sortable: true },
];

export const orders: Order[] = [
  {
    id: 1,
    user: "John Doe",
    amount: 100,
    orderDate: "2024-03-22",
  },
  {
    id: 2,
    user: "Jane Smith",
    amount: 150,
    orderDate: "2024-03-21",
  },
  {
    id: 3,
    user: "Bob Johnson",
    amount: 200,
    orderDate: "2024-03-20",
  },
  {
    id: 4,
    user: "Alice Brown",
    amount: 120,
    orderDate: "2024-03-19",
  },
  {
    id: 5,
    user: "Eve Williams",
    amount: 180,
    orderDate: "2024-03-18",
  },
  {
    id: 6,
    user: "Michael Davis",
    amount: 220,
    orderDate: "2024-03-17",
  },
  {
    id: 7,
    user: "Sarah Wilson",
    amount: 130,
    orderDate: "2024-03-16",
  },
  {
    id: 8,
    user: "Kevin Miller",
    amount: 190,
    orderDate: "2024-03-15",
  },
  {
    id: 9,
    user: "Linda Garcia",
    amount: 210,
    orderDate: "2024-03-14",
  },
  {
    id: 10,
    user: "Brian Martinez",
    amount: 140,
    orderDate: "2024-03-13",
  },
];
