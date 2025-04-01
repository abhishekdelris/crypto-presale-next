// app/guestpost/GuestPostClient.js
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import defaultBlogImage from "@/images/blog.webp"; // Update the path as needed
import truncate from 'html-truncate';
import { useRouter } from "next/navigation";

function GuestPostClient({ posts }) {
  const router = useRouter();
  
  // Function to create a slug from the post title
  const createSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '') // Remove special characters
      .replace(/\s+/g, '-')     // Replace spaces with hyphens
      .replace(/--+/g, '-')     // Replace multiple hyphens with single hyphen
      .trim();                  // Trim leading/trailing spaces
  };

  const truncateDescription = (html, slug, id, length = 150) => {
    if (!html) return '';
    return truncate(html, length, { ellipsis: `... <a href=/guestpost/${slug}/${id}>Read More</a>` });
  };

  return (
    <>
      {/* Card Grid */}
      <div className="card-grid">
        {posts.slice(0, 8).map((post) => {
          const slug = createSlug(post.title);
          
          return (
            <div 
              className="card" 
              key={post.id} 
              onClick={() => {
                router.push(`/guestpost/${slug}/${post.id}`);
              }}
            >
              <Image
                src={`https://d3iuzwoiyg9qa8.cloudfront.net/webadmin/storage/${post.image}` || defaultBlogImage}
                alt={post.title}
                className="card-image"
                width={300}
                height={200}
              />
              <div className="card-content">
                <div className="card-date">
                  <span>{post.date}</span>
                  <span>By {post.author}</span>
                </div>
                <h3 className="card-title">
                  <Link href={`/guestpost/${slug}/${post.id}`} className="link-customize">
                    {post.title}
                  </Link>
                </h3>
              </div>
            </div>
          );
        })}
      </div>

      {/* Featured Section */}
      {posts.length > 0 && (
        <div className="featured-section">
          {posts.slice(0, 3).map((post) => {
            const slug = createSlug(post.title);
            
            return (
              <div className="featured-card" key={`featured-${post.id}`}>
                <div className="featured-card-header">
                  <Image
                    src={`https://d3iuzwoiyg9qa8.cloudfront.net/webadmin/storage/${post.image}` || defaultBlogImage}
                    alt={post.title}
                    className="featured-image"
                    width={100}
                    height={100}
                  />
                  <div>
                    <h2 className="featured-title card-title">
                      <Link href={`/guestpost/${slug}/${post.id}`} className="link-customize">
                        {post.title}
                      </Link>
                    </h2>
                    <p>
                      By: {post.author} | {post.date}
                    </p>
                  </div>
                </div>
                <div className="featured-content">
                  <Link href={`/guestpost/${slug}/${post.id}`} className="link-customize">
                    <p
                      className="featured-description"
                      dangerouslySetInnerHTML={{ __html: truncateDescription(post.description, slug, post.id) }}
                    />
                  </Link>
                </div>
                <div className="interaction-bar">
                  <div className="like-button">
                    <svg
                      width={16}
                      height={16}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z" />
                      <path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
                    </svg>
                    {post.likes}
                  </div>
                  <div className="share-button">
                    <svg
                      width={16}
                      height={16}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx={18} cy={5} r={3} />
                      <circle cx={6} cy={12} r={3} />
                      <circle cx={18} cy={19} r={3} />
                      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                    </svg>
                    Share
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

export default GuestPostClient;