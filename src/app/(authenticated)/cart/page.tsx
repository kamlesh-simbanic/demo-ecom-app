import { CartItem, cartColumns, cartItems } from "@/app/assets/cart";
import TableComponent from "@/app/components/table";

export default function Cart() {
  return (
    <>
      <h1>Cart</h1>
      <TableComponent<CartItem> rows={cartItems} columns={cartColumns} />
    </>
  );
}
