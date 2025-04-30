import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request,{params}){
    try {
        const body = await request.json();
        const definedata= {
            user_id:body.user_id,
            ico_id:body.ico_id,
        }

    const existing = await prisma.favorites_icos.findFirst({
        where :{
            user_id:body.user_id,
            ico_id:body.ico_id,
        }
    })    
    if (existing) {
        return NextResponse.json({
            success:false,
            message:"Coin is Already in your Favourite list"
        })
    }    
    const dataset = await prisma.favorites_icos.create({
        data:definedata
    });
    return NextResponse.json({
        success:true,
        data:dataset,
    });
    } catch (error) {
        return NextResponse.json({
            success:false,
            message:"The Date is not create by the api",
            error:error.message,
        });
    } finally{
        await prisma.$disconnect();
    }
    

}