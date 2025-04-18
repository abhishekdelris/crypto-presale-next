import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(){
    try {
        const ico_Project_Type = await prisma.ico_project_types.findMany({
            where:{
                deleted_at:null,
            }
        });
        return NextResponse.json({
            success:true,
            data:ico_Project_Type,
        },{
            status:202,
        })
    } catch (error) {
            console.error("Api is not working",error.message);
            return NextResponse.json({
                success:false,
                message:"errorr in the api ",
                error:error.message,
            });
    } finally{
        await prisma.$disconnect();
    }
}