// File: app/api/faqs/route.js
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request) {
  try {
    // Get query parameters for pagination
    const searchParams = request.nextUrl.searchParams;
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    // const search = searchParams.get('search') || '';

    // Calculate skip value for pagination
    const skip = (page - 1) * limit;

    // Query faqs with pagination and optional search
    const faqs = await prisma.faqs.findMany({
      //   where: {
      //     OR: [
      //     //   { question: { contains: search, mode: 'insensitive' } },
      //     //   { answer: { contains: search, mode: 'insensitive' } }
      //     ]
      //   },
      skip,
      take: limit,
      orderBy: { created_at: "desc" }
    });

    // Get total count for pagination info
    const totalFaqs = await prisma.faqs.count(
      {
        //   where: {
        //     OR: [
        //       { question: { contains: search, mode: 'insensitive' } },
        //       { answer: { contains: search, mode: 'insensitive' } }
        //     ]
        //   }
      }
    );

    // Calculate pagination metadata
    const totalPages = Math.ceil(totalFaqs / limit);

    return NextResponse.json({
      faqs,
      pagination: {
        total: totalFaqs,
        page,
        limit,
        totalPages,
        hasMore: page < totalPages
      }
    });
  } catch (error) {
    console.error("Error fetching FAQs:", error);
    return NextResponse.json(
      { error: "Failed to fetch FAQs" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { question, answer, category } = body;

    // Validate required fields
    if (!question || !answer) {
      return NextResponse.json(
        { error: "Question and answer are required" },
        { status: 400 }
      );
    }

    // Create new FAQ
    const newFaq = await prisma.faqs.create({
      data: {
        question,
        answer,
        category: category || "General"
      }
    });

    return NextResponse.json(newFaq, { status: 201 });
  } catch (error) {
    console.error("Error creating FAQ:", error);
    return NextResponse.json(
      { error: "Failed to create FAQ" },
      { status: 500 }
    );
  }
}
