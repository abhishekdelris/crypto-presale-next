// // app/api/guestPost/route.js
// import { executeQuery } from '../../../../lib/db';
// import { NextResponse } from 'next/server';

// export async function GET() {
//   try {
//     // Get guest posts from the database
//     const guestPosts = await executeQuery({
//       query: "SELECT * FROM `crypto_news`"
//     });

//     // Format the data to match your frontend component's needs
//     const formattedPosts = guestPosts.map(post => ({
//       id: post.id,
//       title: post.title,
//       description: post.description || post.short_description || '',
//       image: post.image || '/images/blog.webp', // Fallback to default image if none exists
//       author: post.author || 'Test Field',
//       date: formatDate(post.created_at || new Date()),
//       likes: post.likes_counts || 0,
//       slug: post.alias || "abc",
//       seo: post.is_seo_check || 0,
//       gabbarnews : post.is_seo_check || 0,
//       lan : post.lang || "en",
//       is_new_blog : post.is_news_blog || 0,
//       publishedAt : formatDate(post.publishedAt || new Date()),
//       uploadedAt : formatDate(post.created_at || new Date()),
//       createdby : formatDate(post.created_by || new Date()),
//       urlToImage  : post.urlToImage
//     }));

//     // Return the formatted posts
//     return NextResponse.json({
//       success: true,
//       data: formattedPosts
//     });
//   } catch (error) {
//     console.error('Error fetching guest posts:', error);
//     return NextResponse.json(
//       {
//         success: false,
//         message: 'Failed to fetch guest posts'
//       },
//       { status: 500 }
//     );
//   }
// }

// // Helper function to format dates in DD-MM-YYYY format
// function formatDate(dateString) {
//   const date = new Date(dateString);
//   const day = String(date.getDate()).padStart(2, '0');
//   const month = String(date.getMonth() + 1).padStart(2, '0');
//   const year = date.getFullYear();

//   return `${day}-${month}-${year}`;
// }

// import { NextResponse } from 'next/server';
// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// export async function GET() {
//   try {
//     // Fetch guest posts from the database using Prisma
//     const guestPosts = await prisma.crypto_news.findMany();

//     // Format the data to match frontend component's needs
//     const formattedPosts = guestPosts.map(post => ({
//       id: post.id,
//       title: post.title,
//       description: post.description || post.short_description || '',
//       image: post.image || '/images/blog.webp', // Fallback to default image
//       author: post.author_name || post.created_by || 'Test Field',
//       date: formatDate(post.publishedAt || post.created_at || new Date()),
//       likes: post.likes_counts || 0,
//       slug: post.alias || "abc",
//       seo: post.is_seo_check || 0,
//       gabbarnews: post.is_gabbar || 0,
//       lan: post.lang || "en",
//       is_new_blog: post.new_article || 0,
//       publishedAt: formatDate(post.publishedAt || new Date()),
//       uploadedAt: formatDate(post.created_at || new Date()),
//       createdby: formatDate(post.created_by || new Date()),
//       urlToImage: post.image,

//       // Additional fields from the update route
//       h1_title: post.h1_title,
//       h2_title: post.h2_title,
//       img_alt_title: post.img_alt_title,
//       is_rss_feed: post.is_rss_feed,
//       channel_id: post.channel_id,
//       article: post.article,
//       breadcrumbs: post.breadcrumbs,
//       data_set: post.data_set,
//       discussion_forum: post.discussion_forum,
//       faq: post.faq,
//       image_metadata: post.image_metadata,
//       paywalled_content: post.paywalled_content,
//       profile: post.profile,
//       organization: post.organization,
//       review_snippets: post.review_snippets,
//       sitelinks: post.sitelinks,
//       video: post.video,
//       seo_title: post.seo_title,
//       meta_keywords: post.meta_keywords,
//       meta_description: post.meta_description
//     }));

