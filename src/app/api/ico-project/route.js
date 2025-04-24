import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req) {
  try {
    
    // Build where conditions
    const whereConditions = { 
      deleted_at: null 
    };
    

    // Fetch ICO projects with pagination and search filter
    const icoProjects = await prisma.ico_projects.findMany({
      where: whereConditions,
      orderBy: {
        created_at: 'desc'
      }
    });
    
   
    // Return the formatted data with pagination metadata
    return NextResponse.json({
      success: true,
      data: icoProjects,
     
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