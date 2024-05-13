"use server";

import { Product } from "@/app/assets/products";
import { revalidatePath } from "next/cache";
import axios from "./axios";

export const getProduct = async (id: string): Promise<Product> => {
  try {
    const res = await axios.get(`/products/${id}`);
    const product = await res.json();
    return product as Product;
  } catch (error) {
    // redirect("/app/products");
    return {} as Product;
  }
};

export async function getProducts(): Promise<Product[]> {
  const res = await axios.get(`/products`);
  const products = await res.json();
  revalidatePath(`/app/products`);
  return products as Product[];
}
export const addProduct = async (data: Product) => {
  const res = await axios.post(`/products`, data);
  const result = await res.json();
  revalidatePath(`/app/products`);
  return result as Product;
};

export const updateProduct = async (id: string, data: Product) => {
  const res = await axios.put(`/products/${id}`, data);
  const result = await res.json();
  revalidatePath(`/app/products/${id}`);
  return result as Product;
};

export const removeProduct = async (id: string) => {
  await axios.delete(`/products/${id}`);
  revalidatePath(`/app/products`);
};
