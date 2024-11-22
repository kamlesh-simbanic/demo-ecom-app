import Button from "@/app/_components/button";
import { useShoppingCart } from "../providers/context";
import Link from "next/link";
import { ColumnType } from "../types/common";

export type CartItem = {
  productId: string;
  name: string;
  quantity: number;
  price: number;
  total: number;
  soldOut?: boolean;
};

export const cartColumns: ColumnType<CartItem>[] = [
  {
    key: "name",
    label: "Product Name",
    sortable: true,
    Render: (item) => {
      return (
        <>
          <Link
            href={`/app/products/${item.productId}`}
            className="text-decoration-none"
            onClick={(e) => {
              if (item.soldOut) {
                e.preventDefault();
              }
            }}
          >
            {item.name}
          </Link>{" "}
          {item.soldOut && (
            <span className="fw-bolder text-danger">(Out of Stock)</span>
          )}
        </>
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
