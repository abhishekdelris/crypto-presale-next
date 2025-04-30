import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(request,{params}) {
    try {
       const {id} = await params;
    const setid = parseInt(id);
    const fetchFavourite_List = await prisma.favorites_icos.findMany({
        where:{
            user_id:setid,
        }
    }); 
    return NextResponse.json({
        success:true,
        data:fetchFavourite_List,
    });
    } catch (error) {
        console.log("favourite list is not fetch by api");
        return NextResponse.json({
            success:false,
            message:("error is find in get method",error.message),
            error:error.message,
        })
    } finally{
        await prisma.$disconnect();
    }
        
}