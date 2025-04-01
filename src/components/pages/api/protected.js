// /pages/api/protected.js
import { verifyToken } from '../../lib/jwt';

export default function handler(req, res) {
  const token = req.headers.authorization?.split(' ')[1]; // Assuming Bearer Token

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized, token not provided' });
  }

  const decoded = verifyToken(token);

  if (!decoded) {
    return res.status(401).json({ error: 'Unauthorized, invalid token' });
  }

  res.status(200).json({ message: 'Protected data accessed', user: decoded });
}
