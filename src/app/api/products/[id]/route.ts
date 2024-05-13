import { productRepo } from "@/app/_helpers/server";

export async function GET(
  req: Request,
  { params: { id } }: { params: { id: string } }
) {
  const product = await productRepo.getById(id);

  return Response.json(product);
}

export async function PUT(
  req: Request,
  { params: { id } }: { params: { id: string } }
) {
  const body = await req.json();
  const result = await productRepo.update(id, body);
  return Response.json(result);
}

export async function DELETE(
  req: Request,
  { params: { id } }: { params: { id: string } }
) {
  const result = await productRepo.remove(id);

  return Response.json(result);
}
