
import React from "react";
import Image from "next/image";
import Link from "next/link";
import ListicleClient from "./listicle-client";
import { revalidateTag } from 'next/cache';
// This is a Server Component that fetches data
async function getArticles() {
  try {
    // Using fetch API for server-side data fetching
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || ''}/api/listicle`, {
      // Adding cache options
      cache: 'no-store', 
      // next: { revalidate: 60 } // Revalidate every hour
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch articles: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (data.success) {
      return { data: data.data, error: null };
    } else {
      return { data: [], error: "Failed to fetch articles" };
    }
  } catch (error) {
    console.error("Error fetching articles:", error);
    return { data: [], error: error.message };
  }
}

export default async function Listicle() {
  // Fetch articles server-side
  const { data: articles, error } = await getArticles();
  
  return (
    <>
      <section className="brdcrumb">
        <div className="container">
          <ul className="mb-0">
            <li><Link href="/" title="Home">Home</Link></li>
            <li>Listicle</li>
          </ul>
        </div>
      </section>

      {/* Pass data to client component for interactivity */}
      <ListicleClient initialArticles={articles} initialError={error} />
    </>
  );
} 