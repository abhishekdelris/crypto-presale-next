import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request, { params }) {
  const { slug } = params;

  try {
    // Get specific guest post from database using Prisma
    const post = await prisma.crypto_coins_icos.findFirst({
      where: {
        slug: slug,
      },
    });

    // Check if post exists before accessing post.launchpad
    if (!post) {
      return NextResponse.json(
        {
          success: false,
          message: "Post not found",
        },
        { status: 404 }
      );
    }

    // Fetch related launchpad title
    const launchpadData = await prisma.launchpad.findUnique({
      where: {
        id: post.launchpad,
      },
    });

    // Add launchpad title to post
    post.launchpad = launchpadData?.title || "On Website";

    return NextResponse.json({
      success: true,
      data: post,
    });
  } catch (error) {
    console.error("Error fetching post:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Server error",
      },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
