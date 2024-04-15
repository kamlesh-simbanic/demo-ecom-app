import { Product } from "@/app/assets/products";

export const getProduct = async (id: string): Promise<Product> => {
  const res = await fetch(`http://localhost:4001/api/products/${id}`, {
    cache: "no-cache",
  });
  const product = await res.json();

  return product as Product;
};

export async function getProducts(): Promise<Product[]> {
  const res = await fetch(`http://localhost:4001/api/products`, {
    cache: "no-cache",
  });
  const products = await res.json();
  return products as Product[];
}
export const addProduct = async (data: Product) => {
  const res = await fetch(`http://localhost:4001/api/products`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await res.json();
};

export const updateProduct = async (id: string, data: Product) => {
  const res = await fetch(`http://localhost:4001/api/products/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await res.json();
  return result as Product;
};

export const removeProduct = async (id: string) => {
  await fetch(`http://localhost:4001/api/products/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
