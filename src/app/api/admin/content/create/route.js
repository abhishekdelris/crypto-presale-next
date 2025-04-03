// // app/api/guestPost/route.js
// import { executeQuery } from '../../../../../lib/db';
// import { NextResponse } from 'next/server';

// export async function POST(request) {
//   try {
//     // Parse the incoming request body
//     const postData = await request.json();

//     // Validate required fields
//     const requiredFields = ['title', 'alias', 'description'];
//     for (const field of requiredFields) {
//       if (!postData[field]) {
//         return NextResponse.json(
//           {
//             success: false,
//             message: `Missing required field: ${field}`
//           },
//           { status: 400 }
//         );
//       }
//     }

//     // Prepare the SQL query with all the specified fields
//     const query = `
//       INSERT INTO crypto_news (
//         title,
//         alias,
//         h1_title,
//         h2_title,
//         img_alt_title,
//         created_by,
//         author_name,
//         is_rss_feed,
//         dynamic_rss_feed,
//         image,
//         channel_id,
//         publishedAt,
//         description,
//         article,
//         breadcrumbs,
//         data_set,
//         discussion_forum,
//         faq,
//         image_metadata,
//         new_article,
//         paywalled_content,
//         profile,
//         organization,
//         review_snippets,
//         sitelinks,
//         video,
//         seo_title,
//         meta_keywords,
//         meta_description,
//         created_at,
//         is_gabbar
//       ) VALUES (
//         ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,
//         ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,
//         ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW(),
//          ?
//       )
//     `;

//     // Prepare values array matching the query placeholders
//     const values = [
//       postData.title,
//       postData.alias,
//       postData.h1_title || null,
//       postData.h2_title || null,
//       postData.img_alt_title || null,

//       postData.created_by || null,
//       postData.author_name || null,
//       postData.is_rss_feed || 0,
//       postData.dynamic_rss_feed || null,
//       postData.image || null,
//       postData.channel_id || null,
//       postData.publishedAt || null,
//       postData.description,
//       postData.article || null,
//       postData.breadcrumbs ? JSON.stringify(postData.breadcrumbs) : null,
//       postData.data_set ? JSON.stringify(postData.data_set) : null,
//       postData.discussion_forum ? JSON.stringify(postData.discussion_forum) : null,
//       postData.faq ? JSON.stringify(postData.faq) : null,
//       postData.image_metadata ? JSON.stringify(postData.image_metadata) : null,
//       postData.new_article || null,
//       postData.paywalled_content || null,
//       postData.profile ? JSON.stringify(postData.profile) : null,
//       postData.organization ? JSON.stringify(postData.organization) : null,
//       postData.review_snippets ? JSON.stringify(postData.review_snippets) : null,
//       postData.sitelinks ? JSON.stringify(postData.sitelinks) : null,
//       postData.video || null,
//       postData.seo_title || null,
//       postData.meta_keywords || null,
//       postData.meta_description || null,
//       postData.is_gabbar || 1
//     ];

//     // Execute the insert query
//     const result = await executeQuery({
//       query,
//       values
//     });

//     // Return success response with inserted ID
//     return NextResponse.json({
//       success: true,
//       message: 'Content inserted successfully',
//       insertedId: result.insertId
//     });

//   } catch (error) {
//     console.error('Error inserting Content:', error);
//     return NextResponse.json(
//       {
//         success: false,
//         message: 'Failed to insert Content',
//         error: error.message
//       },
//       { status: 500 }
//     );
//   }
// }

// import { executeQuery } from '../../../../../lib/db';
// import { NextResponse } from 'next/server';

// export async function POST(request) {
//   try {
//     const postData = await request.json();

//     // Validate required fields
//     const requiredFields = ['title', 'alias', 'description'];
//     const missingFields = requiredFields.filter(field => !postData[field]);

//     if (missingFields.length > 0) {
//       return NextResponse.json(
//         { success: false, message: `Missing fields: ${missingFields.join(', ')}` },
//         { status: 400 }
//       );
//     }

