import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request) {
  const path = request.nextUrl.pathname;
  
  // Public paths that don't require authentication
  const publicPaths = ["/login", "/signup", "/","/listings","/submit_coin","/listicle","/blog","/guestpost"];
  const isPublicPath = publicPaths.some(publicPath => 
    path === publicPath || path.startsWith("/api/auth/")
  );
  
  if (isPublicPath) {
    return NextResponse.next();
  }
  
  // Check for authentication token
  const token = await getToken({ 
    req: request,
    secret: process.env.NEXTAUTH_SECRET
  });
  
  // Redirect to login if not authenticated
  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  
  // Role-based path protection
  const userRoles = token.roles || [];
  const isAdmin = userRoles.includes("admin");
  
  // Protect admin routes
  if (path.startsWith("/admin") || path.startsWith("/api/admin")) {
    if (!isAdmin) {
      return NextResponse.redirect(new URL("/user/profile", request.url));
    }
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Match all routes except static files, _next, and api/auth
    "/((?!_next/static|_next/image|favicon.ico|api/auth).*)"
  ]
};