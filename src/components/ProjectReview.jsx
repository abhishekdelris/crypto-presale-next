// "use client"
// import React, { useState } from "react";
// import Image from "next/image";
// import blogImage from "../images/blog.webp";
// import Link from "next/link";

// const blogPosts = [
//   {
//     id: 1,
//     author: "Deepak Choudhary",
//     date: "21-02-2025",
//     content: "ARI Wallet Daily Quiz Answer 22 February 2025: Earn 10 ARI Coin",
//   },
//   {
//     id: 2,
//     author: "Deepak Choudhary",
//     date: "21-02-2025",
//     content: "ARI Wallet Daily Quiz Answer 23 February 2025: Earn 15 ARI Coin",
//   },
//   {
//     id: 3,
//     author: "John Doe", 
//     date: "22-02-2025",
//     content: "Exploring Blockchain's Future in Finance",
//   },
//   {
//     id: 4,
//     author: "Jane Smith",
//     date: "23-02-2025",
//     content: "Understanding Cryptocurrency Market Trends",
//   },
//   {
//     id: 5,
//     author: "Deepak Choudhary",
//     date: "21-02-2025",
//     content: "ARI Wallet Daily Quiz Answer 22 February 2025: Earn 10 ARI Coin",
//   },
//   {
//     id: 6,
//     author: "Deepak Choudhary",
//     date: "21-02-2025",
//     content: "ARI Wallet Daily Quiz Answer 23 February 2025: Earn 15 ARI Coin",
//   },
//   {
//     id: 7,
//     author: "John Doe",
//     date: "22-02-2025",
//     content: "Exploring Blockchain's Future in Finance",
//   },
//   {
//     id: 8,
//     author: "Jane Smith",
//     date: "23-02-2025",
//     content: "Understanding Cryptocurrency Market Trends",
//   },
// ];

// const ProjectReview = () => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const postsPerPage = 4;

//   // Pagination logic
//   const indexOfLastPost = currentPage * postsPerPage;
//   const indexOfFirstPost = indexOfLastPost - postsPerPage;
//   const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);
//   const totalPages = Math.ceil(blogPosts.length / postsPerPage);

//   return (
//     <>
//      <section className="brdcrumb">
//      <div className="container">
//        <ul className="mb-0">
//          <li><Link href="/" title="Home">Home</Link></li>
//          <li>Project Review</li>
//        </ul>
//      </div>
//    </section>
    
//     <div className="container my-5">
//       <div className="row">
//         {/* Sidebar */}
//         <aside className="col-md-3">
//           <input type="text" className="form-control mb-3" placeholder="Search Keyword" />
//           <h5>Category</h5>
//           <ul className="list-unstyled">
//             <li>Blockchain</li>
//             <li>Cryptocurrency</li>
//             <li>Technology</li>
//           </ul>
//           <h5>Tags</h5>
//           <div>
//             <span className="badge bg-secondary">ethereum</span>
//             <span className="badge bg-secondary">bitcoin</span>
//             <span className="badge bg-secondary">tokens</span>
//           </div>
//         </aside>

//         {/* Blog List */}
//         <main className="col-md-9">
//           <div className="row">
//             {currentPosts.map((post) => (
//               <div key={post.id} className="col-md-6 mb-4">
//                 <div className="blog-card">
//                   <Image src={blogImage} alt="blog" className="img-fluid rounded" />
//                   <div className="d-flex justify-content-between align-items-center mb-2 p-1">
//                     <Link href="#" className="text-dark text-decoration-none fw-semibold me-2">
//                       By: {post.author}
//                     </Link>
//                     <small className="text-body-secondary">{post.date}</small>
//                   </div>
//                   <p>{post.content}</p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Pagination */}
//           <nav>
//             <ul className="pagination d-flex justify-content-center align-items-center">
//               {Array.from({ length: totalPages }, (_, index) => (
//                 <li key={index} className={`page-item ${currentPage === index + 1 ? "active" : ""}`}>
//                   <button className="page-link" onClick={() => setCurrentPage(index + 1)}>
//                     {index + 1}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </nav>
//         </main>
//       </div>
//     </div>
//     </>
//   );
// };

// export default ProjectReview;


// "use client"
// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import axios from "axios";

// const ProjectReview = () => {
//   const [blogPosts, setBlogPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [selectedTag, setSelectedTag] = useState(null);
  
//   const postsPerPage = 4;

//   // Fetch data from API
//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         setLoading(true);
//         const config = {
//           method: 'get',
//           url: '/api/project_preview',
//           headers: {}
//         };
        
//         const response = await axios.request(config);
        
//         if (response.data.success) {
//           setBlogPosts(response.data.data);
//         } else {
//           setError("Failed to fetch blog posts");
//         }
//       } catch (err) {
//         setError("Error fetching blog posts: " + err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPosts();
//   }, []);

//   // Filter posts based on search term, category, and tag
//   const filteredPosts = blogPosts.filter(post => {
//     const matchesSearch = searchTerm === "" || 
//       post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
//       post.description?.toLowerCase().includes(searchTerm.toLowerCase());
    
//     const matchesCategory = !selectedCategory || 
//       post.category === selectedCategory;
    
//     const matchesTag = !selectedTag || 
//       (post.tags && post.tags.includes(selectedTag));
    
//     return matchesSearch && matchesCategory && matchesTag;
//   });

//   // Pagination logic
//   const indexOfLastPost = currentPage * postsPerPage;
//   const indexOfFirstPost = indexOfLastPost - postsPerPage;
//   const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
//   const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

//   // Get unique categories and tags from posts
//   const categories = [...new Set(blogPosts.map(post => post.category).filter(Boolean))];
  
//   // Extract tags from all posts (assuming each post has a tags array)
//   const allTags = blogPosts.flatMap(post => post.tags || []);
//   const uniqueTags = [...new Set(allTags)];

