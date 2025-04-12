// // app/api/guestPost/[id]/route.js
// import { executeQuery } from '../../../../lib/db';
// import { NextResponse } from 'next/server';

// export async function GET(request, { params }) {
//   const { id } = params;
  
//   try {
//     // Get specific guest post from database
//     const result = await executeQuery({
//       query: "SELECT * FROM `crypto_news` WHERE id = ? AND is_gabbar = 3",
//       values: [id]
//     });
    
//     // Check if post exists
//     if (result.length === 0) {
//       return NextResponse.json(
//         {
//           success: false,
//           message: 'Post not found'
//         },
//         { status: 404 }
//       );
//     }
    
//     const post = result[0];
    
//     // Format the post data
//     const formattedPost = {
//       id: post.id,
//       title: post.title,
//       description: post.description || post.short_description || '',
//       image: post.image || '/images/blog.webp',
//       author: post.author || 'Deepak Choudhary',
//       date: formatDate(post.created_at || new Date()),
//       likes: post.likes_counts || 0,
//       slug: post.alias || "abc",
//       // Add any additional fields needed for the detail page
//       content: post.description || '',
//       meta_title: post.meta_title || post.title,
//       meta_description: post.meta_description || '',
//       created_at: post.created_at,
//       updated_at: post.updated_at,
//     };
    
//     return NextResponse.json({
//       success: true,
//       data: formattedPost
//     });
//   } catch (error) {
//     console.error('Error fetching post:', error);
//     return NextResponse.json(
//       {
//         success: false,
//         message: 'Server error'
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

// app/api/guestPost/[id]/route.js
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

// Initialize Prisma client
const prisma = new PrismaClient();

export async function GET(request, { params }) {
  const { id } = params;
  
  try {
    // Get specific guest post from database using Prisma
    const post = await prisma.crypto_news.findFirst({
      where: {
        id: parseInt(id), // Convert string to integer
        is_review:1,
        is_gabbar: 3
      }
    });
    
    // Check if post exists
    if (!post) {
      return NextResponse.json(
        {
          success: false,
          message: 'Post not found'
        },
        { status: 404 }
      );
    } 
    
    // Format the post data
    const formattedPost = {
      id: post.id,
      title: post.title,
      description: post.description || post.short_description || '',
      image: post.image || '/images/blog.webp',
      author: post.author || 'Deepak Choudhary',
      date: formatDate(post.created_at || new Date()),
      likes: post.likes_counts || 0,
      slug: post.alias || "abc",
      // Add any additional fields needed for the detail page
      content: post.description || '',
      meta_title: post.meta_title || post.title,
      meta_description: post.meta_description || '',
      created_at: post.created_at,
      updated_at: post.updated_at,
    };
    
    return NextResponse.json({
      success: true,
      data: formattedPost
    });
  } catch (error) {
    console.error('Error fetching post:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Server error'
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