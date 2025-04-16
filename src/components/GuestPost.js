import Image from "next/image";
import Link from "next/link";
import defaultBlogImage from "@/images/blog.webp"; // Update the path as needed
import GuestPostClient from "./GuestPostClient";

// Server Component - handles data fetching
async function GuestPost() {
  // Fetch data on the server
  const posts = await fetchPosts();
  
  // If error occurred during fetch
  if (!posts.success) {
    return (
      <section>
        <div className="container">
          <div className="error">{posts.error}</div>
        </div>
      </section>
    );
  }
  
  // If no posts available
  if (!posts.data || posts.data.length === 0) {
    return (
      <section>
        <div className="container">
          <div className="no-posts">No posts available</div>
        </div>
      </section>
    );
  }
  
  return (
    <>
      <section className="brdcrumb">
        <div className="container">
          <ul className="mb-0">
            <li>
              <Link href="/" title="Home">
                Home
              </Link>
            </li>
            <li>Guest Post</li>
          </ul>
        </div>
      </section>
      <section>
        <div className="container">
          {/* Page Title */}
          <h1 className="page-title">Guest Post</h1>
          
          {/* Pass data to client component for interactivity */}
          <GuestPostClient posts={posts.data} />
        </div>
      </section>
    </>
  );
}

// Server-side data fetching function
async function fetchPosts() {
  try {
    // In App Router, you need to use the full URL
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/guestPost", { 
      cache: 'no-store',// Optional: Revalidate every hour
    });
    
    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (data.success) {
      return {
        success: true,
        data: data.data
      };
    } else {
      return {
        success: false,
        error: "Failed to fetch posts",
        data: []
      };
    }
  } catch (err) {
    console.error("Error fetching posts:", err);
    return {
      success: false,
      error: "An error occurred while fetching posts",
      data: []
    };
  }
}

export default GuestPost;