//     const query = `
//     INSERT INTO crypto_news (
//       author_id, author_name, author, user_id, is_gabbar, is_analysis, is_featured,
//       channel_id, created_by, is_home, title, alias, interlink_id, h1_title, h2_title,
//       short_desc, description, url, image, img_alt_title, is_thumb, urlToImage,
//       word_file, key_takeaways_json, lang, tags, status, twitter_post, is_active,
//       coin_id, unique_name, is_rss_feed, is_news_blog, is_paid, is_organic, is_cryptotax,
//       is_seo_check, publishedAt, focus_keyword, seo_title, meta_keywords, meta_description,
//       likes_counts, other_status, article, breadcrumbs, course_info, data_set,
//       discussion_forum, events, faq, image_metadata, project_name, project_website,
//       new_article, paywalled_content, product, profile, organization, review_snippets,
//       sitelinks, video, dynamic_rss_feed, dataset_level, dataset_json, update_status

//     )
//     VALUES (
//       ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,
//       ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?
//     )
//   `;

//   const values = [
//     postData.author_id || 0,
//     postData.author_name || null,
//     postData.author || null,
//     postData.user_id || 0,
//     postData.is_gabbar || 1,
//     postData.is_analysis || 0,
//     postData.is_featured || 0,
//     postData.channel_id || 0,
//     postData.created_by || 0,
//     postData.is_home || 0,
//     postData.title,
//     postData.alias,
//     postData.interlink_id || null,
//     postData.h1_title || null,
//     postData.h2_title || null,
//     postData.short_desc || null,
//     postData.description,
//     postData.url || null,
//     postData.image || null,
//     postData.img_alt_title || null,
//     postData.is_thumb || 0,
//     postData.urlToImage || null,
//     postData.word_file || null,
//     JSON.stringify(postData.key_takeaways_json) || null,
//     postData.lang || 'en',
//     postData.tags || null,
//     postData.status || 1,
//     postData.twitter_post || 0,
//     postData.is_active || 1,
//     postData.coin_id || null,
//     postData.unique_name || null,
//     postData.is_rss_feed || 0,
//     postData.is_news_blog || 0,
//     postData.is_paid || 0,
//     postData.is_organic || 0,
//     postData.is_cryptotax || 0,
//     postData.is_seo_check || 1,
//     postData.publishedAt || Math.floor(Date.now() / 1000),
//     postData.focus_keyword || null,
//     postData.seo_title || null,
//     postData.meta_keywords || null,
//     postData.meta_description || null,
//     postData.likes_counts || 0,
//     postData.other_status || 0,
//     postData.article || null,
//     JSON.stringify(postData.breadcrumbs) || null,
//     JSON.stringify(postData.course_info) || null,
//     JSON.stringify(postData.data_set) || null,
//     JSON.stringify(postData.discussion_forum) || null,
//     JSON.stringify(postData.events) || null,
//     JSON.stringify(postData.faq) || null,
//     JSON.stringify(postData.image_metadata) || null,
//     postData.project_name || 0,
//     postData.project_website || 0,
//     postData.new_article || null,
//     postData.paywalled_content || null,
//     postData.product || null,
//     JSON.stringify(postData.profile) || null,
//     JSON.stringify(postData.organization) || null,
//     JSON.stringify(postData.review_snippets) || null,
//     JSON.stringify(postData.sitelinks) || null,
//     postData.video || null,
//     JSON.stringify(postData.dynamic_rss_feed) || null,
//     postData.dataset_level || null,
//     JSON.stringify(postData.dataset_json) || null,
//     postData.update_status || 0
//   ];

// console.log("value....",values);
// console.log("query.....",query);

//     const result = await executeQuery({ query, values });

//     return NextResponse.json({
//       success: true,
//       message: 'Content inserted successfully',
//       insertedId: result.insertId
//     });

//   } catch (error) {
//     console.error('Error:', error);
//     return NextResponse.json({ success: false, message: 'Failed to insert content', error: error.message }, { status: 500 });
//   }
// }

// app/api/insert-crypto-news/route.js

// import { NextResponse } from 'next/server';
// import { PrismaClient } from '@prisma/client';
// import fs from 'fs';
// import path from 'path';

// const prisma = new PrismaClient();

