import { getProducts } from "@/app/_actions/product";
import Link from "next/link";
import ProductList from "@/app/_components/products/product-list";

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
