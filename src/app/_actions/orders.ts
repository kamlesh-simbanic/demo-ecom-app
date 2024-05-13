"use server";

import { Order, OrderListEntity, OrderPayload } from "@/app/assets/orders";
import { revalidatePath } from "next/cache";
import axios from "./axios";

export const getOrder = async (id: string): Promise<Order> => {
  try {
    const res = await axios.get(`/orders/${id}`);
    const product = await res.json();
    return product as Order;
  } catch (error) {
    return {} as Order;
  }
};

export async function getOrders(): Promise<OrderListEntity[]> {
  const res = await axios.get(`/orders`);
  const products = await res.json();
  revalidatePath(`/app/orders`);
  return products as Order[];
}
export const addOrder = async (data: OrderPayload) => {
  const res = await axios.post(`/orders`, data);
  const result = await res.json();
  revalidatePath(`/app/orders`);
  return result as Order;
};

export const updateOrder = async (id: string, data: Order) => {
  const res = await axios.put(`/orders/${id}`, data);
  const result = await res.json();
  revalidatePath(`/app/orders/${id}`);
  return result as Order;
};

export const removeOrder = async (id: string) => {
  await axios.delete(`/orders/${id}`);
  revalidatePath(`/app/products`);
};
