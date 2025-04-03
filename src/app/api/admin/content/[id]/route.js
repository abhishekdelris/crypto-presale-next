import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import fs from "fs";
import path from "path";

const prisma = new PrismaClient();

export async function PUT(request, { params }) {
  try {
    const id = parseInt(params.id);
    const body = await request.json();

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

    // Update the content
    const updatedContent = await prisma.crypto_news.update({
      where: { id },
      data: {
        title: body.title,
        alias: body.alias,
        // Add other fields you want to be updatable
        h1_title: body.h1_title,
        h2_title: body.h2_title,
        img_alt_title: body.img_alt_title,
        is_gabbar: body.is_gabbar,
        created_by: body.created_by,
        author_name: body.author_name,
        is_rss_feed: body.is_rss_feed,
        dynamic_rss_feed: body.dynamic_rss_feed,
        image: body.image,
        channel_id: body.channel_id,
        publishedAt: body.publishedAt,
        description: body.description,
        article: body.article,
        breadcrumbs: body.breadcrumbs,
        data_set: body.data_set,
        discussion_forum: body.discussion_forum,
        faq: body.faq,
        image_metadata: body.image_metadata,
        new_article: body.new_article,
        paywalled_content: body.paywalled_content,
        profile: body.profile,
        organization: body.organization,
        review_snippets: body.review_snippets,
        sitelinks: body.sitelinks,
        video: body.video,
        seo_title: body.seo_title,
        meta_keywords: body.meta_keywords,
        meta_description: body.meta_description,
        updated_at: new Date() // Assuming you have an updated_at field
      }
    });

    return NextResponse.json({
      success: true,
      message: "Content updated successfully",
      data: updatedContent
    });
  } catch (error) {
    console.error("Error in content update:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to update content",
        error: error.message || "Unknown error"
      },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

// import { NextResponse } from 'next/server';
// import { PrismaClient } from '@prisma/client';
// import fs from 'fs';
// import path from 'path';

// const prisma = new PrismaClient();

// export async function PUT(request, { params }) {
//   try {
//     // Parse the form data
//     const formData = await request.formData();

//     // Extract file
//     const file = formData.get('image');

//     // Convert form data entries to an object
//     const updateDataEntries = Array.from(formData.entries());
//     const updateData = updateDataEntries.reduce((acc, [key, value]) => {
//       // Handle special cases for specific fields
//       if (key === 'dynamic_rss_feed' && typeof value === 'string') {
//         // Convert comma-separated string to array if needed
//         acc[key] = value.split(',');
//       } else if (['is_gabbar', 'channel_id', 'created_by', 'is_rss_feed'].includes(key)) {
//         // Convert to number for specific fields
//         acc[key] = Number(value);
//       } else if (value === 'null' || value === '') {
//         // Convert 'null' or empty string to null
//         acc[key] = null;
//       } else {
//         acc[key] = value;
//       }
//       return acc;
//     }, {});

//     // Get the ID from params
//     const id = parseInt(params.id);

//     // Check if the content exists
//     const existingContent = await prisma.crypto_news.findUnique({
//       where: { id }
//     });

//     if (!existingContent) {
//       return NextResponse.json(
//         {
//           success: false,
//           message: 'Content not found'
//         },
//         { status: 404 }
//       );
//     }

//     // File handling
//     let filename = null;
//     if (file && file instanceof File) {
//       // Convert File to buffer
//       const bytes = await file.arrayBuffer();
//       const buffer = Buffer.from(bytes);

//       // Create uploads directory if it doesn't exist
//       const uploadDir = path.join(process.cwd(), 'public', 'uploads');
//       if (!fs.existsSync(uploadDir)) {
//         fs.mkdirSync(uploadDir, { recursive: true });
//       }

//       // Generate unique filename
//       filename = `${Date.now()}-${file.name.replace(/\s+/g, '-')}`;
//       const filePath = path.join(uploadDir, filename);

//       // Write file to uploads directory
//       fs.writeFileSync(filePath, buffer);

//       // Update updateData with file path
//       updateData.image = `/uploads/${filename}`;
//     }

//     // Prepare data for Prisma update
//     const dataToUpdate = {
//       // Update only the fields that are present in the request
//       ...(updateData.title && { title: updateData.title }),
//       ...(updateData.alias && { alias: updateData.alias }),
//       ...(updateData.h1_title && { h1_title: updateData.h1_title }),
//       ...(updateData.h2_title && { h2_title: updateData.h2_title }),
//       ...(updateData.img_alt_title && { img_alt_title: updateData.img_alt_title }),
//       ...(updateData.is_gabbar !== undefined && { is_gabbar: Number(updateData.is_gabbar) }),
//       ...(updateData.created_by && { created_by: Number(updateData.created_by) }),
//       ...(updateData.author_name && { author_name: updateData.author_name }),
//       ...(updateData.is_rss_feed !== undefined && { is_rss_feed: Number(updateData.is_rss_feed) }),
//       ...(updateData.dynamic_rss_feed && { dynamic_rss_feed: JSON.stringify(updateData.dynamic_rss_feed) }),
//       ...(updateData.image && { image: updateData.image }),
//       ...(updateData.channel_id && { channel_id: Number(updateData.channel_id) }),
//       ...(updateData.publishedAt && {
//         publishedAt: Math.floor(new Date(updateData.publishedAt).getTime() / 1000)
//       }),
//       ...(updateData.description && { description: updateData.description }),
//       ...(updateData.article && { article: updateData.article }),
//       ...(updateData.breadcrumbs && { breadcrumbs: JSON.stringify(updateData.breadcrumbs) }),
//       ...(updateData.data_set && { data_set: JSON.stringify(updateData.data_set) }),
//       ...(updateData.discussion_forum && { discussion_forum: JSON.stringify(updateData.discussion_forum) }),
//       ...(updateData.faq && { faq: JSON.stringify(updateData.faq) }),
//       ...(updateData.image_metadata && { image_metadata: JSON.stringify(updateData.image_metadata) }),
//       ...(updateData.new_article && { new_article: updateData.new_article }),
//       ...(updateData.paywalled_content && { paywalled_content: updateData.paywalled_content }),
//       ...(updateData.profile && { profile: JSON.stringify(updateData.profile) }),
//       ...(updateData.organization && { organization: JSON.stringify(updateData.organization) }),
//       ...(updateData.review_snippets && { review_snippets: JSON.stringify(updateData.review_snippets) }),
//       ...(updateData.sitelinks && { sitelinks: JSON.stringify(updateData.sitelinks) }),
//       ...(updateData.video && { video: updateData.video }),
//       ...(updateData.seo_title && { seo_title: updateData.seo_title }),
//       ...(updateData.meta_keywords && { meta_keywords: updateData.meta_keywords }),
//       ...(updateData.meta_description && { meta_description: updateData.meta_description }),
//       updated_at: new Date() // Always update the timestamp
//     };

//     // Update the content
//     const updatedContent = await prisma.crypto_news.update({
//       where: { id },
//       data: dataToUpdate
//     });

//     return NextResponse.json({
//       success: true,
//       message: 'Content updated successfully',
//       data: updatedContent
//     });

//   } catch (error) {
//     console.error('Error in content update:', error);
//     return NextResponse.json(
//       {
//         success: false,
//         message: 'Failed to update content',
//         error: error.message
//       },
//       { status: 500 }
//     );
//   } finally {
//     // Ensure Prisma client is disconnected
//     await prisma.$disconnect();
//   }
// }

// GET route to fetch single content details
export async function GET(request, { params }) {
  try {
    const id = parseInt(params.id);

    const content = await prisma.crypto_news.findUnique({
      where: { id }
    });

    if (!content) {
      return NextResponse.json(
        {
          success: false,
          message: "Content not found"
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: content
    });
  } catch (error) {
    console.error("Error fetching content:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch content",
        error: error.message || "Unknown error"
      },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

export async function DELETE(request, { params }) {
  try {
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

    // Delete the content
    await prisma.crypto_news.delete({
      where: { id }
    });

    return NextResponse.json({
      success: true,
      message: "Content deleted successfully"
    });
  } catch (error) {
    console.error("Error in content deletion:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to delete content",
        error: error.message || "Unknown error"
      },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
