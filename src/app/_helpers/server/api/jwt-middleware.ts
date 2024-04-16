import { NextRequest } from "next/server";

import { auth } from "@/app/_helpers/server";

export { jwtMiddleware };

async function jwtMiddleware(req: NextRequest) {
  if (isPublicPath(req)) return;

  // verify token in request cookie
  const id = auth.verifyToken();
  req.headers.set("userId", id);
}

function isPublicPath(req: NextRequest) {
  // public routes that don't require authentication
  const publicPaths = [
    "POST:/api/account/login",
    "POST:/api/account/logout",
    "POST:/api/account/register",
    "GET:/api/products",
    /^GET:\/api\/products\/[0-9a-f]{24}$/,
  ];
  const path = `${req.method}:${req.nextUrl.pathname}`;

  // return publicPaths.includes(`${req.method}:${req.nextUrl.pathname}`);
  return publicPaths.some((p) => {
    if (typeof p === "string") {
      return p === path;
    } else if (p instanceof RegExp) {
      return p.test(path);
    }
    return false;
  });
}
