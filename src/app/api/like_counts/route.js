// import { NextRequest, NextResponse } from 'next/server';
// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// export async function POST(request) {
//   try {
//     const body = await request.json();
//     const { ico_id, user_id } = body;
    
//     const parsedIcoId = parseInt(ico_id);
//     const parsedUserId = parseInt(user_id);
    
//     // Use a transaction to ensure data consistency
//     const result = await prisma.$transaction(async (tx) => {
//       // Check if user already liked
//       const existingLike = await tx.news_likes.findFirst({
//         where: {
//           ico_id: parsedIcoId,
//           user_id: parsedUserId,
//         },
//       });

//       if (existingLike) {
//         return {
//           success: false,
//           message: 'You have already liked this ICO!',
//           status: 400
//         };
//       }
      
//       // Get current ICO data
//       const currentIcoData = await tx.crypto_coins_icos.findUnique({
//         where: { id: parsedIcoId },
//       });
      
//       if (!currentIcoData) {
//         return {
//           success: false,
//           message: 'ICO not found',
//           status: 404
//         };
//       }
      
//       // Calculate new like count
//       const newLikeCount = (currentIcoData?.like_count || 0) + 1;
      
//       // Insert like record
//       await tx.news_likes.create({
//         data: {
//           ico_id: parsedIcoId,
//           user_id: parsedUserId,
//         },
//       });
      
//       // Update like_count in main ICO table
//       const updatedIco = await tx.crypto_coins_icos.update({
//         where: { id: parsedIcoId },
//         data: {
//           likes_counts: newLikeCount,
//         },
//       });
      
     
      
//       return {
//         success: true,
//         message: 'Like updated for coin',
//         coin_data: updatedIco,
//         status: 200
//       };
//     });
    
//     return NextResponse.json(result, { status: result.status });
    
//   } catch (error) {
//     console.error('Error processing like:', error);
//     return NextResponse.json(
//       { success: false, error: 'Failed to update like', details: error.message },
//       { status: 500 }
//     );
//   }
// }


import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request) {
  try {
    const body = await request.json();
    const { ico_id, user_id } = body;
    
    const parsedIcoId = parseInt(ico_id);
    const parsedUserId = parseInt(user_id);
    
    // Use a transaction to ensure data consistency
    const result = await prisma.$transaction(async (tx) => {
      // Check if user already liked
      const existingLike = await tx.news_likes.findFirst({
        where: {
          ico_id: parsedIcoId,
          user_id: parsedUserId,
        },
      });

      if (existingLike) {
        return {
          success: false,
          message: 'You have already liked this ICO!',
          status: 400
        };
      }
      
      // Get current ICO data
      const currentIcoData = await tx.crypto_coins_icos.findUnique({
        where: { id: parsedIcoId },
      });
      
      if (!currentIcoData) {
        return {
          success: false,
          message: 'ICO not found',
          status: 404
        };
      }
      
      // Make sure we're using the same field name consistently
      const currentLikes = currentIcoData?.likes_counts || 0;
      const newLikeCount = currentLikes + 1;
      
      // Insert like record
      await tx.news_likes.create({
        data: {
          ico_id: parsedIcoId,
          user_id: parsedUserId,
        },
      });
      
      // Update likes_counts in main ICO table
      const updatedIco = await tx.crypto_coins_icos.update({
        where: { id: parsedIcoId },
        data: {
          likes_counts: newLikeCount,
        },
      });
      
      return {
        success: true,
        message: 'Like updated for coin',
        coin_data: updatedIco,
        status: 200
      };
    });
    
    return NextResponse.json(result, { status: result.status });
    
  } catch (error) {
    console.error('Error processing like:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update like', details: error.message },
      { status: 500 }
    );
  }
}



// import { NextRequest, NextResponse } from 'next/server';
// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// export async function POST(request) {
//   try {
//     const body = await request.json();
//     const { ico_id, user_id, action } = body; // Add 'action' parameter: 'like' or 'unlike'
    
//     const parsedIcoId = parseInt(ico_id);
//     const parsedUserId = parseInt(user_id);
    
//     // Use a transaction to ensure data consistency
//     const result = await prisma.$transaction(async (tx) => {
//       // Check if user already liked
//       const existingLike = await tx.news_likes.findFirst({
//         where: {
//           ico_id: parsedIcoId,
//           user_id: parsedUserId,
//         },
//       });

//       // Get current ICO data
//       const currentIcoData = await tx.crypto_coins_icos.findUnique({
//         where: { id: parsedIcoId },
//       });
      
//       if (!currentIcoData) {
//         return {
//           success: false,
//           message: 'ICO not found',
//           status: 404
//         };
//       }
      
//       // Make sure we're using the same field name consistently
//       const currentLikes = currentIcoData?.likes_counts || 0;
      
//       // Handle like action
//       if (action === 'like') {
//         if (existingLike) {
//           return {
//             success: false,
//             message: 'You have already liked this ICO!',
//             status: 400
//           };
//         }
        
//         // Insert like record
//         await tx.news_likes.create({
//           data: {
//             ico_id: parsedIcoId,
//             user_id: parsedUserId,
//           },
//         });
        
//         // Update likes_counts in main ICO table (increase)
//         const updatedIco = await tx.crypto_coins_icos.update({
//           where: { id: parsedIcoId },
//           data: {
//             likes_counts: currentLikes + 1,
//           },
//         });
        
//         return {
//           success: true,
//           message: 'Successfully liked the ICO',
//           coin_data: updatedIco,
//           status: 200
//         };
//       } 
//       // Handle unlike action
//       else if (action === 'unlike') {
//         if (!existingLike) {
//           return {
//             success: false,
//             message: 'You have not liked this ICO yet!',
//             status: 400
//           };
//         }
        
//         // Remove like record
//         await tx.news_likes.delete({
//           where: {
//             id: existingLike.id
//           },
//         });
        
//         // Update likes_counts in main ICO table (decrease)
//         const newLikeCount = Math.max(0, currentLikes - 1); // Ensure it doesn't go below 0
        
//         const updatedIco = await tx.crypto_coins_icos.update({
//           where: { id: parsedIcoId },
//           data: {
//             likes_counts: newLikeCount,
//           },
//         });
        
//         return {
//           success: true,
//           message: 'Successfully unliked the ICO',
//           coin_data: updatedIco,
//           status: 200
//         };
//       }
//       else {
//         return {
//           success: false,
//           message: 'Invalid action. Use "like" or "unlike"',
//           status: 400
//         };
//       }
//     });
    
//     return NextResponse.json(result, { status: result.status });
    
//   } catch (error) {
//     console.error('Error processing like/unlike:', error);
//     return NextResponse.json(
//       { success: false, error: 'Failed to update like/unlike', details: error.message },
//       { status: 500 }
//     );
//   }
// }