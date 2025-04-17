// // app/api/cron/route.js
// export const config = {
//   runtime: 'edge',
// };

// import { NextResponse } from 'next/server';
// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// export async function GET() {
//   try {
//     // Get the latest ICO ID from your database
//     const latestEntry = await prisma.crypto_coins_icos.findFirst({
//       orderBy: {
//         id: 'desc',
//       },
//     });
    
//     const latestIcoId = latestEntry?.id || 0;
//     console.log("latestIcoId.....!", latestIcoId);
    
//     // Fetch data from the third party API using the latest ID
//     const response = await fetch(
//       `https://backend.coingabbar.com/api/v1/crypto-icos-icoanoucement?type=ongoing&ico_id=${latestIcoId}`
//     );
    
//     if (!response.ok) {
//       throw new Error(`API responded with status: ${response.status}`);
//     }

//     const data = await response.json();
    
//     const formatToISO = (dateString) => {
//       if (!dateString || dateString.trim() === "") return null; // Handle missing values
//       return new Date(dateString.replace(" ", "T") + "Z").toISOString();
//     };
    
//     // Process the data to exclude the unwanted properties and convert date formats
//     const validDataInfo = data.data
//       .filter((item) => item.approved_time) // Remove entries with missing `approved_time`
//       .map((item) => {
//         // Create a new object without the excluded properties
//         const {
//           crypto_coins_ico_details,
//           ico_contract_address,
//           ico_launchpad,
//           ...includedProperties
//         } = item;
        
//         // Convert approved_time to ISO format
//         return {
//           ...includedProperties,
//           approved_time: formatToISO(item.approved_time),
//           // Convert other date fields if needed
//           start_time: item.start_time ? new Date(item.start_time).toISOString() : null,
//           end_time: item.end_time ? new Date(item.end_time).toISOString() : null,
//           created_at: item.created_at ? new Date(item.created_at).toISOString() : null,
//           updated_at: item.updated_at ? new Date(item.updated_at).toISOString() : null,
//         };
//       });
   
//     // Insert the processed data
//     if (validDataInfo.length > 0) {
//       // Insert all new entries at once
//       const result = await prisma.crypto_coins_icos.createMany({
//         data: validDataInfo,
//         skipDuplicates: true, // Skip if ico_id already exists
//       });
      
//       return NextResponse.json({ 
//         success: true, 
//         message: `Inserted ${result.count} new records`,
//         timestamp: new Date().toISOString()
//       });
//     }
    
//     return NextResponse.json({ 
//       success: true, 
//       message: "No new data to insert",
//       timestamp: new Date().toISOString()
//     });
    
//   } catch (error) {
//     console.error('Error syncing data:', error);
    
//     return NextResponse.json({
//       success: false,
//       message: error instanceof Error ? error.message : 'Unknown error occurred',
//       timestamp: new Date().toISOString()
//     }, { status: 500 });
//   } finally {
//     await prisma.$disconnect();
//   }
// }


// app/api/cron/route.js
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import cron from "node-cron";

export const config = {
  runtime: "node", // Change from 'edge' to 'node'
}; 

// Use a global instance of Prisma to prevent multiple connections
const prisma = new PrismaClient();

// Function to fetch and insert ICO data
async function fetchAndInsertICOData() {
  console.log("Running scheduled task: Fetching ICO data...");

  try {
    // Get the latest ICO ID from your database
    const latestEntry = await prisma.crypto_coins_icos.findFirst({
      orderBy: { ico_id: "desc" },
    });

    const latestIcoId = parseInt(latestEntry?.ico_id) || 0;
    console.log("Latest ICO ID:", latestIcoId);

    // Fetch new data from third-party API
    const response = await fetch(
      `https://backend.coingabbar.com/api/v1/crypto-icos-icoanoucement?type=ongoing&ico_id=${latestIcoId}`
    );

    if (!response.ok) throw new Error(`API responded with status: ${response.status}`);

    const data = await response.json();
  //  console.log("datA IS requested....",data.data);
   
    // Convert date strings to ISO format
    const formatToISO = (dateString) =>
      dateString && dateString.trim() !== "" ? new Date(dateString).toISOString() : null;

    
    // // Process and filter data
    // const validDataInfo = data.data
    
    //   .map(({ crypto_coins_ico_details, ico_contract_address,featured,web_url,likes_counts,is_review, ico_launchpad, ...rest }) => ({
    //     ...rest,
    //     approved_time: formatToISO(rest.approved_time),
    //     start_time: formatToISO(rest.start_time),
    //     end_time: formatToISO(rest.end_time),
    //     created_at: formatToISO(rest.created_at),
    //     updated_at: formatToISO(rest.updated_at),   
    //     ico_id : id  
    //   })); 

    const validDataInfo = data.data.map((item) => {
      const {
        id,
        approved_time,
        start_time,
        end_time,
        created_at,
        updated_at,
        // Remove unwanted fields
        crypto_coins_ico_details,
        ico_contract_address,
        featured,
        web_url,
        likes_counts,
        is_review,
        ico_launchpad,
        ...rest
      } = item;
    
      return {
        ...rest, // contains fields like title, logo, etc.
        ico_id: id,
        approved_time: formatToISO(approved_time),
        start_time: formatToISO(start_time),
        end_time: formatToISO(end_time),
        created_at: formatToISO(created_at),
        updated_at: formatToISO(updated_at),
      };
    });
    // console.log("validDataInfo......",validDataInfo);
    
    if (validDataInfo.length > 0) {
      const result = await prisma.crypto_coins_icos.createMany({
        data:validDataInfo,
        skipDuplicates: true,
      });


      
      // console.log("data is present....",result);
      
      console.log(`Inserted ${result.count} new records.`);
    } else {
      console.log("No new ICO data to insert.");
    }
  } catch (error) {
    console.error("Error syncing ICO data:", error);
  }
}

// 🕒 Schedule Cron Job (Runs every hour)
cron.schedule("0 * * * *", fetchAndInsertICOData);

// cron.schedule("*/2 * * * *", fetchAndInsertICOData);


// 📌 API Route: Manually Trigger the Cron Job
export async function GET() {
  console.log("Manual cron execution triggered...");
  await fetchAndInsertICOData();
  return NextResponse.json({ message: "Cron job executed manually" });
}
