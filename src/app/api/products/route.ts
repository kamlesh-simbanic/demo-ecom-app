import joi from "joi";

import { productRepo } from "@/app/_helpers/server";
import { apiHandler } from "@/app/_helpers/server/api";

module.exports = apiHandler({
  GET: getAll,
  POST: create,
});

async function getAll() {
  return await productRepo.getAll();
}

async function create(req: Request) {
  const body = await req.json();
  console.log("body", body);

  await productRepo.create(body);
}
