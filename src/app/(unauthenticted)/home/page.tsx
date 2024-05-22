"use client";

import { getProducts } from "@/app/_actions/product";
import CardList from "@/app/_components/skelton/card-list";
import { useAsync } from "@/app/_helpers/client/useAsync";
import { Product } from "@/app/assets/products";
import dynamic from "next/dynamic";

const ProductList = dynamic(
  () => import("@/app/_components/products/product-list")
);

function Products() {
  const { loading, error, value } = useAsync<Product[]>(getProducts);

  if (loading) {
    return <CardList />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return <ProductList products={value || []} />;
}

export default Products;
