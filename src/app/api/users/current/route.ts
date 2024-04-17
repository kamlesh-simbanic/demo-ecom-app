import { usersRepo } from "@/app/_helpers/server";
import { apiHandler } from "@/app/_helpers/server/api";
import { headers } from "next/headers";
import { NextRequest } from "next/server";

// module.exports = apiHandler({
//   GET: getCurrent,
// });

async function getCurrent() {
  return await usersRepo.getCurrent();
}

export async function GET(request: NextRequest) {
  const reqHeaders = new Headers(request.headers);
  const headerList = headers();

  console.log(reqHeaders.get("Authorization"));
  console.log(headerList.get("Authorization"));

  return new Response("<h1>Profle Api data</h1>", {
    headers: { "Content-Type": "text/html" },
  });
}
