// app/blog/BlogClient.js
"use client";

import React from "react";
import Image from 'next/image';
import Link from "next/link";
import { useRouter } from "next/navigation";

function BlogClient({ featuredArticle, sidebarArticles, latestArticles }) {
  const router = useRouter();
  
 
  return (
    <>
      <div className="row">
        {/* Featured Article */}
        {featuredArticle && (
          <div className="col-lg-6 mb-4">
            <div className="news-card1">
              <Image
                src={`https://d3iuzwoiyg9qa8.cloudfront.net/webadmin/storage/${featuredArticle?.image}`}
                alt={featuredArticle?.title || "Featured Image"}
                className="feature-image mb-3"
                width={600}
                height={400}
              />
              <Link href={`/blog/${featuredArticle?.slug}`} className="link-customize">
                <h2 className="news-title">{featuredArticle?.title}</h2>
              </Link>
                          
              <div className="d-flex flex-column">
                <span className="source">{featuredArticle?.author || "Unknown Author"}</span>
                <span className="time">{featuredArticle?.date}</span>
              </div>
            </div>
          </div>
        )}

        {/* Sidebar Articles */}
        <div className="col-lg-6">
          {sidebarArticles.map((article, index) => {
           
            return(
            <div className="row mb-4 manage_box_border" key={index}>
              <div className="col-8">
                <h3 className="article-title">
                  <Link href={`/blog/${article.slug}`} className="link-customize">
                    {article?.title}
                  </Link>
                </h3>
                {article?.tags?.[0] && (
                  <div className="d-flex align-items-center tag-row">
                    <div className={`crypto-tag ${article?.tags[0].toLowerCase()}-tag`}>
                      <span>{article?.tags[0]}</span>
                    </div>
                    {article?.priceChange && (
                      <span className={`percentage ${article?.priceChange > 0 ? 'text-success' : 'text-danger'}`}>
                        {article?.priceChange > 0 ? '+' : ''}{article?.priceChange}%
                      </span>
                    )}
                  </div>
                )}
                <div className="d-flex flex-column">
                  <span className="source">{article?.author || "Unknown Source"}</span>
                  <span className="time">{article?.date}</span>
                </div>
              </div>
              <div className="col-4 mb-2">
                <Image
                  src={`https://d3iuzwoiyg9qa8.cloudfront.net/webadmin/storage/${article?.image}`}
                  alt={article?.title}
                  className="news-thumbnail"
                  width={150}
                  height={100}
                />
              </div>
            </div>
          )})}
        </div>
      </div>

      {/* Latest Articles */}
      <div className="mt-4 mb-5">
        <div className="row g-4">
          {latestArticles.map((article, index) => {
           
            return(
            <div className="col-md-4" key={index}>
              <div className="news-card bg-white">
                <Image 
                  src={`https://d3iuzwoiyg9qa8.cloudfront.net/webadmin/storage/${article?.image}`} 
                  alt={article?.title} 
                  className="news-image"
                  width={400}
                  height={250}
                /> 
                <div className="card-body p-3">
                  <h5 className="news-title1 mb-2">
                    <Link href={`/blog/${article.slug}`} className="link-customize">
                      {article?.title}
                    </Link>
                  </h5>
                  <div className="d-flex justify-content-between">
                    <span className="news-source">{article?.author || "Unknown Source"}</span>
                    <span className="news-time">{article?.date}</span>
                  </div>
                </div>
              </div>
            </div>
          )})}
        </div>
      </div>
    </>
  );
}

export default BlogClient;