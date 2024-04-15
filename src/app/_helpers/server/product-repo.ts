import { headers } from "next/headers";
import { db } from "./db";

const Product = db.Product;

export const productRepo = {
  create,
  getById,
  update,
  remove,
  getAll,
};

async function create(params: any) {
  const product = new Product(params);
  await product.save();
}

async function getAll() {
  return await Product.find();
}

async function getById(id: string) {
  try {
    return await Product.findById(id);
  } catch {
    throw "Product Not Found";
  }
}

async function update(id: string, params: any) {
  const product = await Product.findById(id);

  // validate
  if (!product) throw "User not found";

  // copy params properties to user
  Object.assign(product, params);
  await product.save();
}

async function remove(id: string) {
  await Product.findByIdAndDelete(id);
}
