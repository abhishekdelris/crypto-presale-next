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

    const categoriesData = await prisma.project_categories.findUnique({
      where: {
        id: post.category_id,
      },
    });

    const icoprojectData = await prisma.ico_projects.findUnique({
      where: {
        id: parseInt(post.ico_project_id),
      },
    });
    // Fetch related launchpad title
    const launchpadData = await prisma.launchpad.findUnique({
      where: {
        id: post.launchpad,
      },
    }); 

    console.log("categoriesData...",categoriesData);
    console.log("icoprojectData...",icoprojectData);
    console.log("launchpadData...",launchpadData);
    // Add launchpad title to post
    post.ico_project_id = icoprojectData?.title || "blockchain";
    post.category_id = categoriesData?.title || " ";
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
