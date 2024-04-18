export const dynamic = "force-dynamic";
import { usersRepo } from "@/app/_helpers/server";
import { apiHandler } from "@/app/_helpers/server/api";
import { cookies, headers } from "next/headers";
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

  cookies().set("resultPerPage", "20");
  const theme = request.cookies.get("theme");

  console.log(reqHeaders.get("Authorization"));
  console.log(headerList.get("Authorization"));

  console.log(theme);
  console.log(cookies().get("resultPerPage"));

  // return new Response.json({ time: new Date.now() });
  return new Response(JSON.stringify({ time: Date.now() }), {
    headers: { "Content-Type": "application/json" },
  });

  return new Response("<h1>Profle Api data</h1>", {
    headers: { "Content-Type": "text/html", "Set-Cookie": "theme=dark" },
  });
}
