// File: /api/auth/me.js (for API Routes in Next.js)
import jwt from 'jsonwebtoken';
import { serialize } from 'cookie';

export default async function handler(req, res) {
  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Get the auth cookie from the request
    const authCookie = req.cookies.auth;

    // If no auth cookie exists, user is not logged in
    if (!authCookie) {
      return res.status(401).json({ message: 'Not authenticated' });
    }

    // Verify the JWT token
    const secret = process.env.JWT_SECRET || 'your-secret-key'; // Use environment variable in production
    
    // Decode and verify the token
    const decoded = jwt.verify(authCookie, secret);
    
    // Check if token is expired
    if (Date.now() >= decoded.exp * 1000) {
      // Clear the cookie if expired
      res.setHeader('Set-Cookie', serialize('auth', '', {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development',
        sameSite: 'strict',
        path: '/',
        expires: new Date(0),
      }));
      
      return res.status(401).json({ message: 'Token expired' });
    }

    // Return user data (without sensitive information)
    return res.status(200).json({
      id: decoded.id,
      email: decoded.email,
      name: decoded.name,
      // Don't include password or other sensitive data
    });
    
  } catch (error) {
    console.error('Auth verification error:', error);
    
    // If token is invalid or there's another error
    return res.status(401).json({ 
      message: 'Authentication failed',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}