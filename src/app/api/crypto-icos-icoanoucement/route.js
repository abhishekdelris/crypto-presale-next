import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { executeQuery } from "../../../lib/db";

const prisma = new PrismaClient();

// export async function GET(request) {
//   try {
//     // Get URL parameters
//     const { searchParams } = new URL(request.url);
//     const skip = parseInt(searchParams.get('skip')) || 0;
//     const limit = parseInt(searchParams.get('limit')) || 10;
//     const ico_ido_type = parseInt(searchParams.get('ico_ido_type'));
//     const type = searchParams.get('type');

//     // Build where conditions
//     const whereConditions = {};

//     if (ico_ido_type !== undefined && !isNaN(ico_ido_type)) {
//       whereConditions.ico_ido_type = ico_ido_type;
//     }

//     // Handle the 'type' parameter (ongoing, upcoming, ended)
//     if (type === 'ongoing') {
//       const currentDate = new Date().toISOString().split('T')[0];
//       whereConditions.start_time = { lte: currentDate };
//       whereConditions.end_time = { gte: currentDate };
//     } else if (type === 'upcoming') {
//       const currentDate = new Date().toISOString().split('T')[0];
//       whereConditions.start_time = { gt: currentDate };
//     } else if (type === 'ended') {
//       const currentDate = new Date().toISOString().split('T')[0];
//       whereConditions.end_time = { lt: currentDate };
//     }

//     // Fetch data with pagination
//     const coinIcos = await prisma.crypto_news.findMany({
//       where: whereConditions,
//       skip: skip,
//       take: limit,
//       orderBy: {
//         updated_at: 'desc'
//       }
//     //   include: {
//     //     crypto_coins_ico_details: true
//     //   }
//     });

//     const guestPosts = await prisma.$queryRaw`SELECT * FROM crypto_coins_icos WHERE ico_ido_type = ${whereConditions},skip=${skip},take=${limit} ORDER BY created_at DESC`;
//     BigInt.prototype.toJSON = function() {
//       return this.toString();
//     };
//     // Format the data
//     const formattedData = coinIcos.map(ico => {
//       // Add URL fields based on your domain
//       const baseUrl = "http://localhost:3000";
//       return {
//         ...ico,
//         // web_url: `${baseUrl}/en/crypto-ico-details/${ico.slug}`,
//         // thumb: ico.image ? `${ico.image.replace('/webadmin', '')}/thumbnail/${ico.image.split('/').pop()}` : null,
//         // smallThumb: `${baseUrl}/webadmin/storage/public/crypto-coins-icos/small-thumbnail/webadmin`,
//       };
//     });

//     // Return the response
//     return NextResponse.json({
//       success: true,
//       data: coinIcos
//     });
//   } catch (error) {
//     console.error("API Error:", error);
//     return NextResponse.json({
//       success: false,
//       message: "An error occurred while fetching ICO/IDO data",
//       error: error.message
//     }, { status: 500 });
//   }
// }

// export async function GET() {
//     try {
//       // const guestPosts = await executeQuery({
//       //         query: "SELECT * FROM `crypto_coins_icos` WHERE  ico_ido_type= 1 ORDER BY created_at DESC"
//       //       });
//             // const guestPosts = await prisma.crypto_coins_icos.findMany({
//             //   where: {
//             //     ico_ido_type: 1
//             //   },
//             //   orderBy: {
//             //     created_at: 'desc'
//             //   }
//             // });
//             const guestPosts = await prisma.$queryRaw`SELECT * FROM crypto_coins_icos WHERE ico_ido_type = 1 ORDER BY created_at DESC`;

//       // if (!coinIcos.length) {
//       //   return NextResponse.json({
//       //     success: false,
//       //     message: 'No data found for ico_ido_type 1',
//       //   });
//       // }

//       return NextResponse.json({
//         success: true,
//         data: guestPosts,
//       });

//     } catch (error) {
//       console.error('Error fetching data:', error);
//       return NextResponse.json({
//         success: false,
//         error: error.message,
//       });
//     }
//   }

// export async function GET() {
//   try {
//     const guestPosts = await prisma.$queryRaw`SELECT * FROM crypto_coins_icos WHERE ico_ido_type = ${1} ORDER BY created_at DESC`;
// //     const guestPosts = await prisma.$queryRaw`
// //   SELECT id::text AS id, ico_ido_type, created_at
// //   FROM crypto_coins_icos
// //   WHERE ico_ido_type = ${1}
// //   ORDER BY created_at DESC
// // `;

