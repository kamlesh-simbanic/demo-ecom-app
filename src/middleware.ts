import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const url = new URL(request.url);
  const authorization = request.cookies.get("authorization");

  if (url.pathname.startsWith("/app") && !url.pathname.includes("/account")) {
    // Run your middleware logic here
    if (!authorization?.name) {
      return NextResponse.redirect(new URL("/signin", request.url));
    }
  }
}

export const config = {
  matcher: (request: NextRequest) => {
    const url = new URL(request.url);

    // Check if the request is for an API path
    if (url.pathname.startsWith("/api")) {
      return true;
    }

    // Check if the request URL starts with "/app"
    if (url.pathname.startsWith("/app")) {
      return true;
    }

    // Check if the request URL starts with "/account"
    if (url.pathname.startsWith("/api/account")) {
      return false;
    }

    return false;
  },
};

// export function middleware(request: NextRequest) {
//   if (request.nextUrl.pathname == "/products") {
//     // return NextResponse.redirect(new URL("/", request.url));
//     return NextResponse.rewrite(new URL("/", request.url));
//   }
// }

// export function middleware(request: NextRequest) {
//   const response = NextResponse.next();
//   const theme = request.cookies.get("theme");
//   if (!theme) {
//     response.cookies.set("theme", "dark");
//   }
//   response.headers.set("custom-header", "custom-value");
//   return response;
// }
