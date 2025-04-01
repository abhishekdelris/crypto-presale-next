// import React from 'react'
// import Image from 'next/image';
// import blogImage from "../images/blog.webp";

// function Blog() {
//   return (
//     <>
//   <section className="brdcrumb">
//     <div className="container">
//       <ul className="mb-0">
//         <li><a href="/" title="Home">Home</a></li>
//         <li>Blog</li>
//       </ul>
//     </div>
//   </section> 
//   {/* main section */}

//   <section className="blogsection mt-4">
//     <div className="container">
//       <div className="row">
//         <div className="col-xl-12">
//           <div className="row g-0 card-group border mb-3 rounded-3 overflow-hidden">
//             <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-5 col-12 px-0">
//               <a href="#" title>
//                 <Image src={blogImage} className="w-100 h-auto" alt="ARI Wallet Daily Quiz Answer 22 February 2025: Earn 10 ARI Coin" loading="lazy" width={690} height={383} />
//                 <span className="d-none">ARI Wallet Daily Quiz Answer 22 February 2025: Earn 10 ARI Coin</span>
//               </a>
//             </div>
//             <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-7 col-12 px-0 mb-0 card flex-auto bg-transparent border-0">
//               <div className="card-body text-decoration-none py-md-2 py-xl-3">
//                 <a href="#" className="text-dark text-decoration-none py-md-2 py-xl-3" title>
//                   <span className="fs-5 fw-semibold singleline">ARI Wallet Daily Quiz Answer 22 February 2025: Earn 10 ARI Coin</span>
//                 </a>
//                 <p className="two-line text-muted mb-0">ARI Wallet Daily Quiz Answer 22 February 2025: How to Earn Free ARI CoinsAre you looking for today's ARI Wallet Daily Quiz answer 22 February 2025? Yo....</p>
//               </div>
//               <div className="card-footer bg-lightblue d-flex justify-content-between align-items-center flex-wrap">
//                 <div className="d-flex align-items-center mb-2 mb-sm-0">
//                   <a href="#" className="text-dark text-decoration-none fw-semibold me-2" title="Deepak Choudhary">By: Deepak Choudhary </a>
//                   <small className="text-body-secondary">21-02-2025</small>
//                 </div>
//                 <div>
//                   <button type="button" className="btn btn-outline-dark border-1 rounded-pill small-btn like_div" data-id={173806} title="Upvote counts" id="like_173806">
//                     <i id="thumb_173806" className="fa-regular fa-thumbs-up me-1" />
//                     <span id="news-likes_173806">0</span>
//                   </button>
//                   <button type="button" className="btn-main primary-btn  small-btn ms-2 share_social_media" data-url data-bs-toggle="modal" data-bs-target="#shareModal" title="Share">
//                     <i className="fa-solid fa-share me-2" />Share </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="row g-0 card-group border mb-3 rounded-3 overflow-hidden">
//             <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-5 col-12 px-0">
//               <a href="#" title>
//                 <Image src={blogImage} className="w-100 h-auto" alt="ARI Wallet Daily Quiz Answer 22 February 2025: Earn 10 ARI Coin" loading="lazy" width={690} height={383} />
//                 <span className="d-none">ARI Wallet Daily Quiz Answer 22 February 2025: Earn 10 ARI Coin</span>
//               </a>
//             </div>
//             <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-7 col-12 px-0 mb-0 card flex-auto bg-transparent border-0">
//               <div className="card-body text-decoration-none py-md-2 py-xl-3">
//                 <a href="#" className="text-dark text-decoration-none py-md-2 py-xl-3" title>
//                   <span className="fs-5 fw-semibold singleline">ARI Wallet Daily Quiz Answer 22 February 2025: Earn 10 ARI Coin</span>
//                 </a>
//                 <p className="two-line text-muted mb-0">ARI Wallet Daily Quiz Answer 22 February 2025: How to Earn Free ARI CoinsAre you looking for today's ARI Wallet Daily Quiz answer 22 February 2025? Yo....</p>
//               </div>
//               <div className="card-footer bg-lightblue d-flex justify-content-between align-items-center flex-wrap">
//                 <div className="d-flex align-items-center mb-2 mb-sm-0">
//                   <a href="#" className="text-dark text-decoration-none fw-semibold me-2" title="Deepak Choudhary">By: Deepak Choudhary </a>
//                   <small className="text-body-secondary">21-02-2025</small>
//                 </div>
//                 <div>
//                   <button type="button" className="btn btn-outline-dark border-1 rounded-pill small-btn like_div" data-id={173806} title="Upvote counts" id="like_173806">
//                     <i id="thumb_173806" className="fa-regular fa-thumbs-up me-1" />
//                     <span id="news-likes_173806">0</span>
//                   </button>
//                   <button type="button" className="btn-main primary-btn  small-btn ms-2 share_social_media" data-url data-bs-toggle="modal" data-bs-target="#shareModal" title="Share">
//                     <i className="fa-solid fa-share me-2" />Share </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="row g-0 card-group border mb-3 rounded-3 overflow-hidden">
//             <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-5 col-12 px-0">
//               <a href="#" title>
//                 <Image src={blogImage} className="w-100 h-auto" alt="ARI Wallet Daily Quiz Answer 22 February 2025: Earn 10 ARI Coin" loading="lazy" width={690} height={383} />
//                 <span className="d-none">ARI Wallet Daily Quiz Answer 22 February 2025: Earn 10 ARI Coin</span>
//               </a>
//             </div>
//             <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-7 col-12 px-0 mb-0 card flex-auto bg-transparent border-0">
//               <div className="card-body text-decoration-none py-md-2 py-xl-3">
//                 <a href="#" className="text-dark text-decoration-none py-md-2 py-xl-3" title>
//                   <span className="fs-5 fw-semibold singleline">ARI Wallet Daily Quiz Answer 22 February 2025: Earn 10 ARI Coin</span>
//                 </a>
//                 <p className="two-line text-muted mb-0">ARI Wallet Daily Quiz Answer 22 February 2025: How to Earn Free ARI CoinsAre you looking for today's ARI Wallet Daily Quiz answer 22 February 2025? Yo....</p>
//               </div>
//               <div className="card-footer bg-lightblue d-flex justify-content-between align-items-center flex-wrap">
//                 <div className="d-flex align-items-center mb-2 mb-sm-0">
//                   <a href="#" className="text-dark text-decoration-none fw-semibold me-2" title="Deepak Choudhary">By: Deepak Choudhary </a>
//                   <small className="text-body-secondary">21-02-2025</small>
//                 </div>
//                 <div>
//                   <button type="button" className="btn btn-outline-dark border-1 rounded-pill small-btn like_div" data-id={173806} title="Upvote counts" id="like_173806">
//                     <i id="thumb_173806" className="fa-regular fa-thumbs-up me-1" />
//                     <span id="news-likes_173806">0</span>
//                   </button>
//                   <button type="button" className="btn-main primary-btn  small-btn ms-2 share_social_media" data-url data-bs-toggle="modal" data-bs-target="#shareModal" title="Share">
//                     <i className="fa-solid fa-share me-2" />Share </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className='d-flex justify-content-center align-items-center m-5'>
//         <button className='btn btn-secondary'>View More</button>
//       </div>
//     </div>
//   </section>