//   // Format date
//   const formatDate = (dateString) => {
//     if (!dateString) return "";
//     const [day, month, year] = dateString.split("-");
//     return `${day}-${month}-${year}`;
//   };

//   // Get excerpt from HTML description
//   const getExcerpt = (htmlContent, maxLength = 100) => {
//     if (!htmlContent) return "";
//     // Create a temporary div to parse HTML
//     const tempDiv = document.createElement("div");
//     tempDiv.innerHTML = htmlContent;
//     const textContent = tempDiv.textContent || tempDiv.innerText || "";
    
//     if (textContent.length <= maxLength) return textContent;
//     return textContent.substring(0, maxLength) + "...";
//   };

//   // Function to create a slug from the post title
//   const createSlug = (title) => {
//     return title
//       .toLowerCase()
//       .replace(/[^\w\s-]/g, '') // Remove special characters
//       .replace(/\s+/g, '-')     // Replace spaces with hyphens
//       .replace(/--+/g, '-')     // Replace multiple hyphens with single hyphen
//       .trim();                  // Trim leading/trailing spaces
//   };

//   const navigateToPost = (post) => {
//     const slug = createSlug(post.title);
//     // You can use this slug for navigation
//     // For example with Next.js router:
//     // router.push(`/guestpost/${slug}/${post.id}`);
    
//     // Or for a regular link:
//     window.location.href = `/project_review/${slug}/${post.id}`;
//   };

//   return (
//     <>
//       <section className="brdcrumb">
//         <div className="container">
//           <ul className="mb-0">
//             <li><Link href="/" title="Home">Home</Link></li>
//             <li>Project Review</li>
//           </ul>
//         </div>
//       </section>
    
//       <div className="container my-5">
//         {loading && <div className="text-center">Loading blog posts...</div>}
//         {error && <div className="alert alert-danger">{error}</div>}
        
//         {!loading && !error && (
//           <div className="row">
//             {/* Sidebar */}
//             <aside className="col-md-3">
//               <input 
//                 type="text" 
//                 className="form-control mb-3" 
//                 placeholder="Search Keyword" 
//                 value={searchTerm}
//                 onChange={(e) => {
//                   setSearchTerm(e.target.value);
//                   setCurrentPage(1); // Reset to first page on search
//                 }}
//               />
              
//               <h5>Category</h5>
//               <ul className="list-unstyled">
//                 {categories.length > 0 ? (
//                   categories.map((category, index) => (
//                     <li 
//                       key={index} 
//                       className={`cursor-pointer ${selectedCategory === category ? 'fw-bold' : ''}`}
//                       onClick={() => {
//                         setSelectedCategory(category === selectedCategory ? null : category);
//                         setCurrentPage(1);
//                       }}
//                     >
//                       {category}
//                     </li>
//                   ))
//                 ) : (
//                   <li>No categories available</li>
//                 )}
//               </ul>
              
//               <h5>Tags</h5>
//               <div>
//                 {uniqueTags.length > 0 ? (
//                   uniqueTags.map((tag, index) => (
//                     <span 
//                       key={index} 
//                       className={`badge ${selectedTag === tag ? 'bg-primary' : 'bg-secondary'} me-1 mb-1 cursor-pointer`}
//                       onClick={() => {
//                         setSelectedTag(tag === selectedTag ? null : tag);
//                         setCurrentPage(1);
//                       }}
//                     >
//                       {tag}
//                     </span>
//                   ))
//                 ) : (
//                   <span className="badge bg-secondary">No tags available</span>
//                 )}
//               </div>
//             </aside>

//             {/* Blog List */}
//             <main className="col-md-9">
//               {currentPosts.length > 0 ? (
//                 <div className="row">
//                   {currentPosts.map((post) => {
//                      const slug = createSlug(post.title);
//                     return(
//                     <div key={post.id} className="col-md-6 mb-4" onClick={() => navigateToPost(post)}>
//                       <div className="blog-card">
//                         {post.image && (
//                           <Image 
//                              src={`https://d3iuzwoiyg9qa8.cloudfront.net/webadmin/storage/${post.image}`} 
//                             alt={post.title} 
//                             className="img-fluid rounded" 
//                             width={400}
//                             height={250}
//                           />
//                         )}
//                         <div className="d-flex justify-content-between align-items-center mb-2 p-1">
//                           <Link href="#" className="text-dark text-decoration-none fw-semibold me-2">
//                             By: {post.author}
//                           </Link>
//                           <small className="text-body-secondary">{formatDate(post.date)}</small>
//                         </div>
//                         <h5>
//                           <Link href={`/project_review/${slug}/${post.id}`} className="text-decoration-none link-customize">
//                             {post.title}
//                           </Link>
//                         </h5>
//                         <p>{getExcerpt(post.description)}</p>
//                         {post.likes && (
//                           <div className="mt-2">
//                             <i className="far fa-heart"></i> {post.likes} likes
//                           </div>  
//                         )}
//                       </div>
//                     </div>
//                   )})}
//                 </div>
//               ) : (
//                 <div className="alert alert-info">No blog posts found matching your criteria.</div>
//               )}

//               {/* Pagination */}
//               {totalPages > 0 && (
//                 <nav>
//                   <ul className="pagination d-flex justify-content-center align-items-center">
//                     {Array.from({ length: totalPages }, (_, index) => (
//                       <li key={index} className={`page-item ${currentPage === index + 1 ? "active" : ""}`}>
//                         <button className="page-link" onClick={() => setCurrentPage(index + 1)}>
//                           {index + 1}
//                         </button>
//                       </li>
//                     ))}
//                   </ul>
//                 </nav>
//               )}
//             </main>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default ProjectReview;

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