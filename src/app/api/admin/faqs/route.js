import { NextResponse,NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(){
   try {
    const faqinfo = await prisma.faqs.findMany({
        where:{
            deleted_at:null
        }
    });

    return NextResponse.json({
        success: true,
        data: faqinfo,

    }, {
        status:200,
    })
    
   } catch (error) {
    console.warn("Get faq error",error.message);
    return NextResponse.json({
        success:false,
        message:error.message,
        error_status:error,
    });
   } 
   finally{
    await prisma.$disconnect();
   }
}
