// import { getUserByEmail, verifyPassword } from "../../../lib/auth";
// import { executeQuery } from "../../../lib/db";
// import { sign } from "jsonwebtoken";

// export default async function handler(req, res) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ error: "Method Not Allowed" });
//   }

//   try {
//     const { email, password } = req.body;

//     // Validate input
//     if (!email || !password) {
//       return res.status(400).json({ error: "Email and password are required" });
//     }

//     // Get user from database
//     const user = await getUserByEmail(email);
//     if (!user) {
//       return res.status(401).json({ error: "Invalid credentials" });
//     }

//     // Verify password
//     const isPasswordValid = await verifyPassword(password, user.password);
//     if (!isPasswordValid) {
//       return res.status(401).json({ error: "Invalid credentials" });
//     }

//     // Get user roles
//     const userRoles = await executeQuery({
//       query: `
//         SELECT r.name 
//         FROM roles r
//         JOIN user_roles ur ON r.id = ur.role_id
//         WHERE ur.user_id = ?
//       `,
//       values: [user.id],
//     });

//     const roles = userRoles.map((role) => role.name);

//     // Create session token
//     const token = sign(
//       {
//         id: user.id,
//         email: user.email,
//         name: user.name,
//         roles: roles,
//       },
//       process.env.NEXTAUTH_SECRET,
//       { expiresIn: "30d" }
//     );

//     return res.status(200).json({
//       user: {
//         id: user.id,
//         email: user.email,
//         name: user.name,
//         roles: roles,
//       },
//       token,
//     });

//   } catch (error) {
//     console.error("Login error:", error);
//     return res.status(500).json({ error: "Authentication failed" });
//   }
// }


import { verifyPassword, getUserByEmail } from '../../../lib/auth';
import { generateToken } from '../../../lib/jwt';
// import cookie from 'cookie';

export default async function handler(req, res) {


  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    // Get user from database
    const user = await getUserByEmail(email);
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Verify password
    const isValid = await verifyPassword(password, user.password);
    if (!isValid) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = generateToken({
      id: user.id,
      email: user.email,
      name: user.name
    });
    const cookie = await import('cookie');

    // Set HTTP-only cookie
    res.setHeader('Set-Cookie', cookie.serialize('auth', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: '/'
    }));

    // Return user data (excluding password)
    const { password: _, ...userData } = user;
    
    return res.status(200).json({ 
      success: true, 
      message: 'Login successful',
      token: token,
      user: userData
    });
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ error: 'Failed to log in' });
  }
}