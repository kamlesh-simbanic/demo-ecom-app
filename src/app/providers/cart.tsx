"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { Product, products } from "../assets/products";
import { CartItem } from "../assets/cart";

type ShoppingCartContextType = {
  cart: CartItem[];
  addItem: (item: Product) => void;
  removeItem: (id: string) => void;
  increment: (id: string) => void;
  decrement: (id: string) => void;
  totalItems: number;
};

const ShoppingCartContext = createContext<ShoppingCartContextType | undefined>(
  undefined
);

export const useShoppingCart = () => {
  const context = useContext(ShoppingCartContext);
  if (!context) {
    throw new Error(
      "useShoppingCart must be used within a ShoppingCartProvider"
    );
  }
  return context;
};

export const ShoppingCartProvider = ({ children }: any) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const isItemExists = (id: string) => cart.find((x) => x.productId === id);

  const addItem = (product: Product) => {
    if (isItemExists(product.id)) {
      increment(product.id);
      return;
    }

    const updatedItems = [
      ...cart,
      {
        productId: product.id,
        name: product.name,
        quantity: 1,
        price: product.price,
        total: product.price,
      },
    ];
    localStorage.setItem("cartItems", JSON.stringify(updatedItems));
    setCart(updatedItems);
  };

  const removeItem = (id: string) => {
    const updatedItems = cart.filter(
      (item) => item.productId.toString() !== id
    );
    localStorage.setItem("cartItems", JSON.stringify(updatedItems));
    setCart(updatedItems);
  };

  const increment = (id: string) => {
    const updatedItems = cart.map((item) =>
      item.productId.toString() === id
        ? {
            ...item,
            quantity: item.quantity + 1,
            total: item.price * (item.quantity + 1),
          }
        : item
    );
    localStorage.setItem("cartItems", JSON.stringify(updatedItems));
    setCart(updatedItems);
  };

  const decrement = (id: string) => {
    const updatedItems = cart.map((item) =>
      item.productId.toString() === id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    localStorage.setItem("cartItems", JSON.stringify(updatedItems));

    setCart(updatedItems);
  };

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    const items = JSON.parse(
      localStorage.getItem("cartItems") ?? "[]"
    ) as CartItem[];
    setCart(items);

    const currentProducts = JSON.parse(
      localStorage.getItem("products") ?? "[]"
    ) as Product[];

    if (currentProducts.length == 0) {
      localStorage.setItem("products", JSON.stringify(products));
    }
  }, []);

  return (
    <ShoppingCartContext.Provider
      value={{ cart, addItem, removeItem, increment, decrement, totalItems }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
