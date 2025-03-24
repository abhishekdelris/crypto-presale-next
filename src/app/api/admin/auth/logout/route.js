// app/api/auth/logout/route.js
import { NextResponse } from 'next/server';
import cookie from 'cookie';

export async function POST() {
  // Clear the auth cookie
  const headers = new Headers();
  headers.append(
    'Set-Cookie',
    cookie.serialize('auth', '', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      expires: new Date(0),
      path: '/',
    })
  );

  return NextResponse.json({ success: true, message: 'Logged out successfully' }, { status: 200, headers });
}