//     // Return the formatted posts
//     return NextResponse.json({
//       success: true,
//       data: formattedPosts
//     });

//   } catch (error) {
//     console.error('Error fetching guest posts:', error);
//     return NextResponse.json(
//       {
//         success: false,
//         message: 'Failed to fetch guest posts',
//         error: error.message || 'Unknown error'
//       },
//       { status: 500 }
//     );
//   } finally {
//     await prisma.$disconnect();
//   }
// }

// // Helper function to format dates in DD-MM-YYYY format
// function formatDate(dateString) {
//   const date = new Date(dateString);
//   const day = String(date.getDate()).padStart(2, '0');
//   const month = String(date.getMonth() + 1).padStart(2, '0');
//   const year = date.getFullYear();

//   return `${day}-${month}-${year}`;
// }

import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    // Fetch guest posts from the database using Prisma
    const guestPosts = await prisma.crypto_news.findMany({});

    // Format the data to match frontend component's needs
    // console.log("this is a content data .........!",guestPosts);

    const formattedPosts = guestPosts.map(post => ({
      id: post.id,
      title: post.title || "",
      description: post.description || post.short_description || "",
      image: post.image || "/images/blog.webp", // Fallback to default image
      author: post.author_name || "Test Field",
      date: post.created_at
        ? formatISODate(post.created_at)
        : formatISODate(new Date()),
      likes: post.likes_counts || 0,
      slug: post.alias || "abc",
      seo: post.is_seo_check || 0,
      gabbarnews: post.is_gabbar || 1,
      lan: post.lang || "en",
      is_new_blog: post.new_article || 0,
      publishedAt: post.publishedAt
        ? formatDateWithTime(post.publishedAt)
        : formatDateWithTime(new Date()),
      uploadedAt: post.created_at
        ? formatISODate(post.created_at)
        : formatISODate(new Date()),
      createdby: post.created_by || 1,
      urlToImage: post.image,

      // Additional fields with null checks [seo,is_new_blog,]
      h1_title: post.h1_title || "",
      h2_title: post.h2_title || "",
      img_alt_title: post.img_alt_title || "",
      is_rss_feed: post.is_rss_feed || false,
      channel_id: post.channel_id || null,
      article: post.article || "",
      breadcrumbs: post.breadcrumbs || "",
      data_set: post.data_set || "",
      discussion_forum: post.discussion_forum || "",
      faq: post.faq || "",
      image_metadata: post.image_metadata || "",
      paywalled_content: post.paywalled_content || false,
      profile: post.profile || "",
      organization: post.organization || "",
      review_snippets: post.review_snippets || "",
      sitelinks: post.sitelinks || "",
      video: post.video || "",
      seo_title: post.seo_title || "",
      meta_keywords: post.meta_keywords || "",
      meta_description: post.meta_description || ""
    }));

    // Return the formatted posts
    return NextResponse.json({
      success: true,
      data: formattedPosts
    });
  } catch (error) {
    console.error("Error fetching guest posts:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch guest posts",
        error: error.message || "Unknown error"
      },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

// Helper function to format dates in DD-MM-YYYY format
function formatDate(dateString) {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
}

function formatDateWithTime(timestamp) {
  // Create a new Date object from the timestamp
  const date = new Date(timestamp * 1000);

  // Array of month names
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];

  // Get individual date components
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  // Handle hours and minutes
  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";

  // Convert to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // handle midnight (0 hours)

  // Combine into final format
  return `${day} ${month} ${year} ${hours}:${minutes} ${ampm}`;
}

function formatISODate(isoDateString) {
  // Create a Date object from the ISO timestamp
  const date = new Date(isoDateString);

  // Array of month names
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];

  // Get individual date components
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  // Handle hours and minutes
  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";

  // Convert to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // handle midnight (0 hours)

  // Combine into final format
  return `${day} ${month} ${year} ${hours}:${minutes} ${ampm}`;
}
