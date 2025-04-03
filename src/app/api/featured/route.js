import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

//Fix BigInt serialization
BigInt.prototype.toJSON = function() {
  return this.toString();
};

export async function GET(request) {
  try {
    // Extract URL parameters
    const { searchParams } = new URL(request.url);
    const skip = parseInt(searchParams.get("skip")) || 0;
    const limit = parseInt(searchParams.get("limit")) || 10;

    let query = `SELECT * FROM crypto_coins_icos WHERE featured = 1`;
    const params = [];

    // Add pagination and ordering
    query += ` ORDER BY created_at DESC LIMIT ? OFFSET ?`;
    params.push(limit, skip);

    // Execute query using Prisma
    const Fetured = await prisma.$queryRawUnsafe(query, ...params);

    // Return response
    return NextResponse.json({
      success: true,
      data: Fetured
    });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An error occurred while fetching Fetured data",
        error: error.message
      },
      { status: 500 }
    );
  }
}
