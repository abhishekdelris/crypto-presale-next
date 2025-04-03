// import { verifyPassword, getUserByEmail } from '../../../../lib/auth';
// import { generateToken } from '../../../../lib/jwt';
// import { cookies } from 'next/headers';
// import { NextResponse } from 'next/server';

// export async function POST(request) {
//   try {
//     // Parse the request body
//     const body = await request.json();
//     const { email, password } = body;

//     if (!email || !password) {
//       return NextResponse.json(
//         { error: 'Email and password are required' },
//         { status: 400 }
//       );
//     }

//     // Get user from database
//     const user = await getUserByEmail(email);
//     if (!user) {
//       return NextResponse.json(
//         { error: 'Invalid credentials' },
//         { status: 401 }
//       );
//     }

//     // Verify password
//     const isValid = await verifyPassword(password, user.password);
//     if (!isValid) {
//       return NextResponse.json(
//         { error: 'Invalid credentials' },
//         { status: 401 }
//       );
//     }

//     // Generate JWT token
//     const token = generateToken({
//       id: user.id,
//       email: user.email,
//       name: user.name
//     });

//     // Create a new response
//     const response = NextResponse.json({
//       success: true,
//       message: 'Login successful',
//       token: token,
//       user: {
//         id: user.id,
//         email: user.email,
//         name: user.name
//         // Exclude password
//       }
//     });

//     const cookieStore = cookies();
//     cookieStore.set({
//       name: 'auth',
//       value: token,
//       httpOnly: true,
//       secure: process.env.NODE_ENV === 'production',
//       sameSite: 'strict',
//       maxAge: 60 * 60 * 24 * 7, // 1 week
//       path: '/'
//     });

//     return response;
//   } catch (error) {
//     console.error('Login error:', error);
//     return NextResponse.json(
//       { error: 'Failed to log in' },
//       { status: 500 }
//     );
//   }
// }

// app/api/auth/login/route.js
import { executeQuery } from "@/lib/db";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    // Find admin by email
    const admins = await executeQuery({
      query: "SELECT * FROM admins WHERE email = ?",
      values: [email]
    });

    if (admins.length === 0) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    const admin = admins[0];

    // Compare password
    const passwordMatch = await compare(password, admin.password);

    if (!passwordMatch) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    // Generate JWT
    const token = sign(
      {
        id: admin.id,
        email: admin.email,
        role: admin.role,
        username: admin.username
      },
      process.env.JWT_SECRET,
      { expiresIn: "8h" }
    );

    // Remove password from response
    const { password: _, ...adminData } = admin;

    return NextResponse.json({
      message: "Login successful",
      token,
      admin: adminData
    });
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
