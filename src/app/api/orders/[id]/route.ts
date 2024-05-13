import { db } from "@/app/_helpers/server/db";

const Order = db.Order;

export async function GET(
  req: Request,
  { params: { id } }: { params: { id: string } }
) {
  const order = await Order.findById(id);
  return Response.json(order);
}

export async function DELETE(
  req: Request,
  { params: { id } }: { params: { id: string } }
) {
  const result = await Order.deleteOne({ _id: id });
  return Response.json(result);
}
