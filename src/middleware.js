import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request) {
  const path = request.nextUrl.pathname;
  
  // Public paths that don't require authentication
  const publicPaths = ["/login", "/signup", "/","/listings","/submit_coin","/listicle","/blog","/guestpost","/api/hello","api/auth/register","/api/setup"];
  // const isPublicPath = publicPaths.some(publicPath => 
  //   path === publicPath || path.startsWith("/api/auth/")
  // );
  
  // if (isPublicPath) {
  //   return NextResponse.next();
  // }
  
  // Check for authentication token
  // const token = await getToken({ 
  //   req: request,
  //   // secret: process.env.NEXTAUTH_SECRET
  // });
  
  // Redirect to login if not authenticated
  // if (!token) {
  //   return NextResponse.redirect(new URL("/login", request.url));
  // }
  
  // Role-based path protection
  // const userRoles = token.roles || [];
  // const isAdmin = userRoles.includes("admin");
  
  // Protect admin routes
//   if (path.startsWith("/admin") || path.startsWith("/api/admin")) {
//     if (!isAdmin) {
//       return NextResponse.redirect(new URL("/user/profile", request.url));
//     }
//   }
  
//   return NextResponse.next();
// }

// export const config = {
//   matcher: [
//     // Match all routes except static files, _next, and api/auth
//     "/((?!_next/static|_next/image|favicon.ico|api/auth).*)"
//   ]
 };

 // Middleware to protect admin routes
// middleware.js
// import { NextResponse } from 'next/server';
// import { verify } from 'jsonwebtoken';

// export function middleware(request) {
//   const { pathname } = request.nextUrl;
  
//   // Only run on admin routes
//   if (!pathname.startsWith('/admin')) {
//     return NextResponse.next();
//   }
  
//   // Allow access to login page
//   if (pathname === '/admin/login') {
//     return NextResponse.next();
//   }
  
//   // Check for token
//   const token = request.cookies.get('adminToken')?.value;
  
//   if (!token) {
//     // Redirect to login if no token
//     return NextResponse.redirect(new URL('/admin/login', request.url));
//   }
  
//   try {
//     // Verify token
//     const decoded = verify(token, process.env.JWT_SECRET);
    
//     // Check role for specific paths
//     if (pathname.startsWith('/admin/super-dashboard') && decoded.role !== 'super_admin') {
//       return NextResponse.redirect(new URL('/admin/dashboard', request.url));
//     }
    
//     return NextResponse.next();
//   } catch (error) {
//     // Redirect to login if token invalid
//     return NextResponse.redirect(new URL('/admin/login', request.url));
//   }
// }

// export const config = {
//   matcher: ['/admin/:path*']
// };
