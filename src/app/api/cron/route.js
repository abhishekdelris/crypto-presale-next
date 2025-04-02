// app/api/cron/route.js
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// This is a Next.js API route that serves as the endpoint for your cron job
export async function GET(request) {
  // Verify the request is coming from your cron service (optional but recommended)
  const authHeader = request.headers.get('authorization');
  if (!process.env.CRON_SECRET || authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    // Execute your scheduled task here
    // For example, cleaning up old data, sending reports, etc.
    await performScheduledTask();
    
    return NextResponse.json({ success: true, message: 'Cron job executed successfully' });
  } catch (error) {
    console.error('Cron job error:', error);
    return NextResponse.json({ error: 'Failed to execute cron job' }, { status: 500 });
  }
}

async function performScheduledTask() {
  // Example task: Archive old records
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
  
  const result = await prisma.oldRecords.updateMany({
    where: {
      createdAt: {
        lt: thirtyDaysAgo
      },
      isArchived: false
    },
    data: {
      isArchived: true
    }
  });
  
  console.log(`Archived ${result.count} old records`);
  return result;
}