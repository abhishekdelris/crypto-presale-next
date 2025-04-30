import { PrismaClient } from "@prisma/client";
import { data } from "jquery";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

function convertBigIntToString(obj) {
    return JSON.parse(JSON.stringify(obj, (_, value) =>
      typeof value === 'bigint' ? value.toString() : value
    ));
  }

  
export async function GET(request,{params}) {
    const {id} = await params;
    const setid = parseInt(id);
    try {
        const datafetch = await prisma.users.findUnique({
            where :{
                id:setid
            }
        })
        const safeData = convertBigIntToString(datafetch); 
        return NextResponse.json({
            success:true,
            data:safeData,
        },{status:202});
    } catch (error) {
        console.log("api not work properly")
        return NextResponse.json({
            success:false,
            message:("data is not fetch by api" + error.message),
            error:error.message,
        });
    } finally{
        await prisma.$disconnect();
    }
}

export async function POST(request,{params}) {
    try {

        const {id} = await params;
        const setid = parseInt(id);
        const body = await request.json();
        const datadefine =({
            is_upload: body.is_upload ,
            name: body.name,
            dob:new Date(body.dob),
            username: body.username,
            email: body.email,
            about: body.about,
            address: body.address,
            country	: body.country,
            state: body.state,
            city: body.city,
            pincode	: body.pincode,
            facebook_url: body.facebook_url || null,
            instagram_url: body.instagram_url || null,
            telegram_url: body.telegram_url || null,
            twitter_url: body.twitter_url || null,
            reddit_url: body.reddit_url || null,
            linkedin_url: body.linkedin_url|| null,
            discord_url: body.discord_url || null,
            mobile_number: body.mobile_number || null,
            gender: body.gender,
            updated_at: new Date(),
        })

        const dataupdate = await prisma.users.update({
            where:{id:setid},
            data:datadefine,
        })
        return NextResponse.json({
            success:true,
            data:dataupdate,
        });
    } catch (error) {
        console.log("problem in update api",error.message)
        return NextResponse.json({
            success: true,
            message:'the data is not update by api',
            error: error.message,
        })
    } finally{
        await prisma.$disconnect();
    }
}