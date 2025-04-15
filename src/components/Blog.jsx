import React from "react";
import Image from 'next/image';
import Link from "next/link";
import BlogClient from "./BlogClient";

async function Blog() {
  // Fetch data on the server
  const articles = await fetchArticles();
  
  // Handle error state
  if (!articles.success) {
    return (
      <div className="container mt-5">
        <div className="alert alert-danger" role="alert">
          {articles.error}
        </div>
      </div>
    );
  }

  // Process the data for different sections
  const featuredArticle = articles.data[0];
  const sidebarArticles = articles.data.slice(1, 4);
  const latestArticles = articles.data.slice(4);

  return (
    <>
      {/* Breadcrumb */}
      <section className="brdcrumb">
        <div className="container">
          <ul className="mb-0">
            <li><Link href="/" title="Home">Home</Link></li>
            <li>Blog</li>
          </ul>
        </div>
      </section>
      
      <div className="container mt-4">
        <h1>Latest Crypto News</h1>
        
        {/* Pass data to client component for interactivity */}
        <BlogClient 
          featuredArticle={featuredArticle} 
          sidebarArticles={sidebarArticles} 
          latestArticles={latestArticles} 
        />
      </div>
    </>
  );
}

// Server-side data fetching function
async function fetchArticles() {
  try {
    // In App Router, you need to use the full URL
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/blog", { 
      cache: 'no-store', 
      next: { revalidate: 60 } // Optional: Revalidate every hour
    });
    
    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (data.success && data.data && data.data.length > 0) {
      return {
        success: true,
        data: data.data
      };
    } else {
      return {
        success: false,
        error: "No articles found.",
        data: []
      };
    }
  } catch (err) {
    console.error("Error fetching news:", err);
    return {
      success: false,
      error: err.message || "Failed to load news data.",
      data: []
    };
  }
}

export default Blog;