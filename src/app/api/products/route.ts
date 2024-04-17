import joi from "joi";

import { productRepo } from "@/app/_helpers/server";
import { apiHandler } from "@/app/_helpers/server/api";
import { headers } from "next/headers";

// module.exports = apiHandler({
//   GET: getAll,
//   POST: create,
// });

async function getAll(req: Request) {
  return await productRepo.getAll();
}

async function create(req: Request) {
  const body = await req.json();
  await productRepo.create(body);
}

export async function GET() {
  const data = await productRepo.getAll();
  return Response.json(data);
}

export async function POST(req: Request) {
  const body = await req.json();
  const product = await productRepo.create(body);
  return new Response(JSON.stringify(product), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
}
