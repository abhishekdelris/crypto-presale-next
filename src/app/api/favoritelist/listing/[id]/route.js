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
    const icoIds = fetchFavourite_List.map(fav => fav.ico_id);
    const fetchcoindata = await prisma.crypto_coins_icos.findMany({
        where:{
            id:{
                in:icoIds
            },
        }
    })
    return NextResponse.json({
        success:true,
        data:fetchcoindata,
    });
    } catch (error) {
        console.log("favourite list is not fetch by api");
        return NextResponse.json({
            success:false,
            message:("error is find in get method",error.message),
            error:error.message,
        })
    }
        
}

export async function DELETE(request) {
    try {
      const body = await request.json();
    const check = await prisma.favorites_icos.findFirst({
        where:{
            user_id:parseInt(body.user_id),
            ico_id:parseInt(body.ico_id)
        }
    })
    console.log(check);
    const deletedata = await prisma.favorites_icos.delete({
        where:{
            id:check.id
        }
    })
    
    return NextResponse.json({
        success:true,
        data:deletedata,
    });   
    } catch (error) {
        console.log("coin is not remove by api");
        return NextResponse.json({
            success:false,
            message:("error in Delete method",error.message),
            error:error.message,
        })
    }
}