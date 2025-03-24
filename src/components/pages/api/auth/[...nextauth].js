// import NextAuth from "next-auth";
// import Providers from "next-auth/providers";

// export default NextAuth({
//   providers: [
//     Providers.Credentials({
//       name: "Credentials",
//       credentials: {
//         email: { label: "Email", type: "email", placeholder: "example@example.com" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials) {
//         if (credentials.email === "test@example.com" && credentials.password === "password") {
//           return { id: 1, name: "Test User", email: credentials.email };
//         }
//         return null;
//       }
//     })
//   ],
//   pages: {
//     signIn: "/login", 
//   },
// });

"use server"
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { getUserByEmail, verifyPassword } from "../../../lib/auth";
import { executeQuery } from "../../../lib/db";
import { sign } from "jsonwebtoken";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "example@example.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials;

        // Validate input
        if (!email || !password) {
          throw new Error("Email and password are required");
        }

        // Get user from database
        const user = await getUserByEmail(email);
        if (!user) {
          throw new Error("Invalid credentials");
        }

        // Verify password
        const isPasswordValid = await verifyPassword(password, user.password);
        if (!isPasswordValid) {
          throw new Error("Invalid credentials");
        }

        // Get user roles
        const userRoles = await executeQuery({
          query: `
            SELECT r.name 
            FROM roles r
            JOIN user_roles ur ON r.id = ur.role_id
            WHERE ur.user_id = ?
          `,
          values: [user.id],
        });

        const roles = userRoles.map((role) => role.name);

        // Return user object
        return {
          id: user.id,
          email: user.email,
          name: user.name,
          roles,
        };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.roles = user.roles;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      session.user.roles = token.roles;
      return session;
    },
  },
});