// BigInt.prototype.toJSON = function() {
//   return this.toString();
// };

//     // Convert BigInt to string
//     // const serializedData = guestPosts.map(post => ({
//     //   ...post,
//     //   id: post.id?.toString() // Convert only BigInt fields
//     // }));

//     return NextResponse.json({
//       success: true,
//       data: guestPosts,
//     });

//   } catch (error) {
//     console.error('Error fetching data:', error);
//     return NextResponse.json({
//       success: false,
//       error: error.message || 'An error occurred while fetching data',
//     });
//   }
// }

// Fix BigInt serialization
// BigInt.prototype.toJSON = function () {
//   return this.toString();
// };

// export async function GET(request) {
//   try {
//     // Extract URL parameters
//     const { searchParams } = new URL(request.url);
//     const skip = parseInt(searchParams.get('skip')) || 0;
//     const limit = parseInt(searchParams.get('limit')) || 10;
//     const ico_ido_type = parseInt(searchParams.get('ico_ido_type'));
//     const type = searchParams.get('type');

//     let query = `SELECT * FROM crypto_coins_icos WHERE 1=1`;
//     const params = [];

//     // Apply ico_ido_type filter
//     if (!isNaN(ico_ido_type)) {
//       query += ` AND ico_ido_type = ?`;
//       params.push(ico_ido_type);
//     }

//     // Apply type filter (ongoing, upcoming, ended)
//     const currentDate = new Date().toISOString().split('T')[0];

//     if (type === 'ongoing') {
//       query += ` AND start_time <= ? AND end_time >= ?`;
//       params.push(currentDate, currentDate);
//     } else if (type === 'upcoming') {
//       query += ` AND start_time > ?`;
//       params.push(currentDate);
//     } else if (type === 'ended') {
//       query += ` AND end_time < ?`;
//       params.push(currentDate);
//     }

//     // Add pagination and ordering
//     query += ` ORDER BY created_at DESC LIMIT ? OFFSET ?`;
//     params.push(limit, skip);

//     // Execute query using Prisma
//     const coinIcos = await prisma.$queryRawUnsafe(query, ...params);

//     // Return response
//     return NextResponse.json({
//       success: true,
//       data: coinIcos,
//     });
//   } catch (error) {
//     console.error("API Error:", error);
//     return NextResponse.json({
//       success: false,
//       message: "An error occurred while fetching ICO/IDO data",
//       error: error.message,
//     }, { status: 500 });
//   }
// }

// Fix BigInt serialization
BigInt.prototype.toJSON = function() {
  return this.toString();
};

// export async function GET(request) {
//   try {
//     // Extract URL parameters
//     const { searchParams } = new URL(request.url);
//     const skip = searchParams.get("skip")
//       ? parseInt(searchParams.get("skip"))
//       : null;
//     const limit = searchParams.get("limit")
//       ? parseInt(searchParams.get("limit"))
//       : null;
//     const ico_ido_type = parseInt(searchParams.get("ico_ido_type"));
//     const type = searchParams.get("type");

//     let query = `SELECT * FROM crypto_coins_icos WHERE is_review=1`;
//     const params = [];
    
//     // Apply ico_ido_type filter
//     if (!isNaN(ico_ido_type)) {
//       query += ` AND ico_ido_type = ?`;
//       params.push(ico_ido_type);
//     }

//     // Apply type filter (ongoing, upcoming, ended)
//     const currentDate = new Date().toISOString().split("T")[0];

//     if (type === "ongoing") {
//       query += ` AND start_time <= ? AND end_time >= ?`;
//       params.push(currentDate, currentDate);
//     } else if (type === "upcoming") {
//       query += ` AND start_time > ?`;
//       params.push(currentDate);
//     } else if (type === "ended") {
//       query += ` AND end_time < ?`;
//       params.push(currentDate);
//     }

//     // Add ordering
//     query += ` ORDER BY created_at ASC`;

//     // Add pagination only if both skip and limit are provided
//     if (limit !== null && skip !== null) {
//       query += ` LIMIT ? OFFSET ?`;
//       params.push(limit, skip);
//     }

//     // Execute query using Prisma
//     const coinIcos = await prisma.$queryRawUnsafe(query, ...params);

