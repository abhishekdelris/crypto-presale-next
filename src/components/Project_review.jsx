"use client"
import React, { useState } from "react";
import Image from "next/image";
import blogImage from "../images/blog.webp";

const blogPosts = [
  {
    id: 1,
    author: "Deepak Choudhary",
    date: "21-02-2025",
    content: "ARI Wallet Daily Quiz Answer 22 February 2025: Earn 10 ARI Coin",
  },
  {
    id: 2,
    author: "Deepak Choudhary",
    date: "21-02-2025",
    content: "ARI Wallet Daily Quiz Answer 23 February 2025: Earn 15 ARI Coin",
  },
  {
    id: 3,
    author: "John Doe",
    date: "22-02-2025",
    content: "Exploring Blockchain's Future in Finance",
  },
  {
    id: 4,
    author: "Jane Smith",
    date: "23-02-2025",
    content: "Understanding Cryptocurrency Market Trends",
  },
];

const Blog1 = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 2;

  // Pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  return (
    <>
     <section className="brdcrumb">
     <div className="container">
       <ul className="mb-0">
         <li><a href="/" title="Home">Home</a></li>
         <li>Project Review</li>
       </ul>
     </div>
   </section>
    
    <div className="container my-5">
      <div className="row">
        {/* Sidebar */}
        <aside className="col-md-3">
          <input type="text" className="form-control mb-3" placeholder="Search Keyword" />
          <h5>Category</h5>
          <ul className="list-unstyled">
            <li>Blockchain</li>
            <li>Cryptocurrency</li>
            <li>Technology</li>
          </ul>
          <h5>Tags</h5>
          <div>
            <span className="badge bg-secondary">ethereum</span>
            <span className="badge bg-secondary">bitcoin</span>
            <span className="badge bg-secondary">tokens</span>
          </div>
        </aside>

        {/* Blog List */}
        <main className="col-md-9">
          <div className="row">
            {currentPosts.map((post) => (
              <div key={post.id} className="col-md-6 mb-4">
                <div className="blog-card">
                  <Image src={blogImage} alt="blog" className="img-fluid rounded" />
                  <div className="d-flex justify-content-between align-items-center mb-2 p-1">
                    <a href="#" className="text-dark text-decoration-none fw-semibold me-2">
                      By: {post.author}
                    </a>
                    <small className="text-body-secondary">{post.date}</small>
                  </div>
                  <p>{post.content}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <nav>
            <ul className="pagination d-flex justify-content-center align-items-center">
              {Array.from({ length: totalPages }, (_, index) => (
                <li key={index} className={`page-item ${currentPage === index + 1 ? "active" : ""}`}>
                  <button className="page-link" onClick={() => setCurrentPage(index + 1)}>
                    {index + 1}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </main>
      </div>
    </div>
    </>
  );
};

export default Blog1;
