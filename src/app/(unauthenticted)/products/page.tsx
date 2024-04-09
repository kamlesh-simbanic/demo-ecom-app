import { getProducts } from "@/app/services/products";
import ProductList from "@/app/_components/products/product-list";

export default async function Products() {
  const products = await getProducts();
  return <ProductList products={products} />;
}