// export async function POST(request) {
//   try {
//     const formData = await request.formData();
//     const file = formData.get('file');
//     const postData = await request.json();

//     if (!file) {
//       return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
//     }

//     // Convert File to buffer
//     const bytes = await file.arrayBuffer();
//     const buffer = Buffer.from(bytes);

//     // Create uploads directory if it doesn't exist
//     const uploadDir = path.join(process.cwd(), 'public', 'uploads');
//     if (!fs.existsSync(uploadDir)) {
//       fs.mkdirSync(uploadDir, { recursive: true });
//     }

//     // Generate unique filename
//     const filename = `${Date.now()}-${file.name}`;
//     const filePath = path.join(uploadDir, filename);

//     // Write file to uploads directory
//     fs.writeFileSync(filePath, buffer);

//     // Validate required fields
//     const requiredFields = ['title', 'alias', 'description'];
//     const missingFields = requiredFields.filter(field => !postData[field]);

//     if (missingFields.length > 0) {
//       return NextResponse.json(
//         { success: false, message: `Missing fields: ${missingFields.join(', ')}` },
//         { status: 400 }
//       );
//     }

//     // Insert data into the crypto_news table using Prisma
//     const newEntry = await prisma.crypto_news.create({
//       data: {
//         author_id: postData.author_id || 0,
//         author_name: postData.author_name || null,
//         author: postData.author || null,
//         user_id: postData.user_id || 0,
//         is_gabbar: postData.is_gabbar || 1,
//         is_analysis: postData.is_analysis || 0,
//         is_featured: postData.is_featured || 0,
//         channel_id: postData.channel_id || 0,
//         created_by: postData.created_by || 0,
//         is_home: postData.is_home || 0,
//         title: postData.title,
//         alias: postData.alias,
//         interlink_id: postData.interlink_id || null,
//         h1_title: postData.h1_title || null,
//         h2_title: postData.h2_title || null,
//         short_desc: postData.short_desc || null,
//         description: postData.description,
//         url: postData.url || null,
//         image: String(postData.image) || null,
//         img_alt_title: postData.img_alt_title || null,
//         is_thumb: postData.is_thumb || 0,
//         urlToImage: postData.urlToImage || null,
//         word_file: postData.word_file || null,
//         key_takeaways_json: postData.key_takeaways_json ? JSON.stringify(postData.key_takeaways_json) : null,
//         lang: postData.lang || 'en',
//         tags: postData.tags || null,
//         status: postData.status || 1,
//         twitter_post: postData.twitter_post || 0,
//         is_active: postData.is_active || 1,
//         coin_id: postData.coin_id || null,
//         unique_name: postData.unique_name || null,
//         is_rss_feed: postData.is_rss_feed || 0,
//         is_news_blog: postData.is_news_blog || 0,
//         is_paid: postData.is_paid || 0,
//         is_organic: postData.is_organic || 0,
//         is_cryptotax: postData.is_cryptotax || true,
//         is_seo_check: postData.is_seo_check || true,
//         publishedAt: Number(postData.publishedAt) || Math.floor(Date.now() / 1000),
//         focus_keyword: postData.focus_keyword || null,
//         seo_title: postData.seo_title || null,
//         meta_keywords: postData.meta_keywords || null,
//         meta_description: postData.meta_description || null,
//         likes_counts: postData.likes_counts || 0,
//         other_status: postData.other_status || 0,
//         article: postData.article || null,
//         breadcrumbs: postData.breadcrumbs ? JSON.stringify(postData.breadcrumbs) : null,
//         course_info: postData.course_info ? JSON.stringify(postData.course_info) : null,
//         data_set: postData.data_set ? JSON.stringify(postData.data_set) : null,
//         discussion_forum: postData.discussion_forum ? JSON.stringify(postData.discussion_forum) : null,
//         events: postData.events ? JSON.stringify(postData.events) : null,
//         faq: postData.faq ? JSON.stringify(postData.faq) : null,
//         image_metadata: postData.image_metadata ? JSON.stringify(postData.image_metadata) : null,
//         project_name: postData.project_name || null,
//         project_website: postData.project_website || null,
//         new_article: postData.new_article || null,
//         paywalled_content: postData.paywalled_content || null,
//         product: postData.product || null,
//         profile: postData.profile ? JSON.stringify(postData.profile) : null,
//         organization: postData.organization ? JSON.stringify(postData.organization) : null,
//         review_snippets: postData.review_snippets ? JSON.stringify(postData.review_snippets) : null,
//         sitelinks: postData.sitelinks ? JSON.stringify(postData.sitelinks) : null,
//         video: postData.video || null,
//         dynamic_rss_feed: postData.dynamic_rss_feed ? JSON.stringify(postData.dynamic_rss_feed) : null,
//         dataset_level: postData.dataset_level || null,
//         dataset_json: postData.dataset_json ? JSON.stringify(postData.dataset_json) : null,
//         update_status: postData.update_status || 0
//       }
//     });

