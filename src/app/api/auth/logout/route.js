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
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST() {
  // Clear the auth cookie using Next.js built-in cookies API
  cookies().delete('auth');
  
  return NextResponse.json(
    { success: true, message: 'Logged out successfully' },
    { status: 200 }
  );
}