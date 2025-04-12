
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
BigInt.prototype.toJSON = function () {
  return this.toString();
};

export async function PUT(request, context) {
  try {
    const { params } = context;
    const id = parseInt(params.id);

    // Check if the content exists
    const existingContent = await prisma.crypto_news.findUnique({
      where: { id }
    });

    if (!existingContent) {
      return NextResponse.json(
        {
          success: false,
          message: "Content not found"
        },
        { status: 404 }
      );
    }

    // Toggle is_review value
    const newReviewValue = existingContent.is_review === 1 ? 0 : 1;

    // Update the value
    const updatedContent = await prisma.crypto_news.update({
      where: { id },
      data: {
        is_review: newReviewValue, 
        updated_at: new Date()
      }
    });

    return NextResponse.json({
      success: true,
      message: "is_review status toggled successfully",
      data: updatedContent
    });

  } catch (error) {
    console.error("Error toggling is_review:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to toggle is_review",
        error: error.message || "Unknown error"
      },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
