import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import fs from "fs";
import path from "path";

const prisma = new PrismaClient();
BigInt.prototype.toJSON = function() {
  return this.toString();
};

export async function GET(request, params) {
  try {
    // Wait for the context to resolve before accessing params

    const {id } =  parseInt(params.id) || 0;
   
    
    const content = await prisma.crypto_coins_icos.findUnique({
      where: { id}
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