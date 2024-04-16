"use server";

import { Product } from "@/app/assets/products";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

const headers = new Headers();

headers.set("Content-Type", "application/json");

const httpClient = async (url: string, method = "GET", data?: any) => {
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

const axios = {
  get: (url: string) => {
    return httpClient(url);
  },
  post: (url: string, data: any) => {
    return httpClient(url, "POST", data);
  },
  put: (url: string, data: any) => {
    return httpClient(url, "PUT", data);
  },
  delete: (url: string) => {
    return httpClient(url, "DELETE");
  },
};

export const getProduct = async (id: string): Promise<Product> => {
  const res = await axios.get(`http://localhost:4001/api/products/${id}`);
  const product = await res.json();
  console.log("products", product);

  return product as Product;
};

export async function getProducts(): Promise<Product[]> {
  const res = await axios.get(`http://localhost:4001/api/products`);
  const products = await res.json();
  console.log("products", products);

  revalidatePath(`/app/products`);
  return products as Product[];
}
export const addProduct = async (data: Product) => {
  const res = await axios.post(`http://localhost:4001/api/products`, data);
  const result = await res.json();
  revalidatePath(`/app/products`);
  return result as Product;
};

export const updateProduct = async (id: string, data: Product) => {
  const res = await axios.put(`http://localhost:4001/api/products/${id}`, data);
  const result = await res.json();
  revalidatePath(`/app/products/${id}`);
  return result as Product;
};

export const removeProduct = async (id: string) => {
  await axios.delete(`http://localhost:4001/api/products/${id}`);
  revalidatePath(`/app/products`);
};
