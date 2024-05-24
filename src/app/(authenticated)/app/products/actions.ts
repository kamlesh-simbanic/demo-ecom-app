"use server";

import { Product, ProductPayload } from "@/app/assets/products";
import { revalidatePath } from "next/cache";
import { productRepo } from "@/app/_helpers/server/product-repo";
import { validateProduct } from "./add/helper";
import { redirect } from "next/navigation";

export const addProduct = async (prevState: any, formData: ProductPayload) => {
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

  try {
    await productRepo.create(formData);
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
  const result = await productRepo.getById(id);
  revalidatePath(`/app/products`);
  return result as Product;
};
