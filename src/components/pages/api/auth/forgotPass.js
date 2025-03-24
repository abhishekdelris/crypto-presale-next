// import { getUserByEmail } from '../../../lib/auth';
// import { generatePasswordResetToken } from '../../../lib/jwt';
// // import { sendPasswordResetEmail } from '../../../lib/email';

// export default async function handler(req, res) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ error: 'Method Not Allowed' });
//   }

//   try {
//     const { email } = req.body;

//     if (!email) {
//       return res.status(400).json({ error: 'Email is required' });
//     }

//     // Check if user exists
//     const user = await getUserByEmail(email);
//     if (!user) {
//       // For security reasons, don't reveal if email exists or not
//       return res.status(200).json({ 
//         success: true, 
//         message: 'If your email exists in our system, you will receive a password reset link shortly' 
//       });
//     }

//     // Generate a password reset token (valid for 1 hour)
//     const resetToken = generatePasswordResetToken({
//       id: user.id,
//       email: user.email,
//       purpose: 'password-reset'
//     }, '1h');

//     // Create reset URL (frontend should have a page to handle this)
//     const resetUrl = `${process.env.FRONTEND_URL}/reset-password?token=${resetToken}`;

//     // Send email with reset link
//     // await sendPasswordResetEmail({
//     //   to: user.email,
//     //   name: user.name,
//     //   resetUrl
//     // });

//     return res.status(200).json({
//       success: true,
//       message: 'If your email exists in our system, you will receive a password reset link shortly'
//     });
    
//   } catch (error) {
//     console.error('Password reset request error:', error);
//     return res.status(500).json({ error: 'Failed to process password reset request' });
//   }
// }