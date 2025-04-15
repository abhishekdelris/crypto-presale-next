// // app/api/search/coins/route.js

// import { PrismaClient } from '@prisma/client';

// // Initialize Prisma client
// const prisma = new PrismaClient();

// export async function GET(request) {
//   const { searchParams } = new URL(request.url);
//   const query = searchParams.get('q') || '';
  
//   // If no query, return empty array
//   if (!query) {
//     return Response.json({ coins: [] });
//   }
  
//   try {
//     // Search for coins using Prisma with the crypto_coins_icos table
//     const coins = await prisma.crypto_coins_icos.findMany({
//       where: {
//         OR: [
//           { name: { contains: query, mode: 'insensitive' } },
//           { symbol: { contains: query, mode: 'insensitive' } }
//         ]
//       },
//       select: {
//         id: true,
//         name: true,
//         symbol: true,
//         // Add other fields you want to include in search results
//       },
//       take: 5, // Limit to 5 results
//     });
    
//     return Response.json({ coins });
//   } catch (error) {
//     console.error('Error searching coins:', error);
//     return Response.json({ coins: [], error: 'Failed to search coins' }, { status: 500 });
//   } finally {
//     // Optional: disconnect prisma if needed
//     await prisma.$disconnect();
//   }
// }



// app/api/search/coins/route.js

import { PrismaClient } from '@prisma/client';

// Initialize Prisma client
const prisma = new PrismaClient();

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q') || '';
  
  // If no query, return empty array
  if (!query) { 
    return Response.json({ coins: [] });
  }
  
  try {
    // Search for coins using Prisma with the crypto_coins_icos table
    // Using toLowerCase() to handle case-insensitive search manually
    const searchTerm = query.toLowerCase();
    
    const coins = await prisma.crypto_coins_icos.findMany({
      where: {
        is_review : 1, 
        deleted_at: null,
        OR: [
          { name: { contains: searchTerm } },
          { slug: { contains: searchTerm } }
        ]
      },
      select: {
        id: true,
        name: true,
        image: true,
        slug: true,
        alias: true
        // Add other fields you want to include in search results
      },
      take: 5, // Limit to 5 results
    });
    
    return Response.json({ coins });
  } catch (error) {
    console.error('Error searching coins:', error);
    return Response.json({ coins: [], error: 'Failed to search coins' }, { status: 500 });
  }
}