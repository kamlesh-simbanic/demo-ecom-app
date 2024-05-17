import { getProducts } from "@/app/_actions/product";
import dynamic from "next/dynamic";

const ProductList = dynamic(
  () => import("@/app/_components/products/product-list")
);

export default async function Products() {
  const products = await getProducts();
  return <ProductList products={products} />;
}
