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
      
      // Calculate new like count
      const newLikeCount = (currentIcoData?.like_count || 0) + 1;
      
      // Insert like record
      await tx.news_likes.create({
        data: {
          ico_id: parsedIcoId,
          user_id: parsedUserId,
        },
      });
      
      // Update like_count in main ICO table
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