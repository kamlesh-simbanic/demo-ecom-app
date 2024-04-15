import { getProducts } from "./action";
import ProductList from "@/app/_components/products/product-list";
import Link from "next/link";

export default async function Products() {
  const products = await getProducts();

  return (
    <>
      <Link href="/app/products/add" className="nav-link text-info p-2">
        Add Product
      </Link>
      <ProductList products={products} />
    </>
  );
}
