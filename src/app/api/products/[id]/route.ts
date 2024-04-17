import joi from "joi";

import { apiHandler } from "@/app/_helpers/server/api";
import { productRepo } from "@/app/_helpers/server";

// module.exports = apiHandler({
//   // GET: getById,
//   PUT: update,
//   DELETE: _delete,
// });

async function getById(req: Request, { params: { id } }: any) {
  return await productRepo.getById(id);
}

async function update(req: Request, { params: { id } }: any) {
  const body = await req.json();
  await productRepo.update(id, body);
}

async function _delete(req: Request, { params: { id } }: any) {
  await productRepo.remove(id);
}

export async function GET(
  req: Request,
  { params: { id } }: { params: { id: string } }
) {
  const product = await productRepo.getById(id);

  return Response.json(product);
}
