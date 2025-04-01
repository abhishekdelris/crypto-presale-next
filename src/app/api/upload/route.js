import { NextResponse } from "next/server";
import { s3Client } from "@/lib/s3-client";
import { PutObjectCommand, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import crypto from "crypto";

export async function POST(request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file");
    
    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }
    
    const buffer = Buffer.from(await file.arrayBuffer());
    const fileExtension = file.name.split(".").pop();
    const randomKey = crypto.randomBytes(16).toString("hex");
    const key = `uploads/${randomKey}.${fileExtension}`;
    
    // Upload to S3
    await s3Client.send(
      new PutObjectCommand({
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: key,
        Body: buffer,
        ContentType: file.type,
      })
    );
    
    // Generate presigned URL for immediate access
    const url = await getSignedUrl(
      s3Client,
      new GetObjectCommand({
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: key,
      }),
      { expiresIn: 3600 } // URL expires in 1 hour
    );
    
    return NextResponse.json({ success: true, url, key });
  } catch (error) {
    console.error("Error uploading to S3:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}