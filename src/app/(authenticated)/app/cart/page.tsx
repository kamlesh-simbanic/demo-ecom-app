"use client";
import { CartItem, cartColumns, cartItems } from "@/app/assets/cart";
import TableComponent from "@/app/_components/table";
import { useShoppingCart } from "@/app/providers/cart";

export default function Cart() {
  const { cart } = useShoppingCart();

  return (
    <>
      <h1>Cart</h1>
      <TableComponent<CartItem> rows={cart} columns={cartColumns} />
    </>
  );
}
