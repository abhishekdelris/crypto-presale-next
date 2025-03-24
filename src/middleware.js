import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { verify } from 'jsonwebtoken';


export function middleware(request) {
  const { pathname } = request.nextUrl;
  
  // Only run on admin routes
  if (!pathname.startsWith('/admin')) {
    return NextResponse.next();
  }
  
  // Allow access to login page
  if (pathname === '/admin/login') {
    return NextResponse.next();
  }
  
  // Check for token
  const token = request.cookies.get('adminToken')?.value;
  
  if (!token) {
    // Redirect to login if no token
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }
  
  try {
    // Verify token
    const decoded = verify(token, process.env.JWT_SECRET);
    
    // Check role for specific paths
    if (pathname.startsWith('/admin/super-dashboard') && decoded.role !== 'super_admin') {
      return NextResponse.redirect(new URL('/admin/dashboard', request.url));
    }
    
    return NextResponse.next();
  } catch (error) {
    // Redirect to login if token invalid
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }
}

export const config = {
  matcher: ['/admin/:path*']
};
