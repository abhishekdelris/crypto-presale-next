
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function GET(req, res) {


  try {
    // Get user_id from query parameters
    const { user_id } = req.query;

    // Validate user_id
    if (!user_id) {
      return res.status(400).json({ success: false, message: "User ID is required" });
    }

    // Convert user_id to the appropriate type (integer if necessary)
    const userId = parseInt(user_id) || user_id;

    // Fetch likes for this user
    const likes = await prisma.news_likes.findMany({
      where: {
        user_id: userId 
      }
    });

    // Return the likes data
    return res.status(200).json({
      success: true,
      likes: likes,
      count: likes.length
    });
  } catch (error) {
    console.error("Error fetching user likes:", error);
    return res.status(500).json({ 
      success: false, 
      message: "Failed to fetch user likes",
      error: process.env.NODE_ENV === "development" ? error.message : undefined
    });
  } finally {
    // Close Prisma connection to avoid open handles
    await prisma.$disconnect();
  }
}