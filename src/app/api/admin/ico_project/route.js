import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req) {
  try {
    // Get URL from the request
    const url = new URL(req.url);
    
    // Parse pagination parameters from query string
    const page = Math.max(1, parseInt(url.searchParams.get('page') || '1'));
    const limit = Math.max(1, parseInt(url.searchParams.get('limit') || '15'));
    const search = url.searchParams.get('search') || '';
    
    // Calculate skip value for pagination
    const skip = (page - 1) * limit;

    // Build where conditions
    const whereConditions = { 
      deleted_at: null 
    };
    
    // Add search conditions if search parameter is provided
    if (search) {
      whereConditions.OR = [
        { title: { contains: search } },
        { symbol: { contains: search } },
        { slug: { contains: search } }
      ];
    }

    // Get total count for pagination metadata
    const totalCount = await prisma.ico_projects.count({
      where: whereConditions
    });

    // Fetch ICO projects with pagination and search filter
    const icoProjects = await prisma.ico_projects.findMany({
      where: whereConditions,
      skip,
      take: limit,
      orderBy: {
        created_at: 'desc'
      }
    });
    
    // Calculate pagination metadata
    const totalPages = Math.ceil(totalCount / limit);
    const hasNextPage = page < totalPages;
    const hasPrevPage = page > 1;
    
    // Return the formatted data with pagination metadata
    return NextResponse.json({
      success: true,
      data: icoProjects,
      pagination: {
        total: totalCount,
        currentPage: page,
        totalPages,
        limit,
        hasNextPage,
        hasPrevPage
      }
    }, { status: 200 });
    
  } catch (error) {
    console.error("Failed to fetch ICO projects:", error.message);
    return NextResponse.json({
      success: false,
      message: "Failed to fetch ICO projects",
      error: error.message || "Unknown error"
    }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}