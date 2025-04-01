// app/project_review/project-review-client.js
"use client"

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ProjectReviewClient({ initialPosts, initialError, categories, tags }) {
  const [blogPosts] = useState(initialPosts || []);
  const [error] = useState(initialError);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedTag, setSelectedTag] = useState(null);
  
  const postsPerPage = 4;

  // Filter posts based on search term, category, and tag
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = searchTerm === "" || 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      post.description?.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = !selectedCategory || 
      post.category === selectedCategory;
    
    const matchesTag = !selectedTag || 
      (post.tags && post.tags.includes(selectedTag));
    
    return matchesSearch && matchesCategory && matchesTag;
  });

  // Pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  // Format date
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const [day, month, year] = dateString.split("-");
    return `${day}-${month}-${year}`;
  };

  // Get excerpt from HTML description
  const getExcerpt = (htmlContent, maxLength = 100) => {
    if (!htmlContent) return "";
    // Create a temporary div to parse HTML
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = htmlContent;
    const textContent = tempDiv.textContent || tempDiv.innerText || "";
    
    if (textContent.length <= maxLength) return textContent;
    return textContent.substring(0, maxLength) + "...";
  };

  // Function to create a slug from the post title
  const createSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '') // Remove special characters
      .replace(/\s+/g, '-')     // Replace spaces with hyphens
      .replace(/--+/g, '-')     // Replace multiple hyphens with single hyphen
      .trim();                  // Trim leading/trailing spaces
  };

  return (
    <div className="container my-5">
      {error && <div className="alert alert-danger">{error}</div>}
      
      <div className="row">
        {/* Sidebar */}
        <aside className="col-md-3">
          <input 
            type="text" 
            className="form-control mb-3" 
            placeholder="Search Keyword" 
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1); // Reset to first page on search
            }}
          />
          
          <h5>Category</h5>
          <ul className="list-unstyled">
            {categories.length > 0 ? (
              categories.map((category, index) => (
                <li 
                  key={index} 
                  className={`cursor-pointer ${selectedCategory === category ? 'fw-bold' : ''}`}
                  onClick={() => {
                    setSelectedCategory(category === selectedCategory ? null : category);
                    setCurrentPage(1);
                  }}
                >
                  {category}
                </li>
              ))
            ) : (
              <li>No categories available</li>
            )}
          </ul>
          
          <h5>Tags</h5>
          <div>
            {tags.length > 0 ? (
              tags.map((tag, index) => (
                <span 
                  key={index} 
                  className={`badge ${selectedTag === tag ? 'bg-primary' : 'bg-secondary'} me-1 mb-1 cursor-pointer`}
                  onClick={() => {
                    setSelectedTag(tag === selectedTag ? null : tag);
                    setCurrentPage(1);
                  }}
                >
                  {tag}
                </span>
              ))
            ) : (
              <span className="badge bg-secondary">No tags available</span>
            )}
          </div>
        </aside>

        {/* Blog List */}
        <main className="col-md-9">
          {currentPosts.length > 0 ? (
            <div className="row">
              {currentPosts.map((post) => {
                const slug = createSlug(post.title);
                return (
                  <div key={post.id} className="col-md-6 mb-4">
                    <div className="blog-card">
                      {post.image && (
                        <Link href={`/project_review/${slug}/${post.id}`}>
                          <Image 
                            src={`https://d3iuzwoiyg9qa8.cloudfront.net/webadmin/storage/${post.image}`} 
                            alt={post.title} 
                            className="img-fluid rounded" 
                            width={400}
                            height={250}
                          />
                        </Link>
                      )}
                      <div className="d-flex justify-content-between align-items-center mb-2 p-1">
                        <span className="text-dark text-decoration-none fw-semibold me-2">
                          By: {post.author}
                        </span>
                        <small className="text-body-secondary">{formatDate(post.date)}</small>
                      </div>
                      <h5>
                        <Link href={`/project_review/${slug}/${post.id}`} className="text-decoration-none link-customize">
                          {post.title}
                        </Link>
                      </h5>
                      <p>{getExcerpt(post.description)}</p>
                      {post.likes && (
                        <div className="mt-2">
                          <i className="far fa-heart"></i> {post.likes} likes
                        </div>  
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="alert alert-info">No blog posts found matching your criteria.</div>
          )}

          {/* Pagination */}
          {totalPages > 0 && (
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
          )}
        </main>
      </div>
    </div>
  );
}