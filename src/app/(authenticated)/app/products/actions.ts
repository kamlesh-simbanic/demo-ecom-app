"use server";

import { Product, ProductPayload } from "@/app/assets/products";
import { revalidatePath } from "next/cache";
import { db } from "@/app/_helpers/server";
import { validateProduct } from "./add/helper";

const ProductModel = db.Product;

export const addProduct = async (prevState: any, formData: ProductPayload) => {
  try {
    const product = new ProductModel(formData);
    const result = await ProductModel.insertMany([product]);
    revalidatePath(`/app/products`);
    return { success: "Product Saved Successfully", error: "" };
  } catch (error: any) {
    if (error.code === 11000) {
      return {
        error: `Product with name ${formData.name} already exists`,
        success: "",
      };
    } else {
      return { error: `Error inserting product: ${error}`, success: "" };
    }
  }
};

export const getProduct = async (id: string) => {
  const result = await ProductModel.findById(id);
  return result as Product;
};

export const getProducts = async () => {
  const result = await ProductModel.find();
  return result as Product[];
};

export const updateProduct = async (
  prevState: any,
  // id: string,
  formData: FormData
) => {
  const id = formData.get("id") as string;
  const payload: ProductPayload = {
    name: formData.get("name") as string,
    price: parseInt(formData.get("price") as string),
    quantity: parseInt(formData.get("quantity") as string),
    shortDesc: formData.get("shortDesc") as string,
    imageUrl: "",
  };

  console.log("payload", payload);

  const { errors, isValid } = validateProduct(payload);

  if (!isValid) return { validations: errors, success: "", error: "" };

  const product = await ProductModel.findById(id);

  if (!product) return { error: "not found" };

  const result = await ProductModel.findByIdAndUpdate(
    id,
    { $set: payload },
    { new: true }
  );

  revalidatePath(`/app/products`);
  return { success: "Product Saved Successfully", error: "" };
};

export const removeProduct = async (id: string) => {
  await ProductModel.findByIdAndDelete(id);
  revalidatePath(`/app/products`);
};

// const payload: ProductPayload = {
//   name: formData.get("name") as string,
//   price: parseInt(formData.get("price") as string),
//   quantity: parseInt(formData.get("quantity") as string),
//   shortDesc: formData.get("shortDesc") as string,
//   imageUrl: "",
// };

// const { errors, isValid } = validateProduct(payload);

// if (!isValid) return { validations: errors, success: "" };

// const result = await productRepo.create(formData);
// console.log("result", result.error);
// revalidatePath(`/app/products`);
// return { success: "Product Saved Successfully" };
// redirect(`/app/products`);
