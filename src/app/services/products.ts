import { Product } from "../assets/products";

export const getProduct = async (id: string): Promise<Product> => {
  const res = await fetch(`http://localhost:4001/api/products?id=${id}`);
  const product = await res.json();
  console.log("sdfsdfsd", product);

  return product as Product;
};

export const getProducts = async (): Promise<Product[]> => {
  const res = await fetch(`http://localhost:4001/api/products`);
  const products = await res.json();
  return products as Product[];
};

export const updateProduct = async (id: string, data: Product) => {
  const res = await fetch(`http://localhost:4001/api/products`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await res.json();
  return result as Product;
};

// export const updateProduct = async (id: string, data: Product) => {
//   let products = await getProducts();
//   products = products.map((item) => (item.id === id ? data : item));
//   localStorage.setItem("products", JSON.stringify(products));
// };

export const removeProduct = async (id: string) => {
  let products = await getProducts();
  products = products.filter((item) => item.id !== id);
  localStorage.setItem("products", JSON.stringify(products));
};
