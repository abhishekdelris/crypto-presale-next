import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import crypto from 'crypto';
import nodemailer from 'nodemailer';

const prisma = new PrismaClient();

export async function POST(request) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json({ success: false, message: 'Email is required' }, { status: 400 });
    }

    const user = await prisma.users.findUnique({
      where: { email: email.toLowerCase() },
    });

    // Don't reveal existence
    if (!user) {
      return NextResponse.json({
        success: true,
        message: 'Email not found. Please register first.'
      });
    }

    // Generate and hash reset token
    const resetToken = crypto.randomBytes(32).toString('hex');
    const hashedToken = crypto.createHash('sha256').update(resetToken).digest('hex');
    const tokenExpiry = new Date(Date.now() + 60 * 60 * 1000); // 1 hour

    await prisma.users.update({
      where: { id: user.id },
      data: {
        token: hashedToken,
        token_expired: tokenExpiry,
      }, 
    });

    // Construct frontend reset link
    const resetUrl = `${process.env.NEXTAUTH_URL}/reset-password?token=${resetToken}&email=${encodeURIComponent(email)}`;

    // Send reset email
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT),
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: email,
      subject: 'Password Reset Request',
      html: `
            <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Password Reset</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333333;
            margin: 0;
            padding: 0;
        }
        .email-container {
            max-width: 600px;
            margin: 0 auto;
        }
        .header {
            background: linear-gradient(180deg,#0a2a4b,#04182d);
            padding: 20px 0;
        }
        .content {
            padding: 30px 20px;
            background-color: #ffffff;
        }
        .footer {
            background-color: #d1e8ff;
            padding: 15px;
            font-size: 12px;
            color: #3c3c3c;
            text-align: center;
        }
        .button {
            display: inline-block;
            background: linear-gradient(135deg, #fdc14b, #fdc84b);
            color: #212529;
            padding: 12px 30px;
            text-decoration: none;
            border-radius: 4px;
            font-weight: bold;
            margin: 20px 0;
        }
        .info-text {
            font-size: 14px;
            color: #777777;
        }
        .logo {
            color: white;
            font-size: 22px;
            font-weight: bold;
            text-align: center;
        }
            .expiry {
                background-color: #fff0d1;
                border-left: 4px solid #ffd448;
                padding: 12px 15px;
                margin: 20px 0;
                font-size: 14px;
            }
    </style>
</head>
<body>
    <table class="email-container" style="border: 0px; box-shadow:0 4px 10px rgba(0, 0, 0, 0.1);border-collapse: separate; border-spacing: 0; width: 100%;">
        <tr>
            <th></th>
        </tr>
        <!-- Header -->
        <tr>
            <td>
                <table style="border: 0px; border-collapse: separate; border-spacing: 0; width: 100%;">
                    <tr>
                        <th></th>
                    </tr>
                    <tr>
                        <td class="header" style="text-align: center;">
                            <div class="logo"><img src="https://cryptopresale.xyz/_next/static/media/presale.30642116.png" alt="Crypto Presale" /></div>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        
        <!-- Main Content -->
        <tr>
            <td>
                <table style="border: 0px; border-collapse: separate; border-spacing: 0; width: 100%;">
                    <tr>
                        <th></th>
                    </tr>
                    <tr>
                        <td class="content">
                            <h2 style="color: #212529; margin-top: 0;">Password Reset Request</h2>
                            <p>Hello,</p>
                            <p>We received a request to reset your password. To create a new password, please click the button below:</p>
                            
                            <table style="border: 0px; border-collapse: separate; border-spacing: 0; width: 100%;">
                                <tr>
                                    <th></th>
                                </tr>
                                <tr>
                                    <td style="text-align: center;">
                                        <a href="${resetUrl}" class="button">Reset Your Password</a>
                                    </td>
                                </tr>
                            </table>
                            
                            <div class="expiry">
                                <strong>⏱️ Time sensitive:</strong> This link will expire in 1 hour for security reasons.
                            </div>
                            <p class="info-text">If you didn't request this password reset, please ignore this email or contact support if you have concerns about your account.</p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        
        <!-- Footer -->
        <tr>
            <td>
                <table style="border: 0px; border-collapse: separate; border-spacing: 0; width: 100%;">
                    <tr>
                        <th></th>
                    </tr>
                    <tr>
                        <td class="footer">
                            <p>&copy;  2025 Crypto Presale. All rights reserved.</p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
      `,
    });

    return NextResponse.json({
      success: true,
      message: 'Password reset link sent to your email',
    });
  } catch (error) {
    console.error('Forgot password error:', error);
    return NextResponse.json({
      success: false,
      message: 'An error occurred. Please try again later.'
    }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
