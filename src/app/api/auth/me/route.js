// // app/api/auth/me/route.js
// import jwt from 'jsonwebtoken';
// import { NextResponse } from 'next/server';
// import { serialize } from 'cookie';

// export async function GET(req) {
//   try {
//     // Extract cookies from the request
//     const cookies = req.headers.get('cookie');
//     const authCookie = cookies?.split('; ').find(row => row.startsWith('auth='))?.split('=')[1];

//     if (!authCookie) {
//       return NextResponse.json({ message: 'Not authenticated' }, { status: 401 }); 
//     }

//     // Verify the JWT token
//     const secret = process.env.JWT_SECRET || 'your-secret-key';
//     const decoded = jwt.verify(authCookie, secret) || 0;

//     // Check if token is expired
//     if (Date.now() >= decoded.exp * 1000) {
//       const headers = new Headers();
//       headers.append('Set-Cookie', serialize('auth', '', {
//         httpOnly: true,
//         secure: process.env.NODE_ENV === 'production',
//         sameSite: 'strict',
//         path: '/',
//         expires: new Date(0),
//       }));

//       return NextResponse.json({ message: 'Token expired' }, { status: 401, headers });
//     }

//     // Return user data without sensitive information
//     return NextResponse.json({
//       id: decoded.id,
//       email: decoded.email,
//       name: decoded.name,
//     }, { status: 200 });

//   } catch (error) {
//     console.error('Auth verification error:', error);
//     return NextResponse.json({ 
//       message: 'Authentication failed',
//       error: process.env.NODE_ENV === 'production' ? error.message : undefined
//     }, { status: 401 });
//   }
// }



// app/api/auth/me/route.js
import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';

export async function GET(req) {
  try {
    // Get token from Authorization header instead of cookies
    const authHeader = req.headers.get('Authorization');
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ message: 'Not authenticated' }, { status: 401 });
    }
    
    // Extract the token
    const token = authHeader.split(' ')[1];
    
    // Verify the JWT token
    const secret = process.env.JWT_SECRET;
    if (!secret) {
      console.error('JWT_SECRET is not defined');
      return NextResponse.json({ message: 'Server configuration error' }, { status: 500 });
    }
    
    const decoded = jwt.verify(token, secret);
    
    // Check if token is expired
    if (Date.now() >= decoded.exp * 1000) {
      return NextResponse.json({ message: 'Token expired' }, { status: 401 });
    }
    
    // Return user data
    return NextResponse.json({
      id: decoded.id,
      email: decoded.email,
      name: decoded.name,
    }, { status: 200 });
    
  } catch (error) {
    console.error('Auth verification error:', error);
    return NextResponse.json({ message: 'Authentication failed' }, { status: 401 });
  }
}