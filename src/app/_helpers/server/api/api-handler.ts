import { NextRequest, NextResponse } from "next/server";

import { errorHandler, jwtMiddleware, validateMiddleware } from "./";

export { apiHandler };

function apiHandler(handler: any) {
  const wrappedHandler: any = {};
  const httpMethods = ["GET", "POST", "PUT", "PATCH", "DELETE"];

  // wrap handler methods to add middleware and global error handler
  httpMethods.forEach((method) => {
    if (typeof handler[method] !== "function") return;

    wrappedHandler[method] = async (req: NextRequest, ...args: any) => {
      try {
        // monkey patch req.json() because it can only be called once
        const json = await req.json();
        req.json = () => json;
      } catch {}

      try {
        // global middleware

        const isPublic = [
          req.url.includes("/products") && method == "GET",
          req.url.includes("/users") && method !== "GET",
        ].some((x) => x === true);

        if (isPublic === false) {
          await jwtMiddleware(req);
        }
        await validateMiddleware(req, handler[method].schema);

        const responseBody = await handler[method](req, ...args);
        return NextResponse.json(responseBody || {});
      } catch (err: any) {
        // global error handler
        return errorHandler(err);
      }
    };
  });

  return wrappedHandler;
}
