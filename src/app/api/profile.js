// 5. Example of a protected API route (pages/api/profile.js)
import { withAuth } from '../../middleware/withAuth';
import { getUserById } from '../../lib/auth';

async function handler(req, res) {
  try {
    const user = await getUserById(req.user.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Return user data (excluding password)
    const { password: _, ...userData } = user;
    
    return res.status(200).json({ user: userData });
  } catch (error) {
    console.error('Profile error:', error);
    return res.status(500).json({ error: 'Failed to fetch profile' });
  }
}

export default withAuth(handler);