//     </>
//   )
// }

// export default Blog

// import React from "react";
// import Image from 'next/image';
// import blogImage from "../images/blog.webp";
// import Link from "next/link";

// function Blog() {
//   return (
//     <>
//      <section className="brdcrumb">
//      <div className="container">
//        <ul className="mb-0">
//          <li><a href="/" title="Home">Home</a></li>
//          <li>Blog</li>
//        </ul>
//      </div>
//    </section>
//       <div className="container mt-4">
//         <h1>Latest Crypto News</h1>
//         <div className="row">
//           {/* Feature Article (Left Column) */}
//           <div className="col-lg-6 mb-4">
//             <div className="news-card1">
//               <Image
//                 src={blogImage}
//                 alt="Crypto News"
//                 className="feature-image mb-3"
//               />
//               <Link href={"/blog/Very possible' Bitcoin consolidates for 8 months again: 10x Research"} className='text_customization'>
//               <h2 className="news-title">
//                 'Very possible' Bitcoin consolidates for 8 months again: 10x                                    
//                 Research
//               </h2>
//               </Link>
//               <p className="article-excerpt">
//                 10x Research's head crypto researcher isn't ruling out Bitcoin
//                 repeating its 2024 price action, where it spent much of the year
//                 consolidating after hitting a...
//               </p>
//               {/* <div className="d-flex align-items-center tag-row">
//                 <div className="crypto-tag btc-tag">
//                   <Image
//                     src={blogImage}
//                     alt="BTC"
//                     width={16}
//                     height={16}
//                     className="me-1"
//                   />
//                   <span>BTC</span>
//                 </div>
//                 <span className="percentage">+2.7%</span>
//                 <span className="more-button">
//                   6 more <i className="fas fa-chevron-down" />
//                 </span>
//               </div> */}
//               <div className="d-flex flex-column">
//                 <span className="source">Deepak Choudhary</span>
//                 <span className="time">22 February 2025</span>
//               </div>
//             </div>
//           </div>
//           {/* Right Column News */}
//           <div className="col-lg-6">
//             {/* News Item 1 */}
//             <div className="row mb-4 manage_box_border">
//               <div className="col-8">
//                 <h3 className="article-title">
//                   VanEck Submits S-1 Filing To SEC For First AVAX ETF
//                 </h3>
//                 {/* <div className="d-flex align-items-center tag-row">
//                   <div className="crypto-tag avax-tag">
//                     <Image
//                       src={blogImage}
//                       alt="AVAX"
//                       width={16}
//                       height={16}
//                       className="me-1"
//                     />
//                     <span>AVAX</span>
//                   </div>
//                   <span className="percentage">+0.9%</span>
//                   <span className="more-button">
//                     2 more <i className="fas fa-chevron-down" />
//                   </span>
//                 </div> */}
                 
