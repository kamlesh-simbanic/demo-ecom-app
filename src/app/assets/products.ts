export type Product = {
  id: string;
  name: string;
  price: number;
  shortDesc: string;
  imageUrl: string;
  quantity: number;
};

export type ProductPayload = Omit<Product, "id">;

export const initialProduct = {
  id: "",
  name: "",
  price: 0,
  shortDesc: "",
  imageUrl: "",
  quantity: 0,
};
