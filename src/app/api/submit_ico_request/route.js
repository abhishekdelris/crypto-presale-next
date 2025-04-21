import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { s3Client } from "@/lib/s3-client";
import { PutObjectCommand, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import crypto from "crypto";

const prisma = new PrismaClient();

BigInt.prototype.toJSON = function() {
  return this.toString();
};


export async function POST(request) {
  try {
    // Clone the request to be able to read both JSON and formData
    const clonedRequest = request.clone();
    
    // Get the formData for file processing
    const formData = await request.formData();
    
    // Extract file from formData
    const file = formData.get("image");
    
    // Extract other fields from formData
    const ico_ido_id = formData.get("ico_ido_id");
    const user_id = formData.get("user_id");
    const fund_stage = formData.get("fund_stage");
    const launchpad = formData.get("launchpad");
    const other_launchpad = formData.get("other_launchpad");
    const type = formData.get("type");
    const crypto_market_id = formData.get("crypto_market_id");
    const coin_name = formData.get("coin_name");
    const alias = formData.get("alias");
    const slug = formData.get("slug");
    const start_time = formData.get("start_time");
    const end_time = formData.get("end_time");
    const total_coin = formData.get("total_coin");
    const quantity_of_coin = formData.get("quantity_of_coin");
    const ico_price = formData.get("ico_price");
    const website = formData.get("website");
    const ico_project_id = formData.get("ico_project_id");
    const soft_cap = formData.get("soft_cap");
    const hard_cap = formData.get("hard_cap");
    const personal_cap = formData.get("personal_cap");
    const contract_address = formData.get("contract_address");
    const description = formData.get("description");
    const country = formData.get("country");
    const where_to_buy = formData.get("where_to_buy");
    const social_media_url = formData.get("social_media_url");
    const twitter = formData.get("twitter");
    const instagram = formData.get("instagram");
    const reddit = formData.get("reddit");
    const medium = formData.get("medium");
    const telegram = formData.get("telegram");
    const discord = formData.get("discord");
    const user_contact_type = formData.get("user_contact_type");
    const user_contact = formData.get("user_contact");
    const ico_ido_type = formData.get("ico_ido_type") || 0; // Default value as per schema
    const plan = formData.get("plan");
    const total_amount = formData.get("total_amount");
    const trasaction_id = formData.get("trasaction_id");
    const market_email = formData.get("market_email");
    const wallet_address = formData.get("wallet_address");
    const coin_token_address = formData.get("coin_token_address");
    const coin_token = formData.get("coin_token");
    const blockchain = formData.get("blockchain");
    const ticker = formData.get("ticker");
    const submit_flag = formData.get("submit_flag") || 1; // Default value as per schema
    
    // Validate required fields
    if (!slug) {
      return NextResponse.json(
        { success: false, message: 'Slug is required' },
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

        // Format: uploads/year/month/randomkey.extension
        imageKey = `submit_ico/${year}/${month}/${randomKey}.${fileExtension}`;

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
      } catch (error) {
        console.error("Error uploading to S3:", error);
        return NextResponse.json(
          { error: "File upload failed: " + error.message },
          { status: 500 }
        );
      }
    }

    // Prepare data for insertion
    const icoData = {
      ico_ido_id,
      user_id: user_id ? parseInt(user_id) : null,
      fund_stage: fund_stage ? parseInt(fund_stage) : null,
      launchpad: launchpad ? parseInt(launchpad) : null,
      other_launchpad,
      type: type ? parseInt(type) : null,
      crypto_market_id: crypto_market_id ? parseInt(crypto_market_id) : null,
      coin_name,
      alias,
      slug,
      image: imageKey, // Use the S3 URL instead of the form field
      start_time: start_time ? new Date(start_time) : null,
      end_time: end_time ? new Date(end_time) : null,
      total_coin,
      quantity_of_coin: quantity_of_coin ? BigInt(quantity_of_coin) : null,
      ico_price,
      website,
      ico_project_id: ico_project_id ? parseInt(ico_project_id) : null,
      soft_cap,
      hard_cap,
      personal_cap,
      contract_address,
      description,
      country,
      where_to_buy,
      social_media_url,
      twitter,
      instagram,
      reddit,
      medium,
      telegram,
      discord,
      user_contact_type,
      user_contact,
      ico_ido_type: parseInt(ico_ido_type),
      plan,
      total_amount: total_amount ? parseFloat(total_amount) : null,
      trasaction_id,
      market_email,
      wallet_address,
      coin_token_address,
      coin_token,
      blockchain,
      ticker,
      submit_flag: parseInt(submit_flag),
      created_at: new Date(),
      updated_at: new Date(),
    };

    // Insert data into submit_ico table
    const result = await prisma.submit_ico.create({
      data: icoData
    });

    return NextResponse.json({
      success: true,
      message: 'ICO submission created successfully',
      data: {
        ...result,
        image: imageUrl, // Include the image URL in the response
        imageKey // Include the S3 key for reference
      }
    });
  } catch (error) {
    console.error('Error submitting ICO data:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to submit ICO data', 
        error: error.message 
      },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}