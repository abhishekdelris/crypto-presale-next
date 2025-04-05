// import { NextResponse } from "next/server";
// import { PrismaClient } from "@prisma/client";
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
//     const file = formData.get("image");

//     // Convert form data entries to an object
//     const postDataEntries = Array.from(formData.entries());
//     const postData = postDataEntries.reduce((acc, [key, value]) => {
//       // Skip file field as we'll handle it separately
//       if (key === "image") return acc;

//       // Handle special cases for specific fields
//       if (key === "dynamic_rss_feed" && typeof value === "string") {
//         // Convert comma-separated string to array if needed
//         acc[key] = value.split(",");
//       } else if (
//         [
//           "is_gabbar",
//           "channel_id",
//           "created_by",
//           "is_rss_feed",
//           "is_analysis",
//           "is_featured",
//           "is_home",
//           "is_thumb",
//           "status",
//           "twitter_post",
//           "is_active",
//           "is_news_blog",
//           "is_paid",
//           "is_organic",
//           "likes_counts",
//           "other_status",
//           "update_status"
//         ].includes(key)
//       ) {
//         // Convert to number for numeric fields
//         acc[key] = Number(value);
//       } else if (["is_cryptotax", "is_seo_check"].includes(key)) {
//         // Handle boolean fields
//         acc[key] = value === "true" || value === "1";
//       } else if (value === "null" || value === "") {
//         // Convert 'null' or empty string to null
//         acc[key] = null;
//       } else {
//         acc[key] = value;
//       }
//       return acc;
//     }, {});

//     // Validate required fields
//     const requiredFields = ["title", "alias"];
//     const missingFields = requiredFields.filter(field => !postData[field]);

//     if (missingFields.length > 0) {
//       return NextResponse.json(
//         {
//           success: false,
//           message: `Missing required fields: ${missingFields.join(", ")}`
//         },
//         { status: 400 }
//       );
//     }

//     // Handle file upload
//     let imageUrl = null;
//     let imageKey = null;

//     if (file) {
//       try {
//         const buffer = Buffer.from(await file.arrayBuffer());
//         const fileExtension = file.name.split(".").pop();
//         const randomKey = crypto.randomBytes(16).toString("hex");

//         // Get current date for folder structure
//         const now = new Date();
//         const year = now.getFullYear();
//         const month = now
//           .toLocaleString("en-US", { month: "long" })
//           .toLowerCase();

//         // Format: uploads/march/2025/randomkey.webp
//         imageKey = `uploads/${year}/${month}/${randomKey}.${fileExtension}`;

//         // Upload to S3
//         await s3Client.send(
//           new PutObjectCommand({
//             Bucket: process.env.AWS_BUCKET_NAME,
//             Key: imageKey,
//             Body: buffer,
//             ContentType: file.type
//           })
//         );

//         // Generate presigned URL for immediate access
//         imageUrl = await getSignedUrl(
//           s3Client,
//           new GetObjectCommand({
//             Bucket: process.env.AWS_BUCKET_NAME,
//             Key: imageKey
//           }),
//           { expiresIn: 3600 } // URL expires in 1 hour
//         );

//         // Update postData with file path
//         postData.image = imageUrl;
//       } catch (error) {
//         console.error("Error uploading to S3:", error);
//         return NextResponse.json(
//           { error: "File upload failed: " + error.message },
//           { status: 500 }
//         );
//       }
//     }