//     // Return response
//     return NextResponse.json({
//       success: true,
//       data: coinIcos
//     });
//   } catch (error) {
//     console.error("API Error:", error);
//     return NextResponse.json(
//       {
//         success: false,
//         message: "An error occurred while fetching ICO/IDO data",
//         error: error.message
//       },
//       { status: 500 }
//     );
//   }
// }





// export async function GET(request) {
//   try {
//     const { searchParams } = new URL(request.url);
//     const skip = searchParams.get("skip") ? parseInt(searchParams.get("skip")) : undefined;
//     const limit = searchParams.get("limit") ? parseInt(searchParams.get("limit")) : undefined;
//     const ico_ido_type = parseInt(searchParams.get("ico_ido_type"));
//     const type = searchParams.get("type") || "ongoing";

//     const currentDate = new Date().toISOString().split("T")[0];

//     // Construct Prisma `where` clause
//     const where = {
//       deleted_at: null,
//       is_review: 1,
//       ...(Number.isInteger(ico_ido_type) && { ico_ido_type: ico_ido_type }),
//       ...(type === "ongoing" && {
//         start_time: { lte: currentDate },
//         end_time: { gte: currentDate }
//       }),
//       ...(type === "upcoming" && {
//         start_time: { gt: currentDate }
//       }),
//       ...(type === "ended" && {
//         end_time: { lt: currentDate }
//       })
//     };

//     const coinIcos = await prisma.crypto_coins_icos.findMany({
//       where,
//       orderBy: { created_at: "asc" },
//       skip,
//       take: limit
//     });

//     return NextResponse.json({
//       success: true,
//       data: coinIcos
//     });
//   } catch (error) {
//     console.error("API Error:", error);
//     return NextResponse.json(
//       {
//         success: false,
//         message: "An error occurred while fetching ICO/IDO data",
//         error: error.message
//       },
//       { status: 500 }
//     );
//   }
// }

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    
    // Extract all query parameters
    const skip = searchParams.get("skip") ? parseInt(searchParams.get("skip")) : 0;
    const limit = searchParams.get("limit") ? parseInt(searchParams.get("limit")) : 15;
    const ico_ido_type = searchParams.get("ico_ido_type") ? parseInt(searchParams.get("ico_ido_type")) : undefined;
    const type = searchParams.get("type") || undefined;
    const search = searchParams.get("search") || undefined;
    const launchpad = searchParams.get("launchpad") ? parseInt(searchParams.get("launchpad")) : undefined;
    const start_date = searchParams.get("start_date") || undefined;
    const end_date = searchParams.get("end_date") || undefined;

    const currentDate = new Date().toISOString().split("T")[0];

    // Base where clause
    let where = {
      deleted_at: null,
      is_review: 1,
    };

    // Add ICO/IDO type filter
    if (Number.isInteger(ico_ido_type)) {
      where.ico_ido_type = ico_ido_type;
    }

    // Add type filter (ongoing, upcoming, ended)
    if (type === "ongoing") {
      where.start_time = { lte: currentDate };
      where.end_time = { gte: currentDate };
    } else if (type === "upcoming") {
      where.start_time = { gt: currentDate };
    } else if (type === "ended") {
      where.end_time = { lt: currentDate };
    }

    // Add search filter
    if (search) {
      where.OR = [
        { name: { contains: search } },
        { alias: { contains: search } }
      ];
    }

    // Add launchpad filter
    if (Number.isInteger(launchpad) && launchpad !== 0) {
      where.launchpad = launchpad;
    }

    // Add date range filter
    if (start_date && end_date) {
      // Find ICOs that overlap with the selected date range
      // An ICO overlaps with the selected range if:
      // - ICO start date is before or equal to the selected end date AND
      // - ICO end date is after or equal to the selected start date
      where.OR = [
        {
          AND: [
            { start_time: { lte: end_date } },
            { end_time: { gte: start_date } }
          ]
        }
      ];
    }

    // First get total count
    const totalCount = await prisma.crypto_coins_icos.count({ where });

    // Then get the filtered data
    const coinIcos = await prisma.crypto_coins_icos.findMany({
      where,
      orderBy: [
        { featured: 'desc' }, // Featured items first
        { created_at: 'desc' } // Then by creation date (newest first)
      ],
      skip,
      take: limit
    });

    return NextResponse.json({
      success: true,
      data: coinIcos,
      total: totalCount
    });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An error occurred while fetching ICO/IDO data",
        error: error.message
      },
      { status: 500 }
    );
  }
}