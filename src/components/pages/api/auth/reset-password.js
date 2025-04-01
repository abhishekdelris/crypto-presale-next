// import { getUserById, updateUserPassword } from '../../../lib/auth';
// import { verifyToken } from '../../../lib/jwt';

// export default async function handler(req, res) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ error: 'Method Not Allowed' });
//   }

//   try {
//     const { token, newPassword } = req.body;

//     if (!token || !newPassword) {
//       return res.status(400).json({ error: 'Token and new password are required' });
//     }

//     // Verify the reset token
//     let payload;
//     try {
//       payload = verifyToken(token);
      
//       // Check if token is for password reset
//       if (payload.purpose !== 'password-reset') {
//         throw new Error('Invalid token purpose');
//       }
//     } catch (error) {
//       return res.status(401).json({ error: 'Invalid or expired token' });
//     }

//     // Get user from database
//     const user = await getUserById(payload.id);
//     if (!user || user.email !== payload.email) {
//       return res.status(404).json({ error: 'User not found' });
//     }

//     // Update password in database
//     await updateUserPassword(user.id, newPassword);

//     return res.status(200).json({
//       success: true,
//       message: 'Password has been reset successfully'
//     });
    
//   } catch (error) {
//     console.error('Password reset error:', error);
//     return res.status(500).json({ error: 'Failed to reset password' });
//   }
// }