// // app/api/auth/register/route.js
// import bcrypt from "bcryptjs";
// import { NextResponse } from "next/server";
// import { executeQuery } from "@/lib/db"; // Adjust path as needed

// export async function POST(req) {
//   try {
//     const { name, email, password } = await req.json();

//     if (!name || !email || !password) {
//       return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
//     }

//     // Check if user exists
//     const existingUsers = await executeQuery({
//       query: "SELECT * FROM users WHERE email = ?",
//       values: [email],
//     });

//     if (existingUsers.length > 0) {
//       return NextResponse.json({ error: "User already exists" }, { status: 409 });
//     }

//     // Hash password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Insert user
//     await executeQuery({
//       query: "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
//       values: [name, email, hashedPassword],
//     });

//     return NextResponse.json({ success: true, message: "User registered successfully" }, { status: 201 });
//   } catch (error) {
//     console.error("Registration error:", error);
//     return NextResponse.json({ error: "Failed to register user" }, { status: 500 });
//   }
// }

import { executeQuery } from "@/lib/db";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { username, email, password, role } = await request.json();

    // Validate required fields
    if (!username || !email || !password) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Check if super admin exists when creating one
    if (role === "super_admin") {
      const existingSuperAdmin = await executeQuery({
        query: 'SELECT id FROM admins WHERE role = "super_admin"'
      });

      if (existingSuperAdmin.length > 0) {
        return NextResponse.json(
          { error: "Super admin already exists" },
          { status: 400 }
        );
      }
    }

    // Check if email already exists
    const existingAdmin = await executeQuery({
      query: "SELECT id FROM admins WHERE email = ?",
      values: [email]
    });

    if (existingAdmin.length > 0) {
      return NextResponse.json(
        { error: "Email already registered" },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await hash(password, 10);

    // Create admin
    await executeQuery({
      query:
        "INSERT INTO admins (username, email, password, role) VALUES (?, ?, ?, ?)",
      values: [username, email, hashedPassword, role || "admin"]
    });

    return NextResponse.json(
      { message: "Admin registered successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