//     return NextResponse.json({
//       success: true,
//       message: 'Content inserted successfully',
//       filename: `/uploads/${filename}`,
//       data: newEntry
//     });
//   } catch (error) {
//     console.error('Error:', error);
//     return NextResponse.json(
//       { success: false, message: 'Failed to insert content', error: error.message },
//       { status: 500 }
//     );
//   }
// }

// import { NextResponse } from 'next/server';
// import { PrismaClient } from '@prisma/client';
// import fs from 'fs';
// import path from 'path';
// import { s3Client } from "@/lib/s3-client";
// import { PutObjectCommand, GetObjectCommand } from "@aws-sdk/client-s3";
// import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
// import crypto from "crypto";

// const prisma = new PrismaClient();

// export async function POST(request) {
//   try {
//     // Parse the form data
//     const formData = await request.formData();

//     // Extract file
//     const file = formData.get('image');

//     // Convert form data entries to an object
//     const postDataEntries = Array.from(formData.entries());
//     const postData = postDataEntries.reduce((acc, [key, value]) => {
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

//   try {

//     if (!file) {
//       return NextResponse.json({ error: "No file provided" }, { status: 400 });
//     }

//     const buffer = Buffer.from(await file.arrayBuffer());
//     const fileExtension = file.name.split(".").pop();
//     const randomKey = crypto.randomBytes(16).toString("hex");
//     const key = `uploads/${randomKey}.${fileExtension}`;

//     // Upload to S3
//     await s3Client.send(
//       new PutObjectCommand({
//         Bucket: process.env.AWS_BUCKET_NAME,
//         Key: key,
//         Body: buffer,
//         ContentType: file.type,
//       })
//     );

//     // Generate presigned URL for immediate access
//     const url = await getSignedUrl(
//       s3Client,
//       new GetObjectCommand({
//         Bucket: process.env.AWS_BUCKET_NAME,
//         Key: key,
//       }),
//       { expiresIn: 3600 } // URL expires in 1 hour
//     );

//     return NextResponse.json({ success: true, url, key });
//   } catch (error) {
//     console.error("Error uploading to S3:", error);
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }

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

//       // Update postData with file path
//       postData.image = `/uploads/${filename}`;
//     }

//     // Validate required fields
//     const requiredFields = ['title', 'alias'];
//     const missingFields = requiredFields.filter(field => !postData[field]);

//     if (missingFields.length > 0) {
//       return NextResponse.json(
//         {
//           success: false,
//           message: `Missing required fields: ${missingFields.join(', ')}`
//         },
//         { status: 400 }
//       );
//     }

