import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request) {
  try {
    // Get query parameters for pagination
    const searchParams = request.nextUrl.searchParams;
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    
    // Calculate skip value for pagination
    const skip = (page - 1) * limit;
    
    // Modified query to sort by is_promoted (DESC) and price (DESC)
    let query = `
      SELECT * FROM trending_presale 
      WHERE 1=1
      ORDER BY is_promoted DESC, total_coin DESC
    `;
    
    const params = [];
    
    // Add pagination only if both skip and limit are provided
    if (limit !== null && skip !== null) {
      query += ` LIMIT ? OFFSET ?`;
      params.push(limit, skip);
    }
    
    // Execute the query with sorting
    const trending = await prisma.$queryRawUnsafe(query, ...params);
    
    // Get total count for pagination metadata
    const countQuery = `SELECT COUNT(*) as total FROM trending_presale WHERE 1=1`;
    const totalResult = await prisma.$queryRawUnsafe(countQuery);
    const totalTrending = parseInt(totalResult[0].total.toString());
    
    // Calculate pagination metadata
    const totalPages = Math.ceil(totalTrending / limit);
    
    return NextResponse.json({
      trending,
      pagination: {
        total: totalTrending,
        page,
        limit,
        totalPages,
        hasMore: page < totalPages
      }
    });
  } catch (error) {
    console.error('Error fetching Trending:', error);
    return NextResponse.json(
      { error: 'Failed to fetch Trending', details: error.message },
      { status: 500 }
    );
  }
}

// Handle BigInt serialization
BigInt.prototype.toJSON = function () {
  return this.toString();
};

