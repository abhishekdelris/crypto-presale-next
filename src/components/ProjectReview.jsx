

// app/project_review/page.js
import React from "react";
import Link from "next/link";
import ProjectReviewClient from "./project-review-client";

// Server Component for data fetching
async function getProjectPosts() {
  try {
    // Using fetch for server-side data fetching
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || ''}/api/project_preview`, {
      // Adding cache options
      cache: 'no-store', // For real-time data
      // next: { revalidate: 60 }, // For periodic updates
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch project posts: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (data.success) {
      return { data: data.data, error: null };
    } else {
      return { data: [], error: "Failed to fetch project posts" };
    }
  } catch (error) {
    console.error("Error fetching project posts:", error);
    return { data: [], error: error.message };
  }
}

export default async function ProjectReview() {
  // Fetch project posts server-side
  const { data: blogPosts, error } = await getProjectPosts();
  
  // Extract unique categories and tags for filtering options
  const categories = [...new Set(blogPosts.map(post => post.category).filter(Boolean))];
  const allTags = blogPosts.flatMap(post => post.tags || []);
  const uniqueTags = [...new Set(allTags)];
  
  return (
    <>
      <section className="brdcrumb">
        <div className="container">
          <ul className="mb-0">
            <li><Link href="/" title="Home">Home</Link></li>
            <li>Project Review</li>
          </ul>
        </div>
      </section>
      
      {/* Pass data to client component for interactivity */}
      <ProjectReviewClient 
        initialPosts={blogPosts} 
        initialError={error} 
        categories={categories}
        tags={uniqueTags}
      />
    </>
  );
}