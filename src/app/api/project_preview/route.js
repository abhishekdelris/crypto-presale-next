

// import { executeQuery } from '../../../lib/db';
// import { NextResponse } from 'next/server';

// export async function GET() {
//   try {
//     // Get guest posts from the database
//     const guestPosts = await executeQuery({
//       query: "SELECT * FROM `crypto_news` WHERE is_gabbar = 1 ORDER BY created_at DESC"
//     });
    
//     // Format the data to match your frontend component's needs
//     const formattedPosts = guestPosts.map(post => ({
//       id: post.id,
//       title: post.title,
//       description: post.description || post.short_description || '',
//       image: post.image || '/images/blog.webp', // Fallback to default image if none exists
//       author: post.author || 'Deepak Choudhary',
//       date: formatDate(post.created_at || new Date()),
//       likes: post.likes_counts || 0,
//       slug: post.alias || "abc",
//     }));
    
//     // Return the formatted posts
//     return NextResponse.json({
//       success: true,
//       data: formattedPosts
//     });
//   } catch (error) {
//     console.error('Error fetching guest posts:', error);
//     return NextResponse.json(
//       {
//         success: false,
//         message: 'Failed to fetch guest posts'
//       }, 
//       { status: 500 }
//     );
//   }
// }

// // Helper function to format dates in DD-MM-YYYY format
// function formatDate(dateString) {
//   const date = new Date(dateString);
//   const day = String(date.getDate()).padStart(2, '0');
//   const month = String(date.getMonth() + 1).padStart(2, '0');
//   const year = date.getFullYear();
  
//   return `${day}-${month}-${year}`;
// }


import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

// Initialize Prisma client
const prisma = new PrismaClient();

export async function GET() {
  try {
    // Get guest posts from the database using Prisma instead of raw SQL
    const guestPosts = await prisma.crypto_news.findMany({
      where: {
        is_review:1,
        is_gabbar: 1
      },
      orderBy: {
        created_at: 'desc'
      }
    }); 
    
    // Format the data to match your frontend component's needs
    const formattedPosts = guestPosts.map(post => ({
      id: post.id,
      title: post.title,
      description: post.description || post.short_description || '',
      image: post.image || '/images/blog.webp', // Fallback to default image if none exists
      author: post.author || 'Deepak Choudhary',
      date: formatDate(post.created_at || new Date()),
      likes: post.likes_counts || 0,
      slug: post.slug || "abc",
    }));
    
    // Return the formatted posts
    return NextResponse.json({
      success: true,
      data: formattedPosts
    });
  } catch (error) {
    console.error('Error fetching Project Review posts:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to fetch Project Review posts'
      }, 
      { status: 500 }
    );
  } finally {
    // Disconnect Prisma client to prevent connection leaks
    await prisma.$disconnect();
  }
}

// Helper function to format dates in DD-MM-YYYY format
function formatDate(dateString) {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  
  return `${day}-${month}-${year}`;
}