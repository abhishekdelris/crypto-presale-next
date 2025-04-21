import { PrismaClient } from '@prisma/client';
import crypto from 'crypto';

const prisma = new PrismaClient();

export async function POST(request) {
  try {
    const body = await request.json();
    const { token, email } = body;

    if (!token || !email) {
      return Response.json(
        { success: false, message: 'Token and email are required' },
        { status: 400 }
      );
    }

    const hashedToken = crypto
      .createHash('sha256')
      .update(token)
      .digest('hex');

    const user = await prisma.users.findFirst({
      where: {
        email: email.toLowerCase(),
        token: hashedToken,
        token_expired: {
          gt: new Date(),
        },
      },
    });

    if (!user) {
      return Response.json(
        { success: false, message: 'Invalid or expired reset token' },
        { status: 400 }
      );
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error('Verify token error:', error);
    return Response.json(
      { success: false, message: 'An error occurred. Please try again later.' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