//                 <div className="d-flex flex-column">
//                   <span className="source">Bitcoinist</span>
//                   <span className="time">22 February 2025</span>
//                 </div>
//               </div>
//               <div className="col-4 mb-2">
//                 <Image
//                   src={blogImage}
//                   alt="AVAX ETF News"
//                   className="news-thumbnail"
//                 />
//               </div>
//             </div>
//             {/* News Item 2 */}
//             <div className="row mb-4 manage_box_border">
//               <div className="col-8">
//                 <h3 className="article-title">
//                   Dogecoin Can Still Go Parabolic If This Support Holds, Analyst
//                   Says
//                 </h3>
//                 {/* <div className="d-flex align-items-center tag-row">
//                   <div className="crypto-tag btc-tag">
//                     <Image
//                       src={blogImage}
//                       alt="BTC"
//                       width={16}
//                       height={16}
//                       className="me-1"
//                     />
//                     <span>BTC</span>
//                   </div>
//                   <span className="percentage">+2.7%</span>
//                   <span className="more-button">
//                     6 more <i className="fas fa-chevron-down" />
//                   </span>
//                 </div> */}
//                 <div className="d-flex flex-column">
//                   <span className="source">NewsBTC</span>
//                   <span className="time">about 1 hour ago</span>
//                 </div>
//               </div>
//               <div className="col-4 mb-2">
//                 <Image
//                   src={blogImage}
//                   alt="Dogecoin News"
//                   className="news-thumbnail"
//                 />
//               </div>
//             </div>
//             {/* News Item 3 */}
//             <div className="row mb-4 manage_box_border">
//               <div className="col-8">
//                 <h3 className="article-title">
//                   Dogecoin's Pullback Nears Its End: Price Action Shows Signs Of
//                   A Rebound
//                 </h3>
//                 {/* <div className="d-flex align-items-center tag-row">
//                   <div className="crypto-tag doge-tag">
//                     <Image
//                       src={blogImage}
//                       alt="DOGE"
//                       width={16}
//                       height={16}
//                       className="me-1"
//                     />
//                     <span>DOGE</span>
//                   </div>
//                   <span className="percentage">+3.3%</span>
//                   <span className="more-button">
//                     1 more <i className="fas fa-chevron-down" />
//                   </span>
//                 </div> */}
//                 <div className="d-flex flex-column">
//                   <span className="source">Bitcoinist</span>
//                   <span className="time">about 1 hour ago</span>
//                 </div>
//               </div>
//               <div className="col-4 mb-2">
//                 <Image
//                   src={blogImage}
//                   alt="Dogecoin Pullback"
//                   className="news-thumbnail"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="container mt-4 mb-5">
//          {/* Latest Crypto News */}
//   <h2 className="page-title"></h2>
//   <div className="row g-4">
//     {/* News Item 1 */}
//     <div className="col-md-4">
//       <div className="news-card bg-white">
//         <Image src={blogImage} alt="VanEck AVAX ETF" className="news-image" />
//         <div className="card-body p-3">
//           <h5 className="news-title1 mb-2">VanEck Submits S-1 Filing To SEC For First AVAX ETF</h5>
//           {/* <div className="d-flex align-items-center mb-2">
//             <span className="coin-tag btc-tag me-2">AVAX</span>
//             <span className="percentage percentage-up">+0.8%</span>
//             <span className="ms-2 text-muted"><i className="fa-regular fa-eye" /> 7 mins</span>
//           </div> */}
//           <div className="d-flex justify-content-between">
//             <span className="news-source">Bitcoinist</span>
//             <span className="news-time">23 minutes ago</span>
//           </div>
//         </div>
//       </div>
//     </div>
//     {/* News Item 2 */}
//     <div className="col-md-4">
//       <div className="news-card bg-white">
//         <Image src={blogImage} alt="Dogecoin" className="news-image" />
//         <div className="card-body p-3">
//           <h5 className="news-title1 mb-2">Dogecoin Can Still Go Parabolic If This Support Holds, Analyst Says</h5>
//           {/* <div className="d-flex align-items-center mb-2">
//             <span className="coin-tag doge-tag me-2">DOGE</span>
//             <span className="percentage percentage-up">+3.7%</span>
//             <span className="ms-2 text-muted"><i className="fa-regular fa-eye" /> 8 mins</span>
//           </div> */}
//           <div className="d-flex justify-content-between">
//             <span className="news-source">NewsBTC</span>
//             <span className="news-time">about 1 hour ago</span>
//           </div>
//         </div>
//       </div>
//     </div>
//     {/* News Item 3 */}
//     <div className="col-md-4">
//       <div className="news-card bg-white">
//         <Image src={blogImage} alt="Dogecoin Price" className="news-image" />
//         <div className="card-body p-3">
//           <h5 className="news-title1 mb-2">Dogecoin's Pullback Nears Its End: Price Action Shows Signs Of A Rebound</h5>
//           {/* <div className="d-flex align-items-center mb-2">
//             <span className="coin-tag doge-tag me-2">DOGE</span>
//             <span className="percentage percentage-up">+3.2%</span>
//             <span className="ms-2 text-muted"><i className="fa-regular fa-eye" /> 1 week</span>
//           </div> */}
//           <div className="d-flex justify-content-between">
//             <span className="news-source">Bitcoinist</span>
//             <span className="news-time">about 1 hour ago</span>
//           </div>
//         </div>
//       </div>
//     </div>
//     {/* News Item 4 */}
//     <div className="col-md-4">
//       <div className="news-card bg-white">
//         <Image src={blogImage} alt="US Extradites" className="news-image" />
//         <div className="card-body p-3">
//           <h5 className="news-title1 mb-2">US Extradites Russia-Israel Citizen Linked to Lockbit Attacks</h5>
//           <div className="d-flex flex-column">
//             {/* <div className="d-flex align-items-center mb-2">
//               <span className="coin-tag btc-tag me-2">BTC</span>
//               <span className="percentage percentage-up">+2.7%</span>
//               <span className="ms-2 text-muted"><i className="fa-regular fa-eye" /> 10 weeks</span>
//             </div> */}
//             <div className="d-flex justify-content-between">
//               <span className="news-source">Bitcoin.com</span>
//               <span className="news-time">about 1 hour ago</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     {/* News Item 5 */}
//     <div className="col-md-4">
//       <div className="news-card bg-white">
//         <Image src={blogImage} alt="Crypto Gap" className="news-image" />
//         <div className="card-body p-3">
//           <h5 className="news-title1 mb-2">Crypto faces 'starkest' gap between sentiment and fundamentals: BlackRock</h5>
//           {/* <div className="d-flex align-items-center mb-2">
//             <span className="coin-tag btc-tag me-2">BTC</span>
//             <span className="percentage percentage-up">+2.7%</span>
//             <span className="ms-2 text-muted"><i className="fa-regular fa-eye" /> 36 mins</span>
//           </div> */}
//           <div className="d-flex justify-content-between">
//             <span className="news-source">CoinTelegraph</span>
//             <span className="news-time">about 2 hours ago</span>
//           </div>
//         </div>
//       </div>
//     </div>
//     {/* News Item 6 */}
//     <div className="col-md-4">
//       <div className="news-card bg-white">
//         <Image src={blogImage} alt="Solana Pattern" className="news-image" />
//         <div className="card-body p-3">
//           <h5 className="news-title1 mb-2">Solana Forms Classic Cup-And-Handle Pattern – Analyst Predicts A Breakout To $3,800</h5>
//           {/* <div className="d-flex align-items-center mb-2">
//             <span className="coin-tag sol-tag me-2">SOL</span>
//             <span className="percentage percentage-up">+1.6%</span>
//             <span className="ms-2 text-muted"><i className="fa-regular fa-eye" /> 36 mins</span>
//           </div> */}
//           <div className="d-flex justify-content-between">
//             <span className="news-source">NewsBTC</span>
//             <span className="news-time">about 2 hours ago</span>
//           </div>
//         </div>
//       </div>
//     </div>
//     {/* More News Items */}
//     <div className="col-md-4">
//       <div className="news-card bg-white">
//         <Image src={blogImage} alt="Bitcoin Demand" className="news-image" />
//         <div className="card-body p-3">
//           <h5 className="news-title1 mb-2">Bitcoin Demand 'Seems Stuck' - Expert Reveals It's Too Early To Call It A Bear Market</h5>
//           {/* <div className="d-flex align-items-center mb-2">
//             <span className="coin-tag btc-tag me-2">BTC</span>
//             <span className="percentage percentage-up">+2.7%</span>
//             <span className="ms-2 text-muted"><i className="fa-regular fa-eye" /> 2 mins</span>
//           </div> */}
//           <div className="d-flex justify-content-between">
//             <span className="news-source">Bitcoinist</span>
//             <span className="news-time">about 7 hours ago</span>
//           </div>
//         </div>
//       </div>
//     </div>
//     <div className="col-md-4">
//       <div className="news-card bg-white">
//         <Image src={blogImage} alt="Arthur Hayes" className="news-image" />
//         <div className="card-body p-3">
//           <h5 className="news-title1 mb-2">Arthur Hayes Predicts Bitcoin Surge To $250,000 By Year-End, Says Current Downtrend Is Clearing Out Deadwood: 'Short-Term Pain'</h5>
//           {/* <div className="d-flex align-items-center mb-2">
//             <span className="coin-tag btc-tag me-2">BTC</span>
//             <span className="percentage percentage-up">+2.7%</span>
//             <span className="ms-2 text-muted"><i className="fa-regular fa-eye" /> 2 weeks</span>
//           </div> */}
//           <div className="d-flex justify-content-between">
//             <span className="news-source">Benzinga</span>
//             <span className="news-time">about 3 hours ago</span>
//           </div>
//         </div>
//       </div>
//     </div>
//     <div className="col-md-4">
//       <div className="news-card bg-white">
//         <Image src={blogImage} alt="Coinbase" className="news-image" />
//         <div className="card-body p-3">
//           <h5 className="news-title1 mb-2">Coinbase Scores Big as Vermont Drops Case—Is This the End of Staking Crackdowns?</h5>
//           {/* <div className="d-flex align-items-center mb-2">
//             <span className="coin-tag btc-tag me-2">COIN</span>
//             <span className="percentage percentage-down">-6.4%</span>
//             <span className="ms-2 text-muted"><i className="fa-regular fa-eye" /> 7 hours</span>
//           </div> */}
//           <div className="d-flex justify-content-between">
//             <span className="news-source">Bitcoin.com</span>
//             <span className="news-time">about 3 hours ago</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   <div className="text-center mt-4">
//     <button className="btn btn-outline-secondary">Show more news</button>
//   </div>
// </div>

