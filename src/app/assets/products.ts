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

export const products: Product[] = [
  {
    id: "1",
    name: "Product 1",
    price: 10.99,
    shortDesc: "Short description for Product 1",
    imageUrl: "/images/product1.jpg",
    quantity: 1,
  },
  {
    id: "2",
    name: "Product 2",
    price: 19.99,
    shortDesc: "Short description for Product 2",
    imageUrl: "/images/product2.jpg",
    quantity: 1,
  },
  {
    id: "3",
    name: "Product 3",
    price: 15.49,
    shortDesc: "Short description for Product 3",
    imageUrl: "/images/product3.jpg",
    quantity: 1,
  },
  {
    id: "4",
    name: "Product 4",
    price: 12.99,
    shortDesc: "Short description for Product 4",
    imageUrl: "/images/product4.jpg",
    quantity: 1,
  },
  {
    id: "5",
    name: "Product 5",
    price: 8.99,
    shortDesc: "Short description for Product 5",
    imageUrl: "/images/product5.jpg",
    quantity: 1,
  },
  {
    id: "6",
    name: "Product 6",
    price: 24.99,
    shortDesc: "Short description for Product 6",
    imageUrl: "/images/product6.jpg",
    quantity: 1,
  },
  {
    id: "7",
    name: "Product 7",
    price: 17.99,
    shortDesc: "Short description for Product 7",
    imageUrl: "/images/product7.jpg",
    quantity: 1,
  },
  {
    id: "8",
    name: "Product 8",
    price: 11.49,
    shortDesc: "Short description for Product 8",
    imageUrl: "/images/product8.jpg",
    quantity: 1,
  },
  {
    id: "9",
    name: "Product 9",
    price: 14.99,
    shortDesc: "Short description for Product 9",
    imageUrl: "/images/product9.jpg",
    quantity: 1,
  },
  {
    id: "10",
    name: "Product 10",
    price: 9.99,
    shortDesc: "Short description for Product 10",
    imageUrl: "/images/product10.jpg",
    quantity: 1,
  },
];
