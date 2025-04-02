// "use client"
// import React, { useState } from "react";
// import Image from "next/image";
// import blogImage from "../images/blog.webp";
// import Link from "next/link";

// const articles = [
//   { id: 1, title: "How a Simple Joke Helped Create a New Meme Coin", author: "Andrey Mastyk", date: "March 12, 2025" },
//   { id: 2, title: "Predicting the Future of Crypto Payments", author: "Guest Author", date: "March 4, 2025" },
//   { id: 3, title: "Bitcoin Price Recovery Could Spark Pump", author: "Guest Author", date: "February 28, 2025" },
//   { id: 4, title: "The Rise of AI in Crypto Trading", author: "John Doe", date: "February 20, 2025" },
//   { id: 5, title: "Understanding Smart Contracts", author: "Jane Smith", date: "February 10, 2025" },
//   { id: 6, title: "Top 10 Crypto Wallets in 2025", author: "Mike Johnson", date: "January 30, 2025" },
// ];

// const articlesPerPage = 3; // Show 3 articles per page

// function Listicle() {
//   const [currentPage, setCurrentPage] = useState(1);
  
//   // Calculate the indexes of articles to show
//   const startIndex = (currentPage - 1) * articlesPerPage;
//   const selectedArticles = articles.slice(startIndex, startIndex + articlesPerPage);

//   // Calculate total pages
//   const totalPages = Math.ceil(articles.length / articlesPerPage);

//   return (
//     <> 
//       <section className="brdcrumb">
//         <div className="container">
//           <ul className="mb-0">
//             <li><Link href="/" title="Home">Home</Link></li>
//             <li>Listicle</li>
//           </ul>
//         </div>
//       </section>

//       <div className="container mt-5">
//         {/* Search Box */}
//         <div class="d-flex justify-content-between my-3">
//         <div><h2 class="text-center fw-bold">Latest Articles</h2></div>
//         <div><input type="text" class="search12" placeholder="Search Topic" /></div>  
//     </div>

//         {/* Categories */}
//         <div className="mb-4 d-flex flex-wrap gap-2">
//           <button className="category-btn">All Topics</button>
//           <button className="category-btn">Platform Updates</button>
//           <button className="category-btn">Crypto Basics</button>
//           <button className="category-btn">Bitcoin</button>
//           <button className="category-btn">Market Analysis</button>
//           <button className="category-btn">Meme Coins</button>
//         </div>

//         {/* Blog Articles */}
//         <div className="row">
//           {selectedArticles.map((article) => (
//             <div className="col-md-4 mb-4" key={article.id}>
//               <div className="blog-card">
//                 <Image src={blogImage} className="img-fluid rounded" alt="Blog Image" />
//                 <h5 className="mt-3">{article.title}</h5>
//                 <p className="text-muted">By {article.author} – {article.date}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Pagination */}
//         <nav>
//           <ul className="pagination justify-content-center">
//             {[...Array(totalPages)].map((_, index) => (
//               <li key={index} className={`page-item ${currentPage === index + 1 ? "active" : ""}`}>
//                 <button className="page-link" onClick={() => setCurrentPage(index + 1)}>
//                   {index + 1}
//                 </button>
//               </li>
//             ))} 
//           </ul>
//         </nav>
//       </div>
//     </>
//   );
// }

// export default Listicle;


// "use client"
// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import axios from "axios";

// function Listicle() {
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("All Topics");
  
//   const articlesPerPage = 6; // Show 3 articles per page

//   useEffect(() => {
//     // Fetch data when component mounts
//     fetchArticles();
//   }, []);

//   const fetchArticles = async () => {
//     try {
//       setLoading(true);
//       const config = {
//         method: 'get',
//         url: '/api/listicle',
//         headers: {}
//       };
      
//       const response = await axios.request(config);
      
//       if (response.data.success) {
//         setArticles(response.data.data);
//       } else {
//         setError("Failed to fetch articles");
//       }
//     } catch (error) {
//       setError("Error fetching articles: " + error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Filter articles based on search term and category
//   const filteredArticles = articles.filter(article => {
//     const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesCategory = selectedCategory === "All Topics" || article.tags?.includes(selectedCategory);
//     return matchesSearch && matchesCategory;
//   });