//     </>
//   );
// }

// export default Blog;
// "use client"
// import React, { useState, useEffect } from "react";
// import Image from 'next/image';
// import blogImage from "../images/blog.webp";
// import Link from "next/link";
// import axios from 'axios';

// function Blog() {
//   const [featuredArticle, setFeaturedArticle] = useState(null);
//   const [sidebarArticles, setSidebarArticles] = useState([]);
//   const [latestArticles, setLatestArticles] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchArticles = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get('/api/blog');
//         const data = await response?.data?.data;

//         if (!data || data.length === 0) {
//           throw new Error("No articles found.");
//         }

//         setFeaturedArticle(data[0]);
//         setSidebarArticles(data.slice(1, 4));
//         setLatestArticles(data.slice(4));
//       } catch (err) {
//         console.error("Error fetching news:", err);
//         setError(err.message || "Failed to load news data.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchArticles();
//   }, []);


//   // Function to create a slug from the post title
//   const createSlug = (title) => {
//     console.log(title);
    
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
//     window.location.href = `/blog/${slug}/${post.id}`;
//   };

//   // const slug = createSlug(featuredArticle?.title);
//   // Format date function
//   const formatDate = (dateString) => {
//     if (!dateString) return "Unknown Date";
//     const date = new Date(dateString);
//     const now = new Date();
//     const diffHours = Math.floor((now - date) / (1000 * 60 * 60));

