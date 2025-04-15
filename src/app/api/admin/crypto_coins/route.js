import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

BigInt.prototype.toJSON = function() {
  return this.toString();
};

// Helper function to parse dates in DD-MM-YYYY format
function parseCustomDateFormat(dateString) {
  if (!dateString) return null;
  
  // Split the DD-MM-YYYY format
  const parts = dateString.split('-');
  if (parts.length !== 3) return null;
  
  // Note: JavaScript months are 0-based, so we subtract 1 from the month
  return new Date(parts[2], parts[1] - 1, parts[0]);
}

export async function GET() {
  try {
    // Get current date information
    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();
    
    // Fetch all active ICOs
    const allICOs = await prisma.crypto_coins_icos.findMany({
      where: {
        deleted_at: null,
      },
      orderBy: {
        end_time: 'desc',
      },
    });
    
    // Separate ICOs into current month and other months
    const currentMonthICOs = [];
    const otherICOs = [];
    
    allICOs.forEach(ico => {
      // Parse the end_time that's in DD-MM-YYYY format
      const endTime = parseCustomDateFormat(ico.end_time);
      if (endTime && endTime.getMonth() === currentMonth && endTime.getFullYear() === currentYear) {
        currentMonthICOs.push(ico);
      } else {
        otherICOs.push(ico);
      }
    });
    
    // Sort current month ICOs by end_time in descending order
    currentMonthICOs.sort((a, b) => {
      const dateA = parseCustomDateFormat(a.end_time);
      const dateB = parseCustomDateFormat(b.end_time);
      return dateB - dateA; // Descending order
    });
    
    // Sort other ICOs by end_time in descending order
    otherICOs.sort((a, b) => {
      const dateA = parseCustomDateFormat(a.end_time);
      const dateB = parseCustomDateFormat(b.end_time);
      return dateB - dateA; // Descending order
    });
    
    // Combine the arrays - current month ICOs first, then others
    const sortedICOs = [...currentMonthICOs, ...otherICOs];
    
    // Return the formatted crypto coins
    return NextResponse.json({
      success: true,
      data: sortedICOs,
    });
  } catch (error) {
    console.error("Error fetching Crypto ico coins:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch Crypto ico coins",
        error: error.message || "Unknown error"
      },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
// import { NextResponse } from "next/server";
// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// // Parse DD-MM-YYYY formatted date string
// function parseCustomDateFormat(dateString) {
//   if (!dateString) return null;
//   const parts = dateString.split('-');
//   if (parts.length !== 3) return null;

//   const day = parseInt(parts[0], 10);
//   const month = parseInt(parts[1], 10) - 1; // Month is 0-based in JS
//   const year = parseInt(parts[2], 10);

//   const parsedDate = new Date(year, month, day);
//   return isNaN(parsedDate.getTime()) ? null : parsedDate;
// }

// export async function GET() {
//   try {
//     const now = new Date();
//     const currentMonth = now.getMonth();
//     const currentYear = now.getFullYear();

//     const allICOs = await prisma.crypto_coins_icos.findMany({
//       where: {
//         deleted_at: null,
//       },
//     });

//     const currentMonthICOs = [];
//     const otherICOs = [];

//     allICOs.forEach(ico => {
//       const endTime = parseCustomDateFormat(ico.end_time);

//       if (
//         endTime &&
//         endTime.getMonth() === currentMonth &&
//         endTime.getFullYear() === currentYear
//       ) {
//         currentMonthICOs.push({ ...ico, parsedEndTime: endTime });
//       } else {
//         otherICOs.push({ ...ico, parsedEndTime: endTime });
//       }
//     });

//     // Sort both groups in descending order
//     const sortDesc = (a, b) => b.parsedEndTime - a.parsedEndTime;

//     currentMonthICOs.sort(sortDesc);
//     otherICOs.sort(sortDesc);

//     // Merge sorted lists
//     const sortedICOs = [...currentMonthICOs, ...otherICOs].map(({ parsedEndTime, ...ico }) => ico);

//     return NextResponse.json({
//       success: true,
//       data: sortedICOs,
//     });
//   } catch (error) {
//     console.error("Error fetching Crypto ico coins:", error);
//     return NextResponse.json(
//       {
//         success: false,
//         message: "Failed to fetch Crypto ico coins",
//         error: error.message || "Unknown error"
//       },
//       { status: 500 }
//     );
//   } finally {
//     await prisma.$disconnect();
//   }
// }

// Helper function to format dates for display (DD-MM-YYYY)
function formatDisplayDate(dateString) {
  if (!dateString) return null;
  
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
}

// Calculate days remaining from now to end date
function calculateDaysRemaining(endDateString) {
  if (!endDateString) return null;
  
  const endDate = new Date(endDateString);
  const now = new Date();
  
  // Reset time portions for accurate day calculation
  endDate.setHours(0, 0, 0, 0);
  now.setHours(0, 0, 0, 0);
  
  const diffTime = endDate - now;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  return diffDays > 0 ? diffDays : 0;
}
function formatDateWithTime(timestamp) {
  // Create a new Date object from the timestamp
  const date = new Date(timestamp * 1000);

  // Array of month names
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];

  // Get individual date components
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  // Handle hours and minutes
  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";

  // Convert to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // handle midnight (0 hours)

  // Combine into final format
  return `${day} ${month} ${year} ${hours}:${minutes} ${ampm}`;
}

function formatISODate(isoDateString) {
  // Create a Date object from the ISO timestamp
  const date = new Date(isoDateString);

  // Array of month names
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];

  // Get individual date components
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  // Handle hours and minutes
  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";

  // Convert to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // handle midnight (0 hours)

  // Combine into final format
  return `${day} ${month} ${year} ${hours}:${minutes} ${ampm}`;
}
