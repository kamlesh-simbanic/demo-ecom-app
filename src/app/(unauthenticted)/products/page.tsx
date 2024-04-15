import { getProducts } from "@/app/_actions/product";
import ProductList from "@/app/_components/products/product-list";

export default async function Products() {
  const products = await getProducts();
  return <ProductList products={products} />;
}
