"use client";
import React, {
  Suspense,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { Product } from "../assets/products";
import { CartItem } from "../assets/cart";
import useEvent from "../utils/use-event";

type ShoppingCartContextType = {
  cart: CartItem[];
  addItem: (item: Product) => void;
  removeItem: (id: string) => void;
  increment: (id: string) => void;
  decrement: (id: string) => void;
  totalItems: number;
  removeOrderedItems: (id: string[]) => void;
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
  const { dispatch } = useEvent();
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
    dispatch("SHOW_SNACK_BAR", "Item added cart");
  };

  const removeItem = (id: string) => {
    const updatedItems = cart.filter(
      (item) => item.productId.toString() !== id
    );
    localStorage.setItem("cartItems", JSON.stringify(updatedItems));
    setCart(updatedItems);
    dispatch("SHOW_SNACK_BAR", "Item removed from cart");
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
    dispatch("SHOW_SNACK_BAR", "Quantity Updated");
  };

  const decrement = (id: string) => {
    const updatedItems = cart.map((item) =>
      item.productId.toString() === id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    localStorage.setItem("cartItems", JSON.stringify(updatedItems));
    setCart(updatedItems);
    dispatch("SHOW_SNACK_BAR", "Quantity Updated");
  };

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  const removeOrderedItems = (ids: string[]) => {
    const updatedItems = cart.filter((item) => !ids.includes(item.productId));
    localStorage.setItem("cartItems", JSON.stringify(updatedItems));
    setCart(updatedItems);
  };

  useEffect(() => {
    const items = JSON.parse(
      localStorage.getItem("cartItems") ?? "[]"
    ) as CartItem[];
    setCart(items);
  }, []);

  return (
    <ShoppingCartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        increment,
        decrement,
        totalItems,
        removeOrderedItems,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
