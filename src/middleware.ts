import { NextRequest, NextResponse } from "next/server";

// export function middleware(request: NextRequest) {
//   return NextResponse.redirect(new URL("/", request.url));
// }

// export const config = {
//   matcher: "/products",
// };

// export function middleware(request: NextRequest) {
//   if (request.nextUrl.pathname == "/products") {
//     // return NextResponse.redirect(new URL("/", request.url));
//     return NextResponse.rewrite(new URL("/", request.url));
//   }
// }

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const theme = request.cookies.get("theme");
  if (!theme) {
    response.cookies.set("theme", "dark");
  }
  response.headers.set("custom-header", "custom-value");
  return response;
}
  