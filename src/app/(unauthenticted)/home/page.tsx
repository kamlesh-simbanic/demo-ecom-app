import { getProducts } from "@/app/_actions/product";
import CardList from "@/app/_components/skelton/card-list";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const ProductList = dynamic(
  () => import("@/app/_components/products/product-list")
);

async function Products() {
  const products = await getProducts();
  return <ProductList products={products} />;
}

export default function Page() {
  return (
    <Suspense fallback={<CardList />}>
      <Products />
    </Suspense>
  );
}
