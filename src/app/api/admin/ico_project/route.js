import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(){
    try {
        const info_ico_project = await prisma.ico_projects.findMany({
            where:{
                deleted_at:null,
            }
        });

        return NextResponse.json({
            success:true,
            data:info_ico_project,
        },{status:202});
        
    } catch (error) {
        console("Failed to fetch data",error.message);
        return NextResponse.json({
            success:false,
            message:"failed to fetch data",
            error:error.message,            
        });
    } finally{
        await prisma.$disconnect();
    }

}