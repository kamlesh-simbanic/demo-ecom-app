import { Product, products } from "@/app/assets/products";
import { NextApiRequest, NextApiResponse } from "next";

export const dynamic = "force-dynamic"; // defaults to auto

export default async function GET(
  request: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = request.query; // Assuming you want to access an 'id' parameter

  // Use the 'id' parameter in your logic
  console.log("ID:", id);

  const product = products.find((p) => p.id === id) as Product;

  // Send a response
  res.status(200).json({ product });
}
