import React, { useState } from "react";
import Image from "next/image";
import blogImage from "../images/blog.webp";

const articles = [
  { id: 1, title: "How a Simple Joke Helped Create a New Meme Coin", author: "Andrey Mastyk", date: "March 12, 2025" },
  { id: 2, title: "Predicting the Future of Crypto Payments", author: "Guest Author", date: "March 4, 2025" },
  { id: 3, title: "Bitcoin Price Recovery Could Spark Pump", author: "Guest Author", date: "February 28, 2025" },
  { id: 4, title: "The Rise of AI in Crypto Trading", author: "John Doe", date: "February 20, 2025" },
  { id: 5, title: "Understanding Smart Contracts", author: "Jane Smith", date: "February 10, 2025" },
  { id: 6, title: "Top 10 Crypto Wallets in 2025", author: "Mike Johnson", date: "January 30, 2025" },
];

const articlesPerPage = 3; // Show 3 articles per page

function Blog1() {
  const [currentPage, setCurrentPage] = useState(1);
  
  // Calculate the indexes of articles to show
  const startIndex = (currentPage - 1) * articlesPerPage;
  const selectedArticles = articles.slice(startIndex, startIndex + articlesPerPage);

  // Calculate total pages
  const totalPages = Math.ceil(articles.length / articlesPerPage);

  return (
    <>
      <section className="brdcrumb">
        <div className="container">
          <ul className="mb-0">
            <li><a href="/" title="Home">Home</a></li>
            <li>Listicle</li>
          </ul>
        </div>
      </section>

      <div className="container mt-5">
        {/* Search Box */}
        <div class="d-flex justify-content-between my-3">
        <div><h2 class="text-center fw-bold">Latest Articles</h2></div>
        <div><input type="text" class="search12" placeholder="Search Topic" /></div>  
    </div>

        {/* Categories */}
        <div className="mb-4 d-flex flex-wrap gap-2">
          <button className="category-btn">All Topics</button>
          <button className="category-btn">Platform Updates</button>
          <button className="category-btn">Crypto Basics</button>
          <button className="category-btn">Bitcoin</button>
          <button className="category-btn">Market Analysis</button>
          <button className="category-btn">Meme Coins</button>
        </div>

        {/* Blog Articles */}
        <div className="row">
          {selectedArticles.map((article) => (
            <div className="col-md-4 mb-4" key={article.id}>
              <div className="blog-card">
                <Image src={blogImage} className="img-fluid rounded" alt="Blog Image" />
                <h5 className="mt-3">{article.title}</h5>
                <p className="text-muted">By {article.author} – {article.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
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
      </div>
    </>
  );
}

export default Blog1;
