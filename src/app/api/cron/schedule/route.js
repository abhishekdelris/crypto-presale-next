// Install: npm install @upstash/qstash
// app/api/cron/schedule/route.js
import { NextResponse } from "next/server";
import { Client } from "@upstash/qstash";

export async function POST() {
  const client = new Client({
    token: process.env.QSTASH_TOKEN,
  });

  const result = await client.publishJSON({
    url: `${process.env.APP_URL}/api/cron`,
    body: { action: "daily-cleanup" },
    headers: {
      Authorization: `Bearer ${process.env.CRON_SECRET}`,
    },
    cron: "0 0 * * *", // every day at midnight
  });
  
  return NextResponse.json({ messageId: result.messageId });
}