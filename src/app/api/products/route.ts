import { Product, products } from "@/app/assets/products";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic"; // defaults to auto

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (id) {
    if (!id || typeof id !== "string") {
      return NextResponse.json({
        message: "Invalid request, ID parameter missing or invalid",
      });
    }

    const product = products.find((p) => p.id === id) as Product;

    return NextResponse.json(product);
  }

  return NextResponse.json(products);
}
