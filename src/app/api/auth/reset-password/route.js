import { PrismaClient } from '@prisma/client';
import crypto from 'crypto';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export async function POST(request) {
  try {
    const { token, email, password } = await request.json();

    if (!token || !email || !password) {
      return Response.json(
        { success: false, message: 'Token, email, and password are required' },
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

    const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.users.update({
      where: { id: user.id },
      data: {
        password: hashedPassword,
        token: null,
        token_expired: null,
      },
    });

    return Response.json({
      success: true,
      message: 'Password has been reset successfully',
    });
  } catch (error) {
    console.error('Reset password error:', error);
    return Response.json(
      { success: false, message: 'An error occurred. Please try again later.' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