//     if (diffHours < 1) {
//       return "just now";
//     } else if (diffHours < 24) {
//       return `about ${diffHours} hour${diffHours !== 1 ? 's' : ''} ago`;
//     } else {
//       return date.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });
//     }
//   };

//   if (loading) {
//     return (
//       <div className="container mt-5 text-center">
//         <div className="spinner-border" role="status">
//           <span className="visually-hidden">Loading...</span>
//         </div>
//         <p className="mt-3">Loading latest blogs...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="container mt-5">
//         <div className="alert alert-danger" role="alert">
//           {error}
//         </div>
//       </div>
//     );
//   }

//   return (
//     <>
//       {/* Breadcrumb */}
//       <section className="brdcrumb">
//         <div className="container">
//           <ul className="mb-0">
//             <li><Link href="/" title="Home">Home</Link></li>
//             <li>Blog</li>
//           </ul>
//         </div>
//       </section>
      
//       {/* Featured Article */}
//       <div className="container mt-4">
//         <h1>Latest Crypto News</h1>
//         <div className="row">
//           {featuredArticle && (
//             <div className="col-lg-6 mb-4">
//               <div className="news-card1">
//                 <Image
//                   src={`https://d3iuzwoiyg9qa8.cloudfront.net/webadmin/storage/${featuredArticle?.image}`|| blogImage}
//                   alt={featuredArticle?.title || "Featured Image"}
//                   className="feature-image mb-3"
//                   width={600}
//                   height={400}
//                 />
//                 <Link href={`/blog/${createSlug(featuredArticle?.title)}/${featuredArticle?.id}`} className="link-customize">
//                   <h2 className="news-title">{featuredArticle?.title}</h2>
//                 </Link>
                              
