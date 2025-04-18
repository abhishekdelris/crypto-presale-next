import { NextRequest,NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma= new PrismaClient();

export async function GET(){
    try {
        const projectCategories = await prisma.project_categories.findMany({
            where:{
                deleted_at: null,
            }
        });
        return NextResponse.json({
            success: true,
            data:projectCategories,
        },{
            status:200,
        })

    } catch (error) {
        console.log("data fetch by api",error.message);
        return NextResponse.json({
            success:false,
            error_status:error,
            message:error.message,
        })
        
    } finally{
        await prisma.$disconnect({});
    }
}