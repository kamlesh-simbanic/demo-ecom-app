import { db } from "@/app/_helpers/server/db";
import { OrderPayload } from "@/app/assets/orders";
import mongoose from "mongoose";
import { NextRequest } from "next/server";

const Order = db.Order;
const Product = db.Product;

export async function POST(req: NextRequest) {
  const userId = req.cookies.get("userID");

  // await Order.deleteMany();

  const { items, ...body } = (await req.json()) as OrderPayload;

  const order = new Order({
    ...body,
    items,
    userId: userId?.value,
  });

  const result = await Order.insertMany([order]);

  if (result[0]) {
    await Product.updateMany(
      { _id: { $in: items.map((x) => x.productId) } },
      { $inc: { quantity: -1 } }
    );
    return new Response(JSON.stringify(result[0]), {
      headers: {
        "Content-Type": "application/json",
      },
      status: 201,
    });
  }

  return new Response(null, {
    headers: {
      "Content-Type": "application/json",
    },
    status: 400,
  });
}

export async function GET(req: NextRequest) {
  const userId = req.cookies.get("userID")?.value;
  const result = await Order.find({ userId });
  return Response.json(result);
}
