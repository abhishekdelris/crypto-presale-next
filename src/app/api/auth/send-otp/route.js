// // app/api/send-otp/route.js

// import { NextResponse } from 'next/server';
// import nodemailer from 'nodemailer';

// // Function to generate a random 6-digit OTP
// function generateOTP() {
//   return Math.floor(100000 + Math.random() * 900000).toString();
// }

// // Create a transporter
// const transporter = nodemailer.createTransport({
//   host: "smtp.zeptomail.in",
//   port: 587,
//   auth: {
//     user: "emailapikey",
//     pass: "PHtE6r0LRuDq2mZ++hYA5PTrEZWgMY8vrO8zLlUStd1CX/JQS01WrtgrkjWy/hh/BvMXR/HPy4xssr2ZsO6ELGy7ZmhNDWqyqK3sx/VYSPOZsbq6x00auFgZcE3UVIHtcNFr1S3XuNvdNA=="
//   }
// });

// export async function POST(request) {
//   try {
//     // Parse the request body
//     const body = await request.json();
//     const { email } = body;

//     // Validate email
//     if (!email) {
//       return NextResponse.json({ 
//         success: false, 
//         message: 'Email is required' 
//       }, { status: 400 });
//     }

//     // Generate OTP
//     const otp = generateOTP();

//     // Prepare email content
//     const mailOptions = {
//       from: '"Your App Team" <noreply@yourdomain.com>',
//       to: email,
//       subject: 'Your OTP Code',
//       html: `
//         <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
//           <h2>One-Time Password</h2>
//           <p>Your OTP code is:</p>
//           <h1 style="font-size: 32px; letter-spacing: 5px; background-color: #f4f4f4; padding: 10px; text-align: center;">${otp}</h1>
//           <p>This code will expire in 10 minutes.</p>
//           <p>If you did not request this code, please ignore this email.</p>
//         </div>
//       `
//     };

//     // Send email
//     await transporter.sendMail(mailOptions);

//     // In a real application, you would save the OTP in a database with an expiration time
//     // and associate it with the user's email for verification later

//     return NextResponse.json({ 
//       success: true, 
//       message: 'OTP sent successfully' 
//     });
    
//   } catch (error) {
//     console.error('Error sending OTP:', error);
//     return NextResponse.json({ 
//       success: false, 
//       message: 'Failed to send OTP' 
//     }, { status: 500 }); 
//   }
// }


// app/api/send-otp/route.js
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Function to generate a random 6-digit OTP
function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

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
    const { email } = body;

    // Validate email
    if (!email) {
      return NextResponse.json({ 
        success: false, 
        message: 'Email is required' 
      }, { status: 400 });
    }
 
    // Generate OTP
    const otp = parseInt(generateOTP());
    
    // Set expiration time (10 minutes from now)
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000);
    
    // Find user with the given email
    const userValidCheck = await prisma.users.findFirst({
      where: { email: email }
    });
    
    if (!userValidCheck) {
      return NextResponse.json({ 
        success: false, 
        message: 'User not found with this email' 
      }, { status: 404 });
    }
    
    // Store OTP in database using Prisma
    await prisma.users.update({
      where: { id: userValidCheck.id },
      data: { 
        otp, 
        otp_expired: expiresAt,
        updated_at: new Date()
      }
    });

    // Prepare email content
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: email,
      subject: 'Your OTP Code',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>One-Time Password</h2>
          <p>Your OTP code is:</p>
          <h1 style="font-size: 32px; letter-spacing: 5px; background-color: #f4f4f4; padding: 10px; text-align: center;">${otp}</h1>
          <p>This code will expire in 10 minutes.</p>
          <p>If you did not request this code, please ignore this email.</p>
        </div>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ 
      success: true,  
      message: 'OTP sent successfully' 
    });
    
  } catch (error) {
    console.error('Error sending OTP:', error);
    return NextResponse.json({ 
      success: false, 
      message: error.message || 'Failed to send OTP' 
    }, { status: 500 });
  } finally {
    // Disconnect Prisma client to avoid connection leaks
    await prisma.$disconnect();
  }
}