import joi from "joi";

import { productRepo } from "@/app/_helpers/server";
import { apiHandler } from "@/app/_helpers/server/api";
import { headers } from "next/headers";
import { NextRequest } from "next/server";

import { db } from "@/app/_helpers/server/db";
import { getQueryParams } from "@/app/_helpers/server/misc";

const Product = db.Product;

// module.exports = apiHandler({
//   GET: getAll,
//   POST: create,
// });

async function getAll(req: NextRequest) {
  return await productRepo.getAll();
}

async function create(req: Request) {
  const body = await req.json();
  await productRepo.create(body);
}

export async function GET(req: NextRequest) {
  const { search } = getQueryParams(req);

  let query: any = {};

  if (search) {
    query["name"] = { $regex: search, $options: "i" };
  }

  const products = await Product.find(query);
  return Response.json(products);
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