//  // Prepare data for Prisma creation
// const dataToInsert = {
//   user_id: postData.user_id || "0",
//   ico_ido_id: postData.ico_ido_id || null,
//   submit_ico_id: postData.submit_ico_id || null,
//   type: postData.type || 1,
//   ico_ido_type: postData.ico_ido_type || 1,
//   title: postData.title,
//   h1_title: postData.h1_title || null,
//   h2_title: postData.h2_title || null,
//   h3_title: postData.h3_title || null,
//   h4_title: postData.h4_title || null,
//   h5_title: postData.h5_title || null,
//   h6_title: postData.h6_title || null,
//   name: postData.name || null,
//   alias: postData.alias,
//   slug: postData.slug || `${postData.name?.toLowerCase().replace(/\s+/g, '-')}-${postData.alias?.toLowerCase()}-ido-token`,
//   interlink_id: postData.interlink_id || null,
//   country: postData.country || null,
//   email: postData.email || null,
//   image: postData.image || null,
//   img_alt_title: postData.img_alt_title || null,
//   ico_project_id: postData.ico_project_id || 2,
//   ico_project_type_id: postData.ico_project_type_id || 1,
//   website: postData.website || null,
//   social_media_url: postData.social_media_url || null,
//   twitter: postData.twitter || null,
//   instagram: postData.instagram || null,
//   medium: postData.medium || null,
//   reddit: postData.reddit || null,
//   telegram: postData.telegram || null,
//   telegram_group: postData.telegram_group || null,
//   discord: postData.discord || null,
//   chat_url: postData.chat_url || null,
//   white_paper_url: postData.white_paper_url || null,
//   social_media_image: postData.social_media_image || null,
//   start_time: postData.dateStart || postData.start_time || null,
//   end_time: postData.dateEnd || postData.end_time || null,
//   start_end_tba: postData.start_end_tba || null,
//   total_coin: postData.total_coin || "0",
//   quantity_of_coin: postData.quantity_of_coin || "0",
//   total_supply_percent: postData.total_supply_percent2 || postData.total_supply_percent || null,
//   ico_price: postData.ico_price2 || postData.ico_price || "0",
//   accept_type: postData.selectaccept_type || postData.accept_type || "USDT",
//   show_hide_price: postData.show_hide_price || 0,
//   fund_asking_for: postData.fund_asking_forFor || postData.fund_asking_for || "0",
//   where_to_buy: postData.where_to_buy2 || postData.where_to_buy || null,
//   timezone: postData.timezone || null,
//   description: postData.description || null,
//   featured: postData.featured || 1,
//   status: postData.status || 0,
//   affiliate: postData.affiliate || null,
//   hide: postData.hide || null,
//   crypto_market_id: postData.crypto_market_id || null,
//   coin_name: postData.coin_name || null,
//   participate_links: postData.participate_links || null,
//   whitepaper: postData.whitepaper || null,
//   soft_cap: postData.soft_cap2 || postData.soft_cap || null,
//   personal_cap: postData.personal_cap2 || postData.personal_cap || null,
//   hard_cap: postData.hard_cap2 || postData.hard_cap || null,
//   likes_counts: postData.likes_counts || 0,
//   youtube_link: postData.youtube_link || null,
//   linkedin: postData.linkedin || null,
//   plan: postData.plan || null,
//   other_status: postData.other_status || 0,
//   article: postData.article || null,
//   breadcrumbs: postData.breadcrumbs
//     ? JSON.stringify(postData.breadcrumbs)
//     : null,
//   course_info: postData.course_info
//     ? JSON.stringify(postData.course_info)
//     : null,
//   data_set: postData.data_set 
//     ? JSON.stringify(postData.data_set) 
//     : null,
//   discussion_forum: postData.discussion_forum
//     ? JSON.stringify(postData.discussion_forum)
//     : null,
//   events: postData.events 
//     ? JSON.stringify(postData.events) 
//     : null,
//   faq: postData.faq 
//     ? JSON.stringify(postData.faq) 
//     : null,
//   image_metadata: postData.image_metadata
//     ? JSON.stringify(postData.image_metadata)
//     : null,
//   new_article: postData.new_article || null,
//   paywalled_content: postData.paywalled_content || null,
//   product: postData.product || null,
//   profile: postData.profile 
//     ? JSON.stringify(postData.profile) 
//     : null,
//   organization: postData.organization
//     ? JSON.stringify(postData.organization)
//     : null,
//   review_snippets: postData.review_snippets
//     ? JSON.stringify(postData.review_snippets)
//     : null,
//   sitelinks: postData.sitelinks 
//     ? JSON.stringify(postData.sitelinks) 
//     : null,
//   video: postData.video || null,
//   user_contact_type: postData.user_contact_type || null,
//   user_contact: postData.user_contact || null,
//   is_guest: postData.is_guest || 0,
//   is_assign_cubs: postData.is_assign_cubs || 0,
//   fund_stage: postData.fund_stage || 0,
//   launchpad: postData.launchpad || null,
//   total_amount: postData.total_amount || null,
//   wallet_address: postData.wallet_address || null,
//   trasaction_id: postData.trasaction_id || null,
//   market_email: postData.market_email || null,
//   coin_token: postData.coin_token || null,
//   ticker: postData.ticker || null,
//   blockchain: postData.blockchain || null,
//   coin_token_address: postData.coin_token_address || null,
//   private_sale_start_date: postData.private_sale_start_date || null,
//   private_sale_end_date: postData.private_sale_end_date || null,
//   private_sale_token_sold: postData.private_sale_token_sold || null,
//   private_sale_rate: postData.private_sale_rate || 0,
//   private_sale_goal: postData.private_sale_goal || null,
//   private_sale_where_buy: postData.private_sale_where_buy || null,
//   pre_sale_start_date: postData.pre_sale_start_date || null,
//   pre_sale_end_date: postData.pre_sale_end_date || null,
//   pre_sale_token_sold: postData.pre_sale_token_sold || null,
//   pre_sale_rate: postData.pre_sale_rate || null,
//   pre_sale_goal: postData.pre_sale_goal || null,
//   pre_sale_where_buy: postData.pre_sale_where_buy || null,
//   public_sale_start_date: postData.public_sale_start_date || null,
//   public_sale_end_date: postData.public_sale_end_date || null,
//   public_sale_token_sold: postData.public_sale_token_sold || null,
//   public_sale_rate: postData.public_sale_rate || null,
//   public_sale_goal: postData.public_sale_goal || null,
//   public_sale_where_buy: postData.public_sale_where_buy || null,
//   ico_sale_start_date: postData.ico_sale_start_date || null,
//   ico_sale_end_date: postData.ico_sale_end_date || null,
//   ico_sale_token_sold: postData.ico_sale_token_sold || null,
//   ico_sale_rate: postData.ico_sale_rate || null,
//   ico_sale_goal: postData.ico_sale_goal || null,
//   ico_sale_where_buy: postData.ico_sale_where_buy || null,
//   ido_sale_start_date: postData.ido_sale_start_date || null,
//   ido_sale_end_date: postData.ido_sale_end_date || null,
//   ido_sale_token_sold: postData.ido_sale_token_sold || null,
//   ido_sale_rate: postData.ido_sale_rate || null,
//   ido_sale_goal: postData.ido_sale_goal || null,
//   ido_sale_where_buy: postData.ido_sale_where_buy || null,
//   ieo_sale_start_date: postData.ieo_sale_start_date || null,
//   ieo_sale_end_date: postData.ieo_sale_end_date || null,
//   ieo_sale_token_sold: postData.ieo_sale_token_sold || null,
//   ieo_sale_rate: postData.ieo_sale_rate || null,
//   ieo_sale_goal: postData.ieo_sale_goal || null,
//   ieo_sale_where_buy: postData.ieo_sale_where_buy || null,
//   package: postData.package || null,
//   contract_address: postData.contract_address || null,
//   other_launchpad: postData.other_launchpad || null,
//   category_id: postData.category_id || null,
//   sub_category_id: postData.sub_category_id || null,
//   seo_title: postData.seo_title || postData.title,
//   meta_keywords: postData.meta_keywords || null,
//   meta_description: postData.meta_description || null,
//   platform_json: postData.platform_json || null,
//   is_active: postData.is_active || 1,
//   is_review: postData.selectis_review || postData.is_review || 1,
//   approved_by: postData.approved_by || null,
//   approved_time: postData.approved_time || null,
//   one_usdt: postData.one_usdtValue || postData.one_usdt || null,
//   project_website: postData.project_website || "",
//   project_name: postData.project_name || "",
//   update_status: postData.update_status || 0,
//   web_url: postData.web_url || null,
//   thumb: postData.thumb || null,
//   smallThumb: postData.smallThumb || null,
//   tokenForSale: postData.tokenForSale || null,
//   percentageForSupply: postData.percentageForSupply || null,
//   privateSaleSelect: postData.privateSaleSelect || null,
// };

