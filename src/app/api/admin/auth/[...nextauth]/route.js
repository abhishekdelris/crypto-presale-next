// import NextAuth from 'next-auth';
// import GoogleProvider from 'next-auth/providers/google';

// const handler = NextAuth({
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     }),
//   ],
//   secret: process.env.NEXTAUTH_SECRET,
// });

// export { handler as GET, handler as POST };



// app/api/admin/auth/[...nextauth]/route.js
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";
import { compare } from "bcrypt";

const prisma = new PrismaClient();

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      
      
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email and password are required");
        }
        // console.log("credentials....",credentials);
        // Find admin by email
        const admin = await prisma.admins.findUnique({
          where: { email: credentials.email }
        });
        // console.log("admin",admin);
        
        if (!admin) {
          throw new Error("Invalid credentials");
        }

        // Compare password
        const passwordMatch = await compare(credentials.password, admin.password);

        if (!passwordMatch) {
          throw new Error("Invalid credentials");
        }

        // Return user object (without password)
        const { password, ...adminData } = admin;
        return {
          id: admin.id,
          email: admin.email,
          name: admin.username,
          role: admin.role
        };
      }
    })
  ],

  callbacks: {
    async jwt({ token, user }) {
      // Add role to token when first logged in
      // console.log("jwt usr",user);
      
      if (user) {
        token.role = user.role;
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      // Add role to session
      session.user.role = token.role;
      session.user.id = token.id;
      return session;
    }
  },
  pages: {
    signIn: '/admin', // Custom login page path
  },
  session: {
    strategy: "jwt",
    maxAge: 8 * 60 * 60, // 8 hours
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST }; 