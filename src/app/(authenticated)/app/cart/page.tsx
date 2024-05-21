"use client";
import { CartItem, cartColumns } from "@/app/assets/cart";
import TableComponent from "@/app/_components/table";
import { useShoppingCart } from "@/app/providers/cart";
import Button from "@/app/_components/button";
import { useRouter } from "next/navigation";
import StackRow from "@/app/_components/stack-row";

export default function Cart() {
  const { cart, enableCheckout } = useShoppingCart();
  const router = useRouter();

  return (
    <>
      <h1>Cart</h1>
      <TableComponent<CartItem>
        rows={cart}
        columns={cartColumns}
        showPagination={false}
      />

      <StackRow>
        <Button
          label={"Check Out"}
          onClick={() => router.push("/app/orders/place")}
          disabled={!enableCheckout()}
        />
      </StackRow>
    </>
  );
}