//                 <div className="d-flex flex-column">
//                   <span className="source">{featuredArticle?.author || "Unknown Author"}</span>
//                   <span className="time">{featuredArticle?.date}</span>
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Sidebar Articles */}
//           <div className="col-lg-6">
//             {sidebarArticles.map((article, index) => {
//                const slug = createSlug(article.title);
//               return(
//               <div className="row mb-4 manage_box_border" key={index}>
//                 <div className="col-8">
//                   <h3 className="article-title">
//                     <Link href={`/blog/${slug}/${article.id}`} className="link-customize">
//                       {article?.title}
//                     </Link>
//                   </h3>
//                   {article?.tags?.[0] && (
//                     <div className="d-flex align-items-center tag-row">
//                       <div className={`crypto-tag ${article?.tags[0].toLowerCase()}-tag`}>
//                         <span>{article?.tags[0]}</span>
//                       </div>
//                       {article?.priceChange && (
//                         <span className={`percentage ${article?.priceChange > 0 ? 'text-success' : 'text-danger'}`}>
//                           {article?.priceChange > 0 ? '+' : ''}{article?.priceChange}%
//                         </span>
//                       )}
//                     </div>
//                   )}
//                   <div className="d-flex flex-column">
//                     <span className="source">{article?.author || "Unknown Source"}</span>
//                     <span className="time">{article?.date}</span>
//                   </div>
//                 </div>
//                 <div className="col-4 mb-2">
//                   <Image
//                     src={`https://d3iuzwoiyg9qa8.cloudfront.net/webadmin/storage/${article?.image}` || blogImage}
//                     alt={article?.title}
//                     className="news-thumbnail"
//                     width={150}
//                     height={100}
//                   />
//                 </div>
//               </div>
//             )})}
//           </div>
//         </div>
//       </div>

