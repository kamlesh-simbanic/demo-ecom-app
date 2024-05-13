import { db } from "@/app/_helpers/server/db";
import { NextRequest } from "next/server";

const Order = db.Order;

export async function POST(req: NextRequest) {
  const userId = req.cookies.get("userID");

  await Order.deleteMany();

  const body = await req.json();
  console.log("body", body);

  const order = new Order({
    ...body,
    userId,
  });

  const result = await Order.insertMany([order]);

  if (result[0]) {
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
  const userId = req.cookies.get("userID");
  const result = await Order.find({ userId });
  return Response.json(result);
}
