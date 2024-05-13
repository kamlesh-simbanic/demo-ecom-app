import { db } from "@/app/_helpers/server/db";

const Order = db.Order;

export async function POST(req: Request) {
  const body = await req.json();
  const order = new Order(body);

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

export async function GET(req: Request) {
  const result = await Order.find({});
  return Response.json(result);
}
