// app/listicle/listicle-client.js
"use client"

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ListicleClient({ initialArticles, initialError }) {
  const [articles, setArticles] = useState(initialArticles || []);
  const [error, setError] = useState(initialError);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Topics");
  
  const articlesPerPage = 6; // Show 6 articles per page

  // Filter articles based on search term and category
  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All Topics" || article.tags?.includes(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  // Calculate indexes for pagination
  const startIndex = (currentPage - 1) * articlesPerPage;
  const selectedArticles = filteredArticles.slice(startIndex, startIndex + articlesPerPage);

  // Calculate total pages
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);

  // Format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString.replace(/-/g, '/')).toLocaleDateString(undefined, options);
  };

  return (
    <div className="container mt-5">
      {/* Search Box */}
      <div className="d-flex justify-content-between my-3">
        <div><h2 className="text-center fw-bold">Latest Articles</h2></div>
        <div>
          <input 
            type="text" 
            className="search12" 
            placeholder="Search Topic" 
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1); // Reset to first page on search
            }}
          />
        </div>  
      </div>

      {/* Categories */}
      <div className="mb-4 d-flex flex-wrap gap-2">
        {["All Topics", "Platform Updates", "Crypto Basics", "Bitcoin", "Market Analysis", "Meme Coins"].map(category => (
          <button 
            key={category} 
            className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => {
              setSelectedCategory(category);
              setCurrentPage(1); // Reset to first page on category change
            }}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Error State */}
      {error && <div className="alert alert-danger my-3">{error}</div>}

      {/* Blog Articles */}
      <div className="row">
        {selectedArticles.length > 0 ? (
          selectedArticles.map((article) => (
            <div className="col-md-4 mb-4" key={article.id}>
              <div className="blog-card">
                {article.image && (
                  <Image 
                    src={`https://d3iuzwoiyg9qa8.cloudfront.net/webadmin/storage/${article.image}`} 
                    className="img-fluid rounded" 
                    alt={article.title} 
                    width={385}
                    height={690}
                  />
                )}
                <h5 className="mt-3">
                  <Link href={`/listicle/${article.slug}/${article.id}`} className="link-customize">
                    {article.title}
                  </Link>
                </h5>
                <p className="text-muted">
                  By {article.author} – {formatDate(article.date)}
                </p>
                <div className="likes-count">
                  <i className="far fa-heart"></i> {article.likes}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12 text-center my-5">
            <p>No articles found matching your criteria.</p>
          </div>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 0 && (
        <nav>
          <ul className="pagination justify-content-center">
            {[...Array(totalPages)].map((_, index) => (
              <li key={index} className={`page-item ${currentPage === index + 1 ? "active" : ""}`}>
                <button className="page-link" onClick={() => setCurrentPage(index + 1)}>
                  {index + 1}
                </button>
              </li>
            ))} 
          </ul>
        </nav>
      )}
    </div>
  );
}