//     // Insert data into the crypto_news table using Prisma
//     const newEntry = await prisma.crypto_coins_icos.create({
//       data: dataToInsert
//     });

//     return NextResponse.json({
//       success: true,
//       message: "Crypto ICO inserted successfully",
//       data: newEntry,
//       imageKey: imageKey,
//       imageUrl: imageUrl
//     });
//   } catch (error) {
//     console.error("Error in Crypto ICO creation:", error);
//     return NextResponse.json(
//       {
//         success: false,
//         message: "Failed to insert Crypto ICO",
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
// import slugify from "slugify"; // Add this dependency for better slug generation

// Create a singleton instance of PrismaClient to prevent multiple connections
const prisma = new PrismaClient();

BigInt.prototype.toJSON = function() {
  return this.toString();
};

export async function POST(request) {
  try {
    // Parse the form data
    const formData = await request.formData();

    // Extract file
    const file = formData.get("image");

    // Convert form data entries to an object with proper type handling
    const postData = Array.from(formData.entries()).reduce((acc, [key, value]) => {
      // Skip file field as we'll handle it separately
      if (key === "image") return acc;

      
      return acc;
    }, {});

    // Validate required fields
    const requiredFields = ["title", "alias"];
    const missingFields = requiredFields.filter(field => !postData[field]);

    // if (missingFields.length > 0) {
    //   return NextResponse.json(
    //     {
    //       success: false,
    //       message: `Missing required fields: ${missingFields.join(", ")}`
    //     },
    //     { status: 400 }
    //   );
    // }

    

    // Handle file upload
    let imageUrl = null;
    let imageKey = null;

    if (file) {
      try {
        const buffer = Buffer.from(await file.arrayBuffer());
        const fileExtension = file.name.split(".").pop().toLowerCase();
        const randomKey = crypto.randomBytes(16).toString("hex");

        // Get current date for folder structure
        const now = new Date();
        const year = now.getFullYear();
        const month = now.toLocaleString("en-US", { month: "long" }).toLowerCase();

        // Format: uploads/year/month/randomkey.ext
        imageKey = `uploads/${year}/${month}/${randomKey}.${fileExtension}`;

        // Validate file type (optional security enhancement)
        const allowedExtensions = ["jpg", "jpeg", "png", "webp", "gif"];
        if (!allowedExtensions.includes(fileExtension)) {
          return NextResponse.json(
            { error: "Invalid file type. Allowed types: jpg, jpeg, png, webp, gif" },
            { status: 400 }
          );
        }

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

        // Store the image key instead of the temporary URL
        postData.image = imageKey; // Store the permanent path rather than temporary URL
      } catch (error) {
        console.error("Error uploading to S3:", error);
        return NextResponse.json(
          { success: false, message: "File upload failed", error: error.message },
          { status: 500 }
        );
      }
    }

    // Process JSON fields consistently
    const jsonFields = [
      "breadcrumbs",
      "course_info",
      "data_set",
      "discussion_forum",
      "events",
      "faq",
      "image_metadata",
      "profile",
      "organization",
      "review_snippets",
      "sitelinks",
      "platform_json"
    ];

    jsonFields.forEach(field => {
      if (postData[field]) {
        // If it's already a string, parse it to ensure valid JSON, then stringify again
        // If it's an object, stringify it
        try {
          const parsed = typeof postData[field] === 'string' 
            ? JSON.parse(postData[field]) 
            : postData[field];
          postData[field] = JSON.stringify(parsed);
        } catch (e) {
          // If parsing fails, set to null to avoid database errors
          console.warn(`Invalid JSON for field ${field}, setting to null`);
          postData[field] = null;
        }
      } else {
        postData[field] = null;
      }
    });

    // Prepare data for Prisma creation
    const dataToInsert = {
      user_id: postData.user_id || "0",
      ico_ido_id: postData.ico_ido_id || null,
      submit_ico_id: postData.submit_ico_id || null,
      type: postData.type || 1,
      ico_ido_type: postData.ico_ido_type || 1,
      title: postData.title,
      h1_title: postData.h1_title || null,
      h2_title: postData.h2_title || null,
      h3_title: postData.h3_title || null,
      h4_title: postData.h4_title || null,
      h5_title: postData.h5_title || null,
      h6_title: postData.h6_title || null,
      name: postData.name || null,
      alias: postData.alias,
      slug: postData.slug,
      interlink_id: postData.interlink_id || null,
      country: postData.country || null,
      email: postData.email || null,
      image: postData.image || null,
      img_alt_title: postData.img_alt_title || null,
      ico_project_id: postData.ico_project_id || 2,
      ico_project_type_id: postData.ico_project_type_id || 1,
      website: postData.website || null,
      social_media_url: postData.social_media_url || null,
      twitter: postData.twitter || null,
      instagram: postData.instagram || null,
      medium: postData.medium || null,
      reddit: postData.reddit || null,
      telegram: postData.telegram || null,
      telegram_group: postData.telegram_group || null,
      discord: postData.discord || null,
      chat_url: postData.chat_url || null,
      white_paper_url: postData.white_paper_url || null,
      social_media_image: postData.social_media_image || null,
      start_time: postData.dateStart || postData.start_time || null,
      end_time: postData.dateEnd || postData.end_time || null,
      start_end_tba: postData.start_end_tba || null,
      total_coin: postData.total_coin || "0",
      quantity_of_coin: postData.quantity_of_coin || "0",
      total_supply_percent: postData.total_supply_percent2 || postData.total_supply_percent || null,
      ico_price: postData.ico_price2 || postData.ico_price || "0",
      accept_type: postData.selectaccept_type || postData.accept_type || "USDT",
      show_hide_price: postData.show_hide_price || 0,
      fund_asking_for: postData.fund_asking_forFor || postData.fund_asking_for || "0",
      where_to_buy: postData.where_to_buy2 || postData.where_to_buy || null,
      timezone: postData.timezone || null,
      description: postData.description || null,
      featured: postData.featured || 1,
      status: postData.status || 0,
      affiliate: postData.affiliate || null,
      hide: postData.hide || null,
      crypto_market_id: postData.crypto_market_id || null,
      coin_name: postData.coin_name || null,
      participate_links: postData.participate_links || null,
      whitepaper: postData.whitepaper || null,
      soft_cap: postData.soft_cap2 || postData.soft_cap || null,
      personal_cap: postData.personal_cap2 || postData.personal_cap || null,
      hard_cap: postData.hard_cap2 || postData.hard_cap || null,
      likes_counts: postData.likes_counts || 0,
      youtube_link: postData.youtube_link || null,
      linkedin: postData.linkedin || null,
      plan: postData.plan || null,
      other_status: postData.other_status || 0,
      article: postData.article || null,
      breadcrumbs: postData.breadcrumbs,
      course_info: postData.course_info,
      data_set: postData.data_set,
      discussion_forum: postData.discussion_forum,
      events: postData.events,
      faq: postData.faq,
      image_metadata: postData.image_metadata,
      new_article: postData.new_article || null,
      paywalled_content: postData.paywalled_content || null,
      product: postData.product || null,
      profile: postData.profile,
      organization: postData.organization,
      review_snippets: postData.review_snippets,
      sitelinks: postData.sitelinks,
      video: postData.video || null,
      user_contact_type: postData.user_contact_type || null,
      user_contact: postData.user_contact || null,
      is_guest: postData.is_guest || 0,
      is_assign_cubs: postData.is_assign_cubs || 0,
      fund_stage: postData.fund_stage || 0,
      launchpad: postData.launchpad || null,
      total_amount: postData.total_amount || null,
      wallet_address: postData.wallet_address || null,
      trasaction_id: postData.trasaction_id || null,
      market_email: postData.market_email || null,
      coin_token: postData.coin_token || null,
      ticker: postData.ticker || null,
      blockchain: postData.blockchain || null,
      coin_token_address: postData.coin_token_address || null,
      private_sale_start_date: postData.private_sale_start_date || null,
      private_sale_end_date: postData.private_sale_end_date || null,
      private_sale_token_sold: postData.private_sale_token_sold || null,
      private_sale_rate: postData.private_sale_rate || 0,
      private_sale_goal: postData.private_sale_goal || null,
      private_sale_where_buy: postData.private_sale_where_buy || null,
      pre_sale_start_date: postData.pre_sale_start_date || null,
      pre_sale_end_date: postData.pre_sale_end_date || null,
      pre_sale_token_sold: postData.pre_sale_token_sold || null,
      pre_sale_rate: postData.pre_sale_rate || null,
      pre_sale_goal: postData.pre_sale_goal || null,
      pre_sale_where_buy: postData.pre_sale_where_buy || null,
      public_sale_start_date: postData.public_sale_start_date || null,
      public_sale_end_date: postData.public_sale_end_date || null,
      public_sale_token_sold: postData.public_sale_token_sold || null,
      public_sale_rate: postData.public_sale_rate || null,
      public_sale_goal: postData.public_sale_goal || null,
      public_sale_where_buy: postData.public_sale_where_buy || null,
      ico_sale_start_date: postData.ico_sale_start_date || null,
      ico_sale_end_date: postData.ico_sale_end_date || null,
      ico_sale_token_sold: postData.ico_sale_token_sold || null,
      ico_sale_rate: postData.ico_sale_rate || null,
      ico_sale_goal: postData.ico_sale_goal || null,
      ico_sale_where_buy: postData.ico_sale_where_buy || null,
      ido_sale_start_date: postData.ido_sale_start_date || null,
      ido_sale_end_date: postData.ido_sale_end_date || null,
      ido_sale_token_sold: postData.ido_sale_token_sold || null,
      ido_sale_rate: postData.ido_sale_rate || null,
      ido_sale_goal: postData.ido_sale_goal || null,
      ido_sale_where_buy: postData.ido_sale_where_buy || null,
      ieo_sale_start_date: postData.ieo_sale_start_date || null,
      ieo_sale_end_date: postData.ieo_sale_end_date || null,
      ieo_sale_token_sold: postData.ieo_sale_token_sold || null,
      ieo_sale_rate: postData.ieo_sale_rate || null,
      ieo_sale_goal: postData.ieo_sale_goal || null,
      ieo_sale_where_buy: postData.ieo_sale_where_buy || null,
      package: postData.package || null,
      contract_address: postData.contract_address || null,
      other_launchpad: postData.other_launchpad || null,
      category_id: postData.category_id || null,
      sub_category_id: postData.sub_category_id || null,
      seo_title: postData.seo_title || postData.title,
      meta_keywords: postData.meta_keywords || null,
      meta_description: postData.meta_description || null,
      platform_json: postData.platform_json,
      is_active: postData.is_active || 1,
      is_review: postData.selectis_review || postData.is_review || 1,
      approved_by: postData.approved_by || null,
      approved_time: postData.approved_time || null,
      one_usdt: postData.one_usdtValue || postData.one_usdt || null,
      project_website: postData.project_website || "",
      project_name: postData.project_name || "",
      update_status: postData.update_status || 0,
      web_url: postData.web_url || null,
      thumb: postData.thumb || null,
      smallThumb: postData.smallThumb || null,
      // tokenForSale: postData.tokenForSale || null,
      // percentageForSupply: postData.percentageForSupply || null,
      // privateSaleSelect: postData.privateSaleSelect || null,
    };

    // Insert data into the database
    const newEntry = await prisma.crypto_coins_icos.create({
      data: dataToInsert
    });

    // For the response, convert the imageKey to an actual URL
    const permanentImageUrl = imageKey ? 
      `${process.env.CDN_BASE_URL || ''}/${imageKey}` : 
      null;

    return NextResponse.json({
      success: true,
      message: "Crypto ICO inserted successfully",
      data: newEntry,
      imageKey: imageKey,
      imageUrl: permanentImageUrl
    });
  } catch (error) {
    console.error("Error in Crypto ICO creation:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to insert Crypto ICO",
        error: error.message
      },
      { status: 500 }
    );
  }
  // No need to explicitly disconnect Prisma for Next.js API routes
  // It is handled automatically by the Next.js lifecycle
}