import { ProductPayload } from "@/app/assets/products";
import { ErrorValidation } from "@/app/types/common";

export const validateProduct = (product: ProductPayload) => {
  const errors: ErrorValidation = {};

  if (!product.name) {
    errors.name = "Name is required";
  }

  if (
    product.price === undefined ||
    isNaN(product.price) ||
    product.price <= 0
  ) {
    errors.price = "Price must be a positive number";
  }

  if (!product.shortDesc) {
    errors.shortDesc = "Short description is required";
  }

  if (
    product.quantity === undefined ||
    isNaN(product.quantity) ||
    product.quantity <= 0
  ) {
    errors.quantity = "Quantity must be a positive number";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};
