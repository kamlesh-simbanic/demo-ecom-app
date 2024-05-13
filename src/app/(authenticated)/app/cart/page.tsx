"use client";
import { CartItem, cartColumns } from "@/app/assets/cart";
import TableComponent from "@/app/_components/table";
import { useShoppingCart } from "@/app/providers/cart";
import Button from "@/app/_components/button";
import { redirect, useRouter } from "next/navigation";

export default function Cart() {
  const { cart } = useShoppingCart();
  const router = useRouter();

  return (
    <>
      <h1>Cart</h1>
      <TableComponent<CartItem> rows={cart} columns={cartColumns} />

      <Button
        label={"Check Out"}
        onClick={() => router.push("/app/orders/place")}
      />
    </>
  );
}