//   // Calculate indexes for pagination
//   const startIndex = (currentPage - 1) * articlesPerPage;
//   const selectedArticles = filteredArticles.slice(startIndex, startIndex + articlesPerPage);

//   // Calculate total pages
//   const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);

//   // Extract text content from HTML
//   const getTextFromHTML = (html) => {
//     const tempDiv = document.createElement("div");
//     tempDiv.innerHTML = html;
//     return tempDiv.textContent || tempDiv.innerText || "";
//   };

//   // Format date
//   const formatDate = (dateString) => {
//     const options = { year: 'numeric', month: 'long', day: 'numeric' };
//     return new Date(dateString.replace(/-/g, '/')).toLocaleDateString(undefined, options);
//   };

  

//   return (
//     <>
//       <section className="brdcrumb">
//         <div className="container">
//           <ul className="mb-0">
//             <li><Link href="/" title="Home">Home</Link></li>
//             <li>Listicle</li>
//           </ul>
//         </div>
//       </section>

//       <div className="container mt-5">
//         {/* Search Box */}
//         <div className="d-flex justify-content-between my-3">
//           <div><h2 className="text-center fw-bold">Latest Articles</h2></div>
//           <div>
//             <input 
//               type="text" 
//               className="search12" 
//               placeholder="Search Topic" 
//               value={searchTerm}
//               onChange={(e) => {
//                 setSearchTerm(e.target.value);
//                 setCurrentPage(1); // Reset to first page on search
//               }}
//             />
//           </div>  
//         </div>

//         {/* Categories */}
//         <div className="mb-4 d-flex flex-wrap gap-2">
//           {["All Topics", "Platform Updates", "Crypto Basics", "Bitcoin", "Market Analysis", "Meme Coins"].map(category => (
//             <button 
//               key={category} 
//               className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
//               onClick={() => {
//                 setSelectedCategory(category);
//                 setCurrentPage(1); // Reset to first page on category change
//               }}
//             >
//               {category}
//             </button>
//           ))}
//         </div>

//         {/* Loading and Error States */}
//         {loading && <div className="text-center my-5">Loading articles...</div>}
//         {error && <div className="alert alert-danger my-3">{error}</div>}

//         {/* Blog Articles */}
//         {!loading && !error && (
//           <>
//             <div className="row">
//               {selectedArticles.length > 0 ? (
//                 selectedArticles.map((article) => (
//                   <div className="col-md-4 mb-4" key={article.id}>
//                     <div className="blog-card">
//                       {article.image && (
//                         <Image 
//                           src={`https://d3iuzwoiyg9qa8.cloudfront.net/webadmin/storage/${article.image}`} 
//                           className="img-fluid rounded" 
//                           alt={article.title} 
//                           width={385}
//                           height={690}
//                         />
//                       )}
//                       <h5 className="mt-3">
//                         <Link href={`/listicle/${article.slug}/${article.id}`} className="link-customize">
//                           {article.title}
//                         </Link>
//                       </h5>
//                       <p className="text-muted">
//                         By {article.author} – {formatDate(article.date)}
//                       </p>
//                       <div className="likes-count">
//                         <i className="far fa-heart"></i> {article.likes}
//                       </div>
//                     </div>
//                   </div>
//                 ))
//               ) : (
//                 <div className="col-12 text-center my-5">
//                   <p>No articles found matching your criteria.</p>
//                 </div>
//               )}
//             </div>

//             {/* Pagination */}
//             {totalPages > 0 && (
//               <nav>
//                 <ul className="pagination justify-content-center">
//                   {[...Array(totalPages)].map((_, index) => (
//                     <li key={index} className={`page-item ${currentPage === index + 1 ? "active" : ""}`}>
//                       <button className="page-link" onClick={() => setCurrentPage(index + 1)}>
//                         {index + 1}
//                       </button>
//                     </li>
//                   ))} 
//                 </ul>
//               </nav>
//             )}
//           </>
//         )}
//       </div>
//     </>
//   );
// }

// export default Listicle;

// app/listicle/page.js
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
      next: { revalidate: 60 } // Revalidate every hour
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