//       {/* Latest Articles */}
//       <div className="container mt-4 mb-5">
//         <div className="row g-4">
//           {latestArticles.map((article, index) => {
//             const slug = createSlug(article.title);
//             return(
//             <div className="col-md-4" key={index}>
//               <div className="news-card bg-white">
//                 <Image 
//                   src={`https://d3iuzwoiyg9qa8.cloudfront.net/webadmin/storage/${article?.image}` || blogImage} 
//                   alt={article?.title} 
//                   className="news-image"
//                   width={400}
//                   height={250}
//                 /> 
//                 <div className="card-body p-3">
//                   <h5 className="news-title1 mb-2">
//                     <Link href={`/blog/${slug}/${article.id}`} className="link-customize">
//                       {article?.title}
//                     </Link>
//                   </h5>
//                   <div className="d-flex justify-content-between">
//                     <span className="news-source">{article?.author || "Unknown Source"}</span>
//                     <span className="news-time">{article?.date}</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )})}
//         </div>
//       </div>
//     </>
//   );
// }

// export default Blog;
// app/blog/page.js
import React from "react";
import Image from 'next/image';
import Link from "next/link";
import BlogClient from "./BlogClient";

async function Blog() {
  // Fetch data on the server
  const articles = await fetchArticles();
  
  // Handle error state
  if (!articles.success) {
    return (
      <div className="container mt-5">
        <div className="alert alert-danger" role="alert">
          {articles.error}
        </div>
      </div>
    );
  }

  // Process the data for different sections
  const featuredArticle = articles.data[0];
  const sidebarArticles = articles.data.slice(1, 4);
  const latestArticles = articles.data.slice(4);

  return (
    <>
      {/* Breadcrumb */}
      <section className="brdcrumb">
        <div className="container">
          <ul className="mb-0">
            <li><Link href="/" title="Home">Home</Link></li>
            <li>Blog</li>
          </ul>
        </div>
      </section>
      
      <div className="container mt-4">
        <h1>Latest Crypto News</h1>
        
        {/* Pass data to client component for interactivity */}
        <BlogClient 
          featuredArticle={featuredArticle} 
          sidebarArticles={sidebarArticles} 
          latestArticles={latestArticles} 
        />
      </div>
    </>
  );
}

// Server-side data fetching function
async function fetchArticles() {
  try {
    // In App Router, you need to use the full URL
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/blog", { 
      cache: 'no-store', 
      next: { revalidate: 60 } // Optional: Revalidate every hour
    });
    
    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (data.success && data.data && data.data.length > 0) {
      return {
        success: true,
        data: data.data
      };
    } else {
      return {
        success: false,
        error: "No articles found.",
        data: []
      };
    }
  } catch (err) {
    console.error("Error fetching news:", err);
    return {
      success: false,
      error: err.message || "Failed to load news data.",
      data: []
    };
  }
}

export default Blog;