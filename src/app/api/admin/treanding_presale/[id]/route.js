import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import fs from "fs";
import path from "path";

const prisma = new PrismaClient();
BigInt.prototype.toJSON = function() {
  return this.toString();
};

export async function PUT(request, { params }) {
  try {
    const id = parseInt(params.id);
    const body = await request.json();

    // Check if the content exists
    const existingContent = await prisma.trending_presale.findUnique({
      where: { id }
    });

    if (!existingContent) {
      return NextResponse.json(
        {
          success: false,
          message: "Trending Presale not found"
        },
        { status: 404 }
      );
    }

    // Update the content
    const updatedContent = await prisma.trending_presale.update({
      where: { id },
      data: {
        user_id: body.user_id ,
        ico_ido_id: body.ico_ido_id ,
        submit_ico_id: body.submit_ico_id ,
        type: body.type ,
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
        featured: body.featured ,
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
        is_guest: body.is_guest ,
        is_assign_cubs: body.is_assign_cubs ,
        fund_stage: body.fund_stage ,
        launchpad: body.launchpad ,
        total_amount: body.total_amount ,
        wallet_address: body.wallet_address ,
        trasaction_id: body.trasaction_id ,
        market_email: body.market_email ,
        coin_token: body.coin_token ,
        ticker: body.ticker ,
        blockchain: body.blockchain ,
        coin_token_address: body.coin_token_address ,
        private_sale_start_date: body.private_sale_start_date ,
        private_sale_end_date: body.private_sale_end_date ,
        private_sale_token_sold: body.private_sale_token_sold ,
        private_sale_rate: body.private_sale_rate || 0,
        private_sale_goal: body.private_sale_goal ,
        private_sale_where_buy: body.private_sale_where_buy ,
        pre_sale_start_date: body.pre_sale_start_date ,
        pre_sale_end_date: body.pre_sale_end_date ,
        pre_sale_token_sold: body.pre_sale_token_sold ,
        pre_sale_rate: body.pre_sale_rate ,
        pre_sale_goal: body.pre_sale_goal ,
        pre_sale_where_buy: body.pre_sale_where_buy ,
        public_sale_start_date: body.public_sale_start_date ,
        public_sale_end_date: body.public_sale_end_date ,
        public_sale_token_sold: body.public_sale_token_sold ,
        public_sale_rate: body.public_sale_rate ,
        public_sale_goal: body.public_sale_goal ,
        public_sale_where_buy: body.public_sale_where_buy ,
        ico_sale_start_date: body.ico_sale_start_date ,
        ico_sale_end_date: body.ico_sale_end_date ,
        ico_sale_token_sold: body.ico_sale_token_sold ,
        ico_sale_rate: body.ico_sale_rate ,
        ico_sale_goal: body.ico_sale_goal ,
        ico_sale_where_buy: body.ico_sale_where_buy ,
        ido_sale_start_date: body.ido_sale_start_date ,
        ido_sale_end_date: body.ido_sale_end_date ,
        ido_sale_token_sold: body.ido_sale_token_sold ,
        ido_sale_rate: body.ido_sale_rate ,
        ido_sale_goal: body.ido_sale_goal ,
        ido_sale_where_buy: body.ido_sale_where_buy ,
        ieo_sale_start_date: body.ieo_sale_start_date ,
        ieo_sale_end_date: body.ieo_sale_end_date ,
        ieo_sale_token_sold: body.ieo_sale_token_sold ,
        ieo_sale_rate: body.ieo_sale_rate ,
        ieo_sale_goal: body.ieo_sale_goal ,
        ieo_sale_where_buy: body.ieo_sale_where_buy ,
        package: body.package ,
        contract_address: body.contract_address ,
        other_launchpad: body.other_launchpad ,
        category_id: body.category_id ,
        sub_category_id: body.sub_category_id ,
        seo_title: body.seo_title || body.title,
        meta_keywords: body.meta_keywords ,
        meta_description: body.meta_description ,
        platform_json: body.platform_json,
        is_active: body.is_active ,
        is_review: body.selectis_review || body.is_review ,
        approved_by: body.approved_by ,
        approved_time: body.approved_time ,
        one_usdt: body.one_usdtValue || body.one_usdt ,
        project_website: body.project_website ,
        project_name: body.project_name ,
        update_status: body.update_status ,
        web_url: body.web_url ,
        thumb: body.thumb ,
        smallThumb: body.smallThumb ,
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



// GET route to fetch single content details
export async function GET(request, { params }) {
  try {
    const id = parseInt(params.id);

    const content = await prisma.trending_presale.findUnique({
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

    // Check if the content exists and is not already deleted
    const existingContent = await prisma.trending_presale.findUnique({
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
    await prisma.trending_presale.update({
      where: { id },
      data: {
        deleted_at: new Date()
      }
    });

    return NextResponse.json({
      success: true,
      message: "Trending Presale deleted successfully"
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
