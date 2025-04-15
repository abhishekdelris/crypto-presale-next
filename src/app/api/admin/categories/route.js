
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

// Initialize Prisma client
const prisma = new PrismaClient();

export async function GET() {
  try {
   
    const categoriesData = await prisma.project_categories.findMany({
      where: {
        is_active:1
      },
      orderBy: {
        created_at: "desc"
      }
    });

  

    // Return the formatted posts
    return NextResponse.json({
      success: true,
      data: categoriesData
    });
  } catch (error) {
    console.error("Error fetching Categories Data:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch Categories Data"
      },
      { status: 500 }
    );
  } finally {
    // Disconnect Prisma client to prevent connection leaks
    await prisma.$disconnect();
  }
}

