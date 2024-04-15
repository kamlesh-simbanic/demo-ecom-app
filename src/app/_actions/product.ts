"use server";

import { Product } from "@/app/assets/products";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

const headers = new Headers();

headers.set("Content-Type", "application/json");

const axios = async (url: string, method = "GET", data?: any) => {
  const cookiesData = cookies().getAll();

  const cookieValue = cookiesData.map((x) => `${x.name}=${x.value}`).join(";");

  headers.append("Cookie", cookieValue);

  if (data !== null) {
    return await fetch(url, {
      method,
      cache: "no-cache",
      body: JSON.stringify(data),
      headers: headers,
    });
  }
  return await fetch(url, {
    method,
    cache: "no-cache",
    headers: headers,
  });
};

export const getProduct = async (id: string): Promise<Product> => {
  const res = await axios(`http://localhost:4001/api/products/${id}`);
  const product = await res.json();

  return product as Product;
};

export async function getProducts(): Promise<Product[]> {
  const res = await axios(`http://localhost:4001/api/products`);
  const products = await res.json();
  revalidatePath(`/app/products`);
  return products as Product[];
}
export const addProduct = async (data: Product) => {
  const res = await axios(`http://localhost:4001/api/products`, "POST", data);
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
