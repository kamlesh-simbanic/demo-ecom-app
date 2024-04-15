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

export async function POST(request: Request) {
  const { id, ..._body }: Product = await request.json();
  console.log("_body", _body);

  if (id) {
    if (!id || typeof id !== "string") {
      return NextResponse.json({
        message: "Invalid request, ID parameter missing or invalid",
      });
    }

    let result = products.map((p) => (p.id === id ? _body : p));

    return NextResponse.json(_body);
  }

  products.push({ ..._body, id: `${Date.now()}` });

  return NextResponse.json(_body);
}
