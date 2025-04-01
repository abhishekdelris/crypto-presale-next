import { verifyToken } from '../lib/jwt';
import cookie from 'cookie';

export function withAuth(handler) {
  return async (req, res) => {
    try {
      // Get token from cookies
      const cookies = cookie.parse(req.headers.cookie || '');
      const token = cookies.auth;

      if (!token) {
        return res.status(401).json({ error: 'Authentication required' });
      }

      // Verify token
      const decoded = verifyToken(token);
      if (!decoded) {
        return res.status(401).json({ error: 'Invalid or expired token' });
      }

      // Add user data to request
      req.user = decoded;

      // Call the original handler
      return handler(req, res);
    } catch (error) {
      console.error('Auth middleware error:', error);
      return res.status(500).json({ error: 'Authentication error' });
    }
  };
}