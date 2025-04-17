// // app/api/auth/register/route.js
// import bcrypt from "bcryptjs";
// import { NextResponse } from "next/server";
// import { executeQuery } from "@/lib/db"; // Adjust path as needed

// export async function POST(req) {
//   try {
//     const { name, email, password } = await req.json();

//     if (!name || !email || !password) {
//       return NextResponse.json(
//         { error: "Missing required fields" },
//         { status: 400 }
//       );
//     }

//     // Check if user exists
//     const existingUsers = await executeQuery({
//       query: "SELECT * FROM users WHERE email = ?",
//       values: [email]
//     });

//     if (existingUsers.length > 0) {
//       return NextResponse.json(
//         { error: "User already exists" },
//         { status: 409 }
//       );
//     }

//     // Hash password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Insert user
//     await executeQuery({
//       query: "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
//       values: [name, email, hashedPassword]
//     });

//     return NextResponse.json(
//       { success: true, message: "User registered successfully" },
//       { status: 201 }
//     );
//   } catch (error) {
//     console.error("Registration error:", error);
//     return NextResponse.json(
//       { error: "Failed to register user" },
//       { status: 500 }
//     );
//   }
// }


import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function POST(request) {
  try {
    const { name, email, password } = await request.json();
    
    // Server-side validation
    const errors = {};
    
    // Name validation
    if (!name) {
      errors.name = "Name is required";
    } else if (name.trim().length < 2) {
      errors.name = "Name must be at least 2 characters";
    } else if (/\d/.test(name)) {
      errors.name = "Name should not contain numbers";
    } else if (name.length > 50) {
      errors.name = "Name should not exceed 50 characters";
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      errors.email = "Please enter a valid email address";
    } else if (email.length > 100) {
      errors.email = "Email should not exceed 100 characters";
    }
    
    // Password validation
    if (!password) {
      errors.password = "Password is required";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    } else if (password.length > 100) {
      errors.password = "Password should not exceed 100 characters";
    } else if (!/(?=.*[a-z])/.test(password)) {
      errors.password = "Password must contain at least one lowercase letter";
    } else if (!/(?=.*[A-Z])/.test(password)) {
      errors.password = "Password must contain at least one uppercase letter";
    } else if (!/(?=.*\d)/.test(password)) {
      errors.password = "Password must contain at least one number";
    }
    
    // Return validation errors if any
    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        { error: "Validation failed", errors },
        { status: 400 }
      );
    }

    // Check if user already exists with more detailed error handling
    try {
      const existingUser = await prisma.users.findFirst({
        where: { email }
      });
      
      if (existingUser) {
        return NextResponse.json(
          { error: "User with this email already exists" },
          { status: 409 }
        );
      }
    } catch (dbError) {
      console.error("Database lookup error:", dbError);
      return NextResponse.json(
        { error: "Error checking existing user" },
        { status: 500 }
      );
    }

    // Hash password with proper salt rounds
    const hashedPassword = await bcrypt.hash(password, 12); // Using 12 rounds for better security
    
    // Create new user with proper error handling
    try {
      const user = await prisma.users.create({
        data: {
          name,
          email,
          password: hashedPassword,
          is_active: 1,
          is_email_verified: 0,
          email_send_count: 0,
          is_upload: 0,
          
        }
      });

      // Remove password from response
      const { password: _, ...userWithoutPassword } = user;

      return NextResponse.json(
        { success: true, message: "User registered successfully", user: userWithoutPassword },
        { status: 201 }
      );
    } catch (createError) {
      console.error("User creation error:", createError);
      return NextResponse.json(
        { error: "Failed to create user account" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { error: "Registration failed. Please try again later." },
      { status: 500 }
    );
  } finally {
    // Disconnect Prisma client to prevent connection leaks
    await prisma.$disconnect();
  }
}