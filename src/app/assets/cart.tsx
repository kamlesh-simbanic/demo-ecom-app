"use client";

import Button from "@/app/_components/button";
import { useShoppingCart } from "../providers/cart";

export type CartItem = {
  productId: number;
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
  { key: "name", label: "Product Name", sortable: true },
  { key: "quantity", label: "Quantity", sortable: true },
  { key: "price", label: "Price Per Unit", sortable: true },
  { key: "total", label: "Total Price", sortable: true },
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

export const cartItems: CartItem[] = [
  {
    productId: 1,
    name: "Product 1",
    price: 10.99,
    quantity: 2,
    total: 21.98,
  },
  {
    productId: 2,
    name: "Product 2",
    price: 19.99,
    quantity: 1,
    total: 19.99,
  },
  {
    productId: 3,
    name: "Product 3",
    price: 15.49,
    quantity: 3,
    total: 46.47,
  },
  {
    productId: 4,
    name: "Product 4",
    price: 12.99,
    quantity: 1,
    total: 12.99,
  },
  {
    productId: 5,
    name: "Product 5",
    price: 8.99,
    quantity: 2,
    total: 17.98,
  },
  {
    productId: 6,
    name: "Product 6",
    price: 24.99,
    quantity: 1,
    total: 24.99,
  },
  {
    productId: 7,
    name: "Product 7",
    price: 17.99,
    quantity: 2,
    total: 35.98,
  },
  {
    productId: 8,
    name: "Product 8",
    price: 11.49,
    quantity: 1,
    total: 11.49,
  },
  {
    productId: 9,
    name: "Product 9",
    price: 14.99,
    quantity: 3,
    total: 44.97,
  },
  {
    productId: 10,
    name: "Product 10",
    price: 9.99,
    quantity: 1,
    total: 9.99,
  },
];
