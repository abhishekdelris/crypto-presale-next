// // middleware.js
// import { NextResponse } from 'next/server';
// import { verify } from 'jsonwebtoken';

// export async function middleware(req) {
//   // Get token from Authorization header or cookie
//   const authHeader = req.headers.get('Authorization');
//   const token = authHeader && authHeader.startsWith('Bearer ') 
//     ? authHeader.split(' ')[1] 
//     : req.cookies.get('adminToken')?.value;
  
//   let isAuthenticated = false;
  
//   if (token) {
//     try {
//       // Verify token
//       const decoded = verify(token, process.env.JWT_SECRET);
//       isAuthenticated = !!decoded;
//     } catch (error) {
//       isAuthenticated = false;
//     }
//   }
  
//   // Get the pathname of the request
//   const path = req.nextUrl.pathname;
  
//   // Protected paths (require authentication)
//   const protectedPaths = ['/admin/dashboard', '/admin/crypto-coins-icos', '/admin/content'];
//   const isProtectedPath = protectedPaths.some(pp => path === pp || path.startsWith(`${pp}/`));
  
//   // Paths that should redirect authenticated users (like login pages)
//   const authPaths = ['/admin'];
//   const isAuthPath = authPaths.some(ap => path === ap);
  
//   // Redirect authenticated users away from auth pages
//   if (isAuthenticated && isAuthPath) {
//     return NextResponse.redirect(new URL('/admin/dashboard', req.url));
//   }
  
//   // Redirect unauthenticated users away from protected pages
//   if (!isAuthenticated && isProtectedPath) {
//     return NextResponse.redirect(new URL('/admin', req.url));
//   }
  
//   return NextResponse.next();
// }

// export const config = {
//   matcher: [
//     '/admin',
//     '/admin/dashboard',
//     '/admin/dashboard/:path*',
//     '/admin/content',
//     '/admin/content/:path*',
//     '/admin/crypto-coins-icos',
//     '/admin/crypto-coins-icos/:path*',
//   ],
// };



// middleware.js
import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req) {
  // Get the pathname of the request
  const path = req.nextUrl.pathname;
  
  // Protected paths (require authentication)
  const protectedPaths = ['/admin/dashboard', '/admin/crypto-coins-icos'];
  const isProtectedPath = protectedPaths.some(pp => path === pp || path.startsWith(`${pp}/`));
  
  // Paths that should redirect authenticated users (like login pages)
  const authPaths = ['/admin'];
  const isAuthPath = authPaths.some(ap => path === ap);
  
  // Check authentication status with NextAuth.js
  const token = await getToken({ 
    req, 
    secret: process.env.NEXTAUTH_SECRET 
  });
  
  const isAuthenticated = !!token;
  
  // Redirect authenticated users away from auth pages to dashboard
  if (isAuthenticated && isAuthPath) {
    return NextResponse.redirect(new URL('/admin/dashboard', req.url));
  }
  
  // Redirect unauthenticated users away from protected pages to login
  if (!isAuthenticated && isProtectedPath) {
    return NextResponse.redirect(new URL('/admin', req.url));
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/admin',
    '/admin/dashboard',
    '/admin/dashboard/:path*',
    '/admin/content',
    '/admin/content/:path*',
    '/admin/crypto-coins-icos',
    '/admin/crypto-coins-icos/:path*',
  ],
};