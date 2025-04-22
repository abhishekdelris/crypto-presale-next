import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const body = await req.json();

    const newContact = await prisma.contact_us.create({
      data: {
        name: body.name,
        email: body.email,
        inquiry_type: body.inquiry_type,
        mobile: body.mobile || null,
        message: body.message,
        file: body.file || null,
        replied: body.replied ?? 0,
        is_gt_inquiry: body.is_gt_inquiry ?? 0,
        url_any: body.url_any || null,
        website_url: body.website_url || null,
        twitter_id: body.twitter_id || null,
        telegram_id: body.telegram_id || null,
        project_name: body.project_name || null,
        subject: body.subject || null,
        description: body.description || null,
        other: body.other || null,
        other2: body.other2 || null,
        // created_at, updated_at handled by Prisma
      },
    });

    return new Response(JSON.stringify({ success: true, data: newContact }), {
      status: 201,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error creating contact:', error);
    return new Response(JSON.stringify({ success: false, error: 'Something went wrong' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
