import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const skip = (page - 1) * limit;

    // Fetch total count for pagination
    const totalTrending = await prisma.crypto_coins_icos.count({
      where: {
        is_bestpresale: 1,
        deleted_at: null
      }
    });

    // Fetch paginated and sorted results
    const trending = await prisma.crypto_coins_icos.findMany({
      where: {
        is_bestpresale: 1,
        deleted_at: null
      },
      orderBy: [
        { total_coin: 'desc' }
      ],
      skip,
      take: limit
    });

    const totalPages = Math.ceil(totalTrending / limit);
    const hasNextPage = page < totalPages;
    const hasPrevPage = page > 1;

    return NextResponse.json({
      success: true,
      data: trending,
      pagination: {
        total: totalTrending,
        currentPage: page,
        totalPages,
        limit,
        hasNextPage,
        hasPrevPage
      }
    });
  } catch (error) {
    console.error('Error fetching best presale:', error);
    return NextResponse.json(
      { error: 'Failed to fetch best presale', details: error.message },
      { status: 500 }
    );
  }
}
