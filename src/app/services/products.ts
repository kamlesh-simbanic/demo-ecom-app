import { Product } from "../assets/products";

export const getProduct = (id: string): Product => {
  const products = getProducts();
  const product = products.find((p) => p.id === id) as Product;
  return product;
};

export const getProducts = (): Product[] => {
  const products = JSON.parse(
    localStorage.getItem("products") ?? "[]"
  ) as Product[];
  return products;
};

export const updateProduct = (id: string, data: Product) => {
  console.log("data", data);

  let products = getProducts();
  products = products.map((item) => (item.id === id ? data : item));
  localStorage.setItem("products", JSON.stringify(products));
};

export const removeProduct = (id: string) => {
  let products = getProducts();
  products = products.filter((item) => item.id !== id);
  localStorage.setItem("products", JSON.stringify(products));
};
