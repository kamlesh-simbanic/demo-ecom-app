"use server";

import { Product } from "@/app/assets/products";
import { revalidatePath } from "next/cache";

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
  revalidatePath(`/app/products`);
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
  revalidatePath(`/app/products`);
  return result as Product;
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
  revalidatePath(`/app/products/${id}`);

  return result as Product;
};

export const removeProduct = async (id: string) => {
  await fetch(`http://localhost:4001/api/products/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  revalidatePath(`/app/products`);
};
