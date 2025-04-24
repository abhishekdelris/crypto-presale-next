import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(request) {
  try {
    // Get user_id from query parameters
    const { searchParams } = new URL(request.url)
    const user_id = searchParams.get('user_id')

    // Validate user_id
    if (!user_id) {
      return NextResponse.json(
        { success: false, message: "User ID is required" },
        { status: 400 }
      )
    }

    // Convert user_id to the appropriate type (e.g., integer if needed)
    const userId = parseInt(user_id) || user_id

    // Fetch likes for this user
    const likes = await prisma.news_likes.findMany({
      where: {
        user_id: userId,
      },
    })

    return NextResponse.json({
      success: true,
      likes,
      count: likes.length,
    })
  } catch (error) {
    console.error("Error fetching user likes:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch user likes",
        error: process.env.NODE_ENV === "development" ? error.message : undefined,
      },
      { status: 500 }
    )
  } finally {
    await prisma.$disconnect()
  }
}
