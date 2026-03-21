import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Rotas que requerem autenticação
  const protectedPaths = ["/dashboard", "/app", "/settings"];
  const isProtected = protectedPaths.some((path) => pathname.startsWith(path));

  if (isProtected) {
    // Verifica se existe session cookie
    const sessionToken = request.cookies.get("authjs.session-token");
    
    if (!sessionToken) {
      const loginUrl = new URL("/login", request.url);
      loginUrl.searchParams.set("callbackUrl", pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/app/:path*", "/settings/:path*"],
};