// 6. Create a logout API route (pages/api/auth/logout.js)
// import cookie from 'cookie';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
  const cookie = await import('cookie');
  // Clear the auth cookie
  res.setHeader('Set-Cookie', cookie.serialize('auth', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    expires: new Date(0),
    path: '/' 
  }));

  return res.status(200).json({ success: true, message: 'Logged out successfully' });
}
