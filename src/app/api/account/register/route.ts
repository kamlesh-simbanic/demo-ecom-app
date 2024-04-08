import joi from "joi";

import { usersRepo } from "@/app/_helpers/server";
import { apiHandler } from "@/app/_helpers/server/api";

module.exports = apiHandler({
  POST: register,
});

async function register(req: Request) {
  const body = await req.json();
  await usersRepo.create(body);
}

register.schema = joi.object({
  name: joi.string().required(),
  mobile: joi.string().required(),
  email: joi.string().required(),
  password: joi.string().min(6).required(),
});
