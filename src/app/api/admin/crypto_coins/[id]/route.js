import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import fs from "fs";
import path from "path";

const prisma = new PrismaClient();
BigInt.prototype.toJSON = function() {
  return this.toString();
};


export async function PUT(request, context) {
  try {
    const { params } = context; // ✅ Extract after await context
  const id = parseInt(params.id);
    const body = await request.json();

    // Check if the content exists
    const existingContent = await prisma.crypto_coins_icos.findUnique({
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
    // Convert date strings to ISO format
    const formatToISO = (dateString) =>
      dateString && dateString.trim() !== "" ? new Date(dateString).toISOString() : null;

    // Update the content
    const updatedContent = await prisma.crypto_coins_icos.update({
      where: { id },
      data: { 
        user_id: body.user_id ,
        ico_ido_id: body.ico_ido_id ,
        submit_ico_id: body.submit_ico_id ,
        type: parseInt(body.type) || 0 ,
        ico_ido_type: parseInt(body.ico_ido_type) ,
        title: body.title,
        h1_title: body.h1_title ,
        h2_title: body.h2_title ,
        h3_title: body.h3_title ,
        h4_title: body.h4_title ,
        h5_title: body.h5_title ,
        h6_title: body.h6_title ,
        name: body.name ,
        alias: body.alias,
        slug: body.slug,
        interlink_id: body.interlink_id ,
        country: body.country ,
        email: body.email ,
        image: body.image ,
        img_alt_title: body.img_alt_title ,
        ico_project_id: body.ico_project_id ,
        ico_project_type_id: body.ico_project_type_id ,
        website: body.website ,
        social_media_url: body.social_media_url ,
        twitter: body.twitter ,
        instagram: body.instagram ,
        medium: body.medium ,
        reddit: body.reddit ,
        telegram: body.telegram ,
        telegram_group: body.telegram_group ,
        discord: body.discord ,
        chat_url: body.chat_url ,
        white_paper_url: body.white_paper_url ,
        social_media_image: body.social_media_image ,
        start_time: body.dateStart || body.start_time ,
        end_time: body.dateEnd || body.end_time ,
        start_end_tba: body.start_end_tba ,
        total_coin: body.total_coin ,
        quantity_of_coin: body.quantity_of_coin ,
        total_supply_percent: body.total_supply_percent2 || body.total_supply_percent ,
        ico_price: body.ico_price2 || body.ico_price ,
        accept_type: body.selectaccept_type || body.accept_type ,
        show_hide_price: body.show_hide_price ,
        fund_asking_for: body.fund_asking_forFor || body.fund_asking_for ,
        where_to_buy: body.where_to_buy2 || body.where_to_buy ,
        timezone: body.timezone ,
        description: body.description ,
        featured: parseInt(body.featured) || 0,
        status: body.status ,
        affiliate: body.affiliate ,
        hide: body.hide ,
        crypto_market_id: body.crypto_market_id ,
        coin_name: body.coin_name ,
        participate_links: body.participate_links ,
        whitepaper: body.whitepaper ,
        soft_cap: body.soft_cap2 || body.soft_cap ,
        personal_cap: body.personal_cap2 || body.personal_cap ,
        hard_cap: body.hard_cap2 || body.hard_cap ,
        likes_counts: body.likes_counts ,
        youtube_link: body.youtube_link ,
        linkedin: body.linkedin ,
        plan: body.plan ,
        other_status: body.other_status ,
        article: body.article ,
        breadcrumbs: body.breadcrumbs,
        course_info: body.course_info,
        data_set: body.data_set,
        discussion_forum: body.discussion_forum,
        events: body.events,
        faq: body.faq,
        image_metadata: body.image_metadata,
        new_article: body.new_article ,
        paywalled_content: body.paywalled_content ,
        product: body.product ,
        profile: body.profile,
        organization: body.organization,
        review_snippets: body.review_snippets,
        sitelinks: body.sitelinks,
        video: body.video ,
        user_contact_type: body.user_contact_type ,
        user_contact: body.user_contact ,
        is_guest: parseInt(body.is_guest) || 0 ,
        is_assign_cubs: body.is_assign_cubs ,
        fund_stage: body.fund_stage ,
        launchpad: parseInt(body.launchpad) || 0 ,
        total_amount: body.total_amount ,
        wallet_address: body.wallet_address ,
        trasaction_id: body.trasaction_id ,
        market_email: body.market_email ,
        coin_token: body.coin_token ,
        ticker: body.ticker ,
        blockchain: body.blockchain ,
        coin_token_address: body.coin_token_address ,
        private_sale_start_date: formatToISO(body.private_sale_start_date) ,
        private_sale_end_date: formatToISO(body.private_sale_end_date) ,
        private_sale_token_sold: parseFloat(body.private_sale_token_sold) || null,
        private_sale_rate: parseFloat(body.private_sale_rate) || null,
        private_sale_goal: parseInt(body.private_sale_goal) || 0 ,
        private_sale_where_buy: body.private_sale_where_buy ,
        pre_sale_start_date: formatToISO(body.pre_sale_start_date) ,
        pre_sale_end_date: formatToISO(body.pre_sale_end_date) ,
        pre_sale_token_sold: parseFloat(body.pre_sale_token_sold) || null ,
        pre_sale_rate: parseFloat(body.pre_sale_rate) || null,
        pre_sale_goal: parseInt(body.pre_sale_goal) || 0,
        pre_sale_where_buy: body.pre_sale_where_buy ,
        public_sale_start_date: formatToISO(body.public_sale_start_date) ,
        public_sale_end_date: formatToISO(body.public_sale_end_date) ,
        public_sale_token_sold: parseFloat(body.public_sale_token_sold) || null ,
        public_sale_rate: parseFloat(body.public_sale_rate) || null ,
        public_sale_goal: parseInt(body.public_sale_goal) || 0,
        public_sale_where_buy: body.public_sale_where_buy ,
        ico_sale_start_date: formatToISO(body.ico_sale_start_date) ,
        ico_sale_end_date: formatToISO(body.ico_sale_end_date) ,
        ico_sale_token_sold: parseFloat(body.ico_sale_token_sold) || null ,
        ico_sale_rate: parseFloat(body.ico_sale_rate) || null ,
        ico_sale_goal: parseInt(body.ico_sale_goal) || 0 ,
        ico_sale_where_buy: body.ico_sale_where_buy ,
        ido_sale_start_date: formatToISO(body.ido_sale_start_date) ,
        ido_sale_end_date: formatToISO(body.ido_sale_end_date) ,
        ido_sale_token_sold: parseFloat(body.ido_sale_token_sold) || null ,
        ido_sale_rate: parseFloat(body.ido_sale_rate) || null ,
        ido_sale_goal: parseInt(body.ido_sale_goal) || 0,
        ido_sale_where_buy: body.ido_sale_where_buy ,
        ieo_sale_start_date: formatToISO(body.ieo_sale_start_date) ,
        ieo_sale_end_date: formatToISO(body.ieo_sale_end_date) ,
        ieo_sale_token_sold: parseFloat(body.ieo_sale_token_sold) || null ,
        ieo_sale_rate: parseFloat(body.ieo_sale_rate) || null ,
        ieo_sale_goal: parseInt(body.ieo_sale_goal) || 0 ,
        ieo_sale_where_buy: body.ieo_sale_where_buy ,
        package: body.package ,
        contract_address: body.contract_address ,
        other_launchpad: body.other_launchpad ,
        category_id: body.category_id ,
        sub_category_id: parseInt(body.sub_category_id) || 0 ,
        seo_title: body.seo_title || body.title,
        meta_keywords: body.meta_keywords , 
        meta_description: body.meta_description ,
        platform_json: body.platform_json,
        is_active: body.is_active ,
        is_review: parseInt(body.selectis_review) || parseInt(body.is_review) ,
        approved_by: body.approved_by ,
        approved_time: body.approved_time ,
        one_usdt: body.one_usdtValue || body.one_usdt ,
        project_website: body.project_website ,
        project_name: body.project_name ,
        update_status: body.update_status ,
        web_url: body.web_url ,
        thumb: body.thumb ,
        smallThumb: body.smallThumb ,
        is_trending: parseInt(body.is_trending) || 0,
        is_bestpresale: parseInt(body.is_bestpresale) || 0,
        is_promoted: parseInt(body.is_promoted) || 0,
        updated_at: new Date() // Assuming you have an updated_at field
      }
    });

    return NextResponse.json({
      success: true,
      message: "Crypto Coins updated successfully",
      data: updatedContent
    });
  } catch (error) {
    console.error("Error in Crypto Coins update:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to update Crypto Coins",
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
// export async function GET(request, { params }) {
//   try {
//     const id = parseInt(params.id);

//     const content = await prisma.crypto_coins_icos.findUnique({
//       where: { id }
//     });

//     if (!content) {
//       return NextResponse.json(
//         {
//           success: false,
//           message: "Content not found"
//         },
//         { status: 404 }
//       );
//     }

//     return NextResponse.json({
//       success: true,
//       data: content
//     });
//   } catch (error) {
//     console.error("Error fetching content:", error);
//     return NextResponse.json(
//       {
//         success: false,
//         message: "Failed to fetch content",
//         error: error.message || "Unknown error"
//       },
//       { status: 500 }
//     );
//   } finally {
//     await prisma.$disconnect();
//   }
// }

export async function GET(request, { params }) {
  try {
    const id = parseInt(params.id);

    const content = await prisma.crypto_coins_icos.findUnique({
      where: { id }
    });

    const cryptoDetails = await prisma.crypto_coins_icos_details.findMany({
      where: { crypto_coins_icos_id: id }
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

    // Merge the content with details
    const mergedContent = {
      ...content,
      details: cryptoDetails || {}
    };

    return NextResponse.json({
      success: true,
      data: mergedContent
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

// export async function DELETE(request, { params }) {
//   try {
//     const id = parseInt(params.id);

//     // Check if the content exists
//     const existingContent = await prisma.crypto_news.findUnique({
//       where: { id }
//     });

//     if (!existingContent) {
//       return NextResponse.json(
//         {
//           success: false,
//           message: "Content not found"
//         },
//         { status: 404 }
//       );
//     }

//     // Delete the content
//     await prisma.crypto_news.delete({
//       where: { id }
//     });

//     return NextResponse.json({
//       success: true,
//       message: "Content deleted successfully"
//     });
//   } catch (error) {
//     console.error("Error in content deletion:", error);
//     return NextResponse.json(
//       {
//         success: false,
//         message: "Failed to delete content",
//         error: error.message || "Unknown error"
//       },
//       { status: 500 }
//     );
//   } finally {
//     await prisma.$disconnect();
//   }
// }



export async function DELETE(request, { params }) {
  try {
    const id = parseInt(params.id);

    // Check if the content exists and is not already deleted
    const existingContent = await prisma.crypto_coins_icos.findUnique({
      where: { id }
    });

    if (!existingContent || existingContent.deleted_at) {
      return NextResponse.json(
        {
          success: false,
          message: "Content not found or already deleted"
        },
        { status: 404 }
      );
    }

    // Perform soft delete by setting deleted_at to current timestamp
    await prisma.crypto_coins_icos.update({
      where: { id },
      data: {
        deleted_at: new Date()
      }
    });

    return NextResponse.json({
      success: true,
      message: "crytpo coins deleted successfully"
    });
  } catch (error) {
    console.error("Error in crypto coins deletion:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to  delete content",
        error: error.message || "Unknown error"
      },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
