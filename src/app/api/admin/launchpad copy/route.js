import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export async function GET() {
    try {
        const fetchlaunchpad = await prisma.launchpad.findMany({
            where:{
                deleted_at:null,
            }
        });
        
        return NextResponse.json({
            success:true,
            data:fetchlaunchpad,
        },{
            status:"202",
        });
    } catch (error) {
        console.log("data is not fetch by api",error.message);
        return NextResponse.json({
            success:false,
            message:"data is not fetch by api",
            error:error.message,
        });
    } finally{
        await prisma.$disconnect();
    }
    
}