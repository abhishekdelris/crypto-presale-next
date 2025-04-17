// // app/api/auth/logout/route.js
// import { NextResponse } from 'next/server';
// import cookie from 'cookie';

// export async function POST() {
//   // Clear the auth cookie
//   const headers = new Headers();
//   headers.append(
//     'Set-Cookie',
//     cookie.serialize('auth', '', {
//       httpOnly: true,
//       secure: process.env.NODE_ENV === 'production',
//       sameSite: 'strict',
//       expires: new Date(0),
//       path: '/',
//     })
//   );

//   return NextResponse.json({ success: true, message: 'Logged out successfully' }, { status: 200, headers });
// }

// // app/api/auth/logout/route.js
// import { NextResponse } from 'next/server';
// import { getIronSession } from 'iron-session';
// import { cookies } from 'next/headers';

// // Define session options (should match your session config elsewhere)
// const sessionOptions = {
//   password: process.env.SESSION_PASSWORD, // Ensure this is at least 32 characters long
//   cookieName: 'next-auth-session',
//   cookieOptions: {
//     secure: process.env.NODE_ENV === 'production',
//     httpOnly: true,
//     sameSite: 'strict',
//     path: '/',
//   },
// };

// export async function POST() {
//   const session = await getIronSession(cookies(), sessionOptions);

//   // Clear all session data
//   session.destroy();

//   return NextResponse.json(
//     { success: true, message: 'Logged out successfully' },
//     { status: 200 }
//   );
// }


// app/api/auth/logout/route.js
// import { NextResponse } from "next/server";
// import { cookies } from "next/headers";

// export async function POST(req) {
//   try {
//     // Clear the auth cookie using Next.js built-in cookies API
//     cookies().delete("auth");

//     // No need to handle the token here since it's stored in localStorage
//     // The client will handle clearing the token from localStorage

//     return NextResponse.json(
//       { success: true, message: "Logged out successfully" },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error("Logout error:", error);
//     return NextResponse.json(
//       { success: false, message: "Logout failed" },
//       { status: 500 }
//     );
//   }
// }



// app/api/auth/logout/route.js
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../[...nextauth]/route";

export async function POST(request) {
  try {
    // Get current session
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json(
        { message: "No active session to logout" },
        { status: 200 }
      );
    }
    
    // Since NextAuth handles the actual session destruction via the /api/auth/signout endpoint,
    // this API can be used for any additional logout operations you might need
    
    // For example, you could log the logout event
    console.log(`User ${session.user.email} logged out at ${new Date().toISOString()}`);
    
    // Or perform additional cleanup operations
    // await prisma.userActivity.create({
    //   data: {
    //     userId: session.user.id,
    //     action: "LOGOUT",
    //     timestamp: new Date()
    //   }
    // });
    
    return NextResponse.json(
      { message: "Logout successful" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Logout error:", error);
    return NextResponse.json(
      { error: "Logout failed" },
      { status: 500 }
    );
  }
}