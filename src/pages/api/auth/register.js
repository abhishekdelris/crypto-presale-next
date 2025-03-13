// import bcrypt from "bcryptjs";
// import { executeQuery } from "../../../lib/db"; // Adjust path as needed

// export default async function handler(req, res) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ error: "Method Not Allowed" });
//   }

//   try {
//     const { name, email, password } = req.body;

//     if (!name || !email || !password) {
//       return res.status(400).json({ error: "Missing required fields" });
//     }

//     // Check if user exists
//     const existingUsers = await executeQuery({
//       query: "SELECT * FROM users WHERE email = ?",
//       values: [email]
//     });

//     if (existingUsers.length > 0) {
//       return res.status(409).json({ error: "User already exists" });
//     }

//     // Hash password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Insert user
//     await executeQuery({
//       query: "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
//       values: [name, email, hashedPassword]
//     });

//     return res.status(201).json({ success: true, message: "User registered successfully" });
//   } catch (error) {
//     console.error("Registration error:", error);
//     return res.status(500).json({ error: "Failed to register user" });
//   }
// }


// import dbConnect from "@/lib/dbConnect";
// import User from "@/models/User";
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";

// export default async function handler(req, res) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ error: "Method Not Allowed" });
//   }

//   await dbConnect(); // Connect to MongoDB

//   try {
//     const { email, password } = req.body;

//     // Validate input
//     if (!email || !password) {
//       return res.status(400).json({ error: "Email and password are required" });
//     }

//     // Get user from MongoDB
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(401).json({ error: "Invalid credentials" });
//     }

//     // Verify password
//     const isPasswordValid = await bcrypt.compare(password, user.password);
//     if (!isPasswordValid) {
//       return res.status(401).json({ error: "Invalid credentials" });
//     }

//     // Create JWT Token
//     const token = jwt.sign(
//       {
//         id: user._id,
//         email: user.email,
//         name: user.name,
//         roles: user.roles,
//       },
//       process.env.NEXTAUTH_SECRET,
//       { expiresIn: "30d" }
//     );

//     return res.status(200).json({
//       user: {
//         id: user._id,
//         email: user.email,
//         name: user.name,
//         roles: user.roles,
//       },
//       token,
//     });

//   } catch (error) {
//     console.error("Login error:", error);
//     return res.status(500).json({ error: "Authentication failed" });
//   }
// }


import dbConnect from "../../../lib/db";
import User from "../../../models/User";
import bcrypt from "bcryptjs";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  await dbConnect();

  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already exists" });
    }

    // Hash password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    return res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Registration error:", error);
    return res.status(500).json({ error: "Registration failed" });
  }
}
