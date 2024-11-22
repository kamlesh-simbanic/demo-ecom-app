import { createContext, useContext } from "react";
import { CartItem } from "../assets/cart";
import { Product } from "../assets/products";

export type ShoppingCartContextType = {
  cart: CartItem[];
  addItem: (item: Product) => void;
  removeItem: (id: string) => void;
  increment: (id: string) => void;
  decrement: (id: string) => void;
  totalItems: number;
  removeOrderedItems: (id: string[]) => void;
  enableCheckout: () => boolean;
};

export const ShoppingCartContext = createContext<
  ShoppingCartContextType | undefined
>(undefined);

export const useShoppingCart = () => {
  const context = useContext(ShoppingCartContext);
  if (!context) {
    throw new Error(
      "useShoppingCart must be used within a ShoppingCartProvider"
    );
  }
  return context;
};
