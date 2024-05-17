import Button from "@/app/_components/button";
import { useShoppingCart } from "../providers/cart";
import Link from "next/link";

export type CartItem = {
  productId: string;
  name: string;
  quantity: number;
  price: number;
  total: number;
};

type ColumnType<T> = {
  key: string;
  label: string;
  sortable?: boolean;
  Render?: (value: T) => JSX.Element;
};

export const cartColumns: ColumnType<CartItem>[] = [
  {
    key: "name",
    label: "Product Name",
    sortable: true,
    Render: (item) => {
      return (
        <Link
          href={`/app/products/${item.productId}`}
          className="text-decoration-none"
        >
          {item.name}
        </Link>
      );
    },
  },
  { key: "quantity", label: "Quantity", sortable: true },
  { key: "price", label: "Price", sortable: true },
  { key: "total", label: "Total", sortable: true },
  {
    key: "actions",
    label: "Actions",
    Render: (item) => {
      const { removeItem } = useShoppingCart();

      return (
        <Button
          onClick={() => removeItem(item.productId.toString())}
          label="Remove"
          variant="danger"
        />
      );
    },
  },
];

export const orderViewCartColumns: ColumnType<CartItem>[] = cartColumns.slice(
  0,
  4
);
