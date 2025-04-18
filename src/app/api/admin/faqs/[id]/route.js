import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function DELETE(request,{params}){
    try {
        const id = parseInt(params.id);
        const existingContent = await prisma.faqs.findUnique({
            where:{id},
        });
        if(!existingContent || existingContent.deleted_at){
            return NextResponse.json({
                success:false,
                message:" content already delete",
            },{
                status:404,
            });
        }
        await prisma.faqs.update({
            where : {id},
            data : {
                deleted_at:new Date(),
            }
        })
        return NextResponse.json({
            status:200,
            message:"Faq is delete successfuly",
        });
    } catch (error) {
        console.log("Problem in delete api of faq",error.message);
        return NextResponse.json({
            success:false,
            message:"Failed to delete",
            error: error.message,
        })
    } finally{
        await prisma.$disconnect();
    }

}