// app/api/verify-otp/route.js

import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import nodemailer from 'nodemailer';

const prisma = new PrismaClient();


// Create a transporter
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT), 
  auth: {
    user:  process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

export async function POST(request) {
  try {
    // Parse the request body
    const body = await request.json();
    const { email, otp } = body;

    
    // Validate required fields
    if (!email || !otp) {
      return NextResponse.json({ 
        success: false, 
        message: 'Email and OTP are required' 
      }, { status: 400 });
    }

    // Find the OTP record in the database
    const otpRecord = await prisma.users.findFirst({
      where: {
        email,
        otp: parseInt(otp),
        otp_expired: {
          gt: new Date() // Check if OTP has not expired
        },
     
      }
    });

    // If OTP not found or is invalid
    if (!otpRecord) {
      return NextResponse.json({ 
        success: false, 
        message: 'Invalid or expired OTP' 
      }, { status: 400 });
    }

    // Mark OTP as used
    await prisma.users.update({
      where: { id: otpRecord.id },
      data: { is_email_verified: 1 }
    });

    // Prepare email content
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: email,
      subject: 'Registration Successful - Crypto Presale',
      html: `
       <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration Successful - KOL</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f9f9f9;
            margin: 0;
            padding: 0;
        }
        
        .email-container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }
        
        .header {
            background:linear-gradient(180deg,#0a2a4b,#04182d);
            padding: 25px;
            text-align: center;
        }
        
        .content {
            padding: 40px;
            text-align: center;
        }
        
        h1 {
            color: #212529;
            margin-top: 0;
            font-size: 28px;
            font-weight: 600;
        }
        
        .welcome-text {
            font-size: 18px;
            color: #64686c;
            margin-bottom: 30px;
        }
        
        .home-button {
            display: inline-block;
            background: linear-gradient(135deg, #fdc14b, #fdc84b);
            color: #212529;
            text-decoration: none;
            padding: 14px 30px;
            border-radius: 4px;
            font-weight: 500;
            margin-top: 10px;
            transition: background-color 0.3s ease;
        }
        
        .home-button:hover {
            background-color: linear-gradient(135deg, #cfa44f, #ffd571);
        }
        
        .footer {
            background-color: #d1e8ff;
            padding: 20px;
            text-align: center;
            font-size: 14px;
            color: #3c3c3c;
        }
        
        @media screen and (max-width: 480px) {
            .content {
                padding: 20px;
            }
        }
    </style>
</head>
    <body>
        <div class="email-container">
            <div class="header">
                <img src="https://cryptopresale.xyz/_next/static/media/presale.30642116.png" alt="Crypto Presale Logo" />
            </div>
            
            <div class="content">
                <h1>Hello, ${otpRecord.name}</h1>
                <p class="welcome-text">Thank you for Register on Crypto Presale</p>
                
                <p>Crypto presales are offering opportunities for early investment in various projects. emphasizing potential growth and innovative features like Layer 1 Web3 aggregation and DeFi wallet technology...</p>
                
                <a href="https://cryptopresale.xyz" class="home-button" title="Go To Home">Go to Home</a>
            </div>
            
            <div class="footer">
                <p>&copy; 2025 Crypto Presale. All rights reserved.</p>
            </div>
        </div>
    </body>
</html>
      `
    };
    

    // Send email
    await transporter.sendMail(mailOptions);

   

    return NextResponse.json({ 
      success: true, 
      message: 'OTP verified successfully' 
    });
    
  } catch (error) {
    console.error('Error verifying OTP:', error);
    return NextResponse.json({ 
      success: false, 
      message: 'Failed to verify OTP' 
    }, { status: 500 });
  } finally {
    // Disconnect Prisma client to avoid connection leaks
    await prisma.$disconnect();
  }
}