//     // Prepare data for Prisma creation
//     const dataToInsert = {
//       author_id: postData.author_id || 0,
//         author_name: postData.author_name || null,
//         author: postData.author || null,
//         user_id: postData.user_id || 0,
//         is_gabbar: postData.is_gabbar || 1,
//         is_analysis: postData.is_analysis || 0,
//         is_featured: postData.is_featured || 0,
//         channel_id: postData.channel_id || 0,
//         created_by: postData.created_by || 0,
//         is_home: postData.is_home || 0,
//         title: postData.title,
//         alias: postData.alias,
//         interlink_id: postData.interlink_id || null,
//         h1_title: postData.h1_title || null,
//         h2_title: postData.h2_title || null,
//         short_desc: postData.short_desc || null,
//         description: postData.description,
//         url: postData.url || "null",
//         image: postData.image || null,
//         img_alt_title: postData.img_alt_title || null,
//         is_thumb: postData.is_thumb || 0,
//         urlToImage: postData.urlToImage || null,
//         word_file: postData.word_file || null,
//         key_takeaways_json: postData.key_takeaways_json ? JSON.stringify(postData.key_takeaways_json) : null,
//         lang: postData.lang || 'en',
//         tags: postData.tags || null,
//         status: postData.status || 1,
//         twitter_post: postData.twitter_post || 0,
//         is_active: postData.is_active || 1,
//         coin_id: postData.coin_id || null,
//         unique_name: postData.unique_name || null,
//         is_rss_feed: postData.is_rss_feed || 0,
//         is_news_blog: postData.is_news_blog || 0,
//         is_paid: postData.is_paid || 0,
//         is_organic: postData.is_organic || 0,
//         is_cryptotax: postData.is_cryptotax || true,
//         is_seo_check: postData.is_seo_check || true,
//         publishedAt: postData.publishedAt
//         ? Math.floor(new Date(postData.publishedAt).getTime() / 1000)
//         : Math.floor(Date.now() / 1000),
//         focus_keyword: postData.focus_keyword || null,
//         seo_title: postData.seo_title || null,
//         meta_keywords: postData.meta_keywords || null,
//         meta_description: postData.meta_description || null,
//         likes_counts: postData.likes_counts || 0,
//         other_status: postData.other_status || 0,
//         article: postData.article || null,
//         breadcrumbs: postData.breadcrumbs ? JSON.stringify(postData.breadcrumbs) : null,
//         course_info: postData.course_info ? JSON.stringify(postData.course_info) : null,
//         data_set: postData.data_set ? JSON.stringify(postData.data_set) : null,
//         discussion_forum: postData.discussion_forum ? JSON.stringify(postData.discussion_forum) : null,
//         events: postData.events ? JSON.stringify(postData.events) : null,
//         faq: postData.faq ? JSON.stringify(postData.faq) : null,
//         image_metadata: postData.image_metadata ? JSON.stringify(postData.image_metadata) : null,
//         project_name: postData.project_name || null,
//         project_website: postData.project_website || null,
//         new_article: postData.new_article || null,
//         paywalled_content: postData.paywalled_content || null,
//         product: postData.product || null,
//         profile: postData.profile ? JSON.stringify(postData.profile) : null,
//         organization: postData.organization ? JSON.stringify(postData.organization) : null,
//         review_snippets: postData.review_snippets ? JSON.stringify(postData.review_snippets) : null,
//         sitelinks: postData.sitelinks ? JSON.stringify(postData.sitelinks) : null,
//         video: postData.video || null,
//         dynamic_rss_feed: postData.dynamic_rss_feed ? JSON.stringify(postData.dynamic_rss_feed) : null,
//         dataset_level: postData.dataset_level || null,
//         dataset_json: postData.dataset_json ? JSON.stringify(postData.dataset_json) : null,
//         update_status: postData.update_status || 0

//     };

//     // Insert data into the crypto_news table using Prisma
//     const newEntry = await prisma.crypto_news.create({
//       data: dataToInsert
//     });

//     return NextResponse.json({
//       success: true,
//       message: 'Content inserted successfully',
//       data: newEntry
//     });

//   } catch (error) {
//     console.error('Error in content creation:', error);
//     return NextResponse.json(
//       {
//         success: false,
//         message: 'Failed to insert content',
//         error: error.message
//       },
//       { status: 500 }
//     );
//   } finally {
//     // Ensure Prisma client is disconnected
//     await prisma.$disconnect();
//   }
// }

