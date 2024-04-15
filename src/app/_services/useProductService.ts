import { create } from "zustand";
import { useRouter, useSearchParams } from "next/navigation";

import { useAlertService } from "@/app/_services";
import { useFetch } from "@/app/_helpers/client";

export { useProductService };

// user state store
const initialState = {
  products: [
    {
      id: "",
      name: "",
      price: 0,
      shortDesc: "",
      imageUrl: "",
      quantity: 0,
    },
  ],
  product: {
    id: "",
    name: "",
    price: 0,
    shortDesc: "",
    imageUrl: "",
    quantity: 0,
  },
};
const userStore = create<IProductStore>(() => initialState);

function useProductService(): IProductService {
  const alertService = useAlertService();
  const fetch = useFetch();
  const router = useRouter();
  const searchParams = useSearchParams();
  const { product, products } = userStore();

  return {
    product,
    products,
    getAll: async () => {
      userStore.setState({ products: await fetch.get("/api/products") });
    },
    getById: async (id) => {
      userStore.setState({ product: undefined });
      try {
        userStore.setState({ product: await fetch.get(`/api/products/${id}`) });
      } catch (error: any) {
        alertService.error(error);
      }
    },
    create: async (user) => {
      await fetch.post("/api/products", user);
      alertService.success("Product successful", true);
    },
    update: async (id, params) => {
      await fetch.put(`/api/products/${id}`, params);

      // update current user if the user updated their own record
      if (id === product?.id) {
        userStore.setState({ product: { ...product, ...params } });
      }
    },
    delete: async (id) => {
      const response = await fetch.delete(`/api/products/${id}`);

      // remove deleted user from state
      userStore.setState({ products: products!.filter((x) => x.id !== id) });
    },
  };
}

// interfaces

export interface IProduct {
  id: string;
  name: string;
  price: number;
  shortDesc: string;
  imageUrl: string;
  quantity: number;
}

interface IProductStore {
  products: IProduct[];
  product: IProduct;
}

interface IProductService extends IProductStore {
  products: IProduct[];
  product: IProduct;
  getAll: () => Promise<void>;
  getById: (id: string) => Promise<void>;
  create: (user: IProduct) => Promise<void>;
  update: (id: string, params: Partial<IProduct>) => Promise<void>;
  delete: (id: string) => Promise<void>;
}