import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { s3Client } from "@/lib/s3-client";
import { PutObjectCommand, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import crypto from "crypto";

const prisma = new PrismaClient();

export async function POST(request) {
  try {
    // Parse the form data
    const formData = await request.formData();

    // Extract file
    const file = formData.get("image");

    // Convert form data entries to an object
    const postDataEntries = Array.from(formData.entries());
    const postData = postDataEntries.reduce((acc, [key, value]) => {
      // Skip file field as we'll handle it separately
      if (key === "image") return acc;

      // Handle special cases for specific fields
      if (key === "dynamic_rss_feed" && typeof value === "string") {
        // Convert comma-separated string to array if needed
        acc[key] = value.split(",");
      } else if (
        [
          "is_gabbar",
          "channel_id",
          "created_by",
          "is_rss_feed",
          "is_analysis",
          "is_featured",
          "is_home",
          "is_thumb",
          "status",
          "twitter_post",
          "is_active",
          "is_news_blog",
          "is_paid",
          "is_organic",
          "likes_counts",
          "other_status",
          "update_status"
        ].includes(key)
      ) {
        // Convert to number for numeric fields
        acc[key] = Number(value);
      } else if (["is_cryptotax", "is_seo_check"].includes(key)) {
        // Handle boolean fields
        acc[key] = value === "true" || value === "1";
      } else if (value === "null" || value === "") {
        // Convert 'null' or empty string to null
        acc[key] = null;
      } else {
        acc[key] = value;
      }
      return acc;
    }, {});

    // Validate required fields
    const requiredFields = ["title", "alias"];
    const missingFields = requiredFields.filter(field => !postData[field]);

    if (missingFields.length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: `Missing required fields: ${missingFields.join(", ")}`
        },
        { status: 400 }
      );
    }

    // Handle file upload
    let imageUrl = null;
    let imageKey = null;

    if (file) {
      try {
        const buffer = Buffer.from(await file.arrayBuffer());
        const fileExtension = file.name.split(".").pop();
        const randomKey = crypto.randomBytes(16).toString("hex");

        // Get current date for folder structure
        const now = new Date();
        const year = now.getFullYear();
        const month = now
          .toLocaleString("en-US", { month: "long" })
          .toLowerCase();

        // Format: uploads/march/2025/randomkey.webp
        imageKey = `uploads/${year}/${month}/${randomKey}.${fileExtension}`;

        // Upload to S3
        await s3Client.send(
          new PutObjectCommand({
            Bucket: process.env.AWS_BUCKET_NAME,
            Key: imageKey,
            Body: buffer,
            ContentType: file.type
          })
        );

        // Generate presigned URL for immediate access
        imageUrl = await getSignedUrl(
          s3Client,
          new GetObjectCommand({
            Bucket: process.env.AWS_BUCKET_NAME,
            Key: imageKey
          }),
          { expiresIn: 3600 } // URL expires in 1 hour
        );

        // Update postData with file path
        postData.image = imageUrl;
      } catch (error) {
        console.error("Error uploading to S3:", error);
        return NextResponse.json(
          { error: "File upload failed: " + error.message },
          { status: 500 }
        );
      }
    }

    // Prepare data for Prisma creation
    const dataToInsert = {
      author_id: postData.author_id || 0,
      author_name: postData.author_name || null,
      author: postData.author || null,
      user_id: postData.user_id || 0,
      is_gabbar: postData.is_gabbar || 1,
      is_analysis: postData.is_analysis || 0,
      is_featured: postData.is_featured || 0,
      channel_id: postData.channel_id || 0,
      created_by: postData.created_by || 0,
      is_home: postData.is_home || 0,
      title: postData.title,
      alias: postData.alias,
      interlink_id: postData.interlink_id || null,
      h1_title: postData.h1_title || null,
      h2_title: postData.h2_title || null,
      short_desc: postData.short_desc || null,
      description: postData.description,
      url: postData.url || "null",
      image: postData.image || null,
      img_alt_title: postData.img_alt_title || null,
      is_thumb: postData.is_thumb || 0,
      urlToImage: postData.urlToImage || null,
      word_file: postData.word_file || null,
      key_takeaways_json: postData.key_takeaways_json
        ? JSON.stringify(postData.key_takeaways_json)
        : null,
      lang: postData.lang || "en",
      tags: postData.tags || null,
      status: postData.status || 1,
      twitter_post: postData.twitter_post || 0,
      is_active: postData.is_active || 1,
      coin_id: postData.coin_id || null,
      unique_name: postData.unique_name || null,
      is_rss_feed: postData.is_rss_feed || 0,
      is_news_blog: postData.is_news_blog || 0,
      is_paid: postData.is_paid || 0,
      is_organic: postData.is_organic || 0,
      is_cryptotax: postData.is_cryptotax || true,
      is_seo_check: postData.is_seo_check || true,
      publishedAt: postData.publishedAt
        ? Math.floor(new Date(postData.publishedAt).getTime() / 1000)
        : Math.floor(Date.now() / 1000),
      focus_keyword: postData.focus_keyword || null,
      seo_title: postData.seo_title || null,
      meta_keywords: postData.meta_keywords || null,
      meta_description: postData.meta_description || null,
      likes_counts: postData.likes_counts || 0,
      other_status: postData.other_status || 0,
      article: postData.article || null,
      breadcrumbs: postData.breadcrumbs
        ? JSON.stringify(postData.breadcrumbs)
        : null,
      course_info: postData.course_info
        ? JSON.stringify(postData.course_info)
        : null,
      data_set: postData.data_set ? JSON.stringify(postData.data_set) : null,
      discussion_forum: postData.discussion_forum
        ? JSON.stringify(postData.discussion_forum)
        : null,
      events: postData.events ? JSON.stringify(postData.events) : null,
      faq: postData.faq ? JSON.stringify(postData.faq) : null,
      image_metadata: postData.image_metadata
        ? JSON.stringify(postData.image_metadata)
        : null,
      project_name: postData.project_name || null,
      project_website: postData.project_website || null,
      new_article: postData.new_article || null,
      paywalled_content: postData.paywalled_content || null,
      product: postData.product || null,
      profile: postData.profile ? JSON.stringify(postData.profile) : null,
      organization: postData.organization
        ? JSON.stringify(postData.organization)
        : null,
      review_snippets: postData.review_snippets
        ? JSON.stringify(postData.review_snippets)
        : null,
      sitelinks: postData.sitelinks ? JSON.stringify(postData.sitelinks) : null,
      video: postData.video || null,
      dynamic_rss_feed: Array.isArray(postData.dynamic_rss_feed)
        ? JSON.stringify(postData.dynamic_rss_feed)
        : postData.dynamic_rss_feed,
      dataset_level: postData.dataset_level || null,
      dataset_json: postData.dataset_json
        ? JSON.stringify(postData.dataset_json)
        : null,
      update_status: postData.update_status || 0
    };

    // Insert data into the crypto_news table using Prisma
    const newEntry = await prisma.crypto_news.create({
      data: dataToInsert
    });

    return NextResponse.json({
      success: true,
      message: "Content inserted successfully",
      data: newEntry,
      imageKey: imageKey,
      imageUrl: imageUrl
    });
  } catch (error) {
    console.error("Error in content creation:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to insert content",
        error: error.message
      },
      { status: 500 }
    );
  } finally {
    // Ensure Prisma client is disconnected
    await prisma.$disconnect();
  }
}

// export async function POST(request) {
//   try {
//     // Parse the form data
//     const formData = await request.formData();
//     const file = formData.get('file');

//     if (!file) {
//       return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
//     }

//     // Convert File to buffer
//     const bytes = await file.arrayBuffer();
//     const buffer = Buffer.from(bytes);

//     // Create uploads directory if it doesn't exist
//     const uploadDir = path.join(process.cwd(), 'public', 'uploads');
//     if (!fs.existsSync(uploadDir)) {
//       fs.mkdirSync(uploadDir, { recursive: true });
//     }

//     // Generate unique filename
//     const filename = `${Date.now()}-${file.name}`;
//     const filePath = path.join(uploadDir, filename);

//     // Write file to uploads directory
//     fs.writeFileSync(filePath, buffer);

//     return NextResponse.json({
//       message: 'File uploaded successfully',
//       filename: `/uploads/${filename}`
//     }, { status: 200 });

//   } catch (error) {
//     console.error('Upload error:', error);
//     return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
//   }
// }
