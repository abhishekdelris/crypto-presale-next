// 'use client'
// import React from 'react';
// import Link from 'next/link';
// import Head from 'next/head';
// import '../styles/Adviser.css';

// function Advertise() {
//   return (
//     <>
//       <Head>
//         <title>Advertise - Gabbarx</title>
//         <meta name="description" content="Explore our advertising services designed to enhance your reach and engagement within the crypto community." />
//       </Head>
      
//       <section className="brdcrumb">
//         <div className="container">
//           <ul className="mb-0">
//             <li><Link href="/" title="Home">Home</Link></li>
//             <li>Advertise</li>
//           </ul>
//         </div>
//       </section>

//       <section className="maintabsbg p-4">
//         <div className="container">
//           <div className="rotate-center ellipse-rotate-success position-fixed z-0" />
//           <div className="rotate-center-rev ellipse-rotate-primary position-fixed z-0" />
          
//           <div className="row justify-content-center">
//             <div className="col-xl-9 col-lg-10 text-center">
//               <h1 className="h4 fw-bold">Gabbarx Advertising Options</h1>
//               <p className="text-muted">
//                 Explore our diverse advertising services designed to enhance your reach and engagement within the crypto community. Below are the available options along with their pricing details:
//               </p>
//             </div>
//           </div>

//           <div className="row justify-content-center">
//             <div className="col-xl-3 col-lg-4 pb-4">
//               <div id="list-example" className="list-group vertical-tab sidebar-sticky">
//                 <div className="nav nav-tabs d-flex justify-content-center flex-wrap" role="tablist">
//                   <Link href="#list-item-1" className="list-group-item list-group-item-action">Content Packages</Link>
//                   <Link href="#list-item-2" className="list-group-item list-group-item-action">Banner Ads</Link>
//                   <Link href="#list-item-3" className="list-group-item list-group-item-action">Add on Campaigns</Link>
//                   <Link href="#list-item-4" className="list-group-item list-group-item-action">Airdrop Marketing</Link>
//                   <Link href="#list-item-5" className="list-group-item list-group-item-action">Presale / ICO Marketing</Link>
//                   <Link href="#list-item-6" className="list-group-item list-group-item-action">Event Campaign</Link>
//                   <Link href="#list-item-7" className="list-group-item list-group-item-action">Monthly Content Package</Link>
//                   <Link href="#list-item-8" className="list-group-item list-group-item-action">Monthly Social Media Management</Link>
//                 </div>
//               </div>
//             </div>
            
//             <div className="col-xl-9 col-lg-8 pb-4">
//               <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" className="scrollspy-example">
//                 <div className="text-center mb-4">
//                   <span className="rounded-3 h5 px-4 py-1 text-white orange-gradient">Content Packages</span>
//                 </div>
                
//                 <table className="table-striped table table-bordered table-responsive d-block d-xxl-table border advertisment-tbl mb-5" id="list-item-1">
//                   <thead className="text-center text-wrap orange-gradient">
//                     <tr>
//                       <th rowSpan={2}>Gabbarx Content Packages</th>
//                       <th rowSpan={2}>Sample Link</th>
//                       <th rowSpan={2}>Google Indexed</th>
//                       <th rowSpan={2}>
//                         <span data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Turnaround time">TAT (Days)</span>
//                       </th>
//                       <th rowSpan={2}>
//                         <span data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Do Follows">Backlinks</span>
//                       </th>
//                       <th>Crypto</th>
//                       <th>Gambling</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     <tr>
//                       <td>
//                         Crypto Organic Blog
//                         <span className="small text-muted d-block">(Including Project Review &amp; Interview)</span>
//                       </td>
//                       <td className="text-center">
//                         <div className="d-flex justify-content-center align-items-center">
//                           <Link href="https://www.binance.com/en/square/profile/coingabbar" className="samplelink bg-bnb align-middle mx-1" target="_blank" rel="noreferrer noopener" title="Coingabbar Binance">
//                             <img src="https://www.coingabbar.com/new/images/bnb-icon.svg" alt="Binance" width={15} height={15} />
//                           </Link>
//                           <Link href="https://coinmarketcap.com/community/profile/Coin_Gabbar/" className="samplelink align-middle mx-1" target="_blank" rel="noreferrer noopener" title="CMC">
//                             <img src="https://www.coingabbar.com/new/images/coinmarketcap.svg" className="rounded-circle" alt="CMC" width={24} height={24} />
//                           </Link>
//                           <Link href="https://www.coingabbar.com/en/crypto-blogs-english" className="samplelink orange-gradient mx-1" target="_blank" rel="noreferrer noopener" title="Website Link">
//                             <i className="fa-solid fa-arrow-up-right-from-square" />
//                           </Link>
//                           <Link href="https://docs.google.com/spreadsheets/d/1W-tHIZal4Gv5slFqI_GmsGRKvsi7wK9UQNCd93_YG2I/edit?gid=0#gid=0" className="samplelink orange-gradient mx-1" target="_blank" rel="noreferrer noopener" title="30+ Websites">
//                             <i className="fa-solid fa-sheet-plastic" />
//                           </Link>
//                         </div>
//                       </td>
//                       <td className="text-center">
//                         <i className="fa-solid fa-circle-check mx-1 fs-4 align-middle text-success" />
//                       </td>
//                       <td className="text-center">1</td>
//                       <td className="text-center">2</td>
//                       <td className="text-start">
//                         <label className="checkbox style-d">
//                           <input type="hidden" className="form-control quantity int-txt w-100px" id="quantity_crypto_1" defaultValue={1} min={1} />
//                           <input type="hidden" className="form-control product_name int-txt w-100px" id="product_crypto_1" defaultValue="Crypto Organic Blog" />
//                           <input type="hidden" className="form-control product_price int-txt w-100px" id="price_crypto_1" defaultValue={250} />
//                           <input type="checkbox" id="crypto_1" data-product-id="crypto_1" />
//                           <span className="checkbox__checkmark checkbox-orange" />
//                           <span className="checkbox__body">$250</span>
//                         </label>
//                       </td>
//                       <td className="text-start">
//                         <label className="checkbox style-d">
//                           <input type="hidden" className="form-control quantity int-txt w-100px" id="quantity_gambling_1" defaultValue={1} min={1} />
//                           <input type="hidden" className="form-control product_name int-txt w-100px" id="product_gambling_1" defaultValue="Crypto Organic Blog" />
//                           <input type="hidden" className="form-control product_price int-txt w-100px" id="price_gambling_1" defaultValue={300} />
//                           <input type="checkbox" id="gambling_1" data-product-id="gambling_1" />
//                           <span className="checkbox__checkmark checkbox-orange" />
//                           <span className="checkbox__body">$300</span>
//                         </label>
//                       </td>
                    
                  
//       <td>Listicle Blog</td>
//       <td class="text-center">
//         <a href="https://www.coingabbar.com/en/listicle-blog" title="Website Link" class="samplelink orange-gradient">
//           <i class="fa-solid fa-arrow-up-right-from-square" />
//           <span class="d-none">listicle blog</span>
//         </a>
//       </td>
//       <td class="text-center">
//         <i class="fa-solid fa-circle-check mx-1 fs-4 align-middle text-success" />
//       </td>
//       <td class="text-center">1</td>
//       <td class="text-center">2</td>
//       <td class="text-start">
//         <label class="checkbox style-d">
//           <input type="hidden" class="form-control quantity int-txt w-100px" id="quantity_crypto_4" defaultValue="1" min="1" />
//           <input type="hidden" class="form-control product_name int-txt w-100px" id="product_crypto_4" defaultValue="Listicle Blog" />
//           <input type="hidden" class="form-control product_price int-txt w-100px" id="price_crypto_4" defaultValue="50" />
//           <input type="checkbox" onclick="addToCard(this,'crypto_4')" id="crypto_4" data-product-id="crypto_4" />
//           <span class="checkbox__checkmark checkbox-orange" />
//           <span class="checkbox__body">$50</span>
//         </label>
//       </td>
//       <td class="text-start">
//         <label class="checkbox style-d">
//           <input type="hidden" class="form-control quantity int-txt w-100px" id="quantity_crypto_4" defaultValue="1" min="1" />
//           <input type="hidden" class="form-control product_name int-txt w-100px" id="product_crypto_4" defaultValue="Listicle Blog" />
//           <input type="hidden" class="form-control product_price int-txt w-100px" id="price_crypto_4" defaultValue="100" />
//           <input type="checkbox" onclick="addToCard(this,'crypto_4')" id="crypto_4" data-product-id="crypto_4" />
//           <span class="checkbox__checkmark checkbox-orange" />
//           <span class="checkbox__body">$100</span>
//         </label>
//       </td>
//     </tr>
//     <tr>
//       <td>Crypto Press Release</td>
//       <td class="text-center">
//         <a href="https://www.coingabbar.com/en/crypto-press-release" title="Website Link" class="samplelink orange-gradient">
//           <i class="fa-solid fa-arrow-up-right-from-square" />
//           <span class="d-none">crypto press release</span>
//         </a>
//       </td>
//       <td class="text-center">
//         <i class="fa-solid fa-circle-check mx-1 fs-4 align-middle text-success" />
//       </td>
//       <td class="text-center">1</td>
//       <td class="text-center">2</td>
//       <td class="text-start">
//         <label class="checkbox style-d">
//           <input type="hidden" class="form-control quantity int-txt w-100px" id="quantity_crypto_5" defaultValue="1" min="1" />
//           <input type="hidden" class="form-control product_name int-txt w-100px" id="product_crypto_5" defaultValue="Crypto Press Release" />
//           <input type="hidden" class="form-control product_price int-txt w-100px" id="price_crypto_5" defaultValue="150" />
//           <input type="checkbox" onclick="addToCard(this,'crypto_5')" id="crypto_5" data-product-id="crypto_5" />
//           <span class="checkbox__checkmark checkbox-orange" />
//           <span class="checkbox__body">$150</span>
//         </label>
//       </td>
//       <td class="text-start">
//         <label class="checkbox style-d">
//           <input type="hidden" class="form-control quantity int-txt w-100px" id="quantity_gambling_5" defaultValue="1" min="1" />
//           <input type="hidden" class="form-control product_name int-txt w-100px" id="product_gambling_5" defaultValue="Crypto Press Release" />
//           <input type="hidden" class="form-control product_price int-txt w-100px" id="price_gambling_5" defaultValue="200" />
//           <input type="checkbox" onclick="addToCard(this,'gambling_5')" id="gambling_5" data-product-id="gambling_5" />
//           <span class="checkbox__checkmark checkbox-orange" />
//           <span class="checkbox__body">$200</span>
//         </label>
//       </td>
//     </tr>
//     <tr>
//       <td>Sponsored Post</td>
//       <td class="text-center">
//         <a href="https://www.coingabbar.com/en/crypto-sponsored" title="Website Link" class="samplelink orange-gradient">
//           <i class="fa-solid fa-arrow-up-right-from-square" />
//           <span class="d-none">crypto sponsored</span>
//         </a>
//       </td>
//       <td class="text-center">
//         <i class="fa-solid fa-circle-check mx-1 fs-4 align-middle text-success" />
//       </td>
//       <td class="text-center">1</td>
//       <td class="text-center">2</td>
//       <td class="text-start">
//         <label class="checkbox style-d">
//           <input type="hidden" class="form-control quantity int-txt w-100px" id="quantity_crypto_6" defaultValue="1" min="1" />
//           <input type="hidden" class="form-control product_name int-txt w-100px" id="product_crypto_6" defaultValue="Sponsored Post" />
//           <input type="hidden" class="form-control product_price int-txt w-100px" id="price_crypto_6" defaultValue="100" />
//           <input type="checkbox" onclick="addToCard(this,'crypto_6')" id="crypto_6" data-product-id="crypto_6" />
//           <span class="checkbox__checkmark checkbox-orange" />
//           <span class="checkbox__body">$100</span>
//         </label>
//       </td>
//       <td class="text-start">
//         <label class="checkbox style-d">
//           <input type="hidden" class="form-control quantity int-txt w-100px" id="quantity_gambling_6" defaultValue="1" min="1" />
//           <input type="hidden" class="form-control product_name int-txt w-100px" id="product_gambling_6" defaultValue="Sponsored Post" />
//           <input type="hidden" class="form-control product_price int-txt w-100px" id="price_gambling_6" defaultValue="150" />
//           <input type="checkbox" onclick="addToCard(this,'gambling_6')" id="gambling_6" data-product-id="gambling_6" />
//           <span class="checkbox__checkmark checkbox-orange" />
//           <span class="checkbox__body">$150</span>
//         </label>
//       </td>
//     </tr>
//     <tr>
//       <td>Guest Post</td>
//       <td class="text-center">
//         <a href="https://www.coingabbar.com/en/guest-post" title="Website Link" class="samplelink orange-gradient">
//           <i class="fa-solid fa-arrow-up-right-from-square" />
//           <span class="d-none">guest post</span>
//         </a>
//       </td>
//       <td class="text-center">
//         <i class="fa-solid fa-circle-check mx-1 fs-4 align-middle text-success" />
//       </td>
//       <td class="text-center">1</td>
//       <td class="text-center">2</td>
//       <td class="text-start">
//         <label class="checkbox style-d">
//           <input type="hidden" class="form-control quantity int-txt w-100px" id="quantity_crypto_7" defaultValue="1" min="1" />
//           <input type="hidden" class="form-control product_name int-txt w-100px" id="product_crypto_7" defaultValue="Guest Post" />
//           <input type="hidden" class="form-control product_price int-txt w-100px" id="price_crypto_7" defaultValue="75" />
//           <input type="checkbox" onclick="addToCard(this,'crypto_7')" id="crypto_7" data-product-id="crypto_7" />
//           <span class="checkbox__checkmark checkbox-orange" />
//           <span class="checkbox__body">$75</span>
//         </label>
//       </td>
//       <td class="text-start">
//         <label class="checkbox style-d">
//           <input type="hidden" class="form-control quantity int-txt w-100px" id="quantity_gambling_7" defaultValue="1" min="1" />
//           <input type="hidden" class="form-control product_name int-txt w-100px" id="product_gambling_7" defaultValue="Guest Post" />
//           <input type="hidden" class="form-control product_price int-txt w-100px" id="price_gambling_7" defaultValue="100" />
//           <input type="checkbox" onclick="addToCard(this,'gambling_7')" id="gambling_7" data-product-id="gambling_7" />
//           <span class="checkbox__checkmark checkbox-orange" />
//           <span class="checkbox__body">$100</span>
//         </label>
//       </td>
//     </tr>
//     <tr>
//       <td>CMC Articles &amp; Post
//         <span class="small text-muted d-block">(Tagging Project)</span>
//       </td>
//       <td class="text-center">
//         <a href="https://coinmarketcap.com/community/profile/Coin_Gabbar/" class="samplelink align-middle mx-1" title="CMC" rel="noreferrer noopener">
//           <img src="https://www.coingabbar.com/new/images/coinmarketcap.svg" class="rounded-circle" alt="CMC" width="24" height="24" />
//         </a>
//       </td>
//       <td class="text-center">
//         <i class="fa-solid fa-circle-check mx-1 fs-4 align-middle text-success" />
//       </td>
//       <td class="text-center">1</td>
//       <td class="text-center">2</td>
//       <td class="text-start">
//         <label class="checkbox style-d">
//           <input type="hidden" class="form-control quantity int-txt w-100px" id="quantity_crypto_8" defaultValue="1" min="1" />
//           <input type="hidden" class="form-control product_name int-txt w-100px" id="product_crypto_8" defaultValue="CMC Articles & Post" />
//           <input type="hidden" class="form-control product_price int-txt w-100px" id="price_crypto_8" defaultValue="75" />
//           <input type="checkbox" onclick="addToCard(this,'crypto_8')" id="crypto_8" data-product-id="crypto_8" />
//           <span class="checkbox__checkmark checkbox-orange" />
//           <span class="checkbox__body">$75</span>
//         </label>
//       </td>
//       <td class="text-center">
//         NA
//       </td>
    
//               </tr>
//               </tbody>
//             </table>
//             <div classname="text-center mb-3">
//               <span classname="rounded-3 h5 px-3 py-1 text-white info-gradient">Banner Ads</span>
//             </div>
//             <table classname="table-striped table table-bordered table-responsive d-block d-md-table d-lg-block d-xl-table border advertisment-tbl mb-5" id="list-item-2">
//               <thead classname="text-center text-wrap info-gradient">
//                 <tr>
//                   <th rowSpan={2}>Banner Advertisments</th>
//                   <th rowSpan={2}>Image</th>
//                   <th rowSpan={2}>7 Days</th>
//                   <th rowSpan={2}>15 Days</th>
//                   <th rowSpan={2}>1 Month</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td>
//                     <div classname="d-flex justify-content-between align-items-center">
//                       <div>
//                         Home Page Takeover
//                         <span classname="small ">(1)</span>
//                       </div>
//                       <a href="https://www.coingabbar.com" title="English Link" classname="samplelink info-gradient">
//                         <i classname="fa-solid fa-arrow-up-right-from-square" />
//                         <span classname="d-none">Home</span>
//                       </a>
//                     </div>
//                   </td>
//                   <td classname="text-center">
//                     <img src="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/homepage-takeover.webp" alt="ICO Banner" loading="lazy" classname="img-fluid cursor-pointer" width={50} height={28} data-bs-toggle="modal" data-bs-target="#banner-Modal" data-img-src="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/homepage-takeover.webp" />
//                   </td>
//                   <td classname="text-start">
//                     <label classname="checkbox style-d">
//                       <input type="hidden" classname="form-control quantity int-txt w-100px" id="quantity_weekly_12" defaultValue={1} min={1} />
//                       <input type="hidden" classname="form-control product_name int-txt w-100px" id="product_weekly_12" defaultValue="Home Page Takeover" />
//                       <input type="hidden" classname="form-control product_price int-txt w-100px" id="price_weekly_12" defaultValue={750} />
//                       <input type="hidden" classname="form-control image int-txt w-100px" id="image_weekly_12" defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/homepage-takeover.webp" />
//                       <input type="checkbox" onclick="addToCard(this,'weekly_12')" id="weekly_12" data-product-id="weekly_12" />
//                       <span classname="checkbox__checkmark checkbox-info" />
//                       <span classname="checkbox__body">$750</span>
//                     </label>
//                   </td>
//                   <td classname="text-start">
//                     <label classname="checkbox style-d">
//                       <input type="hidden" classname="form-control quantity int-txt w-100px" id="quantity_fortnightly_12" defaultValue={1} min={1} />
//                       <input type="hidden" classname="form-control product_name int-txt w-100px" id="product_fortnightly_12" defaultValue="Home Page Takeover" />
//                       <input type="hidden" classname="form-control product_price int-txt w-100px" id="price_fortnightly_12" defaultValue={1250} />
//                       <input type="hidden" classname="form-control image int-txt w-100px" id="image_fortnightly_12" defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/homepage-takeover.webp" />
//                       <input type="checkbox" onclick="addToCard(this,'fortnightly_12')" id="fortnightly_12" data-product-id="fortnightly_12" />
//                       <span classname="checkbox__checkmark checkbox-info" />
//                       <span classname="checkbox__body">$1250</span>
//                     </label>
//                   </td>
//                   <td classname="text-start">
//                     <label classname="checkbox style-d">
//                       <input type="hidden" classname="form-control quantity int-txt w-100px" id="quantity_monthly_12" defaultValue={1} min={1} />
//                       <input type="hidden" classname="form-control product_name int-txt w-100px" id="product_monthly_12" defaultValue="Home Page Takeover" />
//                       <input type="hidden" classname="form-control product_price int-txt w-100px" id="price_monthly_12" defaultValue={2000} />
//                       <input type="hidden" classname="form-control image int-txt w-100px" id="image_monthly_12" defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/homepage-takeover.webp" />
//                       <input type="checkbox" onclick="addToCard(this,'monthly_12')" id="monthly_12" data-product-id="monthly_12" />
//                       <span classname="checkbox__checkmark checkbox-info" />
//                       <span classname="checkbox__body">$2000</span>
//                     </label>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>
//                     <div classname="d-flex justify-content-between align-items-center">
//                       <div>
//                         Home Page Above Header
//                         <span classname="small ">(1)</span>
//                       </div>
//                       <a href="https://www.coingabbar.com" title="English Link" classname="samplelink info-gradient">
//                         <i classname="fa-solid fa-arrow-up-right-from-square" />
//                         <span classname="d-none">Home</span>
//                       </a>
//                     </div>
//                   </td>
//                   <td classname="text-center">
//                     <img src="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/homepage-above-header.webp" classname="img-fluid cursor-pointer" alt="Banner" width={50} height={28} data-bs-toggle="modal" data-bs-target="#banner-Modal" data-img-src="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/homepage-above-header.webp" />
//                   </td>
//                   <td classname="text-start">
//                     <label classname="checkbox style-d">
//                       <input type="hidden" classname="form-control quantity int-txt w-100px" id="quantity_weekly_13" defaultValue={1} min={1} />
//                       <input type="hidden" classname="form-control product_name int-txt w-100px" id="product_weekly_13" defaultValue="Home Page Above Header" />
//                       <input type="hidden" classname="form-control product_price int-txt w-100px" id="price_weekly_13" defaultValue={1000} />
//                       <input type="hidden" classname="form-control image int-txt w-100px" id="image_weekly_13" defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/homepage-above-header.webp" />
//                       <input type="checkbox" onclick="addToCard(this,'weekly_13')" id="weekly_13" data-product-id="weekly_13" />
//                       <span classname="checkbox__checkmark checkbox-info" />
//                       <span classname="checkbox__body">$1000</span>
//                     </label>
//                   </td>
//                   <td classname="text-start">
//                     <label classname="checkbox style-d">
//                       <input type="hidden" classname="form-control quantity int-txt w-100px" id="quantity_fortnightly_13" defaultValue={1} min={1} />
//                       <input type="hidden" classname="form-control product_name int-txt w-100px" id="product_fortnightly_13" defaultValue="Home Page Above Header" />
//                       <input type="hidden" classname="form-control product_price int-txt w-100px" id="price_fortnightly_13" defaultValue={1750} />
//                       <input type="hidden" classname="form-control image int-txt w-100px" id="image_fortnightly_13" defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/homepage-above-header.webp" />
//                       <input type="checkbox" onclick="addToCard(this,'fortnightly_13')" id="fortnightly_13" data-product-id="fortnightly_13" />
//                       <span classname="checkbox__checkmark checkbox-info" />
//                       <span classname="checkbox__body">$1750</span>
//                     </label>
//                   </td>
//                   <td classname="text-start">
//                     <label classname="checkbox style-d">
//                       <input type="hidden" classname="form-control quantity int-txt w-100px" id="quantity_monthly_13" defaultValue={1} min={1} />
//                       <input type="hidden" classname="form-control product_name int-txt w-100px" id="product_monthly_13" defaultValue="Home Page Above Header" />
//                       <input type="hidden" classname="form-control product_price int-txt w-100px" id="price_monthly_13" defaultValue={3000} />
//                       <input type="hidden" classname="form-control image int-txt w-100px" id="image_monthly_13" defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/homepage-above-header.webp" />
//                       <input type="checkbox" onclick="addToCard(this,'monthly_13')" id="monthly_13" data-product-id="monthly_13" />
//                       <span classname="checkbox__checkmark checkbox-info" />
//                       <span classname="checkbox__body">$3000</span>
//                     </label>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>
//                     <div classname="d-flex justify-content-between align-items-center">
//                       <div>
//                         Home Page Box Banner
//                         <span classname="small ">(3)</span>
//                       </div>
//                       <a href="https://www.coingabbar.com" title="English Link" classname="samplelink info-gradient">
//                         <i classname="fa-solid fa-arrow-up-right-from-square" />
//                         <span classname="d-none">Home</span>
//                       </a>
//                     </div>
//                   </td>
//                   <td classname="text-center">
//                     <img data-img-src="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/homepage-box-banner.webp" src="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/homepage-box-banner.webp" classname="img-fluid cursor-pointer" alt="Banner" width={50} height={28} data-bs-toggle="modal" data-bs-target="#banner-Modal" />
//                   </td>
//                   <td classname="text-start">
//                     <label classname="checkbox style-d">
//                       <input type="hidden" classname="form-control quantity int-txt w-100px" id="quantity_weekly_14" defaultValue={1} min={1} />
//                       <input type="hidden" classname="form-control product_name int-txt w-100px" id="product_weekly_14" defaultValue="Home Page Box Banner" />
//                       <input type="hidden" classname="form-control product_price int-txt w-100px" id="price_weekly_14" defaultValue={500} />
//                       <input type="hidden" classname="form-control image int-txt w-100px" id="image_weekly_14" defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/homepage-box-banner.webp" />
//                       <input type="checkbox" onclick="addToCard(this,'weekly_14')" id="weekly_14" data-product-id="weekly_14" />
//                       <span classname="checkbox__checkmark checkbox-info" />
//                       <span classname="checkbox__body">$500</span>
//                     </label>
//                   </td>
//                   <td classname="text-start">
//                     <label classname="checkbox style-d">
//                       <input type="hidden" classname="form-control quantity int-txt w-100px" id="quantity_fortnightly_14" defaultValue={1} min={1} />
//                       <input type="hidden" classname="form-control product_name int-txt w-100px" id="product_fortnightly_14" defaultValue="Home Page Box Banner" />
//                       <input type="hidden" classname="form-control product_price int-txt w-100px" id="price_fortnightly_14" defaultValue={750} />
//                       <input type="hidden" classname="form-control image int-txt w-100px" id="image_fortnightly_14" defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/homepage-box-banner.webp" />
//                       <input type="checkbox" onclick="addToCard(this,'fortnightly_14')" id="fortnightly_14" data-product-id="fortnightly_14" />
//                       <span classname="checkbox__checkmark checkbox-info" />
//                       <span classname="checkbox__body">$750</span>
//                     </label>
//                   </td>
//                   <td classname="text-start">
//                     <label classname="checkbox style-d">
//                       <input type="hidden" classname="form-control quantity int-txt w-100px" id="quantity_monthly_14" defaultValue={1} min={1} />
//                       <input type="hidden" classname="form-control product_name int-txt w-100px" id="product_monthly_14" defaultValue="Home Page Box Banner" />
//                       <input type="hidden" classname="form-control product_price int-txt w-100px" id="price_monthly_14" defaultValue={1250} />
//                       <input type="hidden" classname="form-control image int-txt w-100px" id="image_monthly_14" defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/homepage-box-banner.webp" />
//                       <input type="checkbox" onclick="addToCard(this,'monthly_14')" id="monthly_14" data-product-id="monthly_14" />
//                       <span classname="checkbox__checkmark checkbox-info" />
//                       <span classname="checkbox__body">$1250</span>
//                     </label>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>
//                     <div classname="d-flex justify-content-between align-items-center">
//                       <div>
//                         Home Page Sticky Banner
//                         <span classname="small ">(1)</span>
//                       </div>
//                       <a href="https://www.coingabbar.com" title="English Link" classname="samplelink info-gradient">
//                         <i classname="fa-solid fa-arrow-up-right-from-square" />
//                         <span classname="d-none">Home</span>
//                       </a>
//                     </div>
//                   </td>
//                   <td classname="text-center">
//                     <img src="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/homepage-sticky-banner.webp" classname="img-fluid cursor-pointer" alt="Banner" width={50} height={28} data-bs-toggle="modal" data-bs-target="#banner-Modal" data-img-src="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/homepage-sticky-banner.webp" />
//                   </td>
//                   <td classname="text-start">
//                     <label classname="checkbox style-d">
//                       <input type="hidden" classname="form-control quantity int-txt w-100px" id="quantity_weekly_15" defaultValue={1} min={1} />
//                       <input type="hidden" classname="form-control product_name int-txt w-100px" id="product_weekly_15" defaultValue="Home Page Sticky Banner" />
//                       <input type="hidden" classname="form-control product_price int-txt w-100px" id="price_weekly_15" defaultValue={500} />
//                       <input type="hidden" classname="form-control image int-txt w-100px" id="image_weekly_15" defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/homepage-sticky-banner.webp" />
//                       <input type="checkbox" onclick="addToCard(this,'weekly_15')" id="weekly_15" data-product-id="weekly_15" />
//                       <span classname="checkbox__checkmark checkbox-info" />
//                       <span classname="checkbox__body">$500</span>
//                     </label>
//                   </td>
//                   <td classname="text-start">
//                     <label classname="checkbox style-d">
//                       <input type="hidden" classname="form-control quantity int-txt w-100px" id="quantity_fortnightly_15" defaultValue={1} min={1} />
//                       <input type="hidden" classname="form-control product_name int-txt w-100px" id="product_fortnightly_15" defaultValue="Home Page Sticky Banner" />
//                       <input type="hidden" classname="form-control product_price int-txt w-100px" id="price_fortnightly_15" defaultValue={800} />
//                       <input type="hidden" classname="form-control image int-txt w-100px" id="image_fortnightly_15" defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/homepage-sticky-banner.webp" />
//                       <input type="checkbox" onclick="addToCard(this,'fortnightly_15')" id="fortnightly_15" data-product-id="fortnightly_15" />
//                       <span classname="checkbox__checkmark checkbox-info" />
//                       <span classname="checkbox__body">$800</span>
//                     </label>
//                   </td>
//                   <td classname="text-start">
//                     <label classname="checkbox style-d">
//                       <input type="hidden" classname="form-control quantity int-txt w-100px" id="quantity_monthly_15" defaultValue={1} min={1} />
//                       <input type="hidden" classname="form-control product_name int-txt w-100px" id="product_monthly_15" defaultValue="Home Page Sticky Banner" />
//                       <input type="hidden" classname="form-control product_price int-txt w-100px" id="price_monthly_15" defaultValue={1500} />
//                       <input type="hidden" classname="form-control image int-txt w-100px" id="image_monthly_15" defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/homepage-sticky-banner.webp" />
//                       <input type="checkbox" onclick="addToCard(this,'monthly_15')" id="monthly_15" data-product-id="monthly_15" />
//                       <span classname="checkbox__checkmark checkbox-info" />
//                       <span classname="checkbox__body">$1500</span>
//                     </label>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>
//                     <div classname="d-flex justify-content-between align-items-center">
//                       <div>
//                         ICO Takeover
//                         <span classname="small ">(1)</span>
//                       </div>
//                       <a href="https://www.coingabbar.com/en/crypto-latest-ico" title="English Link" classname="samplelink info-gradient">
//                         <i classname="fa-solid fa-arrow-up-right-from-square" />
//                         <span classname="d-none">crypto-latest-ico</span>
//                       </a>
//                     </div>
//                   </td>
//                   <td classname="text-center">
//                     <img src="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/ico-page-take-over.webp" classname="img-fluid cursor-pointer" alt="Banner" width={50} height={28} data-bs-toggle="modal" data-bs-target="#banner-Modal" data-img-src="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/ico-page-take-over.webp" />
//                   </td>
//                   <td classname="text-start">
//                     <label classname="checkbox style-d">
//                       <input type="hidden" classname="form-control quantity int-txt w-100px" id="quantity_weekly_16" defaultValue={1} min={1} />
//                       <input type="hidden" classname="form-control product_name int-txt w-100px" id="product_weekly_16" defaultValue="ICO Takeover" />
//                       <input type="hidden" classname="form-control product_price int-txt w-100px" id="price_weekly_16" defaultValue={150} />
//                       <input type="hidden" classname="form-control image int-txt w-100px" id="image_weekly_16" defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/ico-page-take-over.webp" />
//                       <input type="checkbox" onclick="addToCard(this,'weekly_16')" id="weekly_16" data-product-id="weekly_16" />
//                       <span classname="checkbox__checkmark checkbox-info" />
//                       <span classname="checkbox__body">$150</span>
//                     </label>
//                   </td>
//                   <td classname="text-start">
//                     <label classname="checkbox style-d">
//                       <input type="hidden" classname="form-control quantity int-txt w-100px" id="quantity_fortnightly_16" defaultValue={1} min={1} />
//                       <input type="hidden" classname="form-control product_name int-txt w-100px" id="product_fortnightly_16" defaultValue="ICO Takeover" />
//                       <input type="hidden" classname="form-control product_price int-txt w-100px" id="price_fortnightly_16" defaultValue={250} />
//                       <input type="hidden" classname="form-control image int-txt w-100px" id="image_fortnightly_16" defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/ico-page-take-over.webp" />
//                       <input type="checkbox" onclick="addToCard(this,'fortnightly_16')" id="fortnightly_16" data-product-id="fortnightly_16" />
//                       <span classname="checkbox__checkmark checkbox-info" />
//                       <span classname="checkbox__body">$250</span>
//                     </label>
//                   </td>
//                   <td classname="text-start">
//                     <label classname="checkbox style-d">
//                       <input type="hidden" classname="form-control quantity int-txt w-100px" id="quantity_monthly_16" defaultValue={1} min={1} />
//                       <input type="hidden" classname="form-control product_name int-txt w-100px" id="product_monthly_16" defaultValue="ICO Takeover" />
//                       <input type="hidden" classname="form-control product_price int-txt w-100px" id="price_monthly_16" defaultValue={400} />
//                       <input type="hidden" classname="form-control image int-txt w-100px" id="image_monthly_16" defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/ico-page-take-over.webp" />
//                       <input type="checkbox" onclick="addToCard(this,'monthly_16')" id="monthly_16" data-product-id="monthly_16" />
//                       <span classname="checkbox__checkmark checkbox-info" />
//                       <span classname="checkbox__body">$400</span>
//                     </label>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>
//                     <div classname="d-flex justify-content-between align-items-center">
//                       <div>
//                         ICO Above Header
//                         <span classname="small ">(1)</span>
//                       </div>
//                       <a href="https://www.coingabbar.com/en/crypto-latest-ico" title="English Link" classname="samplelink info-gradient">
//                         <i classname="fa-solid fa-arrow-up-right-from-square" />
//                         <span classname="d-none">crypto latest ico</span>
//                       </a>
//                     </div>
//                   </td>
//                   <td classname="text-center">
//                     <img src="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/ico-aboveheader.webp" classname="img-fluid cursor-pointer" alt="Banner" width={50} height={28} data-bs-toggle="modal" data-bs-target="#banner-Modal" data-img-src="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/ico-aboveheader.webp" />
//                   </td>
//                   <td classname="text-start">
//                     <label classname="checkbox style-d">
//                       <input type="hidden" classname="form-control quantity int-txt w-100px" id="quantity_weekly_17" defaultValue={1} min={1} />
//                       <input type="hidden" classname="form-control product_name int-txt w-100px" id="product_weekly_17" defaultValue="ICO Above Header" />
//                       <input type="hidden" classname="form-control product_price int-txt w-100px" id="price_weekly_17" defaultValue={150} />
//                       <input type="hidden" classname="form-control image int-txt w-100px" id="image_weekly_17" defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/ico-aboveheader.webp" />
//                       <input type="checkbox" onclick="addToCard(this,'weekly_17')" id="weekly_17" data-product-id="weekly_17" />
//                       <span classname="checkbox__checkmark checkbox-info" />
//                       <span classname="checkbox__body">$150</span>
//                     </label>
//                   </td>
//                   <td classname="text-start">
//                     <label classname="checkbox style-d">
//                       <input type="hidden" classname="form-control quantity int-txt w-100px" id="quantity_fortnightly_17" defaultValue={1} min={1} />
//                       <input type="hidden" classname="form-control product_name int-txt w-100px" id="product_fortnightly_17" defaultValue="ICO Above Header" />
//                       <input type="hidden" classname="form-control product_price int-txt w-100px" id="price_fortnightly_17" defaultValue={250} />
//                       <input type="hidden" classname="form-control image int-txt w-100px" id="image_fortnightly_17" defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/ico-aboveheader.webp" />
//                       <input type="checkbox" onclick="addToCard(this,'fortnightly_17')" id="fortnightly_17" data-product-id="fortnightly_17" />
//                       <span classname="checkbox__checkmark checkbox-info" />
//                       <span classname="checkbox__body">$250</span>
//                     </label>
//                   </td>
//                   <td classname="text-start">
//                     <label classname="checkbox style-d">
//                       <input type="hidden" classname="form-control quantity int-txt w-100px" id="quantity_monthly_17" defaultValue={1} min={1} />
//                       <input type="hidden" classname="form-control product_name int-txt w-100px" id="product_monthly_17" defaultValue="ICO Above Header" />
//                       <input type="hidden" classname="form-control product_price int-txt w-100px" id="price_monthly_17" defaultValue={400} />
//                       <input type="hidden" classname="form-control image int-txt w-100px" id="image_monthly_17" defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/ico-aboveheader.webp" />
//                       <input type="checkbox" onclick="addToCard(this,'monthly_17')" id="monthly_17" data-product-id="monthly_17" />
//                       <span classname="checkbox__checkmark checkbox-info" />
//                       <span classname="checkbox__body">$400</span>
//                     </label>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>
//                     <div classname="d-flex justify-content-between align-items-center">
//                       <div>
//                         ICO Box Banner
//                         <span classname="small ">(Rotational 5 Banners)</span>
//                       </div>
//                       <a href="https://www.coingabbar.com/en/crypto-latest-ico" title="English Link" classname="samplelink info-gradient">
//                         <i classname="fa-solid fa-arrow-up-right-from-square" />
//                         <span classname="d-none">crypto latest ico</span>
//                       </a>
//                     </div>
//                   </td>
//                   <td classname="text-center">
//                     <img src="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/ico-box-banner.webp" classname="img-fluid cursor-pointer" alt="Banner" width={50} height={28} data-bs-toggle="modal" data-bs-target="#banner-Modal" data-img-src="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/ico-box-banner.webp" />
//                   </td>
//                   <td classname="text-start">
//                     <label classname="checkbox style-d">
//                       <input type="hidden" classname="form-control quantity int-txt w-100px" id="quantity_weekly_18" defaultValue={1} min={1} />
//                       <input type="hidden" classname="form-control product_name int-txt w-100px" id="product_weekly_18" defaultValue="ICO Box Banner" />
//                       <input type="hidden" classname="form-control product_price int-txt w-100px" id="price_weekly_18" defaultValue={100} />
//                       <input type="hidden" classname="form-control image int-txt w-100px" id="image_weekly_18" defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/ico-box-banner.webp" />
//                       <input type="checkbox" onclick="addToCard(this,'weekly_18')" id="weekly_18" data-product-id="weekly_18" />
//                       <span classname="checkbox__checkmark checkbox-info" />
//                       <span classname="checkbox__body">$100</span>
//                     </label>
//                   </td>
//                   <td classname="text-start">
//                     <label classname="checkbox style-d">
//                       <input type="hidden" classname="form-control quantity int-txt w-100px" id="quantity_fortnightly_18" defaultValue={1} min={1} />
//                       <input type="hidden" classname="form-control product_name int-txt w-100px" id="product_fortnightly_18" defaultValue="ICO Box Banner" />
//                       <input type="hidden" classname="form-control product_price int-txt w-100px" id="price_fortnightly_18" defaultValue={200} />
//                       <input type="hidden" classname="form-control image int-txt w-100px" id="image_fortnightly_18" defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/ico-box-banner.webp" />
//                       <input type="checkbox" onclick="addToCard(this,'fortnightly_18')" id="fortnightly_18" data-product-id="fortnightly_18" />
//                       <span classname="checkbox__checkmark checkbox-info" />
//                       <span classname="checkbox__body">$200</span>
//                     </label>
//                   </td>
//                   <td classname="text-start">
//                     <label classname="checkbox style-d">
//                       <input type="hidden" classname="form-control quantity int-txt w-100px" id="quantity_monthly_18" defaultValue={1} min={1} />
//                       <input type="hidden" classname="form-control product_name int-txt w-100px" id="product_monthly_18" defaultValue="ICO Box Banner" />
//                       <input type="hidden" classname="form-control product_price int-txt w-100px" id="price_monthly_18" defaultValue={300} />
//                       <input type="hidden" classname="form-control image int-txt w-100px" id="image_monthly_18" defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/ico-box-banner.webp" />
//                       <input type="checkbox" onclick="addToCard(this,'monthly_18')" id="monthly_18" data-product-id="monthly_18" />
//                       <span classname="checkbox__checkmark checkbox-info" />
//                       <span classname="checkbox__body">$300</span>
//                     </label>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>
//                     <div classname="d-flex justify-content-between align-items-center">
//                       <div>
//                         ICO Sticky Banner
//                         <span classname="small ">(1)</span>
//                       </div>
//                       <a href="https://www.coingabbar.com/en/crypto-latest-ico" title="English Link" classname="samplelink info-gradient">
//                         <i classname="fa-solid fa-arrow-up-right-from-square" />
//                         <span classname="d-none">crypto latest ico</span>
//                       </a>
//                     </div>
//                   </td>
//                   <td classname="text-center">
//                     <img src="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/ico-sticky-banner.webp" classname="img-fluid cursor-pointer" alt="Banner" width={50} height={28} data-bs-toggle="modal" data-bs-target="#banner-Modal" data-img-src="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/ico-sticky-banner.webp" />
//                   </td>
//                   <td classname="text-start">
//                     <label classname="checkbox style-d">
//                       <input type="hidden" classname="form-control quantity int-txt w-100px" id="quantity_weekly_19" defaultValue={1} min={1} />
//                       <input type="hidden" classname="form-control product_name int-txt w-100px" id="product_weekly_19" defaultValue="ICO Sticky Banner" />
//                       <input type="hidden" classname="form-control product_price int-txt w-100px" id="price_weekly_19" defaultValue={150} />
//                       <input type="hidden" classname="form-control image int-txt w-100px" id="image_weekly_19" defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/ico-sticky-banner.webp" />
//                       <input type="checkbox" onclick="addToCard(this,'weekly_19')" id="weekly_19" data-product-id="weekly_19" />
//                       <span classname="checkbox__checkmark checkbox-info" />
//                       <span classname="checkbox__body">$150</span>
//                     </label>
//                   </td>
//                   <td classname="text-start">
//                     <label classname="checkbox style-d">
//                       <input type="hidden" classname="form-control quantity int-txt w-100px" id="quantity_fortnightly_19" defaultValue={1} min={1} />
//                       <input type="hidden" classname="form-control product_name int-txt w-100px" id="product_fortnightly_19" defaultValue="ICO Sticky Banner" />
//                       <input type="hidden" classname="form-control product_price int-txt w-100px" id="price_fortnightly_19" defaultValue={250} />
//                       <input type="hidden" classname="form-control image int-txt w-100px" id="image_fortnightly_19" defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/ico-sticky-banner.webp" />
//                       <input type="checkbox" onclick="addToCard(this,'fortnightly_19')" id="fortnightly_19" data-product-id="fortnightly_19" />
//                       <span classname="checkbox__checkmark checkbox-info" />
//                       <span classname="checkbox__body">$250</span>
//                     </label>
//                   </td>
//                   <td classname="text-start">
//                     <label classname="checkbox style-d">
//                       <input type="hidden" classname="form-control quantity int-txt w-100px" id="quantity_monthly_19" defaultValue={1} min={1} />
//                       <input type="hidden" classname="form-control product_name int-txt w-100px" id="product_monthly_19" defaultValue="ICO Sticky Banner" />
//                       <input type="hidden" classname="form-control product_price int-txt w-100px" id="price_monthly_19" defaultValue={400} />
//                       <input type="hidden" classname="form-control image int-txt w-100px" id="image_monthly_19" defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/ico-sticky-banner.webp" />
//                       <input type="checkbox" onclick="addToCard(this,'monthly_19')" id="monthly_19" data-product-id="monthly_19" />
//                       <span classname="checkbox__checkmark checkbox-info" />
//                       <span classname="checkbox__body">$400</span>
//                     </label>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>
//                     <div classname="d-flex justify-content-between align-items-center">
//                       <div>
//                         Airdrop Takeover
//                         <span classname="small ">(1)</span>
//                       </div>
//                       <a href="https://www.coingabbar.com/en/crypto-ongoing-airdrops" title="English Link" classname="samplelink info-gradient">
//                         <i classname="fa-solid fa-arrow-up-right-from-square" />
//                         <span classname="d-none">crypto ongoing airdrops</span>
//                       </a>
//                     </div>
//                   </td>
//                   <td classname="text-center">
//                     <img src="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/airdrop-takeover-banner.webp" classname="img-fluid cursor-pointer" alt="Banner" width={50} height={28} data-bs-toggle="modal" data-bs-target="#banner-Modal" data-img-src="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/airdrop-takeover-banner.webp" />
//                   </td>
//                   <td classname="text-start">
//                     <label classname="checkbox style-d">
//                       <input type="hidden" classname="form-control quantity int-txt w-100px" id="quantity_weekly_20" defaultValue={1} min={1} />
//                       <input type="hidden" classname="form-control product_name int-txt w-100px" id="product_weekly_20" defaultValue="Airdrop Takeover" />
//                       <input type="hidden" classname="form-control product_price int-txt w-100px" id="price_weekly_20" defaultValue={150} />
//                       <input type="hidden" classname="form-control image int-txt w-100px" id="image_weekly_20" defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/airdrop-takeover-banner.webp" />
//                       <input type="checkbox" onclick="addToCard(this,'weekly_20')" id="weekly_20" data-product-id="weekly_20" />
//                       <span classname="checkbox__checkmark checkbox-info" />
//                       <span classname="checkbox__body">$150</span>
//                     </label>
//                   </td>
//                   <td classname="text-start">
//                     <label classname="checkbox style-d">
//                       <input type="hidden" classname="form-control quantity int-txt w-100px" id="quantity_fortnightly_20" defaultValue={1} min={1} />
//                       <input type="hidden" classname="form-control product_name int-txt w-100px" id="product_fortnightly_20" defaultValue="Airdrop Takeover" />
//                       <input type="hidden" classname="form-control product_price int-txt w-100px" id="price_fortnightly_20" defaultValue={250} />
//                       <input type="hidden" classname="form-control image int-txt w-100px" id="image_fortnightly_20" defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/airdrop-takeover-banner.webp" />
//                       <input type="checkbox" onclick="addToCard(this,'fortnightly_20')" id="fortnightly_20" data-product-id="fortnightly_20" />
//                       <span classname="checkbox__checkmark checkbox-info" />
//                       <span classname="checkbox__body">$250</span>
//                     </label>
//                   </td>
//                   <td classname="text-start">
//                     <label classname="checkbox style-d">
//                       <input type="hidden" classname="form-control quantity int-txt w-100px" id="quantity_monthly_20" defaultValue={1} min={1} />
//                       <input type="hidden" classname="form-control product_name int-txt w-100px" id="product_monthly_20" defaultValue="Airdrop Takeover" />
//                       <input type="hidden" classname="form-control product_price int-txt w-100px" id="price_monthly_20" defaultValue={400} />
//                       <input type="hidden" classname="form-control image int-txt w-100px" id="image_monthly_20" defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/airdrop-takeover-banner.webp" />
//                       <input type="checkbox" onclick="addToCard(this,'monthly_20')" id="monthly_20" data-product-id="monthly_20" />
//                       <span classname="checkbox__checkmark checkbox-info" />
//                       <span classname="checkbox__body">$400</span>
//                     </label>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>
//                     <div classname="d-flex justify-content-between align-items-center">
//                       <div>
//                         Airdrop Above Header
//                         <span classname="small ">(1)</span>
//                       </div>
//                       <a href="https://www.coingabbar.com/en/crypto-ongoing-airdrops" title="English Link" classname="samplelink info-gradient">
//                         <i classname="fa-solid fa-arrow-up-right-from-square" />
//                         <span classname="d-none">crypto ongoing airdrops</span>
//                       </a>
//                     </div>
//                   </td>
//                   <td classname="text-center">
//                     <img src="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/airdrop-above-header-banner.webp" classname="img-fluid cursor-pointer" alt="Banner" width={50} height={28} data-bs-toggle="modal" data-bs-target="#banner-Modal" data-img-src="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/airdrop-above-header-banner.webp" />
//                   </td>
//                   <td classname="text-start">
//                     <label classname="checkbox style-d">
//                       <input type="hidden" classname="form-control quantity int-txt w-100px" id="quantity_weekly_21" defaultValue={1} min={1} />
//                       <input type="hidden" classname="form-control product_name int-txt w-100px" id="product_weekly_21" defaultValue="Airdrop Above Header" />
//                       <input type="hidden" classname="form-control product_price int-txt w-100px" id="price_weekly_21" defaultValue={150} />
//                       <input type="hidden" classname="form-control image int-txt w-100px" id="image_weekly_21" defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/airdrop-above-header-banner.webp" />
//                       <input type="checkbox" onclick="addToCard(this,'weekly_21')" id="weekly_21" data-product-id="weekly_21" />
//                       <span classname="checkbox__checkmark checkbox-info" />
//                       <span classname="checkbox__body">$150</span>
//                     </label>
//                   </td>
//                   <td classname="text-start">
//                     <label classname="checkbox style-d">
//                       <input type="hidden" classname="form-control quantity int-txt w-100px" id="quantity_fortnightly_21" defaultValue={1} min={1} />
//                       <input type="hidden" classname="form-control product_name int-txt w-100px" id="product_fortnightly_21" defaultValue="Airdrop Above Header" />
//                       <input type="hidden" classname="form-control product_price int-txt w-100px" id="price_fortnightly_21" defaultValue={250} />
//                       <input type="hidden" classname="form-control image int-txt w-100px" id="image_fortnightly_21" defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/airdrop-above-header-banner.webp" />
//                       <input type="checkbox" onclick="addToCard(this,'fortnightly_21')" id="fortnightly_21" data-product-id="fortnightly_21" />
//                       <span classname="checkbox__checkmark checkbox-info" />
//                       <span classname="checkbox__body">$250</span>
//                     </label>
//                   </td>
//                   <td classname="text-start">
//                     <label classname="checkbox style-d">
//                       <input type="hidden" classname="form-control quantity int-txt w-100px" id="quantity_monthly_21" defaultValue={1} min={1} />
//                       <input type="hidden" classname="form-control product_name int-txt w-100px" id="product_monthly_21" defaultValue="Airdrop Above Header" />
//                       <input type="hidden" classname="form-control product_price int-txt w-100px" id="price_monthly_21" defaultValue={400} />
//                       <input type="hidden" classname="form-control image int-txt w-100px" id="image_monthly_21" defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/airdrop-above-header-banner.webp" />
//                       <input type="checkbox" onclick="addToCard(this,'monthly_21')" id="monthly_21" data-product-id="monthly_21" />
//                       <span classname="checkbox__checkmark checkbox-info" />
//                       <span classname="checkbox__body">$400</span>
//                     </label>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>
//                     <div classname="d-flex justify-content-between align-items-center">
//                       <div>
//                         Airdrop Box Banner
//                         <span classname="small ">(Rotational 5 Banners)</span>
//                       </div>
//                       <a href="https://www.coingabbar.com/en/crypto-ongoing-airdrops" title="English Link" classname="samplelink info-gradient">
//                         <i classname="fa-solid fa-arrow-up-right-from-square" />
//                         <span classname="d-none">crypto ongoing airdrops</span>
//                       </a>
//                     </div>
//                   </td>
//                   <td classname="text-center">
//                     <img src="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/airdrop-box-banner.webp" classname="img-fluid cursor-pointer" alt="Banner" width={50} height={28} data-bs-toggle="modal" data-bs-target="#banner-Modal" data-img-src="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/airdrop-box-banner.webp" />
//                   </td>
//                   <td classname="text-start">
//                     <label classname="checkbox style-d">
//                       <input type="hidden" classname="form-control quantity int-txt w-100px" id="quantity_weekly_22" defaultValue={1} min={1} />
//                       <input type="hidden" classname="form-control product_name int-txt w-100px" id="product_weekly_22" defaultValue="Airdrop Box Banner" />
//                       <input type="hidden" classname="form-control product_price int-txt w-100px" id="price_weekly_22" defaultValue={100} />
//                       <input type="hidden" classname="form-control image int-txt w-100px" id="image_weekly_22" defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/airdrop-box-banner.webp" />
//                       <input type="checkbox" onclick="addToCard(this,'weekly_22')" id="weekly_22" data-product-id="weekly_22" />
//                       <span classname="checkbox__checkmark checkbox-info" />
//                       <span classname="checkbox__body">$100</span>
//                     </label>
//                   </td>
//                   <td classname="text-start">
//                     <label classname="checkbox style-d">
//                       <input type="hidden" classname="form-control quantity int-txt w-100px" id="quantity_fortnightly_22" defaultValue={1} min={1} />
//                       <input type="hidden" classname="form-control product_name int-txt w-100px" id="product_fortnightly_22" defaultValue="Airdrop Box Banner" />
//                       <input type="hidden" classname="form-control product_price int-txt w-100px" id="price_fortnightly_22" defaultValue={200} />
//                       <input type="hidden" classname="form-control image int-txt w-100px" id="image_fortnightly_22" defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/airdrop-box-banner.webp" />
//                       <input type="checkbox" onclick="addToCard(this,'fortnightly_22')" id="fortnightly_22" data-product-id="fortnightly_22" />
//                       <span classname="checkbox__checkmark checkbox-info" />
//                       <span classname="checkbox__body">$200</span>
//                     </label>
//                   </td>
//                   <td classname="text-start">
//                     <label classname="checkbox style-d">
//                       <input type="hidden" classname="form-control quantity int-txt w-100px" id="quantity_monthly_22" defaultValue={1} min={1} />
//                       <input type="hidden" classname="form-control product_name int-txt w-100px" id="product_monthly_22" defaultValue="Airdrop Box Banner" />
//                       <input type="hidden" classname="form-control product_price int-txt w-100px" id="price_monthly_22" defaultValue={300} />
//                       <input type="hidden" classname="form-control image int-txt w-100px" id="image_monthly_22" defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/airdrop-box-banner.webp" />
//                       <input type="checkbox" onclick="addToCard(this,'monthly_22')" id="monthly_22" data-product-id="monthly_22" />
//                       <span classname="checkbox__checkmark checkbox-info" />
//                       <span classname="checkbox__body">$300</span>
//                     </label>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>
//                     <div classname="d-flex justify-content-between align-items-center">
//                       <div>
//                         Airdrop Sticky Banner
//                         <span classname="small ">(1)</span>
//                       </div>
//                       <a href="https://www.coingabbar.com/en/crypto-ongoing-airdrops" title="English Link" classname="samplelink info-gradient">
//                         <i classname="fa-solid fa-arrow-up-right-from-square" />
//                         <span classname="d-none">crypto ongoing airdrops</span>
//                       </a>
//                     </div>
//                   </td>
//                   <td classname="text-center">
//                     <img src="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/airdrop-sticky-banner.webp" classname="img-fluid cursor-pointer" alt="Banner" width={50} height={28} data-bs-toggle="modal" data-bs-target="#banner-Modal" data-img-src="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/airdrop-sticky-banner.webp" />
//                   </td>
//                   <td classname="text-start">
//                     <label classname="checkbox style-d">
//                       <input type="hidden" classname="form-control quantity int-txt w-100px" id="quantity_weekly_23" defaultValue={1} min={1} />
//                       <input type="hidden" classname="form-control product_name int-txt w-100px" id="product_weekly_23" defaultValue="Airdrop Sticky Banner" />
//                       <input type="hidden" classname="form-control product_price int-txt w-100px" id="price_weekly_23" defaultValue={150} />
//                       <input type="hidden" classname="form-control image int-txt w-100px" id="image_weekly_23" defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/airdrop-sticky-banner.webp" />
//                       <input type="checkbox" onclick="addToCard(this,'weekly_23')" id="weekly_23" data-product-id="weekly_23" />
//                       <span classname="checkbox__checkmark checkbox-info" />
//                       <span classname="checkbox__body">$150</span>
//                     </label>
//                   </td>
//                   <td classname="text-start">
//                     <label classname="checkbox style-d">
//                       <input type="hidden" classname="form-control quantity int-txt w-100px" id="quantity_fortnightly_23" defaultValue={1} min={1} />
//                       <input type="hidden" classname="form-control product_name int-txt w-100px" id="product_fortnightly_23" defaultValue="Airdrop Sticky Banner" />
//                       <input type="hidden" classname="form-control product_price int-txt w-100px" id="price_fortnightly_23" defaultValue={250} />
//                       <input type="hidden" classname="form-control image int-txt w-100px" id="image_fortnightly_23" defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/airdrop-sticky-banner.webp" />
//                       <input type="checkbox" onclick="addToCard(this,'fortnightly_23')" id="fortnightly_23" data-product-id="fortnightly_23" />
//                       <span classname="checkbox__checkmark checkbox-info" />
//                       <span classname="checkbox__body">$250</span>
//                     </label>
//                   </td>
//                   <td classname="text-start">
//                     <label classname="checkbox style-d">
//                       <input type="hidden" classname="form-control quantity int-txt w-100px" id="quantity_monthly_23" defaultValue={1} min={1} />
//                       <input type="hidden" classname="form-control product_name int-txt w-100px" id="product_monthly_23" defaultValue="Airdrop Sticky Banner" />
//                       <input type="hidden" classname="form-control product_price int-txt w-100px" id="price_monthly_23" defaultValue={400} />
//                       <input type="hidden" classname="form-control image int-txt w-100px" id="image_monthly_23" defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/airdrop-sticky-banner.webp" />
//                       <input type="checkbox" onclick="addToCard(this,'monthly_23')" id="monthly_23" data-product-id="monthly_23" />
//                       <span classname="checkbox__checkmark checkbox-info" />
//                       <span classname="checkbox__body">$400</span>
//                     </label>
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//             <div classname="text-center mb-3">
//               <span classname="rounded-3 h5 px-4 py-1  yellow-gradient text-white">Add on Campaigns</span>
//             </div>
//             <table classname="table-striped table table-bordered table-responsive d-block d-sm-table border advertisment-tbl mb-5" id="list-item-3">
//               <thead classname="text-center text-wrap yellow-gradient">
//                 <tr>
//                   <th classname rowSpan={2}>Add on Campaigns</th>
//                   <th classname>Link</th>
//                   <th classname rowSpan={2}>Sample</th>
//                   <th classname>Crypto</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td>Monthly Bulletin</td>
//                   <td classname="text-center">
//                     <a href="https://www.coingabbar.com/en/monthly-newsletter" title="Website Link" classname="samplelink yellow-gradient ">
//                       <i classname="fa-solid fa-arrow-up-right-from-square" />
//                       <span classname="d-none">monthly newsletter</span>
//                     </a>
//                   </td>
//                   <td classname="text-center">
//                     <a href="https://d3iuzwoiyg9qa8.cloudfront.net/webadmin/storage/public/monthlyNewsletters/July2024/KRKMRiV1jONHC6MeURpoDPIOTlgsNnz5Xrg4qbce.pdf" classname="samplelink yellow-gradient " data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Sample 1" aria-label="Sample 1" data-bs-original-title="Sample 1">
//                       <i classname="fa-solid fa-link" />
//                     </a>
//                     <a href="https://d3iuzwoiyg9qa8.cloudfront.net/webadmin/storage/public/monthlyNewsletters/June2024/mRLbxhaS2vyfPOKCAKoXtWyv3OtTDCUOPqJkwqHo.pdf" classname="samplelink yellow-gradient " data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Sample 2" aria-label="Sample 2" data-bs-original-title="Sample 2">
//                       <i classname="fa-solid fa-link" />
//                     </a>
//                   </td>
//                   <td classname="text-start">
//                     <label classname="checkbox style-d">
//                       <input type="hidden" classname="form-control quantity int-txt w-100px" id="quantity_crypto_24" defaultValue={1} min={1} />
//                       <input type="hidden" classname="form-control product_name int-txt w-100px" id="product_crypto_24" defaultValue="Monthly Bulletin" />
//                       <input type="hidden" classname="form-control product_price int-txt w-100px" id="price_crypto_24" defaultValue={250} />
//                       <input type="checkbox" onclick="addToCard(this,'crypto_24')" id="crypto_24" data-product-id="crypto_24" />
//                       <span classname="checkbox__checkmark checkbox-yellow" />
//                       <span classname="checkbox__body">$250</span>
//                     </label>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>Live AMA</td>
//                   <td classname="text-center">
//                     <div classname="d-flex justify-content-center align-items-center">
//                       <a href="https://www.binance.com/en/square/profile/coingabbar" classname="samplelink mx-1 bg-bnb align-middle" title="Binance" rel="noreferrer noopener">
//                         <img src="https://www.coingabbar.com/new/images/bnb-icon.svg" alt="Binance" width={15} height={15} />
//                       </a>
//                       <a href="https://x.com/coin_gabbar_" classname="samplelink mx-1 bg-dark" title="Twitter" rel="noreferrer noopener" target="_blank">
//                         <i classname="fa-brands fa-x-twitter" />
//                       </a>
//                       <a href="https://www.youtube.com/@coingabbarofficial" classname="samplelink mx-1 bg-danger" title="YouTube" rel="noreferrer noopener" target="_blank">
//                         <i classname="fa-brands fa-youtube" />
//                       </a>
//                       <a href="https://www.linkedin.com/company/79924225/admin/feed/posts/" classname="samplelink mx-1 linkdin-bg" title="Linkedin" rel="noreferrer noopener" target="_blank">
//                         <i classname="fa-brands fa-linkedin-in" />
//                       </a>
//                     </div>
//                   </td>
//                   <td classname="text-center">
//                     <a href="https://www.binance.com/en/live/video?roomId=2204915" classname="samplelink yellow-gradient " data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Sample 1" aria-label="Sample 1" data-bs-original-title="Sample 1">
//                       <i classname="fa-solid fa-link" />
//                     </a>
//                     <a href="https://www.binance.com/en/live/video?roomId=2209177" classname="samplelink yellow-gradient " data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Sample 2" aria-label="Sample 2" data-bs-original-title="Sample 2">
//                       <i classname="fa-solid fa-link" />
//                     </a>
//                   </td>
//                   <td classname="text-start">
//                     <label classname="checkbox style-d">
//                       <input type="hidden" classname="form-control quantity int-txt w-100px" id="quantity_crypto_25" defaultValue={1} min={1} />
//                       <input type="hidden" classname="form-control product_name int-txt w-100px" id="product_crypto_25" defaultValue="Live AMA" />
//                       <input type="hidden" classname="form-control product_price int-txt w-100px" id="price_crypto_25" defaultValue={100} />
//                       <input type="checkbox" onclick="addToCard(this,'crypto_25')" id="crypto_25" data-product-id="crypto_25" />
//                       <span classname="checkbox__checkmark checkbox-yellow" />
//                       <span classname="checkbox__body">$100</span>
//                     </label>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>YouTube Videos</td>
//                   <td classname="text-center">
//                     <a href="https://www.youtube.com/@coingabbarofficial" classname="samplelink mx-1 bg-danger" title="YouTube" rel="noreferrer noopener" target="_blank">
//                       <i classname="fa-brands fa-youtube" />
//                     </a>
//                   </td>
//                   <td classname="text-center">
//                     <a href="https://www.youtube.com/watch?v=hOke6Lt3yNM" classname="samplelink yellow-gradient " data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Sample 1" aria-label="Sample 1" data-bs-original-title="Sample 1">
//                       <i classname="fa-solid fa-link" />
//                     </a>
//                     <a href="https://www.youtube.com/watch?v=siIFcimfjA8" classname="samplelink yellow-gradient " data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Sample 2" aria-label="Sample 2" data-bs-original-title="Sample 2">
//                       <i classname="fa-solid fa-link" />
//                     </a>
//                   </td>
//                   <td classname="text-start">
//                     <label classname="checkbox style-d">
//                       <input type="hidden" classname="form-control quantity int-txt w-100px" id="quantity_crypto_26" defaultValue={1} min={1} />
//                       <input type="hidden" classname="form-control product_name int-txt w-100px" id="product_crypto_26" defaultValue="YouTube Videos" />
//                       <input type="hidden" classname="form-control product_price int-txt w-100px" id="price_crypto_26" defaultValue={100} />
//                       <input type="checkbox" onclick="addToCard(this,'crypto_26')" id="crypto_26" data-product-id="crypto_26" />
//                       <span classname="checkbox__checkmark checkbox-yellow" />
//                       <span classname="checkbox__body">$100</span>
//                     </label>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>Social Media Posting</td>
//                   <td classname="text-center">
//                     <div classname="d-flex justify-content-center align-items-center">
//                       <a href="https://x.com/coin_gabbar_" classname="samplelink mx-1 bg-dark" title="Twitter" rel="noreferrer noopener">
//                         <i classname="fa-brands fa-x-twitter" />
//                       </a>
//                       <a href="https://t.me/gabbarcommunity" classname="samplelink mx-1 tele-bg" title="Twitter" rel="noreferrer noopener">
//                         <i classname="fa-solid fa-paper-plane small" />
//                       </a>
//                       <a href="https://www.linkedin.com/company/79924225/admin/feed/posts/" classname="samplelink mx-1 linkdin-bg" title="Linkedin" rel="noreferrer noopener">
//                         <i classname="fa-brands fa-linkedin-in" />
//                       </a>
//                       <a href="https://www.instagram.com/coingabbar/" classname="samplelink mx-1 insta-bg" title="Instagram" rel="noreferrer noopener">
//                         <i classname="fa-brands fa-instagram" />
//                       </a>
//                     </div>
//                   </td>
//                   <td classname="text-center">
//                     -
//                   </td>
//                   <td classname="text-start">
//                     <label classname="checkbox style-d">
//                       <input type="hidden" classname="form-control quantity int-txt w-100px" id="quantity_crypto_27" defaultValue={1} min={1} />
//                       <input type="hidden" classname="form-control product_name int-txt w-100px" id="product_crypto_27" defaultValue="Social Media Posting" />
//                       <input type="hidden" classname="form-control product_price int-txt w-100px" id="price_crypto_27" defaultValue={50} />
//                       <input type="checkbox" onclick="addToCard(this,'crypto_27')" id="crypto_27" data-product-id="crypto_27" />
//                       <span classname="checkbox__checkmark checkbox-yellow" />
//                       <span classname="checkbox__body">$50</span>
//                     </label>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>Email Campaign (Front)</td>
//                   <td classname="text-center">
//                     <div classname="samplelink yellow-gradient  cursor-pointer">
//                       <i classname="fa-solid fa-image" data-bs-toggle="modal" data-bs-target="#banner-Modal" data-img-src="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/email-front.webp" />
//                     </div>
//                   </td>
//                   <td classname="text-center">-</td>
//                   <td classname="text-start">
//                     <label classname="checkbox style-d">
//                       <input type="hidden" classname="form-control quantity int-txt w-100px" id="quantity_crypto_28" defaultValue={1} min={1} />
//                       <input type="hidden" classname="form-control product_name int-txt w-100px" id="product_crypto_28" defaultValue="Email Campaign (Front)" />
//                       <input type="hidden" classname="form-control product_price int-txt w-100px" id="price_crypto_28" defaultValue={50} />
//                       <input type="hidden" classname="form-control image int-txt w-100px" id="image_crypto_28" defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/email-front.webp" />
//                       <input type="checkbox" onclick="addToCard(this,'crypto_28')" id="crypto_28" data-product-id="crypto_28" />
//                       <span classname="checkbox__checkmark checkbox-yellow" />
//                       <span classname="checkbox__body">$50</span>
//                     </label>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>Email Campaign (Footer)</td>
//                   <td classname="text-center">
//                     <div classname="samplelink yellow-gradient  cursor-pointer">
//                       <i classname="fa-solid fa-image" data-bs-toggle="modal" data-bs-target="#banner-Modal" data-img-src="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/email-bottom.webp" />
//                     </div>
//                   </td>
//                   <td classname="text-center">-</td>
//                   <td classname="text-start">
//                     <label classname="checkbox style-d">
//                       <input type="hidden" classname="form-control quantity int-txt w-100px" id="quantity_crypto_29" defaultValue={1} min={1} />
//                       <input type="hidden" classname="form-control product_name int-txt w-100px" id="product_crypto_29" defaultValue="Email Campaign (Footer)" />
//                       <input type="hidden" classname="form-control product_price int-txt w-100px" id="price_crypto_29" defaultValue={25} />
//                       <input type="hidden" classname="form-control image int-txt w-100px" id="image_crypto_29" defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/email-bottom.webp" />
//                       <input type="checkbox" onclick="addToCard(this,'crypto_29')" id="crypto_29" data-product-id="crypto_29" />
//                       <span classname="checkbox__checkmark checkbox-yellow" />
//                       <span classname="checkbox__body">$25</span>
//                     </label>
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//             <div classname="text-center mb-3">
//               <span classname="rounded-3 h5 px-3 py-1 text-white green-gradient">Airdrop Marketing</span>
//             </div>
//             <table classname="table-striped table table-bordered table-responsive d-block d-xxl-table border advertisment-tbl mb-5" id="list-item-4">
//               <thead classname="text-center text-wrap green-gradient">
//                 <tr>
//                   <th rowSpan={2}>Airdrop Marketing</th>
//                   <th>Link</th>
//                   <th rowSpan={2} colSpan={2}>Sample</th>
//                   <th>Crypto</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td colSpan={5}>
//                     <div classname="d-flex justify-content-between align-items-center">
//                       <span classname="fs-5">Complete Airdrop package
//                         <a href="https://t.me/coingabbar1" title="Book Now" classname="advertisment-btn green-gradient rounded-2 small-btn ms-2">
//                           Book Now <i classname="fa-solid fa-paper-plane small ms-2" />
//                         </a>
//                       </span>
//                       <label classname="checkbox style-d">
//                         <input type="hidden" classname="form-control quantity int-txt w-100px" id="quantity_crypto_30" defaultValue={1} min={1} />
//                         <input type="hidden" classname="form-control product_name int-txt w-100px" id="product_crypto_30" defaultValue="Complete Airdrop package" />
//                         <input type="hidden" classname="form-control product_price int-txt w-100px" id="price_crypto_30" defaultValue={800} />
//                         <input type="checkbox" onclick="addToCard(this,'crypto_30')" id="crypto_30" data-product-id="crypto_30" />
//                         <span classname="checkbox__checkmark checkbox-green mt-1" />
//                         <span classname="checkbox__body fs-5">$800</span>
//                       </label>
//                     </div>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>Premium Listing on Home Page &amp; Listing Table
//                   </td>
//                   <td classname="text-center">
//                     <a href="https://www.coingabbar.com" title="Website Link" classname="samplelink green-gradient">
//                       <i classname="fa-solid fa-arrow-up-right-from-square" />
//                       <span classname="d-none">Home</span>
//                     </a>
//                     <a href="https://www.coingabbar.com/en/crypto-ongoing-airdrops" title="Website Link" classname="samplelink green-gradient">
//                       <i classname="fa-solid fa-arrow-up-right-from-square" />
//                       <span classname="d-none">crypto-ongoing-airdrops</span>
//                     </a>
//                   </td>
//                   <td colSpan={2} classname="text-center">
//                     <div classname="samplelink green-gradient text-white cursor-pointer">
//                       <i classname="fa-solid fa-image" data-bs-toggle="modal" data-bs-target="#banner-Modal" data-img-src="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/airdrop-premium-listing.webp" />
//                     </div>
//                   </td>
//                   <td classname="text-start">
//                     <label classname="checkbox style-d">
//                       <input type="hidden" classname="form-control quantity int-txt w-100px" id="quantity_crypto_74" defaultValue={1} min={1} />
//                       <input type="hidden" classname="form-control product_name int-txt w-100px" id="product_crypto_74" defaultValue="Premium Listing on Home Page & Listing Table 
// " />
//                       <input type="hidden" classname="form-control product_price int-txt w-100px" id="price_crypto_74" defaultValue={500} />
//                       <input type="hidden" classname="form-control image int-txt w-100px" id="image_crypto_74" defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/airdrop-premium-listing.webp" />
//                       <input type="checkbox" onclick="addToCard(this,'crypto_74')" id="crypto_74" data-product-id="crypto_74" />
//                       <span classname="checkbox__checkmark checkbox-green" />
//                       <span classname="checkbox__body">$500</span>
//                     </label>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>Featured Listing at top on Airdrop Page</td>
//                   <td classname="text-center">
//                     <a href="https://www.coingabbar.com/en/crypto-ongoing-airdrops" title="Website Link" classname="samplelink green-gradient">
//                       <i classname="fa-solid fa-arrow-up-right-from-square" />
//                       <span classname="d-none">crypto ongoing airdrops</span>
//                     </a>
//                   </td>
//                   <td colSpan={2} classname="text-center">
//                     <div classname="samplelink green-gradient text-white cursor-pointer" data-bs-toggle="modal" data-bs-target="#featured-airdrop-Modal">
//                       <i classname="fa-solid fa-image" data-bs-toggle="modal" data-bs-target="#banner-Modal" data-img-src="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/airdrop-featured.webp" />
//                     </div>
//                   </td>
//                   <td classname="text-start">
//                     <label classname="checkbox style-d">
//                       <input type="hidden" classname="form-control quantity int-txt w-100px" id="quantity_crypto_31" defaultValue={1} min={1} />
//                       <input type="hidden" classname="form-control product_name int-txt w-100px" id="product_crypto_31" defaultValue="Featured Listing at top on Airdrop Page" />
//                       <input type="hidden" classname="form-control product_price int-txt w-100px" id="price_crypto_31" defaultValue={50} />
//                       <input type="hidden" classname="form-control image int-txt w-100px" id="image_crypto_31" defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/airdrop-featured.webp" />
//                       <input type="checkbox" onclick="addToCard(this,'crypto_31')" id="crypto_31" data-product-id="crypto_31" />
//                       <span classname="checkbox__checkmark checkbox-green" />
//                       <span classname="checkbox__body">$50</span>
//                     </label>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>Banner on Airdrop Page</td>
//                   <td classname="text-center">
//                     <a href="https://www.coingabbar.com/en/crypto-ongoing-airdrops" title="Website Link" classname="samplelink green-gradient">
//                       <i classname="fa-solid fa-arrow-up-right-from-square" />
//                       <span classname="d-none">crypto ongoing airdrops</span>
//                     </a>
//                   </td>
//                   <td colSpan={2} classname="text-center">
//                     <div classname="samplelink green-gradient text-white cursor-pointer" data-bs-toggle="modal" data-bs-target="#airdrop-Modal">
//                       <i classname="fa-solid fa-image" data-bs-toggle="modal" data-bs-target="#banner-Modal" data-img-src="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/airdrop-box-banner.webp" />
//                     </div>
//                   </td>
//                   <td classname="text-start">
//                     <label classname="checkbox style-d">
//                       <input type="hidden" classname="form-control quantity int-txt w-100px" id="quantity_crypto_32" defaultValue={1} min={1} />
//                       <input type="hidden" classname="form-control product_name int-txt w-100px" id="product_crypto_32" defaultValue="Banner on Airdrop Page" />
//                       <input type="hidden" classname="form-control product_price int-txt w-100px" id="price_crypto_32" defaultValue={150} />
//                       <input type="hidden" classname="form-control image int-txt w-100px" id="image_crypto_32" defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/airdrop-box-banner.webp" />
//                       <input type="checkbox" onclick="addToCard(this,'crypto_32')" id="crypto_32" data-product-id="crypto_32" />
//                       <span classname="checkbox__checkmark checkbox-green" />
//                       <span classname="checkbox__body">$150</span>
//                     </label>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>Mailing to 50k+ Reg. users</td>
//                   <td classname="text-center">
//                     -
//                   </td>
//                   <td colSpan={2} classname="text-center">
//                     <div classname="samplelink green-gradient text-white cursor-pointer">
//                       <i classname="fa-solid fa-image" data-bs-toggle="modal" data-bs-target="#banner-Modal" data-img-src="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/email-reg-user-mail.webp" />
//                     </div>
//                   </td>
//                   <td classname="text-start">
//                     <label classname="checkbox style-d">
//                       <input type="hidden" classname="form-control quantity int-txt w-100px" id="quantity_crypto_33" defaultValue={1} min={1} />
//                       <input type="hidden" classname="form-control product_name int-txt w-100px" id="product_crypto_33" defaultValue="Mailing to 50k+ Reg. users" />
//                       <input type="hidden" classname="form-control product_price int-txt w-100px" id="price_crypto_33" defaultValue={50} />
//                       <input type="hidden" classname="form-control image int-txt w-100px" id="image_crypto_33" defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/email-reg-user-mail.webp" />
//                       <input type="checkbox" onclick="addToCard(this,'crypto_33')" id="crypto_33" data-product-id="crypto_33" />
//                       <span classname="checkbox__checkmark checkbox-green" />
//                       <span classname="checkbox__body">$50</span>
//                     </label>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>Sharing on Social Media</td>
//                   <td classname="text-center">
//                     <div classname="d-flex justify-content-center align-items-center">
//                       <a href="https://x.com/coin_gabbar_" classname="samplelink mx-1 bg-dark" title="Twitter" rel="noreferrer noopener">
//                         <i classname="fa-brands fa-x-twitter" />
//                       </a>
//                       <a href="https://t.me/gabbarcommunity" classname="samplelink mx-1 tele-bg" title="Telegram" rel="noreferrer noopener">
//                         <i classname="fa-solid fa-paper-plane small" />
//                       </a>
//                       <a href="https://www.linkedin.com/company/79924225/admin/feed/posts/" classname="samplelink mx-1 linkdin-bg" title="Linkedin" rel="noreferrer noopener">
//                         <i classname="fa-brands fa-linkedin-in" />
//                       </a>
//                       <a href="https://www.instagram.com/coingabbar/" classname="samplelink mx-1 insta-bg" title="Instagram" rel="noreferrer noopener">
//                         <i classname="fa-brands fa-instagram" />
//                       </a>
//                     </div>
//                   </td>
//                   <td colSpan={2} classname="text-center">
//                     -
//                   </td>
//                   <td classname="text-start">
//                     <label classname="checkbox style-d">
//                       <input type="hidden" classname="form-control quantity int-txt w-100px" id="quantity_crypto_34" defaultValue={1} min={1} />
//                       <input type="hidden" classname="form-control product_name int-txt w-100px" id="product_crypto_34" defaultValue="Sharing on Social Media" />
//                       <input type="hidden" classname="form-control product_price int-txt w-100px" id="price_crypto_34" defaultValue={50} />
//                       <input type="checkbox" onclick="addToCard(this,'crypto_34')" id="crypto_34" data-product-id="crypto_34" />
//                       <span classname="checkbox__checkmark checkbox-green" />
//                       <span classname="checkbox__body">$50</span>
//                     </label>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>Organic blog <span classname="small text-muted d-block">(Shared on Binance, CMC, Gate.io &amp; 30+ website)</span></td>
//                   <td>
//                     <div classname="d-flex justify-content-center align-items-center">
//                       <a href="https://www.binance.com/en/square/profile/coingabbar" classname="samplelink bg-bnb align-middle mx-1" rel="noreferrer noopener" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Binance" aria-label="Binance" data-bs-original-title="Binance" aria-describedby="tooltip307078">
//                         <img src="https://www.coingabbar.com/new/images/bnb-icon.svg" alt="Binance" width={15} height={15} />
//                       </a>
//                       <a href="https://coinmarketcap.com/community/profile/Coin_Gabbar/" classname="samplelink align-middle mx-1" title="CMC" rel="noreferrer noopener">
//                         <img src="https://www.coingabbar.com/new/images/coinmarketcap.svg" classname="rounded-circle" alt="CMC" width={24} height={24} />
//                       </a>
//                       <span classname="samplelink align-middle mx-1" title="Gate.io">
//                         <img src="https://www.coingabbar.com/new/images/gateio-logo.webp" alt="Gate.Io" classname="rounded-circle" width={24} height={24} />
//                       </span>
//                       <a href="https://docs.google.com/spreadsheets/d/1W-tHIZal4Gv5slFqI_GmsGRKvsi7wK9UQNCd93_YG2I/edit?gid=0#gid=0" classname="samplelink green-gradient mx-1" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="30+ Websites" aria-label="Sheet" data-bs-original-title="Sheet">
//                         <i classname="fa-solid fa-sheet-plastic" />
//                       </a>
//                     </div>
//                   </td>
//                   <td colSpan={2} classname="text-center">
//                     <a href="https://www.coingabbar.com/en/crypto-blogs-english" classname="samplelink green-gradient" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Sample" aria-label="Sample" data-bs-original-title="Sample">
//                       <i classname="fa-solid fa-link" />
//                       <span classname="d-none">crypto blogs english</span>
//                     </a>
//                   </td>
//                   <td classname="text-start">
//                     <label classname="checkbox style-d">
//                       <input type="hidden" classname="form-control quantity int-txt w-100px" id="quantity_crypto_35" defaultValue={1} min={1} />
//                       <input type="hidden" classname="form-control product_name int-txt w-100px" id="product_crypto_35" defaultValue="Organic blog" />
//                       <input type="hidden" classname="form-control product_price int-txt w-100px" id="price_crypto_35" defaultValue={250} />
//                       <input type="checkbox" onclick="addToCard(this,'crypto_35')" id="crypto_35" data-product-id="crypto_35" />
//                       <span classname="checkbox__checkmark checkbox-green" />
//                       <span classname="checkbox__body">$250</span>
//                     </label>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>
//                     Listicle Blog
//                     <span classname="small text-muted d-block">(Top 5 Airdrop - weekly)</span>
//                   </td>
//                   <td classname="text-center">
//                     <a href="https://www.coingabbar.com/en/crypto-blogs-details/bitcoin-cash-and-flare-investors-flock-to-rollblock" classname="samplelink green-gradient" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="English Link" aria-label="English Link" data-bs-original-title="English Link">
//                       <i classname="fa-solid fa-arrow-up-right-from-square" />
//                       <span classname="d-none">crypto-blogs-details</span>
//                     </a>
//                     <a href="https://www.coingabbar.com/en/crypto-blogs-details/the-never-ending-cycle-how-cryptocurrency-whales-make-money" classname="samplelink green-gradient" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Hindi Link" aria-label="Hindi Link" data-bs-original-title="Hindi Link">
//                       <i classname="fa-solid fa-arrow-up-right-from-square" />
//                       <span classname="d-none">crypto-blogs-details</span>
//                     </a>
//                   </td>
//                   <td colSpan={2} classname="text-center">
//                     -
//                   </td>
//                   <td classname="text-start">
//                     <label classname="checkbox style-d">
//                       <input type="hidden" classname="form-control quantity int-txt w-100px" id="quantity_crypto_36" defaultValue={1} min={1} />
//                       <input type="hidden" classname="form-control product_name int-txt w-100px" id="product_crypto_36" defaultValue="Listicle Blog" />
//                       <input type="hidden" classname="form-control product_price int-txt w-100px" id="price_crypto_36" defaultValue={50} />
//                       <input type="checkbox" onclick="addToCard(this,'crypto_36')" id="crypto_36" data-product-id="crypto_36" />
//                       <span classname="checkbox__checkmark checkbox-green" />
//                       <span classname="checkbox__body">$50</span>
//                     </label>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>
//                     Listicle Blog
//                     <span classname="small text-muted d-block">(Top 5 Tokens to Buy - weekly)</span>
//                   </td>
//                   <td classname="text-center">
//                     <a href="https://www.coingabbar.com/en/crypto-blogs-details/rollblock-presale-secure-ethereum-gambling-token" classname="samplelink green-gradient" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="English Link" aria-label="English Link" data-bs-original-title="English Link">
//                       <i classname="fa-solid fa-arrow-up-right-from-square" />
//                       <span classname="d-none">crypto-blogs-details</span>
//                     </a>
//                     <a href="https://www.coingabbar.com/en/crypto-blogs-details/top-telegram-bots-token-to-buy-now" classname="samplelink green-gradient" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Hindi Link" aria-label="Hindi Link" data-bs-original-title="Hindi Link">
//                       <i classname="fa-solid fa-arrow-up-right-from-square" />
//                       <span classname="d-none">crypto-blogs-details</span>
//                     </a>
//                   </td>
//                   <td colSpan={2} classname="text-center">
//                     -
//                   </td>
//                   <td classname="text-start">
//                     <label classname="checkbox style-d">
//                       <input type="hidden" classname="form-control quantity int-txt w-100px" id="quantity_crypto_37" defaultValue={1} min={1} />
//                       <input type="hidden" classname="form-control product_name int-txt w-100px" id="product_crypto_37" defaultValue="Listicle Blog" />
//                       <input type="hidden" classname="form-control product_price int-txt w-100px" id="price_crypto_37" defaultValue={50} />
//                       <input type="checkbox" onclick="addToCard(this,'crypto_37')" id="crypto_37" data-product-id="crypto_37" />
//                       <span classname="checkbox__checkmark checkbox-green" />
//                       <span classname="checkbox__body">$50</span>
//                     </label>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>Live AMA</td>
//                   <td classname="text-center">
//                     <div classname="d-flex justify-content-center align-items-center">
//                       <a href="https://www.binance.com/en/square/profile/coingabbar" classname="samplelink mx-1 bg-bnb align-middle" title="Binance" rel="noreferrer noopener">
//                         <img src="https://www.coingabbar.com/new/images/bnb-icon.svg" alt="Binance" width={15} height={15} />
//                       </a>
//                       <a href="https://x.com/coin_gabbar_" classname="samplelink mx-1 bg-dark" title="Twitter" rel="noreferrer noopener">
//                         <i classname="fa-brands fa-x-twitter" />
//                       </a>
//                       <a href="https://www.youtube.com/@coingabbarofficial" classname="samplelink mx-1 bg-danger" title="YouTube" rel="noreferrer noopener">
//                         <i classname="fa-brands fa-youtube" />
//                       </a>
//                       <a href="https://www.linkedin.com/company/79924225/admin/feed/posts/" classname="samplelink mx-1 linkdin-bg" title="Linkedin" rel="noreferrer noopener">
//                         <i classname="fa-brands fa-linkedin-in" />
//                       </a>
//                     </div>
//                   </td>
//                   <td colSpan={2} classname="text-center">
//                     <a href="https://www.binance.com/en/live/video?roomId=2209177" classname="samplelink green-gradient" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Sample" aria-label="Sample 1" data-bs-original-title="Sample 1">
//                       <i classname="fa-solid fa-link" />
//                     </a>
//                   </td>
//                   <td classname="text-start">
//                     <label classname="checkbox style-d">
//                       <input type="hidden" classname="form-control quantity int-txt w-100px" id="quantity_crypto_38" defaultValue={1} min={1} />
//                       <input type="hidden" classname="form-control product_name int-txt w-100px" id="product_crypto_38" defaultValue="Live AMA" />
//                       <input type="hidden" classname="form-control product_price int-txt w-100px" id="price_crypto_38" defaultValue={100} />
//                       <input type="checkbox" onclick="addToCard(this,'crypto_38')" id="crypto_38" data-product-id="crypto_38" />
//                       <span classname="checkbox__checkmark checkbox-green" />
//                       <span classname="checkbox__body">$100</span>
//                     </label>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>
//                     Youtube video
//                     <span classname="small text-muted d-block">(Created &amp; Published)</span>
//                   </td>
//                   <td classname="text-center">
//                     <a href="https://www.youtube.com/@coingabbarofficial" classname="samplelink mx-1 bg-danger" title="YouTube" rel="noreferrer noopener">
//                       <i classname="fa-brands fa-youtube" />
//                     </a>
//                   </td>
//                   <td colSpan={2} classname="text-center">
//                     <a href="https://youtu.be/hOke6Lt3yNM?si=xKLnc5VbmrDyXEkW" classname="samplelink green-gradient" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Sample 1" aria-label="Sample 1" data-bs-original-title="Sample 1">
//                       <i classname="fa-solid fa-link" />
//                     </a>
//                     <a href="https://youtu.be/siIFcimfjA8?si=KuvMxrnYD2JtCEM8" classname="samplelink green-gradient" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Sample 2" aria-label="Sample 1" data-bs-original-title="Sample 1">
//                       <i classname="fa-solid fa-link" />
//                     </a>
//                   </td>
//                   <td classname="text-start">
//                     <label classname="checkbox style-d">
//                       <input type="hidden" classname="form-control quantity int-txt w-100px" id="quantity_crypto_39" defaultValue={1} min={1} />
//                       <input type="hidden" classname="form-control product_name int-txt w-100px" id="product_crypto_39" defaultValue="Youtube video" />
//                       <input type="hidden" classname="form-control product_price int-txt w-100px" id="price_crypto_39" defaultValue={100} />
//                       <input type="checkbox" onclick="addToCard(this,'crypto_39')" id="crypto_39" data-product-id="crypto_39" />
//                       <span classname="checkbox__checkmark checkbox-green" />
//                       <span classname="checkbox__body">$100</span>
//                     </label>
//                   </td>
//                 </tr>
//               </tbody>
//               <tfoot>
//                 <tr>
//                   <td>Add ons with Airdrop Packages</td>
//                   <td classname="fw-semibold">
//                     <div classname="d-flex justify-content-between align-items-center flex-wrap">
//                       On Home Page
//                       <div>
//                         <div classname="samplelink green-gradient text-white cursor-pointer">
//                           <i classname="fa-solid fa-image" data-bs-toggle="modal" data-bs-target="#banner-Modal" data-img-src="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/airdrop-homepage-box.webp" />
//                         </div>
//                         <a href="https://www.coingabbar.com" classname="samplelink green-gradient" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Sample 1" data-bs-original-title="Sample 1">
//                           <i classname="fa-solid fa-link" />
//                           <span classname="d-none">Sample1</span>
//                         </a>
//                       </div>
//                     </div>
//                     <div classname="d-flex justify-content-between align-items-center flex-wrap">
//                       On Airdrop Listing Table
//                       <div>
//                         <div classname="samplelink green-gradient text-white cursor-pointer">
//                           <i classname="fa-solid fa-image" data-bs-toggle="modal" data-bs-target="#banner-Modal" data-img-src="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/airdrop-box-banner.webp" />
//                         </div>
//                         <a href="https://www.coingabbar.com/en/crypto-ongoing-airdrops" classname="samplelink green-gradient" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Sample 1" data-bs-original-title="Sample 1">
//                           <i classname="fa-solid fa-link" />
//                           <span classname="d-none">crypto ongoing airdrops</span>
//                         </a>
//                       </div>
//                     </div>
//                   </td>
//                   <td>
//                     <label classname="checkbox style-d">
//                       <input type="hidden" classname="form-control quantity int-txt w-100px" id="quantity_weekly_40" defaultValue={1} min={1} />
//                       <input type="hidden" classname="form-control product_name int-txt w-100px" id="product_weekly_40" defaultValue="On Home Page" />
//                       <input type="hidden" classname="form-control product_price int-txt w-100px" id="price_weekly_40" defaultValue={200} />
//                       <input type="hidden" classname="form-control image int-txt w-100px" id="image_weekly_40" defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/airdrop-box-banner.webp" />
//                       <input type="checkbox" onclick="addToCard(this,'weekly_40')" id="weekly_40" data-product-id="weekly_40" />
//                       <span classname="checkbox__checkmark checkbox-green" />
//                       <span classname="checkbox__body">$200</span>
//                       <span classname="small ms-1 " data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="7 days">(7 d)</span>
//                     </label>
//                   </td>
//                   <td>
//                     <label classname="checkbox style-d">
//                       <input type="hidden" classname="form-control quantity int-txt w-100px" id="quantity_fortnightly_40" defaultValue={1} min={1} />
//                       <input type="hidden" classname="form-control product_name int-txt w-100px" id="product_fortnightly_40" defaultValue="On Home Page" />
//                       <input type="hidden" classname="form-control product_price int-txt w-100px" id="price_fortnightly_40" defaultValue={350} />
//                       <input type="hidden" classname="form-control image int-txt w-100px" id="image_fortnightly_40" defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/airdrop-box-banner.webp" />
//                       <input type="checkbox" onclick="addToCard(this,'fortnightly_40')" id="fortnightly_40" data-product-id="fortnightly_40" />
//                       <span classname="checkbox__checkmark checkbox-green" />
//                       <span classname="checkbox__body">$350</span>
//                       <span classname="small ms-1 " data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="15 days">(15 d)</span>
//                     </label>
//                   </td>
//                   <td>
//                     <label classname="checkbox style-d">
//                       <input type="hidden" classname="form-control quantity int-txt w-100px" id="quantity_monthly_40" defaultValue={1} min={1} />
//                       <input type="hidden" classname="form-control product_name int-txt w-100px" id="product_monthly_40" defaultValue="On Home Page" />
//                       <input type="hidden" classname="form-control product_price int-txt w-100px" id="price_monthly_40" defaultValue={500} />
//                       <input type="hidden" classname="form-control image int-txt w-100px" id="image_monthly_40" defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/airdrop-box-banner.webp" />
//                       <input type="checkbox" onclick="addToCard(this,'monthly_40')" id="monthly_40" data-product-id="monthly_40" />
//                       <span classname="checkbox__checkmark checkbox-green" />
//                       <span classname="checkbox__body">$500</span>
//                       <span classname="small ms-1 " data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="30 days">(30 d)</span>
//                     </label>
//                   </td>
//                 </tr>
//               </tfoot>
//             </table>
//             <div classname="text-center mb-3">
//               <span classname="rounded-3 h5 px-4 py-1 text-white blue-gradient">Presale / ICO Marketing</span>
//             </div>
//             <table classname="table-striped table table-bordered table-responsive d-block d-xxl-table border advertisment-tbl mb-5" id="list-item-5">
//               <thead classname="text-center text-wrap blue-gradient">
//                 <tr>
//                   <th rowSpan={2}>Presale / ICO Marketing</th>
//                   <th>Link</th>
//                   <th rowSpan={2} colSpan={2}>Sample</th>
//                   <th>Crypto</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td colSpan={5}>
//                     <div classname="d-flex justify-content-between align-items-center">
//                       <span classname="fs-5"> Complete ICO/IDO package
//                         <a href="https://t.me/deepagupta2425" title="Book Now" classname="advertisment-btn blue-gradient rounded-2 small-btn ms-2">
//                           Book Now <i classname="fa-solid fa-paper-plane small ms-2" />
//                         </a>
//                       </span>
//                       <label classname="checkbox style-d">
//                         <input type="hidden" classname="form-control quantity int-txt w-100px" id="quantity_crypto_41" defaultValue={1} min={1} />
//                         <input type="hidden" classname="form-control product_name int-txt w-100px" id="product_crypto_41" defaultValue="Complete ICO/IDO package" />
//                         <input type="hidden" classname="form-control product_price int-txt w-100px" id="price_crypto_41" defaultValue={800} />
//                         <input type="checkbox" onclick="addToCard(this,'crypto_41')" id="crypto_41" data-product-id="crypto_41" />
//                         <span classname="checkbox__checkmark checkbox-blue mt-1" />
//                         <span classname="checkbox__body fs-5">$800</span>
//                       </label>
//                     </div>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>Premium Listing on Home Page &amp; Listing Table
//                   </td>
//                   <td classname="text-center">
//                     <a href="https://www.coingabbar.com" title="Website Link" classname="samplelink blue-gradient">
//                       <i classname="fa-solid fa-arrow-up-right-from-square" />
//                       <span classname="d-none">Home</span>
//                     </a>
//                     <a href="https://www.coingabbar.com/en/crypto-latest-ico" title="Website Link" classname="samplelink blue-gradient">
//                       <i classname="fa-solid fa-arrow-up-right-from-square" />
//                       <span classname="d-none">crypto latest ico</span>
//                     </a>
//                   </td>
//                   <td colSpan={2} classname="text-center">
//                     <div classname="samplelink blue-gradient text-white cursor-pointer">
//                       <i classname="fa-solid fa-image" data-bs-toggle="modal" data-bs-target="#banner-Modal" data-img-src="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/ico-Premium-listing.webp" />
//                     </div>
//                   </td>
//                   <td classname="text-start">
//                     <label classname="checkbox style-d">
//                       <input type="hidden" classname="form-control quantity int-txt w-100px" id="quantity_crypto_42" defaultValue={1} min={1} />
//                       <input type="hidden" classname="form-control product_name int-txt w-100px" id="product_crypto_42" defaultValue="Premium Listing on Home Page & Listing Table	
// " />
//                       <input type="hidden" classname="form-control product_price int-txt w-100px" id="price_crypto_42" defaultValue={500} />
//                       <input type="hidden" classname="form-control image int-txt w-100px" id="image_crypto_42" defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/ico-Premium-listing.webp" />
//                       <input type="checkbox" onclick="addToCard(this,'crypto_42')" id="crypto_42" data-product-id="crypto_42" />
//                       <span classname="checkbox__checkmark checkbox-blue" />
//                       <span classname="checkbox__body">$500</span>
//                     </label>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>Featured Listing at top on ICO Page</td>
//                   <td classname="text-center">
//                     <a href="https://www.coingabbar.com/en/crypto-latest-ico" title="Website Link" classname="samplelink blue-gradient">
//                       <i classname="fa-solid fa-arrow-up-right-from-square" />
//                       <span classname="d-none">crypto latest ico</span>
//                     </a>
//                   </td>
//                   <td colSpan={2} classname="text-center">
//                     <div classname="samplelink blue-gradient text-white cursor-pointer">
//                       <i classname="fa-solid fa-image" data-bs-toggle="modal" data-bs-target="#banner-Modal" data-img-src="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/ico-featured-listing.webp" />
//                     </div>
//                   </td>
//                   <td classname="text-start">
//                     <label classname="checkbox style-d">
//                       <input type="hidden" classname="form-control quantity int-txt w-100px" id="quantity_crypto_43" defaultValue={1} min={1} />
//                       <input type="hidden" classname="form-control product_name int-txt w-100px" id="product_crypto_43" defaultValue="Featured Listing at top on ICO Page" />
//                       <input type="hidden" classname="form-control product_price int-txt w-100px" id="price_crypto_43" defaultValue={50} />
//                       <input type="hidden" classname="form-control image int-txt w-100px" id="image_crypto_43" defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/ico-featured-listing.webp" />
//                       <input type="checkbox" onclick="addToCard(this,'crypto_43')" id="crypto_43" data-product-id="crypto_43" />
//                       <span classname="checkbox__checkmark checkbox-blue" />
//                       <span classname="checkbox__body">$50</span>
//                     </label>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>Banner on ICO Page</td>
//                   <td classname="text-center">
//                     <a href="https://www.coingabbar.com/en/crypto-latest-ico" title="Website Link" classname="samplelink blue-gradient">
//                       <i classname="fa-solid fa-arrow-up-right-from-square" />
//                       <span classname="d-none">crypto latest ico</span>
//                     </a>
//                   </td>
//                   <td colSpan={2} classname="text-center">
//                     <div classname="samplelink blue-gradient text-white cursor-pointer">
//                       <i classname="fa-solid fa-image" data-bs-toggle="modal" data-bs-target="#banner-Modal" data-img-src="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/ico-box-banner.webp" />
//                     </div>
//                   </td>
//                   <td classname="text-start">
//                     <label classname="checkbox style-d">
//                       <input type="hidden" classname="form-control quantity int-txt w-100px" id="quantity_crypto_44" defaultValue={1} min={1} />
//                       <input type="hidden" classname="form-control product_name int-txt w-100px" id="product_crypto_44" defaultValue="Banner on ICO Page" />
//                       <input type="hidden" classname="form-control product_price int-txt w-100px" id="price_crypto_44" defaultValue={150} />
//                       <input type="hidden" classname="form-control image int-txt w-100px" id="image_crypto_44" defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/ico-box-banner.webp" />
//                       <input type="checkbox" onclick="addToCard(this,'crypto_44')" id="crypto_44" data-product-id="crypto_44" />
//                       <span classname="checkbox__checkmark checkbox-blue" />
//                       <span classname="checkbox__body">$150</span>
//                     </label>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>Mailing to 50k+ Reg. users</td>
//                   <td classname="text-center">
//                     -
//                   </td>
//                   <td colSpan={2} classname="text-center">
//                     <div classname="samplelink blue-gradient text-white cursor-pointer">
//                       <i classname="fa-solid fa-image" data-bs-toggle="modal" data-bs-target="#banner-Modal" data-img-src="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/email-reg-user-mail.webp" />
//                     </div>
//                   </td>
//                   <td classname="text-start">
//                     <label classname="checkbox style-d">
//                       <input type="hidden" classname="form-control quantity int-txt w-100px" id="quantity_crypto_45" defaultValue={1} min={1} />
//                       <input type="hidden" classname="form-control product_name int-txt w-100px" id="product_crypto_45" defaultValue="Mailing to 50k+ Reg. users" />
//                       <input type="hidden" classname="form-control product_price int-txt w-100px" id="price_crypto_45" defaultValue={150} />
//                       <input type="hidden" classname="form-control image int-txt w-100px" id="image_crypto_45" defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/email-reg-user-mail.webp" />
//                       <input type="checkbox" onclick="addToCard(this,'crypto_45')" id="crypto_45" data-product-id="crypto_45" />
//                       <span classname="checkbox__checkmark checkbox-blue" />
//                       <span classname="checkbox__body">$150</span>
//                     </label>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>Sharing on Social Media</td>
//                   <td classname="text-center">
//                     <div classname="d-flex justify-content-center align-items-center">
//                       <a href="https://x.com/coin_gabbar_" classname="samplelink mx-1 bg-dark" title="Twitter" rel="noreferrer noopener">
//                         <i classname="fa-brands fa-x-twitter" />
//                       </a>
//                       <a href="https://t.me/gabbarcommunity" classname="samplelink mx-1 tele-bg" title="Twitter" rel="noreferrer noopener">
//                         <i classname="fa-solid fa-paper-plane small" />
//                       </a>
//                       <a href="https://www.linkedin.com/company/79924225/admin/feed/posts/" classname="samplelink mx-1 linkdin-bg" title="Linkedin" rel="noreferrer noopener">
//                         <i classname="fa-brands fa-linkedin-in" />
//                       </a>
//                       <a href="https://www.instagram.com/coingabbar/" classname="samplelink mx-1 insta-bg" title="Instagram" rel="noreferrer noopener">
//                         <i classname="fa-brands fa-instagram" />
//                       </a>
//                     </div>
//                   </td>
//                   <td colSpan={2} classname="text-center">
//                     -
//                   </td>
//                   <td classname="text-start">
//                     <label classname="checkbox style-d">
//                       <input type="hidden" classname="form-control quantity int-txt w-100px" id="quantity_crypto_46" defaultValue={1} min={1} />
//                       <input type="hidden" classname="form-control product_name int-txt w-100px" id="product_crypto_46" defaultValue="Sharing on Social Media" />
//                       <input type="hidden" classname="form-control product_price int-txt w-100px" id="price_crypto_46" defaultValue={150} />
//                       <input type="checkbox" onclick="addToCard(this,'crypto_46')" id="crypto_46" data-product-id="crypto_46" />
//                       <span classname="checkbox__checkmark checkbox-blue" />
//                       <span classname="checkbox__body">$150</span>
//                     </label>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>
//                     Organic blog
//                     <span classname="small text-muted d-block">(Shared on Binance, CMC, Gate.io &amp; 30+ website)</span>
//                   </td>
//                   <td>
//                     <div classname="d-flex justify-content-center align-items-center">
//                       <a href="https://www.binance.com/en/square/profile/coingabbar" classname="samplelink bg-bnb align-middle mx-1" rel="noreferrer noopener" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Binance" aria-label="Binance" data-bs-original-title="Binance" aria-describedby="tooltip307078">
//                         <img src="https://www.coingabbar.com/new/images/bnb-icon.svg" alt="Binance" width={15} height={15} />
//                       </a>
//                       <a href="https://coinmarketcap.com/community/profile/Coin_Gabbar/" classname="samplelink align-middle mx-1" title="CMC" rel="noreferrer noopener">
//                         <img src="https://www.coingabbar.com/new/images/coinmarketcap.svg" classname="rounded-circle" alt="CMC" width={24} height={24} />
//                       </a>
//                       <span classname="samplelink align-middle mx-1" title="Gate.io">
//                         <img src="https://www.coingabbar.com/new/images/gateio-logo.webp" alt="Gate.Io" classname="rounded-circle" width={24} height={24} />
//                       </span>
//                       <a href="https://docs.google.com/spreadsheets/d/1W-tHIZal4Gv5slFqI_GmsGRKvsi7wK9UQNCd93_YG2I/edit?gid=0#gid=0" classname="samplelink blue-gradient mx-1" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="30+ Websites" aria-label="Sheet" data-bs-original-title="Sheet">
//                         <i classname="fa-solid fa-sheet-plastic" />
//                       </a>
//                     </div>
//                   </td>
//                   <td colSpan={2} classname="text-center">
//                     <a href="https://www.coingabbar.com/en/crypto-blogs-english" classname="samplelink blue-gradient" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Sample" aria-label="Sample" data-bs-original-title="Sample">
//                       <i classname="fa-solid fa-link" />
//                       <span classname="d-none">crypto blogs english</span>
//                     </a>
//                   </td>
//                   <td classname="text-start">
//                     <label classname="checkbox style-d">
//                       <input type="hidden" classname="form-control quantity int-txt w-100px" id="quantity_crypto_47" defaultValue={1} min={1} />
//                       <input type="hidden" classname="form-control product_name int-txt w-100px" id="product_crypto_47" defaultValue="Organic blog" />
//                       <input type="hidden" classname="form-control product_price int-txt w-100px" id="price_crypto_47" defaultValue={250} />
//                       <input type="checkbox" onclick="addToCard(this,'crypto_47')" id="crypto_47" data-product-id="crypto_47" />
//                       <span classname="checkbox__checkmark checkbox-blue" />
//                       <span classname="checkbox__body">$250</span>
//                     </label>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>
//                     Listicle Blog
//                     <span classname="small text-muted d-block">(Top 5 ICO Presale - weekly)</span>
//                   </td>
//                   <td classname="text-center">
//                     <a href="https://www.coingabbar.com/en/crypto-blogs-details/bitcoin-cash-and-flare-investors-flock-to-rollblock" classname="samplelink blue-gradient" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="English Link" aria-label="English Link" data-bs-original-title="English Link">
//                       <i classname="fa-solid fa-arrow-up-right-from-square" />
//                       <span classname="d-none">crypto blogs details</span>
//                     </a>
//                     <a href="https://www.coingabbar.com/en/crypto-blogs-details/the-never-ending-cycle-how-cryptocurrency-whales-make-money" classname="samplelink blue-gradient" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Hindi Link" aria-label="Hindi Link" data-bs-original-title="Hindi Link">
//                       <i classname="fa-solid fa-arrow-up-right-from-square" />
//                       <span classname="d-none">crypto blogs details</span>
//                     </a>
//                   </td>
//                   <td colSpan={2} classname="text-center">
//                     -
//                   </td>
//                   <td classname="text-start">
//                     <label classname="checkbox style-d">
//                       <input type="hidden" classname="form-control quantity int-txt w-100px" id="quantity_crypto_48" defaultValue={1} min={1} />
//                       <input type="hidden" classname="form-control product_name int-txt w-100px" id="product_crypto_48" defaultValue="Listicle Blog
// " />
//                       <input type="hidden" classname="form-control product_price int-txt w-100px" id="price_crypto_48" defaultValue={50} />
//                       <input type="checkbox" onclick="addToCard(this,'crypto_48')" id="crypto_48" data-product-id="crypto_48" />
//                       <span classname="checkbox__checkmark checkbox-blue" />
//                       <span classname="checkbox__body">$50</span>
//                     </label>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>
//                     Listicle Blog
//                     <span classname="small text-muted d-block">(Top 5 Tokens to Buy - weekly)</span>
//                   </td>
//                   <td classname="text-center">
//                     <a href="https://www.coingabbar.com/en/crypto-blogs-details/top-telegram-bots-token-to-buy-now" classname="samplelink blue-gradient" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="English Link" aria-label="English Link" data-bs-original-title="English Link">
//                       <i classname="fa-solid fa-arrow-up-right-from-square" />
//                     </a>
//                     <a href="https://www.coingabbar.com/en/crypto-blogs-details/rollblock-presale-secure-ethereum-gambling-token" classname="samplelink blue-gradient" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Hindi Link" aria-label="Hindi Link" data-bs-original-title="Hindi Link">
//                       <i classname="fa-solid fa-arrow-up-right-from-square" />
//                     </a>
//                   </td>
//                   <td colSpan={2} classname="text-center">
//                     -
//                   </td>
//                   <td classname="text-start">
//                     <label classname="checkbox style-d">
//                       <input type="hidden" classname="form-control quantity int-txt w-100px" id="quantity_crypto_49" defaultValue={1} min={1} />
//                       <input type="hidden" classname="form-control product_name int-txt w-100px" id="product_crypto_49" defaultValue="Listicle Blog" />
//                       <input type="hidden" classname="form-control product_price int-txt w-100px" id="price_crypto_49" defaultValue={50} />
//                       <input type="checkbox" onclick="addToCard(this,'crypto_49')" id="crypto_49" data-product-id="crypto_49" />
//                       <span classname="checkbox__checkmark checkbox-blue" />
//                       <span classname="checkbox__body">$50</span>
//                     </label>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>Live AMA</td>
//                   <td classname="text-center">
//                     <div classname="d-flex justify-content-center align-items-center">
//                       <a href="https://www.binance.com/en/square/profile/coingabbar" classname="samplelink mx-1 bg-bnb align-middle" title="Binance" rel="noreferrer noopener">
//                         <img src="https://www.coingabbar.com/new/images/bnb-icon.svg" alt="Binance" width={15} height={15} />
//                       </a>
//                       <a href="https://x.com/coin_gabbar_" classname="samplelink mx-1 bg-dark" title="Twitter" rel="noreferrer noopener">
//                         <i classname="fa-brands fa-x-twitter" />
//                       </a>
//                       <a href="https://www.youtube.com/@coingabbarofficial" classname="samplelink mx-1 bg-danger" title="YouTube" rel="noreferrer noopener">
//                         <i classname="fa-brands fa-youtube" />
//                       </a>
//                       <a href="https://www.linkedin.com/company/79924225/admin/feed/posts/" classname="samplelink mx-1 linkdin-bg" title="Linkedin" rel="noreferrer noopener">
//                         <i classname="fa-brands fa-linkedin-in" />
//                       </a>
//                     </div>
//                   </td>
//                   <td colSpan={2} classname="text-center">
//                     <a href="https://www.binance.com/en/live/video?roomId=2204915" classname="samplelink blue-gradient" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Sample 1" aria-label="Sample 1" data-bs-original-title="Sample 1">
//                       <i classname="fa-solid fa-link" />
//                     </a>
//                   </td>
//                   <td classname="text-start">
//                     <label classname="checkbox style-d">
//                       <input type="hidden" classname="form-control quantity int-txt w-100px" id="quantity_crypto_50" defaultValue={1} min={1} />
//                       <input type="hidden" classname="form-control product_name int-txt w-100px" id="product_crypto_50" defaultValue="Live AMA" />
//                       <input type="hidden" classname="form-control product_price int-txt w-100px" id="price_crypto_50" defaultValue={100} />
//                       <input type="checkbox" onclick="addToCard(this,'crypto_50')" id="crypto_50" data-product-id="crypto_50" />
//                       <span classname="checkbox__checkmark checkbox-blue" />
//                       <span classname="checkbox__body">$100</span>
//                     </label>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>
//                     Youtube video
//                     <span classname="small text-muted d-block">(Created &amp; Published)</span>
//                   </td>
//                   <td classname="text-center">
//                     <a href="https://www.youtube.com/@coingabbarofficial" classname="samplelink mx-1 bg-danger" title="YouTube" rel="noreferrer noopener">
//                       <i classname="fa-brands fa-youtube" />
//                     </a>
//                   </td>
//                   <td colSpan={2} classname="text-center">
//                     <a href="https://youtu.be/hOke6Lt3yNM?si=xKLnc5VbmrDyXEkW" classname="samplelink blue-gradient" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Sample 1" aria-label="Sample 1" data-bs-original-title="Sample 1">
//                       <i classname="fa-solid fa-link" />
//                     </a>
//                     <a href="https://youtu.be/siIFcimfjA8?si=KuvMxrnYD2JtCEM8" classname="samplelink blue-gradient" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Sample 2" aria-label="Sample 1" data-bs-original-title="Sample 1">
//                       <i classname="fa-solid fa-link" />
//                     </a>
//                   </td>
//                   <td classname="text-start">
//                     <label classname="checkbox style-d">
//                       <input type="hidden" classname="form-control quantity int-txt w-100px" id="quantity_crypto_51" defaultValue={1} min={1} />
//                       <input type="hidden" classname="form-control product_name int-txt w-100px" id="product_crypto_51" defaultValue="Youtube video" />
//                       <input type="hidden" classname="form-control product_price int-txt w-100px" id="price_crypto_51" defaultValue={100} />
//                       <input type="checkbox" onclick="addToCard(this,'crypto_51')" id="crypto_51" data-product-id="crypto_51" />
//                       <span classname="checkbox__checkmark checkbox-blue" />
//                       <span classname="checkbox__body">$100</span>
//                     </label>
//                   </td>
//                 </tr>
//               </tbody>
//               <tfoot>
//                 <tr>
//                   <td>Add ons with Presale / ICO Package</td>
//                   <td classname="fw-semibold">
//                     <div classname="d-flex justify-content-between align-items-center flex-wrap">
//                       On Home Page
//                       <div>
//                         <div classname="samplelink blue-gradient text-white cursor-pointer">
//                           <i classname="fa-solid fa-image" data-bs-toggle="modal" data-bs-target="#banner-Modal" data-img-src="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/ico-homepage-box-banner.webp" />
//                         </div>
//                         <a href="https://www.coingabbar.com" classname="samplelink blue-gradient" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Sample 1" data-bs-original-title="Sample 1">
//                           <i classname="fa-solid fa-link" />
//                           <span classname="d-none">Sample 1</span>
//                         </a>
//                       </div>
//                     </div>
//                     <div classname="d-flex justify-content-between align-items-center flex-wrap">
//                       On ICO Listing Table
//                       <div>
//                         <div classname="samplelink blue-gradient text-white cursor-pointer">
//                           <i classname="fa-solid fa-image" data-bs-toggle="modal" data-bs-target="#banner-Modal" data-img-src="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/ico-box-banner.webp" />
//                         </div>
//                         <a href="https://www.coingabbar.com/en/crypto-latest-ico" classname="samplelink blue-gradient" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Sample 1" data-bs-original-title="Sample 1">
//                           <i classname="fa-solid fa-link" />
//                           <span classname="d-none">crypto latest ico</span>
//                         </a>
//                       </div>
//                     </div>
//                   </td>
//                   <td>
//                     <label classname="checkbox style-d">
//                       <input type="hidden" classname="form-control quantity int-txt w-100px" id="quantity_weekly_7" defaultValue={1} min={1} />
//                       <input type="hidden" classname="form-control product_name int-txt w-100px" id="product_weekly_7" defaultValue="On Home Page" />
//                       <input type="hidden" classname="form-control product_price int-txt w-100px" id="price_weekly_7" defaultValue={200} />
//                       <input type="hidden" classname="form-control image int-txt w-100px" id="image_weekly_7" defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/ico-homepage-box-banner.webp" />
//                       <input type="checkbox" onclick="addToCard(this,'weekly_7')" id="weekly_7" data-product-id="weekly_52" />
//                       <span classname="checkbox__checkmark checkbox-blue" />
//                       <span classname="checkbox__body">$200</span>
//                       <span classname="small ms-1 " data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="7 days">(7 d)</span>
//                     </label>
//                   </td>
//                   <td>
//                     <label classname="checkbox style-d">
//                       <input type="hidden" classname="form-control quantity int-txt w-100px" id="quantity_fortnightly_7" defaultValue={1} min={1} />
//                       <input type="hidden" classname="form-control product_name int-txt w-100px" id="product_fortnightly_7" defaultValue="On Home Page" />
//                       <input type="hidden" classname="form-control product_price int-txt w-100px" id="price_fortnightly_7" defaultValue={350} />
//                       <input type="hidden" classname="form-control image int-txt w-100px" id="image_fortnightly_7" defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/ico-homepage-box-banner.webp" />
//                       <input type="checkbox" onclick="addToCard(this,'fortnightly_7')" id="fortnightly_7" data-product-id="fortnightly_52" />
//                       <span classname="checkbox__checkmark checkbox-blue" />
//                       <span classname="checkbox__body">$350</span>
//                       <span classname="small ms-1 " data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="15 days">(15 d)</span>
//                     </label>
//                   </td>
//                   <td>
//                     <label classname="checkbox style-d">
//                       <input type="hidden" classname="form-control quantity int-txt w-100px" id="quantity_monthly_7" defaultValue={1} min={1} />
//                       <input type="hidden" classname="form-control product_name int-txt w-100px" id="product_monthly_7" defaultValue="On Home Page" />
//                       <input type="hidden" classname="form-control product_price int-txt w-100px" id="price_monthly_7" defaultValue={500} />
//                       <input type="hidden" classname="form-control image int-txt w-100px" id="image_monthly_7" defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/ico-homepage-box-banner.webp" />
//                       <input type="checkbox" onclick="addToCard(this,'monthly_7')" id="monthly_7" classname data-product-id="monthly_52" />
//                       <span classname="checkbox__checkmark checkbox-blue" />
//                       <span classname="checkbox__body">$500</span>
//                       <span classname="small ms-1 " data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="30 days">(30 d)</span>
//                     </label>
//                   </td>
//                 </tr>
//               </tfoot>
//             </table>
//             <div classname="text-center mb-3">
//               <span classname="rounded-3 h5 px-4 py-1 text-white red-gradient">Event Campaign</span>
//             </div>
//             <table classname="table-striped table table-bordered table-responsive d-block d-sm-table border advertisment-tbl mb-5" id="list-item-6">
//               <thead classname="text-center text-wrap red-gradient">
//                 <tr>
//                   <th rowSpan={2}>Event Campaign</th>
//                   <th>Link</th>
//                   <th rowSpan={2}>Sample</th>
//                   <th>Crypto</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td colSpan={4}>
//                     <div classname="d-flex justify-content-between align-items-center">
//                       <span classname="fs-5">Event Campaign
//                         <a href="https://t.me/Event_Gabbar" title="Book Now" classname="advertisment-btn red-gradient rounded-2 small-btn ms-2">
//                           Book Now <i classname="fa-solid fa-paper-plane small ms-2" />
//                         </a>
//                       </span>
//                       <label classname="checkbox style-d">
//                         <input type="hidden" classname="form-control quantity int-txt w-100px" id="quantity_crypto_53" defaultValue={1} min={1} />
//                         <input type="hidden" classname="form-control product_name int-txt w-100px" id="product_crypto_53" defaultValue="Event Campaign" />
//                         <input type="hidden" classname="form-control product_price int-txt w-100px" id="price_crypto_53" defaultValue={250} />
//                         <input type="checkbox" onclick="addToCard(this,'crypto_53')" id="crypto_53" data-product-id="crypto_53" />
//                         <span classname="checkbox__checkmark checkbox-red" />
//                         <span classname="checkbox__body">$250</span>
//                       </label>
//                     </div>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>Featured Listing at top on Event Page</td>
//                   <td classname="text-center">
//                     <a href="https://www.coingabbar.com/en/coin-events-calendar" title="Website Link" classname="samplelink red-gradient">
//                       <i classname="fa-solid fa-arrow-up-right-from-square" />
//                       <span classname="d-none">coin events calendar</span>
//                     </a>
//                   </td>
//                   <td classname="text-center">
//                     <div classname="samplelink red-gradient text-white cursor-pointer">
//                       <i classname="fa-solid fa-image" data-bs-toggle="modal" data-bs-target="#banner-Modal" data-img-src="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/event-featured-listing.webp" />
//                     </div>
//                   </td>
//                   <td classname="text-start">
//                     <label classname="checkbox style-d">
//                       <input type="hidden" classname="form-control quantity int-txt w-100px" id="quantity_crypto_54" defaultValue={1} min={1} />
//                       <input type="hidden" classname="form-control product_name int-txt w-100px" id="product_crypto_54" defaultValue="Featured Listing at top on Event Page" />
//                       <input type="hidden" classname="form-control product_price int-txt w-100px" id="price_crypto_54" defaultValue={50} />
//                       <input type="hidden" classname="form-control image int-txt w-100px" id="image_crypto_54" defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/event-featured-listing.webp" />
//                       <input type="checkbox" onclick="addToCard(this,'crypto_54')" id="crypto_54" data-product-id="crypto_54" />
//                       <span classname="checkbox__checkmark checkbox-red" />
//                       <span classname="checkbox__body">$50</span>
//                     </label>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>Banner on Event Page</td>
//                   <td classname="text-center">
//                     <a href="https://www.coingabbar.com/en/coin-events-calendar" title="Website Link" classname="samplelink red-gradient">
//                       <i classname="fa-solid fa-arrow-up-right-from-square" />
//                     </a>
//                   </td>
//                   <td classname="text-center">
//                     <div classname="samplelink red-gradient text-white cursor-pointer">
//                       <i classname="fa-solid fa-image" data-bs-toggle="modal" data-bs-target="#banner-Modal" data-img-src="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/event-banner.webp" />
//                     </div>
//                   </td>
//                   <td classname="text-start">
//                     <label classname="checkbox style-d">
//                       <input type="hidden" classname="form-control quantity int-txt w-100px" id="quantity_crypto_55" defaultValue={1} min={1} />
//                       <input type="hidden" classname="form-control product_name int-txt w-100px" id="product_crypto_55" defaultValue="Banner on Event Page" />
//                       <input type="hidden" classname="form-control product_price int-txt w-100px" id="price_crypto_55" defaultValue={150} />
//                       <input type="hidden" classname="form-control image int-txt w-100px" id="image_crypto_55" defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/event-banner.webp" />
//                       <input type="checkbox" onclick="addToCard(this,'crypto_55')" id="crypto_55" data-product-id="crypto_55" />
//                       <span classname="checkbox__checkmark checkbox-red" />
//                       <span classname="checkbox__body">$150</span>
//                     </label>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>Mailing to 50k+ Reg. users</td>
//                   <td classname="text-center">
//                     -
//                   </td>
//                   <td classname="text-center">
//                     <div classname="samplelink red-gradient text-white cursor-pointer">
//                       <i classname="fa-solid fa-image" data-bs-toggle="modal" data-bs-target="#banner-Modal" data-img-src="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/email-reg-user-mail.webp" />
//                     </div>
//                   </td>
//                   <td classname="text-start">
//                     <label classname="checkbox style-d">
//                       <input type="hidden" classname="form-control quantity int-txt w-100px" id="quantity_crypto_56" defaultValue={1} min={1} />
//                       <input type="hidden" classname="form-control product_name int-txt w-100px" id="product_crypto_56" defaultValue="Mailing to 50k+ Reg. users" />
//                       <input type="hidden" classname="form-control product_price int-txt w-100px" id="price_crypto_56" defaultValue={50} />
//                       <input type="hidden" classname="form-control image int-txt w-100px" id="image_crypto_56" defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/email-reg-user-mail.webp" />
//                       <input type="checkbox" onclick="addToCard(this,'crypto_56')" id="crypto_56" data-product-id="crypto_56" />
//                       <span classname="checkbox__checkmark checkbox-red" />
//                       <span classname="checkbox__body">$50</span>
//                     </label>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>Sharing on Social Media</td>
//                   <td classname="text-center">
//                     <div classname="d-flex justify-content-center align-items-center">
//                       <a href="https://x.com/coin_gabbar_" classname="samplelink mx-1 bg-dark" title="Twitter" rel="noreferrer noopener">
//                         <i classname="fa-brands fa-x-twitter" />
//                       </a>
//                       <a href="https://t.me/gabbarcommunity" classname="samplelink mx-1 tele-bg" title="Telegram" rel="noreferrer noopener">
//                         <i classname="fa-solid fa-paper-plane small" />
//                       </a>
//                       <a href="https://www.linkedin.com/company/79924225/admin/feed/posts/" classname="samplelink mx-1 linkdin-bg" title="Linkedin" rel="noreferrer noopener">
//                         <i classname="fa-brands fa-linkedin-in" />
//                       </a>
//                       <a href="https://www.instagram.com/coingabbar/" classname="samplelink mx-1 insta-bg" title="Instagram" rel="noreferrer noopener">
//                         <i classname="fa-brands fa-instagram" />
//                       </a>
//                     </div>
//                   </td>
//                   <td classname="text-center">
//                     -
//                   </td>
//                   <td classname="text-start">
//                     <label classname="checkbox style-d">
//                       <input type="hidden" classname="form-control quantity int-txt w-100px" id="quantity_crypto_57" defaultValue={1} min={1} />
//                       <input type="hidden" classname="form-control product_name int-txt w-100px" id="product_crypto_57" defaultValue="Sharing on Social Media" />
//                       <input type="hidden" classname="form-control product_price int-txt w-100px" id="price_crypto_57" defaultValue={50} />
//                       <input type="checkbox" onclick="addToCard(this,'crypto_57')" id="crypto_57" data-product-id="crypto_57" />
//                       <span classname="checkbox__checkmark checkbox-red" />
//                       <span classname="checkbox__body">$50</span>
//                     </label>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>
//                     Press Release
//                     <span classname="small text-muted d-block">(2 Nos, one pre event &amp; one post event)</span>
//                   </td>
//                   <td classname="text-center">
//                     -
//                   </td>
//                   <td classname="text-center">
//                     <a href="https://www.coingabbar.com/en/crypto-press-release" classname="samplelink red-gradient" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Sample 1" data-bs-original-title="Sample 1">
//                       <i classname="fa-solid fa-link" />
//                       <span classname="d-none">crypto press release</span>
//                     </a>
//                   </td>
//                   <td classname="text-start">
//                     <label classname="checkbox style-d">
//                       <input type="hidden" classname="form-control quantity int-txt w-100px" id="quantity_crypto_58" defaultValue={1} min={1} />
//                       <input type="hidden" classname="form-control product_name int-txt w-100px" id="product_crypto_58" defaultValue="Press Release" />
//                       <input type="hidden" classname="form-control product_price int-txt w-100px" id="price_crypto_58" defaultValue={150} />
//                       <input type="checkbox" onclick="addToCard(this,'crypto_58')" id="crypto_58" data-product-id="crypto_58" />
//                       <span classname="checkbox__checkmark checkbox-red" />
//                       <span classname="checkbox__body">$150</span>
//                     </label>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>Live AMA</td>
//                   <td classname="text-center">
//                     <div classname="d-flex justify-content-center align-items-center">
//                       <a href="https://www.binance.com/en/square/profile/coingabbar" classname="samplelink mx-1 bg-bnb align-middle" title="Binance" rel="noreferrer noopener">
//                         <img src="https://www.coingabbar.com/new/images/bnb-icon.svg" alt="Binance" width={15} height={15} />
//                       </a>
//                       <a href="https://x.com/coin_gabbar_" classname="samplelink mx-1 bg-dark" title="Twitter" rel="noreferrer noopener">
//                         <i classname="fa-brands fa-x-twitter" />
//                       </a>
//                       <a href="https://www.youtube.com/@coingabbarofficial" classname="samplelink mx-1 bg-danger" title="YouTube" rel="noreferrer noopener">
//                         <i classname="fa-brands fa-youtube" />
//                       </a>
//                       <a href="https://www.linkedin.com/company/79924225/admin/feed/posts/" classname="samplelink mx-1 linkdin-bg" title="Linkedin" rel="noreferrer noopener">
//                         <i classname="fa-brands fa-linkedin-in" />
//                       </a>
//                     </div>
//                   </td>
//                   <td classname="text-center">
//                     <a href="https://www.binance.com/en/live/video?roomId=2209177" classname="samplelink red-gradient" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Sample 1" aria-label="Sample 1" data-bs-original-title="Sample 1">
//                       <i classname="fa-solid fa-link" />
//                     </a>
//                   </td>
//                   <td classname="text-start">
//                     <label classname="checkbox style-d">
//                       <input type="hidden" classname="form-control quantity int-txt w-100px" id="quantity_crypto_59" defaultValue={1} min={1} />
//                       <input type="hidden" classname="form-control product_name int-txt w-100px" id="product_crypto_59" defaultValue="Live AMA" />
//                       <input type="hidden" classname="form-control product_price int-txt w-100px" id="price_crypto_59" defaultValue={100} />
//                       <input type="checkbox" onclick="addToCard(this,'crypto_59')" id="crypto_59" data-product-id="crypto_59" />
//                       <span classname="checkbox__checkmark checkbox-red" />
//                       <span classname="checkbox__body">$100</span>
//                     </label>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>
//                     Youtube video posting
//                     <span classname="small text-muted d-block">(Video to be shared by Event)</span>
//                   </td>
//                   <td classname="text-center">
//                     <a href="https://www.youtube.com/@coingabbarofficial" classname="samplelink mx-1 bg-danger" title="YouTube" rel="noreferrer noopener">
//                       <i classname="fa-brands fa-youtube" />
//                     </a>
//                   </td>
//                   <td classname="text-center">
//                     <a href="https://youtu.be/hOke6Lt3yNM?si=xKLnc5VbmrDyXEkW" classname="samplelink red-gradient" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Sample 1" aria-label="Sample 1" data-bs-original-title="Sample 1">
//                       <i classname="fa-solid fa-link" />
//                     </a>
//                     <a href="https://youtu.be/siIFcimfjA8?si=KuvMxrnYD2JtCEM8" classname="samplelink red-gradient" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Sample 2" aria-label="Sample 1" data-bs-original-title="Sample 1">
//                       <i classname="fa-solid fa-link" />
//                     </a>
//                   </td>
//                   <td classname="text-start">
//                     <label classname="checkbox style-d">
//                       <input type="hidden" classname="form-control quantity int-txt w-100px" id="quantity_crypto_60" defaultValue={1} min={1} />
//                       <input type="hidden" classname="form-control product_name int-txt w-100px" id="product_crypto_60" defaultValue="Youtube video posting" />
//                       <input type="hidden" classname="form-control product_price int-txt w-100px" id="price_crypto_60" defaultValue={100} />
//                       <input type="checkbox" onclick="addToCard(this,'crypto_60')" id="crypto_60" data-product-id="crypto_60" />
//                       <span classname="checkbox__checkmark checkbox-red" />
//                       <span classname="checkbox__body">$100</span>
//                     </label>
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//             <div classname="text-center mb-3">
//               <span classname="rounded-3 h5 px-4 py-1 text-white sel-gradient">Monthly Content Package</span>
//             </div>
//             <table classname="table-striped table table-bordered table-responsive d-block d-sm-table border advertisment-tbl mb-5" id="list-item-7">
//               <thead classname="text-center text-wrap sel-gradient">
//                 <tr>
//                   <th rowSpan={2}>Monthly Content Package</th>
//                   <th>Link</th>
//                   <th rowSpan={2}>Sample</th>
//                   <th>Crypto</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td colSpan={4}>
//                     <div classname="d-flex justify-content-between align-items-center">
//                       <span classname="fs-5">Monthly Content Package
//                         <a href="https://t.me/Content_coingabbar" title="Book Now" classname="advertisment-btn sel-gradient rounded-2 small-btn ms-2">
//                           Book Now <i classname="fa-solid fa-paper-plane small ms-2" />
//                         </a>
//                       </span>
//                       <label classname="checkbox style-d">
//                         <input type="hidden" classname="form-control quantity int-txt w-100px" id="quantity_crypto_61" defaultValue={1} min={1} />
//                         <input type="hidden" classname="form-control product_name int-txt w-100px" id="product_crypto_61" defaultValue="Monthly Content Package" />
//                         <input type="hidden" classname="form-control product_price int-txt w-100px" id="price_crypto_61" defaultValue={800} />
//                         <input type="checkbox" onclick="addToCard(this,'crypto_61')" id="crypto_61" data-product-id="crypto_61" />
//                         <span classname="checkbox__checkmark checkbox-sel mt-1" />
//                         <span classname="checkbox__body fs-5">$800</span>
//                       </label>
//                     </div>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>
//                     Organic Blog
//                     <span classname="small text-muted d-block">(4 Nos English - Weekly)</span>
//                   </td>
//                   <td classname="text-center">
//                     -
//                   </td>
//                   <td classname="text-center">
//                     <a href="https://www.coingabbar.com/en/crypto-blogs-english" classname="samplelink sel-gradient" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Sample 1" aria-label="Sample 1" data-bs-original-title="Sample 1">
//                       <i classname="fa-solid fa-link" />
//                       <span classname="d-none">crypto blogs english</span>
//                     </a>
//                   </td>
//                   <td classname="text-center">
//                     -
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>
//                     Press Release
//                     <span classname="small text-muted d-block">(2 Nos English - Every Fortnight)</span>
//                   </td>
//                   <td classname="text-center">
//                     -
//                   </td>
//                   <td classname="text-center">
//                     <a href="https://www.coingabbar.com/en/crypto-press-release" classname="samplelink sel-gradient" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Sample 1" aria-label="Sample 1" data-bs-original-title="Sample 1">
//                       <i classname="fa-solid fa-link" />
//                       <span classname="d-none">crypto-press-release</span>
//                     </a>
//                   </td>
//                   <td classname="text-center">
//                     -
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>
//                     Price Prediction for Token
//                     <span classname="small text-muted d-block">(2 Nos - Fortnightly)</span>
//                   </td>
//                   <td classname="text-center">
//                     -
//                   </td>
//                   <td classname="text-center">
//                     <a href="https://www.coingabbar.com/en/price-prediction" classname="samplelink sel-gradient" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Sample 1" aria-label="Sample 1" data-bs-original-title="Sample 1">
//                       <i classname="fa-solid fa-link" />
//                       <span classname="d-none">price-prediction</span>
//                     </a>
//                   </td>
//                   <td classname="text-center">
//                     -
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>Magazine Cover Page in Next edition</td>
//                   <td classname="text-center">
//                     -
//                   </td>
//                   <td classname="text-center">
//                     <a href="https://d3iuzwoiyg9qa8.cloudfront.net/webadmin/storage/public/monthlyNewsletters/July2024/KRKMRiV1jONHC6MeURpoDPIOTlgsNnz5Xrg4qbce.pdf" classname="samplelink sel-gradient" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Sample 1" aria-label="Sample 1" data-bs-original-title="Sample 1">
//                       <i classname="fa-solid fa-link" />
//                     </a>
//                   </td>
//                   <td classname="text-center">
//                     -
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>
//                     Live AMA
//                     <span classname="small text-muted d-block">(1 Nos)</span>
//                   </td>
//                   <td classname="text-center">
//                     <div classname="d-flex justify-content-center align-items-center">
//                       <a href="https://www.binance.com/en/square/profile/coingabbar" classname="samplelink mx-1 bg-bnb align-middle" title="Binance" rel="noreferrer noopener">
//                         <img src="https://www.coingabbar.com/new/images/bnb-icon.svg" alt="Binance" width={15} height={15} />
//                       </a>
//                       <a href="https://x.com/coin_gabbar_" classname="samplelink mx-1 bg-dark" title="Twitter" rel="noreferrer noopener">
//                         <i classname="fa-brands fa-x-twitter" />
//                       </a>
//                       <a href="https://www.youtube.com/@coingabbarofficial" classname="samplelink mx-1 bg-danger" title="YouTube" rel="noreferrer noopener">
//                         <i classname="fa-brands fa-youtube" />
//                       </a>
//                       <a href="https://www.linkedin.com/company/79924225/admin/feed/posts/" classname="samplelink mx-1 linkdin-bg" title="Linkedin" rel="noreferrer noopener">
//                         <i classname="fa-brands fa-linkedin-in" />
//                       </a>
//                     </div>
//                   </td>
//                   <td classname="text-center">
//                     <a href="https://www.binance.com/en/live/video?roomId=2209177" classname="samplelink sel-gradient" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Sample 1" aria-label="Sample 1" data-bs-original-title="Sample 1">
//                       <i classname="fa-solid fa-link" />
//                     </a>
//                   </td>
//                   <td classname="text-center">
//                     -
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>Social Media Post</td>
//                   <td classname="text-center">
//                     <div classname="d-flex justify-content-center align-items-center">
//                       <a href="https://x.com/coin_gabbar_" classname="samplelink mx-1 bg-dark" title="Twitter" rel="noreferrer noopener">
//                         <i classname="fa-brands fa-x-twitter" />
//                       </a>
//                       <a href="https://t.me/gabbarcommunity" classname="samplelink mx-1 tele-bg" title="Telegram" rel="noreferrer noopener">
//                         <i classname="fa-solid fa-paper-plane small" />
//                       </a>
//                       <a href="https://www.linkedin.com/company/79924225/admin/feed/posts/" classname="samplelink mx-1 linkdin-bg" title="Linkedin" rel="noreferrer noopener">
//                         <i classname="fa-brands fa-linkedin-in" />
//                       </a>
//                       <a href="https://www.instagram.com/coingabbar/" classname="samplelink mx-1 insta-bg" title="Instagram" rel="noreferrer noopener">
//                         <i classname="fa-brands fa-instagram" />
//                       </a>
//                     </div>
//                   </td>
//                   <td classname="text-center">
//                     -
//                   </td>
//                   <td classname="text-center">
//                     -
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>Email to Users</td>
//                   <td classname="text-center">
//                     -
//                   </td>
//                   <td classname="text-center">
//                     <div classname="samplelink sel-gradient text-white">
//                       <i classname="fa-solid fa-image" data-bs-toggle="modal" data-bs-target="#banner-Modal" data-img-src="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/email-reg-user-mail.webp" />
//                     </div>
//                   </td>
//                   <td classname="text-center">
//                     -
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>
//                     Listicle Blog
//                     <span classname="small text-muted d-block">(Top 5 Tokens to Buy - weekly)</span>
//                   </td>
//                   <td classname="text-center">
//                     <a href="https://www.coingabbar.com/en/crypto-blogs-details/explore-hidden-gems-with-top-5-crypto-tokens" classname="samplelink sel-gradient" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="English Link" aria-label="English Link" data-bs-original-title="English Link">
//                       <i classname="fa-solid fa-arrow-up-right-from-square" />
//                       <span classname="d-none">crypto-blogs-details</span>
//                     </a>
//                     <a href="https://www.coingabbar.com/en/crypto-blogs-details/top-telegram-bots-token-to-buy-now" classname="samplelink sel-gradient" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Hindi Link" aria-label="Hindi Link" data-bs-original-title="Hindi Link">
//                       <i classname="fa-solid fa-arrow-up-right-from-square" />
//                       <span classname="d-none">crypto-blogs-details</span>
//                     </a>
//                   </td>
//                   <td classname="text-center">
//                     -
//                   </td>
//                   <td classname="text-center">
//                     -
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>
//                     Youtube video
//                     <span classname="small text-muted d-block">(Created &amp; Published)</span>
//                   </td>
//                   <td classname="text-center">
//                     <a href="https://www.youtube.com/@coingabbarofficial" classname="samplelink mx-1 bg-danger" title="YouTube" rel="noreferrer noopener">
//                       <i classname="fa-brands fa-youtube" />
//                     </a>
//                   </td>
//                   <td classname="text-center">
//                     <a href="https://youtu.be/hOke6Lt3yNM?si=xKLnc5VbmrDyXEkW" classname="samplelink sel-gradient" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Sample 1" aria-label="Sample 1" data-bs-original-title="Sample 1">
//                       <i classname="fa-solid fa-link" />
//                     </a>
//                     <a href="https://youtu.be/siIFcimfjA8?si=KuvMxrnYD2JtCEM8" classname="samplelink sel-gradient" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Sample 1" aria-label="Sample 1" data-bs-original-title="Sample 1">
//                       <i classname="fa-solid fa-link" />
//                     </a>
//                   </td>
//                   <td classname="text-center">
//                     -
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//             <div classname="text-center mb-3">
//               <span classname="rounded-3 h5 px-4 py-1 text-white purple-gradient">Monthly Social Media Management</span>
//             </div>
//             <table classname="table-striped table table-bordered table-responsive d-block d-sm-table border advertisment-tbl mb-5" id="list-item-8">
//               <thead classname="text-center text-wrap purple-gradient">
//                 <tr>
//                   <th rowSpan={2}>Monthly Social Media Management</th>
//                   <th>Link</th>
//                   <th rowSpan={2}>Sample</th>
//                   <th>Crypto</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td colSpan={4}>
//                     <div classname="d-flex justify-content-between align-items-center">
//                       <span classname="fs-5">Social Media Campaign
//                         <span title="Book Now" classname="advertisment-btn purple-gradient rounded-2 small-btn ms-2">
//                           Book Now <i classname="fa-solid fa-paper-plane small ms-2" />
//                         </span>
//                       </span>
//                       <label classname="d-flex align-items-center my-1 checkbox style-d">
//                         <input type="hidden" classname="form-control quantity int-txt w-100px" id="quantity_crypto_71" defaultValue={1} min={1} />
//                         <input type="hidden" classname="form-control product_name int-txt w-100px" id="product_crypto_71" defaultValue="Social Media Campaign" />
//                         <input type="hidden" classname="form-control product_price int-txt w-100px" id="price_crypto_71" defaultValue={1000} />
//                         <input type="checkbox" onclick="addToCard(this,'crypto_61')" id="crypto_61" data-product-id="crypto_71" />
//                         <span classname="checkbox__checkmark checkbox-purple mt-1 ms-2" />
//                         <span classname="checkbox__body fs-5">$1000</span>
//                       </label>
//                     </div>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>
//                     Daily 1 Post
//                     <span classname="small text-muted d-block">(Content, Creation, Posting for user engagement)</span>
//                   </td>
//                   <td classname="text-center">
//                     -
//                   </td>
//                   <td classname="text-center">
//                     <span classname="samplelink purple-gradient" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Sample 1" aria-label="Sample 1" data-bs-original-title="Sample 1">
//                       <i classname="fa-solid fa-link" />
//                     </span>
//                   </td>
//                   <td classname="text-center">
//                     -
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>
//                     Daily 1 Post
//                     <span classname="small text-muted d-block">(Content, Creation, Posting regarding Project)</span>
//                   </td>
//                   <td classname="text-center">
//                     -
//                   </td>
//                   <td classname="text-center">
//                     <span classname="samplelink purple-gradient" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Sample 1" aria-label="Sample 1" data-bs-original-title="Sample 1">
//                       <i classname="fa-solid fa-link" />
//                     </span>
//                   </td>
//                   <td classname="text-center">
//                     -
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//             <div classname="text-center">
//               <a href="https://www.coingabbar.com/en/book-crypto-web3-blockchain-marketing-campaign-with-coingabbar-packages-effective-promotion" title="View Cart" classname="janurayblue-btn">
//                 <i classname="fa-solid fa-cart-shopping me-2" />
//                 View Cart &amp; Proceed For Payment </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>
//     </>
//   )
// }

// export default Advertise


"use client"
import React from 'react'

function Advertise() {
  return (
    <>
  {/*?php include_once('include/header') ?*/}
  <style
    type="text/css"
    dangerouslySetInnerHTML={{
      __html:
        '\n\t.vertical-tab .nav {\n    padding-left: 0;\n    margin-bottom: 0;\n    list-style: none;\n}\n\n.vertical-tab .nav-tabs {\n    border-bottom: 1px solid #ddd;\n}\n\n.vertical-tab .nav-tabs {\n    border: none;\n    vertical-align: top;\n    display: table-cell;\n}\n\n.vertical-tab .nav:before {\n    display: table;\n    content: " ";\n}\n\n.vertical-tab {\n    width: 100%;\n    float: none;\n    margin-bottom: 10px;\n}\n\n.vertical-tab .nav-tabs > .active > a, .vertical-tab .nav-tabs > .active > a:focus, .vertical-tab .nav-tabs > .active > a:hover {\n    color: #555;\n    cursor: default;\n    background-color: #fff;\n    border: 1px solid #ddd;\n    border-bottom-color: transparent;\n}\n\n.vertical-tab .nav-tabs a {\n    background: #fff;\n    font-size: 16px;\n    font-weight: 700;\n    letter-spacing: 1px;\n    text-align: center;\n    text-transform: uppercase;\n    text-decoration: none;\n    padding: 12px 26px;\n    margin-bottom: 10px;\n    border: 1px solid #aaa;\n    border-radius: 0;\n    overflow: hidden;\n    position: relative;\n    z-index: 1;\n    transition: all 0.3s ease 0.3s;\n}\n\n\n.vertical-tab .nav-tabs a.active {\n    color: #fff;\n    background: #222;\n    border: none;\n}\n\n.vertical-tab .nav-tabs.active a:hover, .vertical-tab .nav-tabs a.active {\n      color: #fff;\n    background: linear-gradient(115deg, #eef6ff, #cee6ff) !important;\n    border-bottom: 5px solid #ffd448}\n\n.vertical-tab .nav-tabs a:before, .vertical-tab .nav-tabs a:after {\n      background: linear-gradient(115deg, #eef6ff, #cee6ff) !important;\n    right: 0px;\n    transition: width 0.5s ease;\n    height: 150%;\n    top: -25%;\n    right: -2px;\n    width: 0px;\n    z-index: -1;\n    border-right: 1px solid rgba(255, 255, 255, 0.8117647059);\n    border-left: 1px solid rgba(255, 255, 255, 0.8117647059);\n    content: "";\n    position: absolute;\n    display: block;\n}\n\n.vertical-tab .nav-tabs a.active:before{\n       background: linear-gradient(0deg, #0c2e4f, #234061) !important;\n    width: 100%;\n    z-index: -2;\n    left: 0px;\n    transition: width 0.5s ease;\n    height: 150%;\n    bottom: -25%;\n    content: "";\n    position: absolute;\n    display: block;\n}\n.vertical-tab .nav-tabs a.active:before {\n    background: #007CFB;\n}\n.vertical-tab .nav-tabs a:after {\n    background: #f7b731;\n}\n\n.vertical-tab .nav-tabs a.active:after, .vertical-tab .nav-tabs a:hover:after {\n    opacity: 1;\n    clip-path: polygon(95% 85%, 100% 0, 100% 100%, 0% 100%);\n}\n\n.advertisment-tbl {\n    vertical-align: middle;\n    border: 1px solid #ddd;\n}\n\n.advertisment-tbl th {\n    color: var(--bs-dark);\n    padding: 12px 10px;\n    text-align: center;\n    background: var(--bs-light);\n    white-space: nowrap;\n}\n\n.advertisment-tbl tbody tr:hover td {\n    background: var(--bs-light);\n}\n\n.advertisment-tbl tbody td {\n    border: 1px solid #ddd;\n}\n\n.advertisment-tbl tbody tr td:first-child {\n    font-weight: 600;\n}\n\n.advertisment-btn {\n    color: #fff;\n    font-size: 20px;\n    font-weight: 500;\n    padding: 4px 24px;\n    display: inline-block;\n    border: 0;\n    border-radius: 10px;\n    transition: all 0.3s ease;\n    text-decoration: none;\n}\n\n.advertisment-btn:hover {\n    text-shadow: 4px 4px 1px rgba(0, 0, 0, 0.2);\n    box-shadow: 0 4px 0 rgba(0, 0, 0, 0.15);\n}\n\n.samplelink {\n    width: 24px;\n    height: 24px;\n    color: #fff;\n    font-size: 12px;\n    margin: 2px;\n    display: inline-flex !important;\n    justify-content: center;\n    align-items: center;\n    text-decoration: none;\n    border-radius: 50%;\n}\n\n.bg-bnb {\n    background: #f0b90b;\n}\n\n.bg-gmail {\n    background: #4285f4;\n}\n\n.orange-gradient {\n    background: linear-gradient(0deg, #0a2847, #1a3e61) !important\n}\n\n.green-gradient {\n    background: linear-gradient(0deg, #0a2847, #1a3e61) !important\n}\n\n.info-gradient {\n background: linear-gradient(0deg, #0a2847, #1a3e61) !important\n}\n\n.blue-gradient {\n   background: linear-gradient(0deg, #0a2847, #1a3e61) !important\n}\n\n.yellow-gradient {\n    background: linear-gradient(0deg, #0a2847, #1a3e61) !important\n}\n\n.red-gradient {\n   background: linear-gradient(0deg, #0a2847, #1a3e61) !important\n}\n\n.sel-gradient {\n background: linear-gradient(0deg, #0a2847, #1a3e61) !important\n}\n\n.purple-gradient {\n   background: linear-gradient(0deg, #0a2847, #1a3e61) !important\n}\n\n.social-btn {\n    display: flex;\n    align-items: center;\n    width: 270px;\n    margin: 20px 20px;\n    font-weight: 600;\n    color: #f5f8fa;\n    text-decoration: none;\n    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.5);\n    border-radius: 5px;\n    padding: 15px 20px;\n}\n\n.social-btn:active {\n    transform: translateY(10px);\n    box-shadow: none;\n}\n\n.social-btn-telegram {\n    background: #0088cc;\n    box-shadow: 0 5px 0 #0c577c;\n}\n\n.social-btn-email {\n    background: #4285f4;\n    box-shadow: 0 5px 0 #2b67c9;\n}\n\n.advertisment-tbl thead th {\n    font-size: 15px;\n    font-weight: 600;\n    padding: 12px 8px;\n    color: var(--bs-white);\n    vertical-align: middle;\n    background: transparent;\n    border: 1px solid #ddd;\n}\n\n.advertisment-tbl tfoot tr td {\n    padding: 35px 8px;\n    font-weight: 600;\n}\n/**/\n.maintabsbg{\n\tposition: relative;\n}\n.rotate-center {\n    animation: rotate-center 15s linear infinite;\n}\n\n.ellipse-rotate-success {\n    width: 419.259px;\n    height: 842.878px;\n    border-radius: 842.878px;\n    opacity: 0.15;\n    background: #092442;\n    filter: blur(150px);\n    top: -3%;\n    left: 10%;\n}\n.rotate-center-rev {\n    animation: rotate-center 15s linear infinite;\n}\n\n.ellipse-rotate-primary {\n    width: 419.259px;\n    height: 842.878px;\n    border-radius: 842.878px;\n    opacity: 0.15;\n    background: #6190b5;\n    filter: blur(100px);\n    top: -5%;\n    right: 10%;\n}\n@-webkit-keyframes rotate-center {\n    0% {\n        -webkit-transform: rotate(0);\n        transform: rotate(0);\n    }\n\n    100% {\n        -webkit-transform: rotate(360deg);\n        transform: rotate(360deg);\n    }\n}\n\n@keyframes rotate-center {\n    0% {\n        -webkit-transform: rotate(0);\n        transform: rotate(0);\n    }\n\n    100% {\n        -webkit-transform: rotate(360deg);\n        transform: rotate(360deg);\n    }\n}\n.fix {\n    overflow: hidden;\n}\n.sidebar-sticky {\n    position: sticky;\n    top: 20px;\n    z-index: 10;\n}\n'
    }}
  />
  <section className="brdcrumb">
    <div className="container">
      <ul className="mb-0">
        <li>
          <a href="/" title="Home">
            Home
          </a>
        </li>
        <li>Advertise</li>
      </ul>
    </div>
  </section>
  <section className="maintabsbg p-4 ">
    <div className="container">
      <div className="rotate-center ellipse-rotate-success position-fixed z-0" />
      <div className="rotate-center-rev ellipse-rotate-primary position-fixed z-0" />
      <div className="row justify-content-center">
        <div className="col-xl-9 col-lg-10 text-center">
          <h1 className="h4 fw-bold">Gabbarx Advertising Options</h1>
          <p className="text-muted">
            Explore our diverse advertising services designed to enhance your
            reach and engagement within the crypto community. Below are the
            available options along with their pricing details:
          </p>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-xl-3 col-lg-4 pb-4">
          <div
            id="list-example"
            className="list-group vertical-tab sidebar-sticky"
          >
            <div
              className="nav nav-tabs d-flex justify-content-center flex-wrap"
              role="tablist"
            >
              <a
                href="#list-item-1"
                className="list-group-item list-group-item-action"
              >
                Content Packages
              </a>
              <a
                href="#list-item-2"
                className="list-group-item list-group-item-action"
              >
                Banner Ads
              </a>
              <a
                href="#list-item-3"
                className="list-group-item list-group-item-action"
              >
                Add on Campaigns
              </a>
              <a
                href="#list-item-4"
                className="list-group-item list-group-item-action"
              >
                Airdrop Marketing
              </a>
              <a
                href="#list-item-5"
                className="list-group-item list-group-item-action"
              >
                Presale / ICO Marketing
              </a>
              <a
                href="#list-item-6"
                className="list-group-item list-group-item-action"
              >
                Event Campaign
              </a>
              <a
                href="#list-item-7"
                className="list-group-item list-group-item-action"
              >
                Monthly Content Package
              </a>
              <a
                href="#list-item-8"
                className="list-group-item list-group-item-action"
              >
                Monthly Social Media Management
              </a>
            </div>
          </div>
        </div>
        <div className="col-xl-9 col-lg-8 pb-4">
          <div
            data-bs-spy="scroll"
            data-bs-target="#list-example"
            data-bs-smooth-scroll="true"
            className="scrollspy-example"
          >
            <div className="text-center mb-4">
              <span className="rounded-3 h5 px-4 py-1 text-white orange-gradient">
                Content Packages
              </span>
            </div>
            <table
              className="table-striped table table-bordered table-responsive d-block d-xxl-table border advertisment-tbl mb-5"
              id="list-item-1"
            >
              <thead className="text-center text-wrap orange-gradient">
                <tr>
                  <th rowSpan={2}>Gabbarx Content Packages</th>
                  <th rowSpan={2}>Sample Link</th>
                  <th rowSpan={2}>Google Indexed</th>
                  <th rowSpan={2}>
                    <span
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-title="Turnaround time"
                    >
                      TAT (Days)
                    </span>
                  </th>
                  <th rowSpan={2}>
                    <span
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-title="Do Follows"
                    >
                      Backlinks
                    </span>
                  </th>
                  <th>Crypto</th>
                  <th>Gambling</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    Crypto Organic Blog
                    <span className="small text-muted d-block">
                      (Including Project Review &amp; Interview)
                    </span>
                  </td>
                  <td className="text-center">
                    <div className="d-flex justify-content-center align-items-center">
                      <a
                        href="https://www.binance.com/en/square/profile/coingabbar"
                        className="samplelink bg-bnb align-middle mx-1"
                        rel="noreferrer noopener"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-bs-title="Coingabbar Binance"
                        aria-label="Binance"
                        data-bs-original-title="Binance"
                      >
                        <img
                          src="https://www.coingabbar.com/new/images/bnb-icon.svg"
                          alt="Binance"
                          width={15}
                          height={15}
                        />
                      </a>
                      <a
                        href="https://coinmarketcap.com/community/profile/Coin_Gabbar/"
                        className="samplelink align-middle mx-1"
                        title="CMC"
                        rel="noreferrer noopener"
                      >
                        <img
                          src="https://www.coingabbar.com/new/images/coinmarketcap.svg"
                          className="rounded-circle"
                          alt="CMC"
                          width={24}
                          height={24}
                        />
                      </a>
                      <a
                        href="https://www.coingabbar.com/en/crypto-blogs-english"
                        className="samplelink orange-gradient mx-1"
                        title="Website Link"
                      >
                        <i className="fa-solid fa-arrow-up-right-from-square" />
                        <span className="d-none">crypto blogs english</span>
                      </a>
                      <a
                        href="https://docs.google.com/spreadsheets/d/1W-tHIZal4Gv5slFqI_GmsGRKvsi7wK9UQNCd93_YG2I/edit?gid=0#gid=0"
                        className="samplelink orange-gradient mx-1"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-bs-title="30+ Websites"
                        aria-label="Sheet"
                        data-bs-original-title="Sheet"
                      >
                        <i className="fa-solid fa-sheet-plastic" />
                      </a>
                    </div>
                  </td>
                  <td className="text-center">
                    <i className="fa-solid fa-circle-check mx-1 fs-4 align-middle text-success" />
                  </td>
                  <td className="text-center">1</td>
                  <td className="text-center">2</td>
                  <td className="text-start">
                    <label className="checkbox style-d">
                      <input
                        type="hidden"
                        className="form-control quantity int-txt w-100px"
                        id="quantity_crypto_1"
                        defaultValue={1}
                        min={1}
                      />
                      <input
                        type="hidden"
                        className="form-control product_name int-txt w-100px"
                        id="product_crypto_1"
                        defaultValue="Crypto Organic Blog"
                      />
                      <input
                        type="hidden"
                        className="form-control product_price int-txt w-100px"
                        id="price_crypto_1"
                        defaultValue={250}
                      />
                      <input
                        type="checkbox"
                        onclick="addToCard(this,'crypto_1')"
                        id="crypto_1"
                        data-product-id="crypto_1"
                      />
                      <span className="checkbox__checkmark checkbox-orange" />
                      <span className="checkbox__body">$250</span>
                    </label>
                  </td>
                  <td className="text-start">
                    <label className="checkbox style-d">
                      <input
                        type="hidden"
                        className="form-control quantity int-txt w-100px"
                        id="quantity_gambling_1"
                        defaultValue={1}
                        min={1}
                      />
                      <input
                        type="hidden"
                        className="form-control product_name int-txt w-100px"
                        id="product_gambling_1"
                        defaultValue="Crypto Organic Blog"
                      />
                      <input
                        type="hidden"
                        className="form-control product_price int-txt w-100px"
                        id="price_gambling_1"
                        defaultValue={300}
                      />
                      <input
                        type="checkbox"
                        onclick="addToCard(this,'gambling_1')"
                        id="gambling_1"
                        data-product-id="gambling_1"
                      />
                      <span className="checkbox__checkmark checkbox-orange" />
                      <span className="checkbox__body">$300</span>
                    </label>
                  </td>
                </tr>
                <tr>
                  <td>
                    Crypto Organic News
                    <span className="small text-muted d-block">
                      (Written by our team)
                    </span>
                  </td>
                  <td className="text-center">
                    <div className="d-flex justify-content-center align-items-center">
                      <a
                        href="https://www.binance.com/en/square/profile/coingabbar"
                        className="samplelink bg-bnb align-middle mx-1"
                        rel="noreferrer noopener"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-bs-title="Coingabbar Binance"
                        aria-label="Binance"
                        data-bs-original-title="Binance"
                      >
                        <img
                          src="https://www.coingabbar.com/new/images/bnb-icon.svg"
                          alt="Binance"
                          width={15}
                          height={15}
                        />
                      </a>
                      <a
                        href="https://coinmarketcap.com/community/profile/Coin_Gabbar/"
                        className="samplelink align-middle mx-1"
                        title="CMC"
                        rel="noreferrer noopener"
                      >
                        <img
                          src="https://www.coingabbar.com/new/images/coinmarketcap.svg"
                          className="rounded-circle"
                          alt="CMC"
                          width={24}
                          height={24}
                        />
                      </a>
                      <a
                        href="https://www.coingabbar.com/en/crypto-news-english"
                        className="samplelink orange-gradient mx-1"
                        title="Website Link"
                      >
                        <i className="fa-solid fa-arrow-up-right-from-square" />
                        <span className="d-none">crypto news english</span>
                      </a>
                      <a
                        href="https://docs.google.com/spreadsheets/d/1W-tHIZal4Gv5slFqI_GmsGRKvsi7wK9UQNCd93_YG2I/edit?gid=0#gid=0"
                        className="samplelink orange-gradient mx-1"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-bs-title="30+ Websites"
                        aria-label="Sheet"
                        data-bs-original-title="Sheet"
                      >
                        <i className="fa-solid fa-sheet-plastic" />
                      </a>
                    </div>
                  </td>
                  <td className="text-center">
                    <i className="fa-solid fa-circle-check mx-1 fs-4 align-middle text-success" />
                  </td>
                  <td className="text-center">1</td>
                  <td className="text-center">2</td>
                  <td className="text-start">
                    <label className="checkbox style-d">
                      <input
                        type="hidden"
                        className="form-control quantity int-txt w-100px"
                        id="quantity_crypto_2"
                        defaultValue={1}
                        min={1}
                      />
                      <input
                        type="hidden"
                        className="form-control product_name int-txt w-100px"
                        id="product_crypto_2"
                        defaultValue="Crypto Organic News"
                      />
                      <input
                        type="hidden"
                        className="form-control product_price int-txt w-100px"
                        id="price_crypto_2"
                        defaultValue={250}
                      />
                      <input
                        type="checkbox"
                        onclick="addToCard(this,'crypto_2')"
                        id="crypto_2"
                        data-product-id="crypto_2"
                      />
                      <span className="checkbox__checkmark checkbox-orange" />
                      <span className="checkbox__body">$250</span>
                    </label>
                  </td>
                  <td className="text-start">
                    <label className="checkbox style-d">
                      <input
                        type="hidden"
                        className="form-control quantity int-txt w-100px"
                        id="quantity_gambling_2"
                        defaultValue={1}
                        min={1}
                      />
                      <input
                        type="hidden"
                        className="form-control product_name int-txt w-100px"
                        id="product_gambling_2"
                        defaultValue="Crypto Organic News"
                      />
                      <input
                        type="hidden"
                        className="form-control product_price int-txt w-100px"
                        id="price_gambling_2"
                        defaultValue={300}
                      />
                      <input
                        type="checkbox"
                        onclick="addToCard(this,'gambling_2')"
                        id="gambling_2"
                        data-product-id="gambling_2"
                      />
                      <span className="checkbox__checkmark checkbox-orange" />
                      <span className="checkbox__body">$300</span>
                    </label>
                  </td>
                </tr>
                <tr>
                  <td>
                    Price Prediction
                    <span className="small text-muted d-block">
                      (Posted on CMC &amp; Binance)
                    </span>
                  </td>
                  <td className="text-center">
                    <div className="d-flex justify-content-center align-items-center">
                      <a
                        href="https://www.binance.me/en/square/profile/coingabbar_analysis"
                        className="samplelink bg-bnb align-middle mx-1"
                        rel="noreferrer noopener"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-bs-title="Coingabbar Analytics"
                        aria-label="Binance"
                        data-bs-original-title="Binance"
                      >
                        <img
                          src="https://www.coingabbar.com/new/images/bnb-icon.svg"
                          alt="Binance"
                          width={15}
                          height={15}
                        />
                      </a>
                      <a
                        href="https://coinmarketcap.com/community/profile/Coin_Gabbar/"
                        className="samplelink align-middle mx-1"
                        title="CMC"
                        rel="noreferrer noopener"
                      >
                        <img
                          src="https://www.coingabbar.com/new/images/coinmarketcap.svg"
                          className="rounded-circle"
                          alt="CMC"
                          width={24}
                          height={24}
                        />
                      </a>
                      <a
                        href="https://www.coingabbar.com/en/price-prediction"
                        className="samplelink orange-gradient mx-1"
                        title="Website Link"
                      >
                        <i className="fa-solid fa-arrow-up-right-from-square" />
                        <span className="d-none">price prediction</span>
                      </a>
                      <a
                        href="https://docs.google.com/spreadsheets/d/1W-tHIZal4Gv5slFqI_GmsGRKvsi7wK9UQNCd93_YG2I/edit?gid=0#gid=0"
                        className="samplelink orange-gradient mx-1"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-bs-title="30+ Websites"
                        aria-label="Sheet"
                        data-bs-original-title="Sheet"
                      >
                        <i className="fa-solid fa-sheet-plastic" />
                      </a>
                    </div>
                  </td>
                  <td className="text-center">
                    <i className="fa-solid fa-circle-check mx-1 fs-4 align-middle text-success" />
                  </td>
                  <td className="text-center">1</td>
                  <td className="text-center">2</td>
                  <td className="text-start">
                    <label className="checkbox style-d">
                      <input
                        type="hidden"
                        className="form-control quantity int-txt w-100px"
                        id="quantity_crypto_3"
                        defaultValue={1}
                        min={1}
                      />
                      <input
                        type="hidden"
                        className="form-control product_name int-txt w-100px"
                        id="product_crypto_3"
                        defaultValue="Price Prediction"
                      />
                      <input
                        type="hidden"
                        className="form-control product_price int-txt w-100px"
                        id="price_crypto_3"
                        defaultValue={200}
                      />
                      <input
                        type="checkbox"
                        onclick="addToCard(this,'crypto_3')"
                        id="crypto_3"
                        data-product-id="crypto_3"
                      />
                      <span className="checkbox__checkmark checkbox-orange" />
                      <span className="checkbox__body">$200</span>
                    </label>
                  </td>
                  <td className="text-center">NA</td>
                </tr>
                <tr>
                  <td>
                    Listicle Blog
                    <span className="small text-muted d-block">
                      (Top Airdrops, Presale, Token to buy)
                    </span>
                  </td>
                  <td className="text-center">
                    <div className="d-flex justify-content-center align-items-center">
                      <a
                        href="https://www.binance.com/en/square/profile/coingabbar"
                        className="samplelink bg-bnb align-middle mx-1"
                        rel="noreferrer noopener"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-bs-title="Coingabbar Binance"
                        aria-label="Binance"
                        data-bs-original-title="Binance"
                      >
                        <img
                          src="https://www.coingabbar.com/new/images/bnb-icon.svg"
                          alt="Binance"
                          width={15}
                          height={15}
                        />
                      </a>
                      <a
                        href="https://coinmarketcap.com/community/profile/Coin_Gabbar/"
                        className="samplelink align-middle mx-1"
                        title="CMC"
                        rel="noreferrer noopener"
                      >
                        <img
                          src="https://www.coingabbar.com/new/images/coinmarketcap.svg"
                          className="rounded-circle"
                          alt="CMC"
                          width={24}
                          height={24}
                        />
                      </a>
                      <a
                        href="https://www.coingabbar.com/en/tag/best-crypto-presale"
                        className="samplelink orange-gradient mx-1"
                        title="Website Link"
                      >
                        <i className="fa-solid fa-arrow-up-right-from-square" />
                        <span className="d-none">best-crypto-presale</span>
                      </a>
                      <a
                        href="https://docs.google.com/spreadsheets/d/1W-tHIZal4Gv5slFqI_GmsGRKvsi7wK9UQNCd93_YG2I/edit?gid=0#gid=0"
                        className="samplelink orange-gradient mx-1"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-bs-title="30+ Websites"
                        aria-label="Sheet"
                        data-bs-original-title="Sheet"
                      >
                        <i className="fa-solid fa-sheet-plastic" />
                      </a>
                    </div>
                  </td>
                  <td className="text-center">
                    <i className="fa-solid fa-circle-check mx-1 fs-4 align-middle text-success" />
                  </td>
                  <td className="text-center">1</td>
                  <td className="text-center">2</td>
                  <td className="text-start">
                    <label className="checkbox style-d">
                      <input
                        type="hidden"
                        className="form-control quantity int-txt w-100px"
                        id="quantity_crypto_4"
                        defaultValue={1}
                        min={1}
                      />
                      <input
                        type="hidden"
                        className="form-control product_name int-txt w-100px"
                        id="product_crypto_4"
                        defaultValue="Listicle Blog"
                      />
                      <input
                        type="hidden"
                        className="form-control product_price int-txt w-100px"
                        id="price_crypto_4"
                        defaultValue={50}
                      />
                      <input
                        type="checkbox"
                        onclick="addToCard(this,'crypto_4')"
                        id="crypto_4"
                        data-product-id="crypto_4"
                      />
                      <span className="checkbox__checkmark checkbox-orange" />
                      <span className="checkbox__body">$50</span>
                    </label>
                  </td>
                  {/* 
 <td class="text-center">
    <span class="checkbox__body">$100</span>
 </td> */}
                  <td className="text-start">
                    <label className="checkbox style-d">
                      <input
                        type="hidden"
                        className="form-control quantity int-txt w-100px"
                        id="quantity_crypto_4"
                        defaultValue={1}
                        min={1}
                      />
                      <input
                        type="hidden"
                        className="form-control product_name int-txt w-100px"
                        id="product_crypto_4"
                        defaultValue="Listicle Blog"
                      />
                      <input
                        type="hidden"
                        className="form-control product_price int-txt w-100px"
                        id="price_crypto_4"
                        defaultValue={100}
                      />
                      <input
                        type="checkbox"
                        onclick="addToCard(this,'crypto_4')"
                        id="crypto_4"
                        data-product-id="crypto_4"
                      />
                      <span className="checkbox__checkmark checkbox-orange" />
                      <span className="checkbox__body">$100</span>
                    </label>
                  </td>
                </tr>
                <tr>
                  <td>Crypto Press Release</td>
                  <td className="text-center">
                    <a
                      href="https://www.coingabbar.com/en/crypto-press-release"
                      title="Website Link"
                      className="samplelink orange-gradient"
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square" />
                      <span className="d-none">crypto press release</span>
                    </a>
                  </td>
                  <td className="text-center">
                    <i className="fa-solid fa-circle-check mx-1 fs-4 align-middle text-success" />
                  </td>
                  <td className="text-center">1</td>
                  <td className="text-center">2</td>
                  <td className="text-start">
                    <label className="checkbox style-d">
                      <input
                        type="hidden"
                        className="form-control quantity int-txt w-100px"
                        id="quantity_crypto_5"
                        defaultValue={1}
                        min={1}
                      />
                      <input
                        type="hidden"
                        className="form-control product_name int-txt w-100px"
                        id="product_crypto_5"
                        defaultValue="Crypto Press Release"
                      />
                      <input
                        type="hidden"
                        className="form-control product_price int-txt w-100px"
                        id="price_crypto_5"
                        defaultValue={150}
                      />
                      <input
                        type="checkbox"
                        onclick="addToCard(this,'crypto_5')"
                        id="crypto_5"
                        data-product-id="crypto_5"
                      />
                      <span className="checkbox__checkmark checkbox-orange" />
                      <span className="checkbox__body">$150</span>
                    </label>
                  </td>
                  <td className="text-start">
                    <label className="checkbox style-d">
                      <input
                        type="hidden"
                        className="form-control quantity int-txt w-100px"
                        id="quantity_gambling_5"
                        defaultValue={1}
                        min={1}
                      />
                      <input
                        type="hidden"
                        className="form-control product_name int-txt w-100px"
                        id="product_gambling_5"
                        defaultValue="Crypto Press Release"
                      />
                      <input
                        type="hidden"
                        className="form-control product_price int-txt w-100px"
                        id="price_gambling_5"
                        defaultValue={200}
                      />
                      <input
                        type="checkbox"
                        onclick="addToCard(this,'gambling_5')"
                        id="gambling_5"
                        data-product-id="gambling_5"
                      />
                      <span className="checkbox__checkmark checkbox-orange" />
                      <span className="checkbox__body">$200</span>
                    </label>
                  </td>
                </tr>
                <tr>
                  <td>Sponsored Post</td>
                  <td className="text-center">
                    <a
                      href="https://www.coingabbar.com/en/crypto-sponsored"
                      title="Website Link"
                      className="samplelink orange-gradient"
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square" />
                      <span className="d-none">crypto sponsored</span>
                    </a>
                  </td>
                  <td className="text-center">
                    <i className="fa-solid fa-circle-check mx-1 fs-4 align-middle text-success" />
                  </td>
                  <td className="text-center">1</td>
                  <td className="text-center">2</td>
                  <td className="text-start">
                    <label className="checkbox style-d">
                      <input
                        type="hidden"
                        className="form-control quantity int-txt w-100px"
                        id="quantity_crypto_6"
                        defaultValue={1}
                        min={1}
                      />
                      <input
                        type="hidden"
                        className="form-control product_name int-txt w-100px"
                        id="product_crypto_6"
                        defaultValue="Sponsored Post"
                      />
                      <input
                        type="hidden"
                        className="form-control product_price int-txt w-100px"
                        id="price_crypto_6"
                        defaultValue={100}
                      />
                      <input
                        type="checkbox"
                        onclick="addToCard(this,'crypto_6')"
                        id="crypto_6"
                        data-product-id="crypto_6"
                      />
                      <span className="checkbox__checkmark checkbox-orange" />
                      <span className="checkbox__body">$100</span>
                    </label>
                  </td>
                  <td className="text-start">
                    <label className="checkbox style-d">
                      <input
                        type="hidden"
                        className="form-control quantity int-txt w-100px"
                        id="quantity_gambling_6"
                        defaultValue={1}
                        min={1}
                      />
                      <input
                        type="hidden"
                        className="form-control product_name int-txt w-100px"
                        id="product_gambling_6"
                        defaultValue="Sponsored Post"
                      />
                      <input
                        type="hidden"
                        className="form-control product_price int-txt w-100px"
                        id="price_gambling_6"
                        defaultValue={150}
                      />
                      <input
                        type="checkbox"
                        onclick="addToCard(this,'gambling_6')"
                        id="gambling_6"
                        data-product-id="gambling_6"
                      />
                      <span className="checkbox__checkmark checkbox-orange" />
                      <span className="checkbox__body">$150</span>
                    </label>
                  </td>
                </tr>
                <tr>
                  <td>Guest Post</td>
                  <td className="text-center">
                    <a
                      href="https://www.coingabbar.com/en/guest-post"
                      title="Website Link"
                      className="samplelink orange-gradient"
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square" />
                      <span className="d-none">guest post</span>
                    </a>
                  </td>
                  <td className="text-center">
                    <i className="fa-solid fa-circle-check mx-1 fs-4 align-middle text-success" />
                  </td>
                  <td className="text-center">1</td>
                  <td className="text-center">2</td>
                  <td className="text-start">
                    <label className="checkbox style-d">
                      <input
                        type="hidden"
                        className="form-control quantity int-txt w-100px"
                        id="quantity_crypto_7"
                        defaultValue={1}
                        min={1}
                      />
                      <input
                        type="hidden"
                        className="form-control product_name int-txt w-100px"
                        id="product_crypto_7"
                        defaultValue="Guest Post"
                      />
                      <input
                        type="hidden"
                        className="form-control product_price int-txt w-100px"
                        id="price_crypto_7"
                        defaultValue={75}
                      />
                      <input
                        type="checkbox"
                        onclick="addToCard(this,'crypto_7')"
                        id="crypto_7"
                        data-product-id="crypto_7"
                      />
                      <span className="checkbox__checkmark checkbox-orange" />
                      <span className="checkbox__body">$75</span>
                    </label>
                  </td>
                  <td className="text-start">
                    <label className="checkbox style-d">
                      <input
                        type="hidden"
                        className="form-control quantity int-txt w-100px"
                        id="quantity_gambling_7"
                        defaultValue={1}
                        min={1}
                      />
                      <input
                        type="hidden"
                        className="form-control product_name int-txt w-100px"
                        id="product_gambling_7"
                        defaultValue="Guest Post"
                      />
                      <input
                        type="hidden"
                        className="form-control product_price int-txt w-100px"
                        id="price_gambling_7"
                        defaultValue={100}
                      />
                      <input
                        type="checkbox"
                        onclick="addToCard(this,'gambling_7')"
                        id="gambling_7"
                        data-product-id="gambling_7"
                      />
                      <span className="checkbox__checkmark checkbox-orange" />
                      <span className="checkbox__body">$100</span>
                    </label>
                  </td>
                </tr>
                <tr>
                  <td>
                    CMC Articles &amp; Post
                    <span className="small text-muted d-block">
                      (Tagging Project)
                    </span>
                  </td>
                  <td className="text-center">
                    <a
                      href="https://coinmarketcap.com/community/profile/Coin_Gabbar/"
                      className="samplelink align-middle mx-1"
                      title="CMC"
                      rel="noreferrer noopener"
                    >
                      <img
                        src="https://www.coingabbar.com/new/images/coinmarketcap.svg"
                        className="rounded-circle"
                        alt="CMC"
                        width={24}
                        height={24}
                      />
                    </a>
                  </td>
                  <td className="text-center">
                    <i className="fa-solid fa-circle-check mx-1 fs-4 align-middle text-success" />
                  </td>
                  <td className="text-center">1</td>
                  <td className="text-center">2</td>
                  <td className="text-start">
                    <label className="checkbox style-d">
                      <input
                        type="hidden"
                        className="form-control quantity int-txt w-100px"
                        id="quantity_crypto_8"
                        defaultValue={1}
                        min={1}
                      />
                      <input
                        type="hidden"
                        className="form-control product_name int-txt w-100px"
                        id="product_crypto_8"
                        defaultValue="CMC Articles & Post"
                      />
                      <input
                        type="hidden"
                        className="form-control product_price int-txt w-100px"
                        id="price_crypto_8"
                        defaultValue={75}
                      />
                      <input
                        type="checkbox"
                        onclick="addToCard(this,'crypto_8')"
                        id="crypto_8"
                        data-product-id="crypto_8"
                      />
                      <span className="checkbox__checkmark checkbox-orange" />
                      <span className="checkbox__body">$75</span>
                    </label>
                  </td>
                  <td className="text-center">NA</td>
                </tr>
                <tr>
                  <td rowSpan={3}>CoinGabbar Add ons with Content Packages</td>
                  <td colSpan={5} className="fw-semibold">
                    <div className="d-flex">
                      Email to 50k+ Users
                      <span
                        className="samplelink bg-gmail mx-2 cursor-pointer"
                        data-bs-toggle="modal"
                        data-bs-target="#banner-Modal"
                        data-img-src="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/email-reg-user-mail.webp"
                      >
                        <i className="fa-regular fa-envelope" />
                      </span>
                      <span className="small text-muted d-block">
                        (Avg 5% Open &amp; 1% Click)
                      </span>
                    </div>
                  </td>
                  <td colSpan={2}>
                    <label className="checkbox style-d">
                      <input
                        type="hidden"
                        className="form-control quantity int-txt w-100px"
                        id="quantity_gambling_9"
                        defaultValue={1}
                        min={1}
                      />
                      <input
                        type="hidden"
                        className="form-control product_name int-txt w-100px"
                        id="product_gambling_9"
                        defaultValue="Email to 50k+ Users"
                      />
                      <input
                        type="hidden"
                        className="form-control product_price int-txt w-100px"
                        id="price_gambling_9"
                        defaultValue={25}
                      />
                      <input
                        type="hidden"
                        className="form-control image int-txt w-100px"
                        id="image_gambling_9"
                        defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/email-reg-user-mail.webp"
                      />
                      <input
                        type="checkbox"
                        onclick="addToCard(this,'gambling_9')"
                        id="gambling_9"
                        data-product-id="gambling_9"
                      />
                      <span className="checkbox__checkmark checkbox-orange" />
                      <span className="checkbox__body">$25</span>
                    </label>
                  </td>
                </tr>
                <tr>
                  <td colSpan={5}>
                    Social Media Posting of the Article
                    <a
                      href="https://x.com/coin_gabbar_"
                      className="samplelink bg-dark"
                      title="Twitter"
                      rel="noreferrer noopener"
                      target="_blank"
                    >
                      <i className="fa-brands fa-x-twitter" />
                    </a>
                  </td>
                  <td colSpan={2}>
                    <label className="checkbox style-d">
                      <input
                        type="hidden"
                        className="form-control quantity int-txt w-100px"
                        id="quantity_gambling_10"
                        defaultValue={1}
                        min={1}
                      />
                      <input
                        type="hidden"
                        className="form-control product_name int-txt w-100px"
                        id="product_gambling_10"
                        defaultValue="Social Media Posting of the Article"
                      />
                      <input
                        type="hidden"
                        className="form-control product_price int-txt w-100px"
                        id="price_gambling_10"
                        defaultValue={25}
                      />
                      <input
                        type="checkbox"
                        onclick="addToCard(this,'gambling_10')"
                        id="gambling_10"
                        data-product-id="gambling_10"
                      />
                      <span className="checkbox__checkmark checkbox-orange" />
                      <span className="checkbox__body">$25</span>
                    </label>
                  </td>
                </tr>
                <tr>
                  <td colSpan={5}>
                    Social Media Posting of the Article
                    <a
                      href="https://t.me/gabbarcommunity"
                      className="samplelink tele-bg"
                      title="Telegram"
                      rel="noreferrer noopener"
                    >
                      <i className="fa-solid fa-paper-plane" />
                    </a>
                  </td>
                  <td colSpan={2}>
                    <label className="checkbox style-d">
                      <input
                        type="hidden"
                        className="form-control quantity int-txt w-100px"
                        id="quantity_gambling_11"
                        defaultValue={1}
                        min={1}
                      />
                      <input
                        type="hidden"
                        className="form-control product_name int-txt w-100px"
                        id="product_gambling_11"
                        defaultValue="Social Media Posting of the Article"
                      />
                      <input
                        type="hidden"
                        className="form-control product_price int-txt w-100px"
                        id="price_gambling_11"
                        defaultValue={25}
                      />
                      <input
                        type="checkbox"
                        onclick="addToCard(this,'gambling_11')"
                        id="gambling_11"
                        data-product-id="gambling_11"
                      />
                      <span className="checkbox__checkmark checkbox-orange" />
                      <span className="checkbox__body">$25</span>
                    </label>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="text-center mb-3">
              <span className="rounded-3 h5 px-3 py-1 text-white info-gradient">
                Banner Ads
              </span>
            </div>
            <table
              className="table-striped table table-bordered table-responsive d-block d-md-table d-lg-block d-xl-table border advertisment-tbl mb-5"
              id="list-item-2"
            >
              <thead className="text-center text-wrap info-gradient">
                <tr>
                  <th rowSpan={2}>Banner Advertisments</th>
                  <th rowSpan={2}>Image</th>
                  <th rowSpan={2}>7 Days</th>
                  <th rowSpan={2}>15 Days</th>
                  <th rowSpan={2}>1 Month</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        Home Page Takeover
                        <span className="small ">(1)</span>
                      </div>
                      <a
                        href="https://www.coingabbar.com"
                        title="English Link"
                        className="samplelink info-gradient"
                      >
                        <i className="fa-solid fa-arrow-up-right-from-square" />
                        <span className="d-none">Home</span>
                      </a>
                    </div>
                  </td>
                  <td className="text-center">
                    <img
                      src="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/homepage-takeover.webp"
                      alt="ICO Banner"
                      loading="lazy"
                      className="img-fluid cursor-pointer"
                      width={50}
                      height={28}
                      data-bs-toggle="modal"
                      data-bs-target="#banner-Modal"
                      data-img-src="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/homepage-takeover.webp"
                    />
                  </td>
                  <td className="text-start">
                    <label className="checkbox style-d">
                      <input
                        type="hidden"
                        className="form-control quantity int-txt w-100px"
                        id="quantity_weekly_12"
                        defaultValue={1}
                        min={1}
                      />
                      <input
                        type="hidden"
                        className="form-control product_name int-txt w-100px"
                        id="product_weekly_12"
                        defaultValue="Home Page Takeover"
                      />
                      <input
                        type="hidden"
                        className="form-control product_price int-txt w-100px"
                        id="price_weekly_12"
                        defaultValue={750}
                      />
                      <input
                        type="hidden"
                        className="form-control image int-txt w-100px"
                        id="image_weekly_12"
                        defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/homepage-takeover.webp"
                      />
                      <input
                        type="checkbox"
                        onclick="addToCard(this,'weekly_12')"
                        id="weekly_12"
                        data-product-id="weekly_12"
                      />
                      <span className="checkbox__checkmark checkbox-info" />
                      <span className="checkbox__body">$750</span>
                    </label>
                  </td>
                  <td className="text-start">
                    <label className="checkbox style-d">
                      <input
                        type="hidden"
                        className="form-control quantity int-txt w-100px"
                        id="quantity_fortnightly_12"
                        defaultValue={1}
                        min={1}
                      />
                      <input
                        type="hidden"
                        className="form-control product_name int-txt w-100px"
                        id="product_fortnightly_12"
                        defaultValue="Home Page Takeover"
                      />
                      <input
                        type="hidden"
                        className="form-control product_price int-txt w-100px"
                        id="price_fortnightly_12"
                        defaultValue={1250}
                      />
                      <input
                        type="hidden"
                        className="form-control image int-txt w-100px"
                        id="image_fortnightly_12"
                        defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/homepage-takeover.webp"
                      />
                      <input
                        type="checkbox"
                        onclick="addToCard(this,'fortnightly_12')"
                        id="fortnightly_12"
                        data-product-id="fortnightly_12"
                      />
                      <span className="checkbox__checkmark checkbox-info" />
                      <span className="checkbox__body">$1250</span>
                    </label>
                  </td>
                  <td className="text-start">
                    <label className="checkbox style-d">
                      <input
                        type="hidden"
                        className="form-control quantity int-txt w-100px"
                        id="quantity_monthly_12"
                        defaultValue={1}
                        min={1}
                      />
                      <input
                        type="hidden"
                        className="form-control product_name int-txt w-100px"
                        id="product_monthly_12"
                        defaultValue="Home Page Takeover"
                      />
                      <input
                        type="hidden"
                        className="form-control product_price int-txt w-100px"
                        id="price_monthly_12"
                        defaultValue={2000}
                      />
                      <input
                        type="hidden"
                        className="form-control image int-txt w-100px"
                        id="image_monthly_12"
                        defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/homepage-takeover.webp"
                      />
                      <input
                        type="checkbox"
                        onclick="addToCard(this,'monthly_12')"
                        id="monthly_12"
                        data-product-id="monthly_12"
                      />
                      <span className="checkbox__checkmark checkbox-info" />
                      <span className="checkbox__body">$2000</span>
                    </label>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        Home Page Above Header
                        <span className="small ">(1)</span>
                      </div>
                      <a
                        href="https://www.coingabbar.com"
                        title="English Link"
                        className="samplelink info-gradient"
                      >
                        <i className="fa-solid fa-arrow-up-right-from-square" />
                        <span className="d-none">Home</span>
                      </a>
                    </div>
                  </td>
                  <td className="text-center">
                    <img
                      src="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/homepage-above-header.webp"
                      className="img-fluid cursor-pointer"
                      alt="Banner"
                      width={50}
                      height={28}
                      data-bs-toggle="modal"
                      data-bs-target="#banner-Modal"
                      data-img-src="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/homepage-above-header.webp"
                    />
                  </td>
                  <td className="text-start">
                    <label className="checkbox style-d">
                      <input
                        type="hidden"
                        className="form-control quantity int-txt w-100px"
                        id="quantity_weekly_13"
                        defaultValue={1}
                        min={1}
                      />
                      <input
                        type="hidden"
                        className="form-control product_name int-txt w-100px"
                        id="product_weekly_13"
                        defaultValue="Home Page Above Header"
                      />
                      <input
                        type="hidden"
                        className="form-control product_price int-txt w-100px"
                        id="price_weekly_13"
                        defaultValue={1000}
                      />
                      <input
                        type="hidden"
                        className="form-control image int-txt w-100px"
                        id="image_weekly_13"
                        defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/homepage-above-header.webp"
                      />
                      <input
                        type="checkbox"
                        onclick="addToCard(this,'weekly_13')"
                        id="weekly_13"
                        data-product-id="weekly_13"
                      />
                      <span className="checkbox__checkmark checkbox-info" />
                      <span className="checkbox__body">$1000</span>
                    </label>
                  </td>
                  <td className="text-start">
                    <label className="checkbox style-d">
                      <input
                        type="hidden"
                        className="form-control quantity int-txt w-100px"
                        id="quantity_fortnightly_13"
                        defaultValue={1}
                        min={1}
                      />
                      <input
                        type="hidden"
                        className="form-control product_name int-txt w-100px"
                        id="product_fortnightly_13"
                        defaultValue="Home Page Above Header"
                      />
                      <input
                        type="hidden"
                        className="form-control product_price int-txt w-100px"
                        id="price_fortnightly_13"
                        defaultValue={1750}
                      />
                      <input
                        type="hidden"
                        className="form-control image int-txt w-100px"
                        id="image_fortnightly_13"
                        defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/homepage-above-header.webp"
                      />
                      <input
                        type="checkbox"
                        onclick="addToCard(this,'fortnightly_13')"
                        id="fortnightly_13"
                        data-product-id="fortnightly_13"
                      />
                      <span className="checkbox__checkmark checkbox-info" />
                      <span className="checkbox__body">$1750</span>
                    </label>
                  </td>
                  <td className="text-start">
                    <label className="checkbox style-d">
                      <input
                        type="hidden"
                        className="form-control quantity int-txt w-100px"
                        id="quantity_monthly_13"
                        defaultValue={1}
                        min={1}
                      />
                      <input
                        type="hidden"
                        className="form-control product_name int-txt w-100px"
                        id="product_monthly_13"
                        defaultValue="Home Page Above Header"
                      />
                      <input
                        type="hidden"
                        className="form-control product_price int-txt w-100px"
                        id="price_monthly_13"
                        defaultValue={3000}
                      />
                      <input
                        type="hidden"
                        className="form-control image int-txt w-100px"
                        id="image_monthly_13"
                        defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/homepage-above-header.webp"
                      />
                      <input
                        type="checkbox"
                        onclick="addToCard(this,'monthly_13')"
                        id="monthly_13"
                        data-product-id="monthly_13"
                      />
                      <span className="checkbox__checkmark checkbox-info" />
                      <span className="checkbox__body">$3000</span>
                    </label>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        Home Page Box Banner
                        <span className="small ">(3)</span>
                      </div>
                      <a
                        href="https://www.coingabbar.com"
                        title="English Link"
                        className="samplelink info-gradient"
                      >
                        <i className="fa-solid fa-arrow-up-right-from-square" />
                        <span className="d-none">Home</span>
                      </a>
                    </div>
                  </td>
                  <td className="text-center">
                    <img
                      data-img-src="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/homepage-box-banner.webp"
                      src="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/homepage-box-banner.webp"
                      className="img-fluid cursor-pointer"
                      alt="Banner"
                      width={50}
                      height={28}
                      data-bs-toggle="modal"
                      data-bs-target="#banner-Modal"
                    />
                  </td>
                  <td className="text-start">
                    <label className="checkbox style-d">
                      <input
                        type="hidden"
                        className="form-control quantity int-txt w-100px"
                        id="quantity_weekly_14"
                        defaultValue={1}
                        min={1}
                      />
                      <input
                        type="hidden"
                        className="form-control product_name int-txt w-100px"
                        id="product_weekly_14"
                        defaultValue="Home Page Box Banner"
                      />
                      <input
                        type="hidden"
                        className="form-control product_price int-txt w-100px"
                        id="price_weekly_14"
                        defaultValue={500}
                      />
                      <input
                        type="hidden"
                        className="form-control image int-txt w-100px"
                        id="image_weekly_14"
                        defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/homepage-box-banner.webp"
                      />
                      <input
                        type="checkbox"
                        onclick="addToCard(this,'weekly_14')"
                        id="weekly_14"
                        data-product-id="weekly_14"
                      />
                      <span className="checkbox__checkmark checkbox-info" />
                      <span className="checkbox__body">$500</span>
                    </label>
                  </td>
                  <td className="text-start">
                    <label className="checkbox style-d">
                      <input
                        type="hidden"
                        className="form-control quantity int-txt w-100px"
                        id="quantity_fortnightly_14"
                        defaultValue={1}
                        min={1}
                      />
                      <input
                        type="hidden"
                        className="form-control product_name int-txt w-100px"
                        id="product_fortnightly_14"
                        defaultValue="Home Page Box Banner"
                      />
                      <input
                        type="hidden"
                        className="form-control product_price int-txt w-100px"
                        id="price_fortnightly_14"
                        defaultValue={750}
                      />
                      <input
                        type="hidden"
                        className="form-control image int-txt w-100px"
                        id="image_fortnightly_14"
                        defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/homepage-box-banner.webp"
                      />
                      <input
                        type="checkbox"
                        onclick="addToCard(this,'fortnightly_14')"
                        id="fortnightly_14"
                        data-product-id="fortnightly_14"
                      />
                      <span className="checkbox__checkmark checkbox-info" />
                      <span className="checkbox__body">$750</span>
                    </label>
                  </td>
                  <td className="text-start">
                    <label className="checkbox style-d">
                      <input
                        type="hidden"
                        className="form-control quantity int-txt w-100px"
                        id="quantity_monthly_14"
                        defaultValue={1}
                        min={1}
                      />
                      <input
                        type="hidden"
                        className="form-control product_name int-txt w-100px"
                        id="product_monthly_14"
                        defaultValue="Home Page Box Banner"
                      />
                      <input
                        type="hidden"
                        className="form-control product_price int-txt w-100px"
                        id="price_monthly_14"
                        defaultValue={1250}
                      />
                      <input
                        type="hidden"
                        className="form-control image int-txt w-100px"
                        id="image_monthly_14"
                        defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/homepage-box-banner.webp"
                      />
                      <input
                        type="checkbox"
                        onclick="addToCard(this,'monthly_14')"
                        id="monthly_14"
                        data-product-id="monthly_14"
                      />
                      <span className="checkbox__checkmark checkbox-info" />
                      <span className="checkbox__body">$1250</span>
                    </label>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        Home Page Sticky Banner
                        <span className="small ">(1)</span>
                      </div>
                      <a
                        href="https://www.coingabbar.com"
                        title="English Link"
                        className="samplelink info-gradient"
                      >
                        <i className="fa-solid fa-arrow-up-right-from-square" />
                        <span className="d-none">Home</span>
                      </a>
                    </div>
                  </td>
                  <td className="text-center">
                    <img
                      src="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/homepage-sticky-banner.webp"
                      className="img-fluid cursor-pointer"
                      alt="Banner"
                      width={50}
                      height={28}
                      data-bs-toggle="modal"
                      data-bs-target="#banner-Modal"
                      data-img-src="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/homepage-sticky-banner.webp"
                    />
                  </td>
                  <td className="text-start">
                    <label className="checkbox style-d">
                      <input
                        type="hidden"
                        className="form-control quantity int-txt w-100px"
                        id="quantity_weekly_15"
                        defaultValue={1}
                        min={1}
                      />
                      <input
                        type="hidden"
                        className="form-control product_name int-txt w-100px"
                        id="product_weekly_15"
                        defaultValue="Home Page Sticky Banner"
                      />
                      <input
                        type="hidden"
                        className="form-control product_price int-txt w-100px"
                        id="price_weekly_15"
                        defaultValue={500}
                      />
                      <input
                        type="hidden"
                        className="form-control image int-txt w-100px"
                        id="image_weekly_15"
                        defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/homepage-sticky-banner.webp"
                      />
                      <input
                        type="checkbox"
                        onclick="addToCard(this,'weekly_15')"
                        id="weekly_15"
                        data-product-id="weekly_15"
                      />
                      <span className="checkbox__checkmark checkbox-info" />
                      <span className="checkbox__body">$500</span>
                    </label>
                  </td>
                  <td className="text-start">
                    <label className="checkbox style-d">
                      <input
                        type="hidden"
                        className="form-control quantity int-txt w-100px"
                        id="quantity_fortnightly_15"
                        defaultValue={1}
                        min={1}
                      />
                      <input
                        type="hidden"
                        className="form-control product_name int-txt w-100px"
                        id="product_fortnightly_15"
                        defaultValue="Home Page Sticky Banner"
                      />
                      <input
                        type="hidden"
                        className="form-control product_price int-txt w-100px"
                        id="price_fortnightly_15"
                        defaultValue={800}
                      />
                      <input
                        type="hidden"
                        className="form-control image int-txt w-100px"
                        id="image_fortnightly_15"
                        defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/homepage-sticky-banner.webp"
                      />
                      <input
                        type="checkbox"
                        onclick="addToCard(this,'fortnightly_15')"
                        id="fortnightly_15"
                        data-product-id="fortnightly_15"
                      />
                      <span className="checkbox__checkmark checkbox-info" />
                      <span className="checkbox__body">$800</span>
                    </label>
                  </td>
                  <td className="text-start">
                    <label className="checkbox style-d">
                      <input
                        type="hidden"
                        className="form-control quantity int-txt w-100px"
                        id="quantity_monthly_15"
                        defaultValue={1}
                        min={1}
                      />
                      <input
                        type="hidden"
                        className="form-control product_name int-txt w-100px"
                        id="product_monthly_15"
                        defaultValue="Home Page Sticky Banner"
                      />
                      <input
                        type="hidden"
                        className="form-control product_price int-txt w-100px"
                        id="price_monthly_15"
                        defaultValue={1500}
                      />
                      <input
                        type="hidden"
                        className="form-control image int-txt w-100px"
                        id="image_monthly_15"
                        defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/homepage-sticky-banner.webp"
                      />
                      <input
                        type="checkbox"
                        onclick="addToCard(this,'monthly_15')"
                        id="monthly_15"
                        data-product-id="monthly_15"
                      />
                      <span className="checkbox__checkmark checkbox-info" />
                      <span className="checkbox__body">$1500</span>
                    </label>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        ICO Takeover
                        <span className="small ">(1)</span>
                      </div>
                      <a
                        href="https://www.coingabbar.com/en/crypto-latest-ico"
                        title="English Link"
                        className="samplelink info-gradient"
                      >
                        <i className="fa-solid fa-arrow-up-right-from-square" />
                        <span className="d-none">crypto-latest-ico</span>
                      </a>
                    </div>
                  </td>
                  <td className="text-center">
                    <img
                      src="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/ico-page-take-over.webp"
                      className="img-fluid cursor-pointer"
                      alt="Banner"
                      width={50}
                      height={28}
                      data-bs-toggle="modal"
                      data-bs-target="#banner-Modal"
                      data-img-src="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/ico-page-take-over.webp"
                    />
                  </td>
                  <td className="text-start">
                    <label className="checkbox style-d">
                      <input
                        type="hidden"
                        className="form-control quantity int-txt w-100px"
                        id="quantity_weekly_16"
                        defaultValue={1}
                        min={1}
                      />
                      <input
                        type="hidden"
                        className="form-control product_name int-txt w-100px"
                        id="product_weekly_16"
                        defaultValue="ICO Takeover"
                      />
                      <input
                        type="hidden"
                        className="form-control product_price int-txt w-100px"
                        id="price_weekly_16"
                        defaultValue={150}
                      />
                      <input
                        type="hidden"
                        className="form-control image int-txt w-100px"
                        id="image_weekly_16"
                        defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/ico-page-take-over.webp"
                      />
                      <input
                        type="checkbox"
                        onclick="addToCard(this,'weekly_16')"
                        id="weekly_16"
                        data-product-id="weekly_16"
                      />
                      <span className="checkbox__checkmark checkbox-info" />
                      <span className="checkbox__body">$150</span>
                    </label>
                  </td>
                  <td className="text-start">
                    <label className="checkbox style-d">
                      <input
                        type="hidden"
                        className="form-control quantity int-txt w-100px"
                        id="quantity_fortnightly_16"
                        defaultValue={1}
                        min={1}
                      />
                      <input
                        type="hidden"
                        className="form-control product_name int-txt w-100px"
                        id="product_fortnightly_16"
                        defaultValue="ICO Takeover"
                      />
                      <input
                        type="hidden"
                        className="form-control product_price int-txt w-100px"
                        id="price_fortnightly_16"
                        defaultValue={250}
                      />
                      <input
                        type="hidden"
                        className="form-control image int-txt w-100px"
                        id="image_fortnightly_16"
                        defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/ico-page-take-over.webp"
                      />
                      <input
                        type="checkbox"
                        onclick="addToCard(this,'fortnightly_16')"
                        id="fortnightly_16"
                        data-product-id="fortnightly_16"
                      />
                      <span className="checkbox__checkmark checkbox-info" />
                      <span className="checkbox__body">$250</span>
                    </label>
                  </td>
                  <td className="text-start">
                    <label className="checkbox style-d">
                      <input
                        type="hidden"
                        className="form-control quantity int-txt w-100px"
                        id="quantity_monthly_16"
                        defaultValue={1}
                        min={1}
                      />
                      <input
                        type="hidden"
                        className="form-control product_name int-txt w-100px"
                        id="product_monthly_16"
                        defaultValue="ICO Takeover"
                      />
                      <input
                        type="hidden"
                        className="form-control product_price int-txt w-100px"
                        id="price_monthly_16"
                        defaultValue={400}
                      />
                      <input
                        type="hidden"
                        className="form-control image int-txt w-100px"
                        id="image_monthly_16"
                        defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/ico-page-take-over.webp"
                      />
                      <input
                        type="checkbox"
                        onclick="addToCard(this,'monthly_16')"
                        id="monthly_16"
                        data-product-id="monthly_16"
                      />
                      <span className="checkbox__checkmark checkbox-info" />
                      <span className="checkbox__body">$400</span>
                    </label>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        ICO Above Header
                        <span className="small ">(1)</span>
                      </div>
                      <a
                        href="https://www.coingabbar.com/en/crypto-latest-ico"
                        title="English Link"
                        className="samplelink info-gradient"
                      >
                        <i className="fa-solid fa-arrow-up-right-from-square" />
                        <span className="d-none">crypto latest ico</span>
                      </a>
                    </div>
                  </td>
                  <td className="text-center">
                    <img
                      src="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/ico-aboveheader.webp"
                      className="img-fluid cursor-pointer"
                      alt="Banner"
                      width={50}
                      height={28}
                      data-bs-toggle="modal"
                      data-bs-target="#banner-Modal"
                      data-img-src="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/ico-aboveheader.webp"
                    />
                  </td>
                  <td className="text-start">
                    <label className="checkbox style-d">
                      <input
                        type="hidden"
                        className="form-control quantity int-txt w-100px"
                        id="quantity_weekly_17"
                        defaultValue={1}
                        min={1}
                      />
                      <input
                        type="hidden"
                        className="form-control product_name int-txt w-100px"
                        id="product_weekly_17"
                        defaultValue="ICO Above Header"
                      />
                      <input
                        type="hidden"
                        className="form-control product_price int-txt w-100px"
                        id="price_weekly_17"
                        defaultValue={150}
                      />
                      <input
                        type="hidden"
                        className="form-control image int-txt w-100px"
                        id="image_weekly_17"
                        defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/ico-aboveheader.webp"
                      />
                      <input
                        type="checkbox"
                        onclick="addToCard(this,'weekly_17')"
                        id="weekly_17"
                        data-product-id="weekly_17"
                      />
                      <span className="checkbox__checkmark checkbox-info" />
                      <span className="checkbox__body">$150</span>
                    </label>
                  </td>
                  <td className="text-start">
                    <label className="checkbox style-d">
                      <input
                        type="hidden"
                        className="form-control quantity int-txt w-100px"
                        id="quantity_fortnightly_17"
                        defaultValue={1}
                        min={1}
                      />
                      <input
                        type="hidden"
                        className="form-control product_name int-txt w-100px"
                        id="product_fortnightly_17"
                        defaultValue="ICO Above Header"
                      />
                      <input
                        type="hidden"
                        className="form-control product_price int-txt w-100px"
                        id="price_fortnightly_17"
                        defaultValue={250}
                      />
                      <input
                        type="hidden"
                        className="form-control image int-txt w-100px"
                        id="image_fortnightly_17"
                        defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/ico-aboveheader.webp"
                      />
                      <input
                        type="checkbox"
                        onclick="addToCard(this,'fortnightly_17')"
                        id="fortnightly_17"
                        data-product-id="fortnightly_17"
                      />
                      <span className="checkbox__checkmark checkbox-info" />
                      <span className="checkbox__body">$250</span>
                    </label>
                  </td>
                  <td className="text-start">
                    <label className="checkbox style-d">
                      <input
                        type="hidden"
                        className="form-control quantity int-txt w-100px"
                        id="quantity_monthly_17"
                        defaultValue={1}
                        min={1}
                      />
                      <input
                        type="hidden"
                        className="form-control product_name int-txt w-100px"
                        id="product_monthly_17"
                        defaultValue="ICO Above Header"
                      />
                      <input
                        type="hidden"
                        className="form-control product_price int-txt w-100px"
                        id="price_monthly_17"
                        defaultValue={400}
                      />
                      <input
                        type="hidden"
                        className="form-control image int-txt w-100px"
                        id="image_monthly_17"
                        defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/ico-aboveheader.webp"
                      />
                      <input
                        type="checkbox"
                        onclick="addToCard(this,'monthly_17')"
                        id="monthly_17"
                        data-product-id="monthly_17"
                      />
                      <span className="checkbox__checkmark checkbox-info" />
                      <span className="checkbox__body">$400</span>
                    </label>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        ICO Box Banner
                        <span className="small ">(Rotational 5 Banners)</span>
                      </div>
                      <a
                        href="https://www.coingabbar.com/en/crypto-latest-ico"
                        title="English Link"
                        className="samplelink info-gradient"
                      >
                        <i className="fa-solid fa-arrow-up-right-from-square" />
                        <span className="d-none">crypto latest ico</span>
                      </a>
                    </div>
                  </td>
                  <td className="text-center">
                    <img
                      src="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/ico-box-banner.webp"
                      className="img-fluid cursor-pointer"
                      alt="Banner"
                      width={50}
                      height={28}
                      data-bs-toggle="modal"
                      data-bs-target="#banner-Modal"
                      data-img-src="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/ico-box-banner.webp"
                    />
                  </td>
                  <td className="text-start">
                    <label className="checkbox style-d">
                      <input
                        type="hidden"
                        className="form-control quantity int-txt w-100px"
                        id="quantity_weekly_18"
                        defaultValue={1}
                        min={1}
                      />
                      <input
                        type="hidden"
                        className="form-control product_name int-txt w-100px"
                        id="product_weekly_18"
                        defaultValue="ICO Box Banner"
                      />
                      <input
                        type="hidden"
                        className="form-control product_price int-txt w-100px"
                        id="price_weekly_18"
                        defaultValue={100}
                      />
                      <input
                        type="hidden"
                        className="form-control image int-txt w-100px"
                        id="image_weekly_18"
                        defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/ico-box-banner.webp"
                      />
                      <input
                        type="checkbox"
                        onclick="addToCard(this,'weekly_18')"
                        id="weekly_18"
                        data-product-id="weekly_18"
                      />
                      <span className="checkbox__checkmark checkbox-info" />
                      <span className="checkbox__body">$100</span>
                    </label>
                  </td>
                  <td className="text-start">
                    <label className="checkbox style-d">
                      <input
                        type="hidden"
                        className="form-control quantity int-txt w-100px"
                        id="quantity_fortnightly_18"
                        defaultValue={1}
                        min={1}
                      />
                      <input
                        type="hidden"
                        className="form-control product_name int-txt w-100px"
                        id="product_fortnightly_18"
                        defaultValue="ICO Box Banner"
                      />
                      <input
                        type="hidden"
                        className="form-control product_price int-txt w-100px"
                        id="price_fortnightly_18"
                        defaultValue={200}
                      />
                      <input
                        type="hidden"
                        className="form-control image int-txt w-100px"
                        id="image_fortnightly_18"
                        defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/ico-box-banner.webp"
                      />
                      <input
                        type="checkbox"
                        onclick="addToCard(this,'fortnightly_18')"
                        id="fortnightly_18"
                        data-product-id="fortnightly_18"
                      />
                      <span className="checkbox__checkmark checkbox-info" />
                      <span className="checkbox__body">$200</span>
                    </label>
                  </td>
                  <td className="text-start">
                    <label className="checkbox style-d">
                      <input
                        type="hidden"
                        className="form-control quantity int-txt w-100px"
                        id="quantity_monthly_18"
                        defaultValue={1}
                        min={1}
                      />
                      <input
                        type="hidden"
                        className="form-control product_name int-txt w-100px"
                        id="product_monthly_18"
                        defaultValue="ICO Box Banner"
                      />
                      <input
                        type="hidden"
                        className="form-control product_price int-txt w-100px"
                        id="price_monthly_18"
                        defaultValue={300}
                      />
                      <input
                        type="hidden"
                        className="form-control image int-txt w-100px"
                        id="image_monthly_18"
                        defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/ico-box-banner.webp"
                      />
                      <input
                        type="checkbox"
                        onclick="addToCard(this,'monthly_18')"
                        id="monthly_18"
                        data-product-id="monthly_18"
                      />
                      <span className="checkbox__checkmark checkbox-info" />
                      <span className="checkbox__body">$300</span>
                    </label>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        ICO Sticky Banner
                        <span className="small ">(1)</span>
                      </div>
                      <a
                        href="https://www.coingabbar.com/en/crypto-latest-ico"
                        title="English Link"
                        className="samplelink info-gradient"
                      >
                        <i className="fa-solid fa-arrow-up-right-from-square" />
                        <span className="d-none">crypto latest ico</span>
                      </a>
                    </div>
                  </td>
                  <td className="text-center">
                    <img
                      src="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/ico-sticky-banner.webp"
                      className="img-fluid cursor-pointer"
                      alt="Banner"
                      width={50}
                      height={28}
                      data-bs-toggle="modal"
                      data-bs-target="#banner-Modal"
                      data-img-src="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/ico-sticky-banner.webp"
                    />
                  </td>
                  <td className="text-start">
                    <label className="checkbox style-d">
                      <input
                        type="hidden"
                        className="form-control quantity int-txt w-100px"
                        id="quantity_weekly_19"
                        defaultValue={1}
                        min={1}
                      />
                      <input
                        type="hidden"
                        className="form-control product_name int-txt w-100px"
                        id="product_weekly_19"
                        defaultValue="ICO Sticky Banner"
                      />
                      <input
                        type="hidden"
                        className="form-control product_price int-txt w-100px"
                        id="price_weekly_19"
                        defaultValue={150}
                      />
                      <input
                        type="hidden"
                        className="form-control image int-txt w-100px"
                        id="image_weekly_19"
                        defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/ico-sticky-banner.webp"
                      />
                      <input
                        type="checkbox"
                        onclick="addToCard(this,'weekly_19')"
                        id="weekly_19"
                        data-product-id="weekly_19"
                      />
                      <span className="checkbox__checkmark checkbox-info" />
                      <span className="checkbox__body">$150</span>
                    </label>
                  </td>
                  <td className="text-start">
                    <label className="checkbox style-d">
                      <input
                        type="hidden"
                        className="form-control quantity int-txt w-100px"
                        id="quantity_fortnightly_19"
                        defaultValue={1}
                        min={1}
                      />
                      <input
                        type="hidden"
                        className="form-control product_name int-txt w-100px"
                        id="product_fortnightly_19"
                        defaultValue="ICO Sticky Banner"
                      />
                      <input
                        type="hidden"
                        className="form-control product_price int-txt w-100px"
                        id="price_fortnightly_19"
                        defaultValue={250}
                      />
                      <input
                        type="hidden"
                        className="form-control image int-txt w-100px"
                        id="image_fortnightly_19"
                        defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/ico-sticky-banner.webp"
                      />
                      <input
                        type="checkbox"
                        onclick="addToCard(this,'fortnightly_19')"
                        id="fortnightly_19"
                        data-product-id="fortnightly_19"
                      />
                      <span className="checkbox__checkmark checkbox-info" />
                      <span className="checkbox__body">$250</span>
                    </label>
                  </td>
                  <td className="text-start">
                    <label className="checkbox style-d">
                      <input
                        type="hidden"
                        className="form-control quantity int-txt w-100px"
                        id="quantity_monthly_19"
                        defaultValue={1}
                        min={1}
                      />
                      <input
                        type="hidden"
                        className="form-control product_name int-txt w-100px"
                        id="product_monthly_19"
                        defaultValue="ICO Sticky Banner"
                      />
                      <input
                        type="hidden"
                        className="form-control product_price int-txt w-100px"
                        id="price_monthly_19"
                        defaultValue={400}
                      />
                      <input
                        type="hidden"
                        className="form-control image int-txt w-100px"
                        id="image_monthly_19"
                        defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/ico-sticky-banner.webp"
                      />
                      <input
                        type="checkbox"
                        onclick="addToCard(this,'monthly_19')"
                        id="monthly_19"
                        data-product-id="monthly_19"
                      />
                      <span className="checkbox__checkmark checkbox-info" />
                      <span className="checkbox__body">$400</span>
                    </label>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        Airdrop Takeover
                        <span className="small ">(1)</span>
                      </div>
                      <a
                        href="https://www.coingabbar.com/en/crypto-ongoing-airdrops"
                        title="English Link"
                        className="samplelink info-gradient"
                      >
                        <i className="fa-solid fa-arrow-up-right-from-square" />
                        <span className="d-none">crypto ongoing airdrops</span>
                      </a>
                    </div>
                  </td>
                  <td className="text-center">
                    <img
                      src="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/airdrop-takeover-banner.webp"
                      className="img-fluid cursor-pointer"
                      alt="Banner"
                      width={50}
                      height={28}
                      data-bs-toggle="modal"
                      data-bs-target="#banner-Modal"
                      data-img-src="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/airdrop-takeover-banner.webp"
                    />
                  </td>
                  <td className="text-start">
                    <label className="checkbox style-d">
                      <input
                        type="hidden"
                        className="form-control quantity int-txt w-100px"
                        id="quantity_weekly_20"
                        defaultValue={1}
                        min={1}
                      />
                      <input
                        type="hidden"
                        className="form-control product_name int-txt w-100px"
                        id="product_weekly_20"
                        defaultValue="Airdrop Takeover"
                      />
                      <input
                        type="hidden"
                        className="form-control product_price int-txt w-100px"
                        id="price_weekly_20"
                        defaultValue={150}
                      />
                      <input
                        type="hidden"
                        className="form-control image int-txt w-100px"
                        id="image_weekly_20"
                        defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/airdrop-takeover-banner.webp"
                      />
                      <input
                        type="checkbox"
                        onclick="addToCard(this,'weekly_20')"
                        id="weekly_20"
                        data-product-id="weekly_20"
                      />
                      <span className="checkbox__checkmark checkbox-info" />
                      <span className="checkbox__body">$150</span>
                    </label>
                  </td>
                  <td className="text-start">
                    <label className="checkbox style-d">
                      <input
                        type="hidden"
                        className="form-control quantity int-txt w-100px"
                        id="quantity_fortnightly_20"
                        defaultValue={1}
                        min={1}
                      />
                      <input
                        type="hidden"
                        className="form-control product_name int-txt w-100px"
                        id="product_fortnightly_20"
                        defaultValue="Airdrop Takeover"
                      />
                      <input
                        type="hidden"
                        className="form-control product_price int-txt w-100px"
                        id="price_fortnightly_20"
                        defaultValue={250}
                      />
                      <input
                        type="hidden"
                        className="form-control image int-txt w-100px"
                        id="image_fortnightly_20"
                        defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/airdrop-takeover-banner.webp"
                      />
                      <input
                        type="checkbox"
                        onclick="addToCard(this,'fortnightly_20')"
                        id="fortnightly_20"
                        data-product-id="fortnightly_20"
                      />
                      <span className="checkbox__checkmark checkbox-info" />
                      <span className="checkbox__body">$250</span>
                    </label>
                  </td>
                  <td className="text-start">
                    <label className="checkbox style-d">
                      <input
                        type="hidden"
                        className="form-control quantity int-txt w-100px"
                        id="quantity_monthly_20"
                        defaultValue={1}
                        min={1}
                      />
                      <input
                        type="hidden"
                        className="form-control product_name int-txt w-100px"
                        id="product_monthly_20"
                        defaultValue="Airdrop Takeover"
                      />
                      <input
                        type="hidden"
                        className="form-control product_price int-txt w-100px"
                        id="price_monthly_20"
                        defaultValue={400}
                      />
                      <input
                        type="hidden"
                        className="form-control image int-txt w-100px"
                        id="image_monthly_20"
                        defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/airdrop-takeover-banner.webp"
                      />
                      <input
                        type="checkbox"
                        onclick="addToCard(this,'monthly_20')"
                        id="monthly_20"
                        data-product-id="monthly_20"
                      />
                      <span className="checkbox__checkmark checkbox-info" />
                      <span className="checkbox__body">$400</span>
                    </label>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        Airdrop Above Header
                        <span className="small ">(1)</span>
                      </div>
                      <a
                        href="https://www.coingabbar.com/en/crypto-ongoing-airdrops"
                        title="English Link"
                        className="samplelink info-gradient"
                      >
                        <i className="fa-solid fa-arrow-up-right-from-square" />
                        <span className="d-none">crypto ongoing airdrops</span>
                      </a>
                    </div>
                  </td>
                  <td className="text-center">
                    <img
                      src="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/airdrop-above-header-banner.webp"
                      className="img-fluid cursor-pointer"
                      alt="Banner"
                      width={50}
                      height={28}
                      data-bs-toggle="modal"
                      data-bs-target="#banner-Modal"
                      data-img-src="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/airdrop-above-header-banner.webp"
                    />
                  </td>
                  <td className="text-start">
                    <label className="checkbox style-d">
                      <input
                        type="hidden"
                        className="form-control quantity int-txt w-100px"
                        id="quantity_weekly_21"
                        defaultValue={1}
                        min={1}
                      />
                      <input
                        type="hidden"
                        className="form-control product_name int-txt w-100px"
                        id="product_weekly_21"
                        defaultValue="Airdrop Above Header"
                      />
                      <input
                        type="hidden"
                        className="form-control product_price int-txt w-100px"
                        id="price_weekly_21"
                        defaultValue={150}
                      />
                      <input
                        type="hidden"
                        className="form-control image int-txt w-100px"
                        id="image_weekly_21"
                        defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/airdrop-above-header-banner.webp"
                      />
                      <input
                        type="checkbox"
                        onclick="addToCard(this,'weekly_21')"
                        id="weekly_21"
                        data-product-id="weekly_21"
                      />
                      <span className="checkbox__checkmark checkbox-info" />
                      <span className="checkbox__body">$150</span>
                    </label>
                  </td>
                  <td className="text-start">
                    <label className="checkbox style-d">
                      <input
                        type="hidden"
                        className="form-control quantity int-txt w-100px"
                        id="quantity_fortnightly_21"
                        defaultValue={1}
                        min={1}
                      />
                      <input
                        type="hidden"
                        className="form-control product_name int-txt w-100px"
                        id="product_fortnightly_21"
                        defaultValue="Airdrop Above Header"
                      />
                      <input
                        type="hidden"
                        className="form-control product_price int-txt w-100px"
                        id="price_fortnightly_21"
                        defaultValue={250}
                      />
                      <input
                        type="hidden"
                        className="form-control image int-txt w-100px"
                        id="image_fortnightly_21"
                        defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/airdrop-above-header-banner.webp"
                      />
                      <input
                        type="checkbox"
                        onclick="addToCard(this,'fortnightly_21')"
                        id="fortnightly_21"
                        data-product-id="fortnightly_21"
                      />
                      <span className="checkbox__checkmark checkbox-info" />
                      <span className="checkbox__body">$250</span>
                    </label>
                  </td>
                  <td className="text-start">
                    <label className="checkbox style-d">
                      <input
                        type="hidden"
                        className="form-control quantity int-txt w-100px"
                        id="quantity_monthly_21"
                        defaultValue={1}
                        min={1}
                      />
                      <input
                        type="hidden"
                        className="form-control product_name int-txt w-100px"
                        id="product_monthly_21"
                        defaultValue="Airdrop Above Header"
                      />
                      <input
                        type="hidden"
                        className="form-control product_price int-txt w-100px"
                        id="price_monthly_21"
                        defaultValue={400}
                      />
                      <input
                        type="hidden"
                        className="form-control image int-txt w-100px"
                        id="image_monthly_21"
                        defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/airdrop-above-header-banner.webp"
                      />
                      <input
                        type="checkbox"
                        onclick="addToCard(this,'monthly_21')"
                        id="monthly_21"
                        data-product-id="monthly_21"
                      />
                      <span className="checkbox__checkmark checkbox-info" />
                      <span className="checkbox__body">$400</span>
                    </label>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        Airdrop Box Banner
                        <span className="small ">(Rotational 5 Banners)</span>
                      </div>
                      <a
                        href="https://www.coingabbar.com/en/crypto-ongoing-airdrops"
                        title="English Link"
                        className="samplelink info-gradient"
                      >
                        <i className="fa-solid fa-arrow-up-right-from-square" />
                        <span className="d-none">crypto ongoing airdrops</span>
                      </a>
                    </div>
                  </td>
                  <td className="text-center">
                    <img
                      src="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/airdrop-box-banner.webp"
                      className="img-fluid cursor-pointer"
                      alt="Banner"
                      width={50}
                      height={28}
                      data-bs-toggle="modal"
                      data-bs-target="#banner-Modal"
                      data-img-src="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/airdrop-box-banner.webp"
                    />
                  </td>
                  <td className="text-start">
                    <label className="checkbox style-d">
                      <input
                        type="hidden"
                        className="form-control quantity int-txt w-100px"
                        id="quantity_weekly_22"
                        defaultValue={1}
                        min={1}
                      />
                      <input
                        type="hidden"
                        className="form-control product_name int-txt w-100px"
                        id="product_weekly_22"
                        defaultValue="Airdrop Box Banner"
                      />
                      <input
                        type="hidden"
                        className="form-control product_price int-txt w-100px"
                        id="price_weekly_22"
                        defaultValue={100}
                      />
                      <input
                        type="hidden"
                        className="form-control image int-txt w-100px"
                        id="image_weekly_22"
                        defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/airdrop-box-banner.webp"
                      />
                      <input
                        type="checkbox"
                        onclick="addToCard(this,'weekly_22')"
                        id="weekly_22"
                        data-product-id="weekly_22"
                      />
                      <span className="checkbox__checkmark checkbox-info" />
                      <span className="checkbox__body">$100</span>
                    </label>
                  </td>
                  <td className="text-start">
                    <label className="checkbox style-d">
                      <input
                        type="hidden"
                        className="form-control quantity int-txt w-100px"
                        id="quantity_fortnightly_22"
                        defaultValue={1}
                        min={1}
                      />
                      <input
                        type="hidden"
                        className="form-control product_name int-txt w-100px"
                        id="product_fortnightly_22"
                        defaultValue="Airdrop Box Banner"
                      />
                      <input
                        type="hidden"
                        className="form-control product_price int-txt w-100px"
                        id="price_fortnightly_22"
                        defaultValue={200}
                      />
                      <input
                        type="hidden"
                        className="form-control image int-txt w-100px"
                        id="image_fortnightly_22"
                        defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/airdrop-box-banner.webp"
                      />
                      <input
                        type="checkbox"
                        onclick="addToCard(this,'fortnightly_22')"
                        id="fortnightly_22"
                        data-product-id="fortnightly_22"
                      />
                      <span className="checkbox__checkmark checkbox-info" />
                      <span className="checkbox__body">$200</span>
                    </label>
                  </td>
                  <td className="text-start">
                    <label className="checkbox style-d">
                      <input
                        type="hidden"
                        className="form-control quantity int-txt w-100px"
                        id="quantity_monthly_22"
                        defaultValue={1}
                        min={1}
                      />
                      <input
                        type="hidden"
                        className="form-control product_name int-txt w-100px"
                        id="product_monthly_22"
                        defaultValue="Airdrop Box Banner"
                      />
                      <input
                        type="hidden"
                        className="form-control product_price int-txt w-100px"
                        id="price_monthly_22"
                        defaultValue={300}
                      />
                      <input
                        type="hidden"
                        className="form-control image int-txt w-100px"
                        id="image_monthly_22"
                        defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/airdrop-box-banner.webp"
                      />
                      <input
                        type="checkbox"
                        onclick="addToCard(this,'monthly_22')"
                        id="monthly_22"
                        data-product-id="monthly_22"
                      />
                      <span className="checkbox__checkmark checkbox-info" />
                      <span className="checkbox__body">$300</span>
                    </label>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        Airdrop Sticky Banner
                        <span className="small ">(1)</span>
                      </div>
                      <a
                        href="https://www.coingabbar.com/en/crypto-ongoing-airdrops"
                        title="English Link"
                        className="samplelink info-gradient"
                      >
                        <i className="fa-solid fa-arrow-up-right-from-square" />
                        <span className="d-none">crypto ongoing airdrops</span>
                      </a>
                    </div>
                  </td>
                  <td className="text-center">
                    <img
                      src="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/airdrop-sticky-banner.webp"
                      className="img-fluid cursor-pointer"
                      alt="Banner"
                      width={50}
                      height={28}
                      data-bs-toggle="modal"
                      data-bs-target="#banner-Modal"
                      data-img-src="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/airdrop-sticky-banner.webp"
                    />
                  </td>
                  <td className="text-start">
                    <label className="checkbox style-d">
                      <input
                        type="hidden"
                        className="form-control quantity int-txt w-100px"
                        id="quantity_weekly_23"
                        defaultValue={1}
                        min={1}
                      />
                      <input
                        type="hidden"
                        className="form-control product_name int-txt w-100px"
                        id="product_weekly_23"
                        defaultValue="Airdrop Sticky Banner"
                      />
                      <input
                        type="hidden"
                        className="form-control product_price int-txt w-100px"
                        id="price_weekly_23"
                        defaultValue={150}
                      />
                      <input
                        type="hidden"
                        className="form-control image int-txt w-100px"
                        id="image_weekly_23"
                        defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/airdrop-sticky-banner.webp"
                      />
                      <input
                        type="checkbox"
                        onclick="addToCard(this,'weekly_23')"
                        id="weekly_23"
                        data-product-id="weekly_23"
                      />
                      <span className="checkbox__checkmark checkbox-info" />
                      <span className="checkbox__body">$150</span>
                    </label>
                  </td>
                  <td className="text-start">
                    <label className="checkbox style-d">
                      <input
                        type="hidden"
                        className="form-control quantity int-txt w-100px"
                        id="quantity_fortnightly_23"
                        defaultValue={1}
                        min={1}
                      />
                      <input
                        type="hidden"
                        className="form-control product_name int-txt w-100px"
                        id="product_fortnightly_23"
                        defaultValue="Airdrop Sticky Banner"
                      />
                      <input
                        type="hidden"
                        className="form-control product_price int-txt w-100px"
                        id="price_fortnightly_23"
                        defaultValue={250}
                      />
                      <input
                        type="hidden"
                        className="form-control image int-txt w-100px"
                        id="image_fortnightly_23"
                        defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/airdrop-sticky-banner.webp"
                      />
                      <input
                        type="checkbox"
                        onclick="addToCard(this,'fortnightly_23')"
                        id="fortnightly_23"
                        data-product-id="fortnightly_23"
                      />
                      <span className="checkbox__checkmark checkbox-info" />
                      <span className="checkbox__body">$250</span>
                    </label>
                  </td>
                  <td className="text-start">
                    <label className="checkbox style-d">
                      <input
                        type="hidden"
                        className="form-control quantity int-txt w-100px"
                        id="quantity_monthly_23"
                        defaultValue={1}
                        min={1}
                      />
                      <input
                        type="hidden"
                        className="form-control product_name int-txt w-100px"
                        id="product_monthly_23"
                        defaultValue="Airdrop Sticky Banner"
                      />
                      <input
                        type="hidden"
                        className="form-control product_price int-txt w-100px"
                        id="price_monthly_23"
                        defaultValue={400}
                      />
                      <input
                        type="hidden"
                        className="form-control image int-txt w-100px"
                        id="image_monthly_23"
                        defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/airdrop-sticky-banner.webp"
                      />
                      <input
                        type="checkbox"
                        onclick="addToCard(this,'monthly_23')"
                        id="monthly_23"
                        data-product-id="monthly_23"
                      />
                      <span className="checkbox__checkmark checkbox-info" />
                      <span className="checkbox__body">$400</span>
                    </label>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="text-center mb-3">
              <span className="rounded-3 h5 px-4 py-1  yellow-gradient text-white">
                Add on Campaigns
              </span>
            </div>
            <table
              className="table-striped table table-bordered table-responsive d-block d-sm-table border advertisment-tbl mb-5"
              id="list-item-3"
            >
              <thead className="text-center text-wrap yellow-gradient">
                <tr>
                  <th className="" rowSpan={2}>
                    Add on Campaigns
                  </th>
                  <th className="">Link</th>
                  <th className="" rowSpan={2}>
                    Sample
                  </th>
                  <th className="">Crypto</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Monthly Bulletin</td>
                  <td className="text-center">
                    <a
                      href="https://www.coingabbar.com/en/monthly-newsletter"
                      title="Website Link"
                      className="samplelink yellow-gradient "
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square" />
                      <span className="d-none">monthly newsletter</span>
                    </a>
                  </td>
                  <td className="text-center">
                    <a
                      href="https://d3iuzwoiyg9qa8.cloudfront.net/webadmin/storage/public/monthlyNewsletters/July2024/KRKMRiV1jONHC6MeURpoDPIOTlgsNnz5Xrg4qbce.pdf"
                      className="samplelink yellow-gradient "
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-title="Sample 1"
                      aria-label="Sample 1"
                      data-bs-original-title="Sample 1"
                    >
                      <i className="fa-solid fa-link" />
                    </a>
                    <a
                      href="https://d3iuzwoiyg9qa8.cloudfront.net/webadmin/storage/public/monthlyNewsletters/June2024/mRLbxhaS2vyfPOKCAKoXtWyv3OtTDCUOPqJkwqHo.pdf"
                      className="samplelink yellow-gradient "
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-title="Sample 2"
                      aria-label="Sample 2"
                      data-bs-original-title="Sample 2"
                    >
                      <i className="fa-solid fa-link" />
                    </a>
                  </td>
                  <td className="text-start">
                    <label className="checkbox style-d">
                      <input
                        type="hidden"
                        className="form-control quantity int-txt w-100px"
                        id="quantity_crypto_24"
                        defaultValue={1}
                        min={1}
                      />
                      <input
                        type="hidden"
                        className="form-control product_name int-txt w-100px"
                        id="product_crypto_24"
                        defaultValue="Monthly Bulletin"
                      />
                      <input
                        type="hidden"
                        className="form-control product_price int-txt w-100px"
                        id="price_crypto_24"
                        defaultValue={250}
                      />
                      <input
                        type="checkbox"
                        onclick="addToCard(this,'crypto_24')"
                        id="crypto_24"
                        data-product-id="crypto_24"
                      />
                      <span className="checkbox__checkmark checkbox-yellow" />
                      <span className="checkbox__body">$250</span>
                    </label>
                  </td>
                </tr>
                <tr>
                  <td>Live AMA</td>
                  <td className="text-center">
                    <div className="d-flex justify-content-center align-items-center">
                      <a
                        href="https://www.binance.com/en/square/profile/coingabbar"
                        className="samplelink mx-1 bg-bnb align-middle"
                        title="Binance"
                        rel="noreferrer noopener"
                      >
                        <img
                          src="https://www.coingabbar.com/new/images/bnb-icon.svg"
                          alt="Binance"
                          width={15}
                          height={15}
                        />
                      </a>
                      <a
                        href="https://x.com/coin_gabbar_"
                        className="samplelink mx-1 bg-dark"
                        title="Twitter"
                        rel="noreferrer noopener"
                        target="_blank"
                      >
                        <i className="fa-brands fa-x-twitter" />
                      </a>
                      <a
                        href="https://www.youtube.com/@coingabbarofficial"
                        className="samplelink mx-1 bg-danger"
                        title="YouTube"
                        rel="noreferrer noopener"
                        target="_blank"
                      >
                        <i className="fa-brands fa-youtube" />
                      </a>
                      <a
                        href="https://www.linkedin.com/company/79924225/admin/feed/posts/"
                        className="samplelink mx-1 linkdin-bg"
                        title="Linkedin"
                        rel="noreferrer noopener"
                        target="_blank"
                      >
                        <i className="fa-brands fa-linkedin-in" />
                      </a>
                    </div>
                  </td>
                  <td className="text-center">
                    <a
                      href="https://www.binance.com/en/live/video?roomId=2204915"
                      className="samplelink yellow-gradient "
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-title="Sample 1"
                      aria-label="Sample 1"
                      data-bs-original-title="Sample 1"
                    >
                      <i className="fa-solid fa-link" />
                    </a>
                    <a
                      href="https://www.binance.com/en/live/video?roomId=2209177"
                      className="samplelink yellow-gradient "
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-title="Sample 2"
                      aria-label="Sample 2"
                      data-bs-original-title="Sample 2"
                    >
                      <i className="fa-solid fa-link" />
                    </a>
                  </td>
                  <td className="text-start">
                    <label className="checkbox style-d">
                      <input
                        type="hidden"
                        className="form-control quantity int-txt w-100px"
                        id="quantity_crypto_25"
                        defaultValue={1}
                        min={1}
                      />
                      <input
                        type="hidden"
                        className="form-control product_name int-txt w-100px"
                        id="product_crypto_25"
                        defaultValue="Live AMA"
                      />
                      <input
                        type="hidden"
                        className="form-control product_price int-txt w-100px"
                        id="price_crypto_25"
                        defaultValue={100}
                      />
                      <input
                        type="checkbox"
                        onclick="addToCard(this,'crypto_25')"
                        id="crypto_25"
                        data-product-id="crypto_25"
                      />
                      <span className="checkbox__checkmark checkbox-yellow" />
                      <span className="checkbox__body">$100</span>
                    </label>
                  </td>
                </tr>
                <tr>
                  <td>YouTube Videos</td>
                  <td className="text-center">
                    <a
                      href="https://www.youtube.com/@coingabbarofficial"
                      className="samplelink mx-1 bg-danger"
                      title="YouTube"
                      rel="noreferrer noopener"
                      target="_blank"
                    >
                      <i className="fa-brands fa-youtube" />
                    </a>
                  </td>
                  <td className="text-center">
                    <a
                      href="https://www.youtube.com/watch?v=hOke6Lt3yNM"
                      className="samplelink yellow-gradient "
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-title="Sample 1"
                      aria-label="Sample 1"
                      data-bs-original-title="Sample 1"
                    >
                      <i className="fa-solid fa-link" />
                    </a>
                    <a
                      href="https://www.youtube.com/watch?v=siIFcimfjA8"
                      className="samplelink yellow-gradient "
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-title="Sample 2"
                      aria-label="Sample 2"
                      data-bs-original-title="Sample 2"
                    >
                      <i className="fa-solid fa-link" />
                    </a>
                  </td>
                  <td className="text-start">
                    <label className="checkbox style-d">
                      <input
                        type="hidden"
                        className="form-control quantity int-txt w-100px"
                        id="quantity_crypto_26"
                        defaultValue={1}
                        min={1}
                      />
                      <input
                        type="hidden"
                        className="form-control product_name int-txt w-100px"
                        id="product_crypto_26"
                        defaultValue="YouTube Videos"
                      />
                      <input
                        type="hidden"
                        className="form-control product_price int-txt w-100px"
                        id="price_crypto_26"
                        defaultValue={100}
                      />
                      <input
                        type="checkbox"
                        onclick="addToCard(this,'crypto_26')"
                        id="crypto_26"
                        data-product-id="crypto_26"
                      />
                      <span className="checkbox__checkmark checkbox-yellow" />
                      <span className="checkbox__body">$100</span>
                    </label>
                  </td>
                </tr>
                <tr>
                  <td>Social Media Posting</td>
                  <td className="text-center">
                    <div className="d-flex justify-content-center align-items-center">
                      <a
                        href="https://x.com/coin_gabbar_"
                        className="samplelink mx-1 bg-dark"
                        title="Twitter"
                        rel="noreferrer noopener"
                      >
                        <i className="fa-brands fa-x-twitter" />
                      </a>
                      <a
                        href="https://t.me/gabbarcommunity"
                        className="samplelink mx-1 tele-bg"
                        title="Twitter"
                        rel="noreferrer noopener"
                      >
                        <i className="fa-solid fa-paper-plane small" />
                      </a>
                      <a
                        href="https://www.linkedin.com/company/79924225/admin/feed/posts/"
                        className="samplelink mx-1 linkdin-bg"
                        title="Linkedin"
                        rel="noreferrer noopener"
                      >
                        <i className="fa-brands fa-linkedin-in" />
                      </a>
                      <a
                        href="https://www.instagram.com/coingabbar/"
                        className="samplelink mx-1 insta-bg"
                        title="Instagram"
                        rel="noreferrer noopener"
                      >
                        <i className="fa-brands fa-instagram" />
                      </a>
                    </div>
                  </td>
                  <td className="text-center">-</td>
                  <td className="text-start">
                    <label className="checkbox style-d">
                      <input
                        type="hidden"
                        className="form-control quantity int-txt w-100px"
                        id="quantity_crypto_27"
                        defaultValue={1}
                        min={1}
                      />
                      <input
                        type="hidden"
                        className="form-control product_name int-txt w-100px"
                        id="product_crypto_27"
                        defaultValue="Social Media Posting"
                      />
                      <input
                        type="hidden"
                        className="form-control product_price int-txt w-100px"
                        id="price_crypto_27"
                        defaultValue={50}
                      />
                      <input
                        type="checkbox"
                        onclick="addToCard(this,'crypto_27')"
                        id="crypto_27"
                        data-product-id="crypto_27"
                      />
                      <span className="checkbox__checkmark checkbox-yellow" />
                      <span className="checkbox__body">$50</span>
                    </label>
                  </td>
                </tr>
                <tr>
                  <td>Email Campaign (Front)</td>
                  <td className="text-center">
                    <div className="samplelink yellow-gradient  cursor-pointer">
                      <i
                        className="fa-solid fa-image"
                        data-bs-toggle="modal"
                        data-bs-target="#banner-Modal"
                        data-img-src="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/email-front.webp"
                      />
                    </div>
                  </td>
                  <td className="text-center">-</td>
                  <td className="text-start">
                    <label className="checkbox style-d">
                      <input
                        type="hidden"
                        className="form-control quantity int-txt w-100px"
                        id="quantity_crypto_28"
                        defaultValue={1}
                        min={1}
                      />
                      <input
                        type="hidden"
                        className="form-control product_name int-txt w-100px"
                        id="product_crypto_28"
                        defaultValue="Email Campaign (Front)"
                      />
                      <input
                        type="hidden"
                        className="form-control product_price int-txt w-100px"
                        id="price_crypto_28"
                        defaultValue={50}
                      />
                      <input
                        type="hidden"
                        className="form-control image int-txt w-100px"
                        id="image_crypto_28"
                        defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/email-front.webp"
                      />
                      <input
                        type="checkbox"
                        onclick="addToCard(this,'crypto_28')"
                        id="crypto_28"
                        data-product-id="crypto_28"
                      />
                      <span className="checkbox__checkmark checkbox-yellow" />
                      <span className="checkbox__body">$50</span>
                    </label>
                  </td>
                </tr>
                <tr>
                  <td>Email Campaign (Footer)</td>
                  <td className="text-center">
                    <div className="samplelink yellow-gradient  cursor-pointer">
                      <i
                        className="fa-solid fa-image"
                        data-bs-toggle="modal"
                        data-bs-target="#banner-Modal"
                        data-img-src="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/email-bottom.webp"
                      />
                    </div>
                  </td>
                  <td className="text-center">-</td>
                  <td className="text-start">
                    <label className="checkbox style-d">
                      <input
                        type="hidden"
                        className="form-control quantity int-txt w-100px"
                        id="quantity_crypto_29"
                        defaultValue={1}
                        min={1}
                      />
                      <input
                        type="hidden"
                        className="form-control product_name int-txt w-100px"
                        id="product_crypto_29"
                        defaultValue="Email Campaign (Footer)"
                      />
                      <input
                        type="hidden"
                        className="form-control product_price int-txt w-100px"
                        id="price_crypto_29"
                        defaultValue={25}
                      />
                      <input
                        type="hidden"
                        className="form-control image int-txt w-100px"
                        id="image_crypto_29"
                        defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/email-bottom.webp"
                      />
                      <input
                        type="checkbox"
                        onclick="addToCard(this,'crypto_29')"
                        id="crypto_29"
                        data-product-id="crypto_29"
                      />
                      <span className="checkbox__checkmark checkbox-yellow" />
                      <span className="checkbox__body">$25</span>
                    </label>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="text-center mb-3">
              <span className="rounded-3 h5 px-3 py-1 text-white green-gradient">
                Airdrop Marketing
              </span>
            </div>
            <table
              className="table-striped table table-bordered table-responsive d-block d-xxl-table border advertisment-tbl mb-5"
              id="list-item-4"
            >
              <thead className="text-center text-wrap green-gradient">
                <tr>
                  <th rowSpan={2}>Airdrop Marketing</th>
                  <th>Link</th>
                  <th rowSpan={2} colSpan={2}>
                    Sample
                  </th>
                  <th>Crypto</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={5}>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="fs-5">
                        Complete Airdrop package
                        <a
                          href="https://t.me/coingabbar1"
                          title="Book Now"
                          className="advertisment-btn green-gradient rounded-2 small-btn ms-2"
                        >
                          Book Now{" "}
                          <i className="fa-solid fa-paper-plane small ms-2" />
                        </a>
                      </span>
                      <label className="checkbox style-d">
                        <input
                          type="hidden"
                          className="form-control quantity int-txt w-100px"
                          id="quantity_crypto_30"
                          defaultValue={1}
                          min={1}
                        />
                        <input
                          type="hidden"
                          className="form-control product_name int-txt w-100px"
                          id="product_crypto_30"
                          defaultValue="Complete Airdrop package"
                        />
                        <input
                          type="hidden"
                          className="form-control product_price int-txt w-100px"
                          id="price_crypto_30"
                          defaultValue={800}
                        />
                        <input
                          type="checkbox"
                          onclick="addToCard(this,'crypto_30')"
                          id="crypto_30"
                          data-product-id="crypto_30"
                        />
                        <span className="checkbox__checkmark checkbox-green mt-1" />
                        <span className="checkbox__body fs-5">$800</span>
                      </label>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Premium Listing on Home Page &amp; Listing Table</td>
                  <td className="text-center">
                    <a
                      href="https://www.coingabbar.com"
                      title="Website Link"
                      className="samplelink green-gradient"
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square" />
                      <span className="d-none">Home</span>
                    </a>
                    <a
                      href="https://www.coingabbar.com/en/crypto-ongoing-airdrops"
                      title="Website Link"
                      className="samplelink green-gradient"
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square" />
                      <span className="d-none">crypto-ongoing-airdrops</span>
                    </a>
                  </td>
                  <td colSpan={2} className="text-center">
                    <div className="samplelink green-gradient text-white cursor-pointer">
                      <i
                        className="fa-solid fa-image"
                        data-bs-toggle="modal"
                        data-bs-target="#banner-Modal"
                        data-img-src="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/airdrop-premium-listing.webp"
                      />
                    </div>
                  </td>
                  <td className="text-start">
                    <label className="checkbox style-d">
                      <input
                        type="hidden"
                        className="form-control quantity int-txt w-100px"
                        id="quantity_crypto_74"
                        defaultValue={1}
                        min={1}
                      />
                      <input
                        type="hidden"
                        className="form-control product_name int-txt w-100px"
                        id="product_crypto_74"
                        defaultValue="Premium Listing on Home Page & Listing Table 
"
                      />
                      <input
                        type="hidden"
                        className="form-control product_price int-txt w-100px"
                        id="price_crypto_74"
                        defaultValue={500}
                      />
                      <input
                        type="hidden"
                        className="form-control image int-txt w-100px"
                        id="image_crypto_74"
                        defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/airdrop-premium-listing.webp"
                      />
                      <input
                        type="checkbox"
                        onclick="addToCard(this,'crypto_74')"
                        id="crypto_74"
                        data-product-id="crypto_74"
                      />
                      <span className="checkbox__checkmark checkbox-green" />
                      <span className="checkbox__body">$500</span>
                    </label>
                  </td>
                </tr>
                <tr>
                  <td>Featured Listing at top on Airdrop Page</td>
                  <td className="text-center">
                    <a
                      href="https://www.coingabbar.com/en/crypto-ongoing-airdrops"
                      title="Website Link"
                      className="samplelink green-gradient"
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square" />
                      <span className="d-none">crypto ongoing airdrops</span>
                    </a>
                  </td>
                  <td colSpan={2} className="text-center">
                    <div
                      className="samplelink green-gradient text-white cursor-pointer"
                      data-bs-toggle="modal"
                      data-bs-target="#featured-airdrop-Modal"
                    >
                      <i
                        className="fa-solid fa-image"
                        data-bs-toggle="modal"
                        data-bs-target="#banner-Modal"
                        data-img-src="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/airdrop-featured.webp"
                      />
                    </div>
                  </td>
                  <td className="text-start">
                    <label className="checkbox style-d">
                      <input
                        type="hidden"
                        className="form-control quantity int-txt w-100px"
                        id="quantity_crypto_31"
                        defaultValue={1}
                        min={1}
                      />
                      <input
                        type="hidden"
                        className="form-control product_name int-txt w-100px"
                        id="product_crypto_31"
                        defaultValue="Featured Listing at top on Airdrop Page"
                      />
                      <input
                        type="hidden"
                        className="form-control product_price int-txt w-100px"
                        id="price_crypto_31"
                        defaultValue={50}
                      />
                      <input
                        type="hidden"
                        className="form-control image int-txt w-100px"
                        id="image_crypto_31"
                        defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/airdrop-featured.webp"
                      />
                      <input
                        type="checkbox"
                        onclick="addToCard(this,'crypto_31')"
                        id="crypto_31"
                        data-product-id="crypto_31"
                      />
                      <span className="checkbox__checkmark checkbox-green" />
                      <span className="checkbox__body">$50</span>
                    </label>
                  </td>
                </tr>
                <tr>
                  <td>Banner on Airdrop Page</td>
                  <td className="text-center">
                    <a
                      href="https://www.coingabbar.com/en/crypto-ongoing-airdrops"
                      title="Website Link"
                      className="samplelink green-gradient"
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square" />
                      <span className="d-none">crypto ongoing airdrops</span>
                    </a>
                  </td>
                  <td colSpan={2} className="text-center">
                    <div
                      className="samplelink green-gradient text-white cursor-pointer"
                      data-bs-toggle="modal"
                      data-bs-target="#airdrop-Modal"
                    >
                      <i
                        className="fa-solid fa-image"
                        data-bs-toggle="modal"
                        data-bs-target="#banner-Modal"
                        data-img-src="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/airdrop-box-banner.webp"
                      />
                    </div>
                  </td>
                  <td className="text-start">
                    <label className="checkbox style-d">
                      <input
                        type="hidden"
                        className="form-control quantity int-txt w-100px"
                        id="quantity_crypto_32"
                        defaultValue={1}
                        min={1}
                      />
                      <input
                        type="hidden"
                        className="form-control product_name int-txt w-100px"
                        id="product_crypto_32"
                        defaultValue="Banner on Airdrop Page"
                      />
                      <input
                        type="hidden"
                        className="form-control product_price int-txt w-100px"
                        id="price_crypto_32"
                        defaultValue={150}
                      />
                      <input
                        type="hidden"
                        className="form-control image int-txt w-100px"
                        id="image_crypto_32"
                        defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/airdrop-box-banner.webp"
                      />
                      <input
                        type="checkbox"
                        onclick="addToCard(this,'crypto_32')"
                        id="crypto_32"
                        data-product-id="crypto_32"
                      />
                      <span className="checkbox__checkmark checkbox-green" />
                      <span className="checkbox__body">$150</span>
                    </label>
                  </td>
                </tr>
                <tr>
                  <td>Mailing to 50k+ Reg. users</td>
                  <td className="text-center">-</td>
                  <td colSpan={2} className="text-center">
                    <div className="samplelink green-gradient text-white cursor-pointer">
                      <i
                        className="fa-solid fa-image"
                        data-bs-toggle="modal"
                        data-bs-target="#banner-Modal"
                        data-img-src="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/email-reg-user-mail.webp"
                      />
                    </div>
                  </td>
                  <td className="text-start">
                    <label className="checkbox style-d">
                      <input
                        type="hidden"
                        className="form-control quantity int-txt w-100px"
                        id="quantity_crypto_33"
                        defaultValue={1}
                        min={1}
                      />
                      <input
                        type="hidden"
                        className="form-control product_name int-txt w-100px"
                        id="product_crypto_33"
                        defaultValue="Mailing to 50k+ Reg. users"
                      />
                      <input
                        type="hidden"
                        className="form-control product_price int-txt w-100px"
                        id="price_crypto_33"
                        defaultValue={50}
                      />
                      <input
                        type="hidden"
                        className="form-control image int-txt w-100px"
                        id="image_crypto_33"
                        defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/email-reg-user-mail.webp"
                      />
                      <input
                        type="checkbox"
                        onclick="addToCard(this,'crypto_33')"
                        id="crypto_33"
                        data-product-id="crypto_33"
                      />
                      <span className="checkbox__checkmark checkbox-green" />
                      <span className="checkbox__body">$50</span>
                    </label>
                  </td>
                </tr>
                <tr>
                  <td>Sharing on Social Media</td>
                  <td className="text-center">
                    <div className="d-flex justify-content-center align-items-center">
                      <a
                        href="https://x.com/coin_gabbar_"
                        className="samplelink mx-1 bg-dark"
                        title="Twitter"
                        rel="noreferrer noopener"
                      >
                        <i className="fa-brands fa-x-twitter" />
                      </a>
                      <a
                        href="https://t.me/gabbarcommunity"
                        className="samplelink mx-1 tele-bg"
                        title="Telegram"
                        rel="noreferrer noopener"
                      >
                        <i className="fa-solid fa-paper-plane small" />
                      </a>
                      <a
                        href="https://www.linkedin.com/company/79924225/admin/feed/posts/"
                        className="samplelink mx-1 linkdin-bg"
                        title="Linkedin"
                        rel="noreferrer noopener"
                      >
                        <i className="fa-brands fa-linkedin-in" />
                      </a>
                      <a
                        href="https://www.instagram.com/coingabbar/"
                        className="samplelink mx-1 insta-bg"
                        title="Instagram"
                        rel="noreferrer noopener"
                      >
                        <i className="fa-brands fa-instagram" />
                      </a>
                    </div>
                  </td>
                  <td colSpan={2} className="text-center">
                    -
                  </td>
                  <td className="text-start">
                    <label className="checkbox style-d">
                      <input
                        type="hidden"
                        className="form-control quantity int-txt w-100px"
                        id="quantity_crypto_34"
                        defaultValue={1}
                        min={1}
                      />
                      <input
                        type="hidden"
                        className="form-control product_name int-txt w-100px"
                        id="product_crypto_34"
                        defaultValue="Sharing on Social Media"
                      />
                      <input
                        type="hidden"
                        className="form-control product_price int-txt w-100px"
                        id="price_crypto_34"
                        defaultValue={50}
                      />
                      <input
                        type="checkbox"
                        onclick="addToCard(this,'crypto_34')"
                        id="crypto_34"
                        data-product-id="crypto_34"
                      />
                      <span className="checkbox__checkmark checkbox-green" />
                      <span className="checkbox__body">$50</span>
                    </label>
                  </td>
                </tr>
                <tr>
                  <td>
                    Organic blog{" "}
                    <span className="small text-muted d-block">
                      (Shared on Binance, CMC, Gate.io &amp; 30+ website)
                    </span>
                  </td>
                  <td>
                    <div className="d-flex justify-content-center align-items-center">
                      <a
                        href="https://www.binance.com/en/square/profile/coingabbar"
                        className="samplelink bg-bnb align-middle mx-1"
                        rel="noreferrer noopener"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-bs-title="Binance"
                        aria-label="Binance"
                        data-bs-original-title="Binance"
                        aria-describedby="tooltip307078"
                      >
                        <img
                          src="https://www.coingabbar.com/new/images/bnb-icon.svg"
                          alt="Binance"
                          width={15}
                          height={15}
                        />
                      </a>
                      <a
                        href="https://coinmarketcap.com/community/profile/Coin_Gabbar/"
                        className="samplelink align-middle mx-1"
                        title="CMC"
                        rel="noreferrer noopener"
                      >
                        <img
                          src="https://www.coingabbar.com/new/images/coinmarketcap.svg"
                          className="rounded-circle"
                          alt="CMC"
                          width={24}
                          height={24}
                        />
                      </a>
                      <span
                        className="samplelink align-middle mx-1"
                        title="Gate.io"
                      >
                        <img
                          src="https://www.coingabbar.com/new/images/gateio-logo.webp"
                          alt="Gate.Io"
                          className="rounded-circle"
                          width={24}
                          height={24}
                        />
                      </span>
                      <a
                        href="https://docs.google.com/spreadsheets/d/1W-tHIZal4Gv5slFqI_GmsGRKvsi7wK9UQNCd93_YG2I/edit?gid=0#gid=0"
                        className="samplelink green-gradient mx-1"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-bs-title="30+ Websites"
                        aria-label="Sheet"
                        data-bs-original-title="Sheet"
                      >
                        <i className="fa-solid fa-sheet-plastic" />
                      </a>
                    </div>
                  </td>
                  <td colSpan={2} className="text-center">
                    <a
                      href="https://www.coingabbar.com/en/crypto-blogs-english"
                      className="samplelink green-gradient"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-title="Sample"
                      aria-label="Sample"
                      data-bs-original-title="Sample"
                    >
                      <i className="fa-solid fa-link" />
                      <span className="d-none">crypto blogs english</span>
                    </a>
                  </td>
                  <td className="text-start">
                    <label className="checkbox style-d">
                      <input
                        type="hidden"
                        className="form-control quantity int-txt w-100px"
                        id="quantity_crypto_35"
                        defaultValue={1}
                        min={1}
                      />
                      <input
                        type="hidden"
                        className="form-control product_name int-txt w-100px"
                        id="product_crypto_35"
                        defaultValue="Organic blog"
                      />
                      <input
                        type="hidden"
                        className="form-control product_price int-txt w-100px"
                        id="price_crypto_35"
                        defaultValue={250}
                      />
                      <input
                        type="checkbox"
                        onclick="addToCard(this,'crypto_35')"
                        id="crypto_35"
                        data-product-id="crypto_35"
                      />
                      <span className="checkbox__checkmark checkbox-green" />
                      <span className="checkbox__body">$250</span>
                    </label>
                  </td>
                </tr>
                <tr>
                  <td>
                    Listicle Blog
                    <span className="small text-muted d-block">
                      (Top 5 Airdrop - weekly)
                    </span>
                  </td>
                  <td className="text-center">
                    <a
                      href="https://www.coingabbar.com/en/crypto-blogs-details/bitcoin-cash-and-flare-investors-flock-to-rollblock"
                      className="samplelink green-gradient"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-title="English Link"
                      aria-label="English Link"
                      data-bs-original-title="English Link"
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square" />
                      <span className="d-none">crypto-blogs-details</span>
                    </a>
                    <a
                      href="https://www.coingabbar.com/en/crypto-blogs-details/the-never-ending-cycle-how-cryptocurrency-whales-make-money"
                      className="samplelink green-gradient"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-title="Hindi Link"
                      aria-label="Hindi Link"
                      data-bs-original-title="Hindi Link"
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square" />
                      <span className="d-none">crypto-blogs-details</span>
                    </a>
                  </td>
                  <td colSpan={2} className="text-center">
                    -
                  </td>
                  <td className="text-start">
                    <label className="checkbox style-d">
                      <input
                        type="hidden"
                        className="form-control quantity int-txt w-100px"
                        id="quantity_crypto_36"
                        defaultValue={1}
                        min={1}
                      />
                      <input
                        type="hidden"
                        className="form-control product_name int-txt w-100px"
                        id="product_crypto_36"
                        defaultValue="Listicle Blog"
                      />
                      <input
                        type="hidden"
                        className="form-control product_price int-txt w-100px"
                        id="price_crypto_36"
                        defaultValue={50}
                      />
                      <input
                        type="checkbox"
                        onclick="addToCard(this,'crypto_36')"
                        id="crypto_36"
                        data-product-id="crypto_36"
                      />
                      <span className="checkbox__checkmark checkbox-green" />
                      <span className="checkbox__body">$50</span>
                    </label>
                  </td>
                </tr>
                <tr>
                  <td>
                    Listicle Blog
                    <span className="small text-muted d-block">
                      (Top 5 Tokens to Buy - weekly)
                    </span>
                  </td>
                  <td className="text-center">
                    <a
                      href="https://www.coingabbar.com/en/crypto-blogs-details/rollblock-presale-secure-ethereum-gambling-token"
                      className="samplelink green-gradient"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-title="English Link"
                      aria-label="English Link"
                      data-bs-original-title="English Link"
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square" />
                      <span className="d-none">crypto-blogs-details</span>
                    </a>
                    <a
                      href="https://www.coingabbar.com/en/crypto-blogs-details/top-telegram-bots-token-to-buy-now"
                      className="samplelink green-gradient"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-title="Hindi Link"
                      aria-label="Hindi Link"
                      data-bs-original-title="Hindi Link"
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square" />
                      <span className="d-none">crypto-blogs-details</span>
                    </a>
                  </td>
                  <td colSpan={2} className="text-center">
                    -
                  </td>
                  <td className="text-start">
                    <label className="checkbox style-d">
                      <input
                        type="hidden"
                        className="form-control quantity int-txt w-100px"
                        id="quantity_crypto_37"
                        defaultValue={1}
                        min={1}
                      />
                      <input
                        type="hidden"
                        className="form-control product_name int-txt w-100px"
                        id="product_crypto_37"
                        defaultValue="Listicle Blog"
                      />
                      <input
                        type="hidden"
                        className="form-control product_price int-txt w-100px"
                        id="price_crypto_37"
                        defaultValue={50}
                      />
                      <input
                        type="checkbox"
                        onclick="addToCard(this,'crypto_37')"
                        id="crypto_37"
                        data-product-id="crypto_37"
                      />
                      <span className="checkbox__checkmark checkbox-green" />
                      <span className="checkbox__body">$50</span>
                    </label>
                  </td>
                </tr>
                <tr>
                  <td>Live AMA</td>
                  <td className="text-center">
                    <div className="d-flex justify-content-center align-items-center">
                      <a
                        href="https://www.binance.com/en/square/profile/coingabbar"
                        className="samplelink mx-1 bg-bnb align-middle"
                        title="Binance"
                        rel="noreferrer noopener"
                      >
                        <img
                          src="https://www.coingabbar.com/new/images/bnb-icon.svg"
                          alt="Binance"
                          width={15}
                          height={15}
                        />
                      </a>
                      <a
                        href="https://x.com/coin_gabbar_"
                        className="samplelink mx-1 bg-dark"
                        title="Twitter"
                        rel="noreferrer noopener"
                      >
                        <i className="fa-brands fa-x-twitter" />
                      </a>
                      <a
                        href="https://www.youtube.com/@coingabbarofficial"
                        className="samplelink mx-1 bg-danger"
                        title="YouTube"
                        rel="noreferrer noopener"
                      >
                        <i className="fa-brands fa-youtube" />
                      </a>
                      <a
                        href="https://www.linkedin.com/company/79924225/admin/feed/posts/"
                        className="samplelink mx-1 linkdin-bg"
                        title="Linkedin"
                        rel="noreferrer noopener"
                      >
                        <i className="fa-brands fa-linkedin-in" />
                      </a>
                    </div>
                  </td>
                  <td colSpan={2} className="text-center">
                    <a
                      href="https://www.binance.com/en/live/video?roomId=2209177"
                      className="samplelink green-gradient"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-title="Sample"
                      aria-label="Sample 1"
                      data-bs-original-title="Sample 1"
                    >
                      <i className="fa-solid fa-link" />
                    </a>
                  </td>
                  <td className="text-start">
                    <label className="checkbox style-d">
                      <input
                        type="hidden"
                        className="form-control quantity int-txt w-100px"
                        id="quantity_crypto_38"
                        defaultValue={1}
                        min={1}
                      />
                      <input
                        type="hidden"
                        className="form-control product_name int-txt w-100px"
                        id="product_crypto_38"
                        defaultValue="Live AMA"
                      />
                      <input
                        type="hidden"
                        className="form-control product_price int-txt w-100px"
                        id="price_crypto_38"
                        defaultValue={100}
                      />
                      <input
                        type="checkbox"
                        onclick="addToCard(this,'crypto_38')"
                        id="crypto_38"
                        data-product-id="crypto_38"
                      />
                      <span className="checkbox__checkmark checkbox-green" />
                      <span className="checkbox__body">$100</span>
                    </label>
                  </td>
                </tr>
                <tr>
                  <td>
                    Youtube video
                    <span className="small text-muted d-block">
                      (Created &amp; Published)
                    </span>
                  </td>
                  <td className="text-center">
                    <a
                      href="https://www.youtube.com/@coingabbarofficial"
                      className="samplelink mx-1 bg-danger"
                      title="YouTube"
                      rel="noreferrer noopener"
                    >
                      <i className="fa-brands fa-youtube" />
                    </a>
                  </td>
                  <td colSpan={2} className="text-center">
                    <a
                      href="https://youtu.be/hOke6Lt3yNM?si=xKLnc5VbmrDyXEkW"
                      className="samplelink green-gradient"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-title="Sample 1"
                      aria-label="Sample 1"
                      data-bs-original-title="Sample 1"
                    >
                      <i className="fa-solid fa-link" />
                    </a>
                    <a
                      href="https://youtu.be/siIFcimfjA8?si=KuvMxrnYD2JtCEM8"
                      className="samplelink green-gradient"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-title="Sample 2"
                      aria-label="Sample 1"
                      data-bs-original-title="Sample 1"
                    >
                      <i className="fa-solid fa-link" />
                    </a>
                  </td>
                  <td className="text-start">
                    <label className="checkbox style-d">
                      <input
                        type="hidden"
                        className="form-control quantity int-txt w-100px"
                        id="quantity_crypto_39"
                        defaultValue={1}
                        min={1}
                      />
                      <input
                        type="hidden"
                        className="form-control product_name int-txt w-100px"
                        id="product_crypto_39"
                        defaultValue="Youtube video"
                      />
                      <input
                        type="hidden"
                        className="form-control product_price int-txt w-100px"
                        id="price_crypto_39"
                        defaultValue={100}
                      />
                      <input
                        type="checkbox"
                        onclick="addToCard(this,'crypto_39')"
                        id="crypto_39"
                        data-product-id="crypto_39"
                      />
                      <span className="checkbox__checkmark checkbox-green" />
                      <span className="checkbox__body">$100</span>
                    </label>
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td>Add ons with Airdrop Packages</td>
                  <td className="fw-semibold">
                    <div className="d-flex justify-content-between align-items-center flex-wrap">
                      On Home Page
                      <div>
                        <div className="samplelink green-gradient text-white cursor-pointer">
                          <i
                            className="fa-solid fa-image"
                            data-bs-toggle="modal"
                            data-bs-target="#banner-Modal"
                            data-img-src="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/airdrop-homepage-box.webp"
                          />
                        </div>
                        <a
                          href="https://www.coingabbar.com"
                          className="samplelink green-gradient"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-title="Sample 1"
                          data-bs-original-title="Sample 1"
                        >
                          <i className="fa-solid fa-link" />
                          <span className="d-none">Sample1</span>
                        </a>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center flex-wrap">
                      On Airdrop Listing Table
                      <div>
                        <div className="samplelink green-gradient text-white cursor-pointer">
                          <i
                            className="fa-solid fa-image"
                            data-bs-toggle="modal"
                            data-bs-target="#banner-Modal"
                            data-img-src="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/airdrop-box-banner.webp"
                          />
                        </div>
                        <a
                          href="https://www.coingabbar.com/en/crypto-ongoing-airdrops"
                          className="samplelink green-gradient"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-title="Sample 1"
                          data-bs-original-title="Sample 1"
                        >
                          <i className="fa-solid fa-link" />
                          <span className="d-none">
                            crypto ongoing airdrops
                          </span>
                        </a>
                      </div>
                    </div>
                  </td>
                  <td>
                    <label className="checkbox style-d">
                      <input
                        type="hidden"
                        className="form-control quantity int-txt w-100px"
                        id="quantity_weekly_40"
                        defaultValue={1}
                        min={1}
                      />
                      <input
                        type="hidden"
                        className="form-control product_name int-txt w-100px"
                        id="product_weekly_40"
                        defaultValue="On Home Page"
                      />
                      <input
                        type="hidden"
                        className="form-control product_price int-txt w-100px"
                        id="price_weekly_40"
                        defaultValue={200}
                      />
                      <input
                        type="hidden"
                        className="form-control image int-txt w-100px"
                        id="image_weekly_40"
                        defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/airdrop-box-banner.webp"
                      />
                      <input
                        type="checkbox"
                        onclick="addToCard(this,'weekly_40')"
                        id="weekly_40"
                        data-product-id="weekly_40"
                      />
                      <span className="checkbox__checkmark checkbox-green" />
                      <span className="checkbox__body">$200</span>
                      <span
                        className="small ms-1 "
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-bs-title="7 days"
                      >
                        (7 d)
                      </span>
                    </label>
                  </td>
                  <td>
                    <label className="checkbox style-d">
                      <input
                        type="hidden"
                        className="form-control quantity int-txt w-100px"
                        id="quantity_fortnightly_40"
                        defaultValue={1}
                        min={1}
                      />
                      <input
                        type="hidden"
                        className="form-control product_name int-txt w-100px"
                        id="product_fortnightly_40"
                        defaultValue="On Home Page"
                      />
                      <input
                        type="hidden"
                        className="form-control product_price int-txt w-100px"
                        id="price_fortnightly_40"
                        defaultValue={350}
                      />
                      <input
                        type="hidden"
                        className="form-control image int-txt w-100px"
                        id="image_fortnightly_40"
                        defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/airdrop-box-banner.webp"
                      />
                      <input
                        type="checkbox"
                        onclick="addToCard(this,'fortnightly_40')"
                        id="fortnightly_40"
                        data-product-id="fortnightly_40"
                      />
                      <span className="checkbox__checkmark checkbox-green" />
                      <span className="checkbox__body">$350</span>
                      <span
                        className="small ms-1 "
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-bs-title="15 days"
                      >
                        (15 d)
                      </span>
                    </label>
                  </td>
                  <td>
                    <label className="checkbox style-d">
                      <input
                        type="hidden"
                        className="form-control quantity int-txt w-100px"
                        id="quantity_monthly_40"
                        defaultValue={1}
                        min={1}
                      />
                      <input
                        type="hidden"
                        className="form-control product_name int-txt w-100px"
                        id="product_monthly_40"
                        defaultValue="On Home Page"
                      />
                      <input
                        type="hidden"
                        className="form-control product_price int-txt w-100px"
                        id="price_monthly_40"
                        defaultValue={500}
                      />
                      <input
                        type="hidden"
                        className="form-control image int-txt w-100px"
                        id="image_monthly_40"
                        defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/airdrop-box-banner.webp"
                      />
                      <input
                        type="checkbox"
                        onclick="addToCard(this,'monthly_40')"
                        id="monthly_40"
                        data-product-id="monthly_40"
                      />
                      <span className="checkbox__checkmark checkbox-green" />
                      <span className="checkbox__body">$500</span>
                      <span
                        className="small ms-1 "
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-bs-title="30 days"
                      >
                        (30 d)
                      </span>
                    </label>
                  </td>
                </tr>
              </tfoot>
            </table>
            <div className="text-center mb-3">
              <span className="rounded-3 h5 px-4 py-1 text-white blue-gradient">
                Presale / ICO Marketing
              </span>
            </div>
            <table
              className="table-striped table table-bordered table-responsive d-block d-xxl-table border advertisment-tbl mb-5"
              id="list-item-5"
            >
              <thead className="text-center text-wrap blue-gradient">
                <tr>
                  <th rowSpan={2}>Presale / ICO Marketing</th>
                  <th>Link</th>
                  <th rowSpan={2} colSpan={2}>
                    Sample
                  </th>
                  <th>Crypto</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={5}>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="fs-5">
                        {" "}
                        Complete ICO/IDO package
                        <a
                          href="https://t.me/deepagupta2425"
                          title="Book Now"
                          className="advertisment-btn blue-gradient rounded-2 small-btn ms-2"
                        >
                          Book Now{" "}
                          <i className="fa-solid fa-paper-plane small ms-2" />
                        </a>
                      </span>
                      <label className="checkbox style-d">
                        <input
                          type="hidden"
                          className="form-control quantity int-txt w-100px"
                          id="quantity_crypto_41"
                          defaultValue={1}
                          min={1}
                        />
                        <input
                          type="hidden"
                          className="form-control product_name int-txt w-100px"
                          id="product_crypto_41"
                          defaultValue="Complete ICO/IDO package"
                        />
                        <input
                          type="hidden"
                          className="form-control product_price int-txt w-100px"
                          id="price_crypto_41"
                          defaultValue={800}
                        />
                        <input
                          type="checkbox"
                          onclick="addToCard(this,'crypto_41')"
                          id="crypto_41"
                          data-product-id="crypto_41"
                        />
                        <span className="checkbox__checkmark checkbox-blue mt-1" />
                        <span className="checkbox__body fs-5">$800</span>
                      </label>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Premium Listing on Home Page &amp; Listing Table</td>
                  <td className="text-center">
                    <a
                      href="https://www.coingabbar.com"
                      title="Website Link"
                      className="samplelink blue-gradient"
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square" />
                      <span className="d-none">Home</span>
                    </a>
                    <a
                      href="https://www.coingabbar.com/en/crypto-latest-ico"
                      title="Website Link"
                      className="samplelink blue-gradient"
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square" />
                      <span className="d-none">crypto latest ico</span>
                    </a>
                  </td>
                  <td colSpan={2} className="text-center">
                    <div className="samplelink blue-gradient text-white cursor-pointer">
                      <i
                        className="fa-solid fa-image"
                        data-bs-toggle="modal"
                        data-bs-target="#banner-Modal"
                        data-img-src="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/ico-Premium-listing.webp"
                      />
                    </div>
                  </td>
                  <td className="text-start">
                    <label className="checkbox style-d">
                      <input
                        type="hidden"
                        className="form-control quantity int-txt w-100px"
                        id="quantity_crypto_42"
                        defaultValue={1}
                        min={1}
                      />
                      <input
                        type="hidden"
                        className="form-control product_name int-txt w-100px"
                        id="product_crypto_42"
                        defaultValue="Premium Listing on Home Page & Listing Table	
"
                      />
                      <input
                        type="hidden"
                        className="form-control product_price int-txt w-100px"
                        id="price_crypto_42"
                        defaultValue={500}
                      />
                      <input
                        type="hidden"
                        className="form-control image int-txt w-100px"
                        id="image_crypto_42"
                        defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/ico-Premium-listing.webp"
                      />
                      <input
                        type="checkbox"
                        onclick="addToCard(this,'crypto_42')"
                        id="crypto_42"
                        data-product-id="crypto_42"
                      />
                      <span className="checkbox__checkmark checkbox-blue" />
                      <span className="checkbox__body">$500</span>
                    </label>
                  </td>
                </tr>
                <tr>
                  <td>Featured Listing at top on ICO Page</td>
                  <td className="text-center">
                    <a
                      href="https://www.coingabbar.com/en/crypto-latest-ico"
                      title="Website Link"
                      className="samplelink blue-gradient"
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square" />
                      <span className="d-none">crypto latest ico</span>
                    </a>
                  </td>
                  <td colSpan={2} className="text-center">
                    <div className="samplelink blue-gradient text-white cursor-pointer">
                      <i
                        className="fa-solid fa-image"
                        data-bs-toggle="modal"
                        data-bs-target="#banner-Modal"
                        data-img-src="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/ico-featured-listing.webp"
                      />
                    </div>
                  </td>
                  <td className="text-start">
                    <label className="checkbox style-d">
                      <input
                        type="hidden"
                        className="form-control quantity int-txt w-100px"
                        id="quantity_crypto_43"
                        defaultValue={1}
                        min={1}
                      />
                      <input
                        type="hidden"
                        className="form-control product_name int-txt w-100px"
                        id="product_crypto_43"
                        defaultValue="Featured Listing at top on ICO Page"
                      />
                      <input
                        type="hidden"
                        className="form-control product_price int-txt w-100px"
                        id="price_crypto_43"
                        defaultValue={50}
                      />
                      <input
                        type="hidden"
                        className="form-control image int-txt w-100px"
                        id="image_crypto_43"
                        defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/ico-featured-listing.webp"
                      />
                      <input
                        type="checkbox"
                        onclick="addToCard(this,'crypto_43')"
                        id="crypto_43"
                        data-product-id="crypto_43"
                      />
                      <span className="checkbox__checkmark checkbox-blue" />
                      <span className="checkbox__body">$50</span>
                    </label>
                  </td>
                </tr>
                <tr>
                  <td>Banner on ICO Page</td>
                  <td className="text-center">
                    <a
                      href="https://www.coingabbar.com/en/crypto-latest-ico"
                      title="Website Link"
                      className="samplelink blue-gradient"
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square" />
                      <span className="d-none">crypto latest ico</span>
                    </a>
                  </td>
                  <td colSpan={2} className="text-center">
                    <div className="samplelink blue-gradient text-white cursor-pointer">
                      <i
                        className="fa-solid fa-image"
                        data-bs-toggle="modal"
                        data-bs-target="#banner-Modal"
                        data-img-src="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/ico-box-banner.webp"
                      />
                    </div>
                  </td>
                  <td className="text-start">
                    <label className="checkbox style-d">
                      <input
                        type="hidden"
                        className="form-control quantity int-txt w-100px"
                        id="quantity_crypto_44"
                        defaultValue={1}
                        min={1}
                      />
                      <input
                        type="hidden"
                        className="form-control product_name int-txt w-100px"
                        id="product_crypto_44"
                        defaultValue="Banner on ICO Page"
                      />
                      <input
                        type="hidden"
                        className="form-control product_price int-txt w-100px"
                        id="price_crypto_44"
                        defaultValue={150}
                      />
                      <input
                        type="hidden"
                        className="form-control image int-txt w-100px"
                        id="image_crypto_44"
                        defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/ico-box-banner.webp"
                      />
                      <input
                        type="checkbox"
                        onclick="addToCard(this,'crypto_44')"
                        id="crypto_44"
                        data-product-id="crypto_44"
                      />
                      <span className="checkbox__checkmark checkbox-blue" />
                      <span className="checkbox__body">$150</span>
                    </label>
                  </td>
                </tr>
                <tr>
                  <td>Mailing to 50k+ Reg. users</td>
                  <td className="text-center">-</td>
                  <td colSpan={2} className="text-center">
                    <div className="samplelink blue-gradient text-white cursor-pointer">
                      <i
                        className="fa-solid fa-image"
                        data-bs-toggle="modal"
                        data-bs-target="#banner-Modal"
                        data-img-src="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/email-reg-user-mail.webp"
                      />
                    </div>
                  </td>
                  <td className="text-start">
                    <label className="checkbox style-d">
                      <input
                        type="hidden"
                        className="form-control quantity int-txt w-100px"
                        id="quantity_crypto_45"
                        defaultValue={1}
                        min={1}
                      />
                      <input
                        type="hidden"
                        className="form-control product_name int-txt w-100px"
                        id="product_crypto_45"
                        defaultValue="Mailing to 50k+ Reg. users"
                      />
                      <input
                        type="hidden"
                        className="form-control product_price int-txt w-100px"
                        id="price_crypto_45"
                        defaultValue={150}
                      />
                      <input
                        type="hidden"
                        className="form-control image int-txt w-100px"
                        id="image_crypto_45"
                        defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/email-reg-user-mail.webp"
                      />
                      <input
                        type="checkbox"
                        onclick="addToCard(this,'crypto_45')"
                        id="crypto_45"
                        data-product-id="crypto_45"
                      />
                      <span className="checkbox__checkmark checkbox-blue" />
                      <span className="checkbox__body">$150</span>
                    </label>
                  </td>
                </tr>
                <tr>
                  <td>Sharing on Social Media</td>
                  <td className="text-center">
                    <div className="d-flex justify-content-center align-items-center">
                      <a
                        href="https://x.com/coin_gabbar_"
                        className="samplelink mx-1 bg-dark"
                        title="Twitter"
                        rel="noreferrer noopener"
                      >
                        <i className="fa-brands fa-x-twitter" />
                      </a>
                      <a
                        href="https://t.me/gabbarcommunity"
                        className="samplelink mx-1 tele-bg"
                        title="Twitter"
                        rel="noreferrer noopener"
                      >
                        <i className="fa-solid fa-paper-plane small" />
                      </a>
                      <a
                        href="https://www.linkedin.com/company/79924225/admin/feed/posts/"
                        className="samplelink mx-1 linkdin-bg"
                        title="Linkedin"
                        rel="noreferrer noopener"
                      >
                        <i className="fa-brands fa-linkedin-in" />
                      </a>
                      <a
                        href="https://www.instagram.com/coingabbar/"
                        className="samplelink mx-1 insta-bg"
                        title="Instagram"
                        rel="noreferrer noopener"
                      >
                        <i className="fa-brands fa-instagram" />
                      </a>
                    </div>
                  </td>
                  <td colSpan={2} className="text-center">
                    -
                  </td>
                  <td className="text-start">
                    <label className="checkbox style-d">
                      <input
                        type="hidden"
                        className="form-control quantity int-txt w-100px"
                        id="quantity_crypto_46"
                        defaultValue={1}
                        min={1}
                      />
                      <input
                        type="hidden"
                        className="form-control product_name int-txt w-100px"
                        id="product_crypto_46"
                        defaultValue="Sharing on Social Media"
                      />
                      <input
                        type="hidden"
                        className="form-control product_price int-txt w-100px"
                        id="price_crypto_46"
                        defaultValue={150}
                      />
                      <input
                        type="checkbox"
                        onclick="addToCard(this,'crypto_46')"
                        id="crypto_46"
                        data-product-id="crypto_46"
                      />
                      <span className="checkbox__checkmark checkbox-blue" />
                      <span className="checkbox__body">$150</span>
                    </label>
                  </td>
                </tr>
                <tr>
                  <td>
                    Organic blog
                    <span className="small text-muted d-block">
                      (Shared on Binance, CMC, Gate.io &amp; 30+ website)
                    </span>
                  </td>
                  <td>
                    <div className="d-flex justify-content-center align-items-center">
                      <a
                        href="https://www.binance.com/en/square/profile/coingabbar"
                        className="samplelink bg-bnb align-middle mx-1"
                        rel="noreferrer noopener"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-bs-title="Binance"
                        aria-label="Binance"
                        data-bs-original-title="Binance"
                        aria-describedby="tooltip307078"
                      >
                        <img
                          src="https://www.coingabbar.com/new/images/bnb-icon.svg"
                          alt="Binance"
                          width={15}
                          height={15}
                        />
                      </a>
                      <a
                        href="https://coinmarketcap.com/community/profile/Coin_Gabbar/"
                        className="samplelink align-middle mx-1"
                        title="CMC"
                        rel="noreferrer noopener"
                      >
                        <img
                          src="https://www.coingabbar.com/new/images/coinmarketcap.svg"
                          className="rounded-circle"
                          alt="CMC"
                          width={24}
                          height={24}
                        />
                      </a>
                      <span
                        className="samplelink align-middle mx-1"
                        title="Gate.io"
                      >
                        <img
                          src="https://www.coingabbar.com/new/images/gateio-logo.webp"
                          alt="Gate.Io"
                          className="rounded-circle"
                          width={24}
                          height={24}
                        />
                      </span>
                      <a
                        href="https://docs.google.com/spreadsheets/d/1W-tHIZal4Gv5slFqI_GmsGRKvsi7wK9UQNCd93_YG2I/edit?gid=0#gid=0"
                        className="samplelink blue-gradient mx-1"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-bs-title="30+ Websites"
                        aria-label="Sheet"
                        data-bs-original-title="Sheet"
                      >
                        <i className="fa-solid fa-sheet-plastic" />
                      </a>
                    </div>
                  </td>
                  <td colSpan={2} className="text-center">
                    <a
                      href="https://www.coingabbar.com/en/crypto-blogs-english"
                      className="samplelink blue-gradient"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-title="Sample"
                      aria-label="Sample"
                      data-bs-original-title="Sample"
                    >
                      <i className="fa-solid fa-link" />
                      <span className="d-none">crypto blogs english</span>
                    </a>
                  </td>
                  <td className="text-start">
                    <label className="checkbox style-d">
                      <input
                        type="hidden"
                        className="form-control quantity int-txt w-100px"
                        id="quantity_crypto_47"
                        defaultValue={1}
                        min={1}
                      />
                      <input
                        type="hidden"
                        className="form-control product_name int-txt w-100px"
                        id="product_crypto_47"
                        defaultValue="Organic blog"
                      />
                      <input
                        type="hidden"
                        className="form-control product_price int-txt w-100px"
                        id="price_crypto_47"
                        defaultValue={250}
                      />
                      <input
                        type="checkbox"
                        onclick="addToCard(this,'crypto_47')"
                        id="crypto_47"
                        data-product-id="crypto_47"
                      />
                      <span className="checkbox__checkmark checkbox-blue" />
                      <span className="checkbox__body">$250</span>
                    </label>
                  </td>
                </tr>
                <tr>
                  <td>
                    Listicle Blog
                    <span className="small text-muted d-block">
                      (Top 5 ICO Presale - weekly)
                    </span>
                  </td>
                  <td className="text-center">
                    <a
                      href="https://www.coingabbar.com/en/crypto-blogs-details/bitcoin-cash-and-flare-investors-flock-to-rollblock"
                      className="samplelink blue-gradient"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-title="English Link"
                      aria-label="English Link"
                      data-bs-original-title="English Link"
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square" />
                      <span className="d-none">crypto blogs details</span>
                    </a>
                    <a
                      href="https://www.coingabbar.com/en/crypto-blogs-details/the-never-ending-cycle-how-cryptocurrency-whales-make-money"
                      className="samplelink blue-gradient"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-title="Hindi Link"
                      aria-label="Hindi Link"
                      data-bs-original-title="Hindi Link"
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square" />
                      <span className="d-none">crypto blogs details</span>
                    </a>
                  </td>
                  <td colSpan={2} className="text-center">
                    -
                  </td>
                  <td className="text-start">
                    <label className="checkbox style-d">
                      <input
                        type="hidden"
                        className="form-control quantity int-txt w-100px"
                        id="quantity_crypto_48"
                        defaultValue={1}
                        min={1}
                      />
                      <input
                        type="hidden"
                        className="form-control product_name int-txt w-100px"
                        id="product_crypto_48"
                        defaultValue="Listicle Blog
"
                      />
                      <input
                        type="hidden"
                        className="form-control product_price int-txt w-100px"
                        id="price_crypto_48"
                        defaultValue={50}
                      />
                      <input
                        type="checkbox"
                        onclick="addToCard(this,'crypto_48')"
                        id="crypto_48"
                        data-product-id="crypto_48"
                      />
                      <span className="checkbox__checkmark checkbox-blue" />
                      <span className="checkbox__body">$50</span>
                    </label>
                  </td>
                </tr>
                <tr>
                  <td>
                    Listicle Blog
                    <span className="small text-muted d-block">
                      (Top 5 Tokens to Buy - weekly)
                    </span>
                  </td>
                  <td className="text-center">
                    <a
                      href="https://www.coingabbar.com/en/crypto-blogs-details/top-telegram-bots-token-to-buy-now"
                      className="samplelink blue-gradient"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-title="English Link"
                      aria-label="English Link"
                      data-bs-original-title="English Link"
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square" />
                    </a>
                    <a
                      href="https://www.coingabbar.com/en/crypto-blogs-details/rollblock-presale-secure-ethereum-gambling-token"
                      className="samplelink blue-gradient"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-title="Hindi Link"
                      aria-label="Hindi Link"
                      data-bs-original-title="Hindi Link"
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square" />
                    </a>
                  </td>
                  <td colSpan={2} className="text-center">
                    -
                  </td>
                  <td className="text-start">
                    <label className="checkbox style-d">
                      <input
                        type="hidden"
                        className="form-control quantity int-txt w-100px"
                        id="quantity_crypto_49"
                        defaultValue={1}
                        min={1}
                      />
                      <input
                        type="hidden"
                        className="form-control product_name int-txt w-100px"
                        id="product_crypto_49"
                        defaultValue="Listicle Blog"
                      />
                      <input
                        type="hidden"
                        className="form-control product_price int-txt w-100px"
                        id="price_crypto_49"
                        defaultValue={50}
                      />
                      <input
                        type="checkbox"
                        onclick="addToCard(this,'crypto_49')"
                        id="crypto_49"
                        data-product-id="crypto_49"
                      />
                      <span className="checkbox__checkmark checkbox-blue" />
                      <span className="checkbox__body">$50</span>
                    </label>
                  </td>
                </tr>
                <tr>
                  <td>Live AMA</td>
                  <td className="text-center">
                    <div className="d-flex justify-content-center align-items-center">
                      <a
                        href="https://www.binance.com/en/square/profile/coingabbar"
                        className="samplelink mx-1 bg-bnb align-middle"
                        title="Binance"
                        rel="noreferrer noopener"
                      >
                        <img
                          src="https://www.coingabbar.com/new/images/bnb-icon.svg"
                          alt="Binance"
                          width={15}
                          height={15}
                        />
                      </a>
                      <a
                        href="https://x.com/coin_gabbar_"
                        className="samplelink mx-1 bg-dark"
                        title="Twitter"
                        rel="noreferrer noopener"
                      >
                        <i className="fa-brands fa-x-twitter" />
                      </a>
                      <a
                        href="https://www.youtube.com/@coingabbarofficial"
                        className="samplelink mx-1 bg-danger"
                        title="YouTube"
                        rel="noreferrer noopener"
                      >
                        <i className="fa-brands fa-youtube" />
                      </a>
                      <a
                        href="https://www.linkedin.com/company/79924225/admin/feed/posts/"
                        className="samplelink mx-1 linkdin-bg"
                        title="Linkedin"
                        rel="noreferrer noopener"
                      >
                        <i className="fa-brands fa-linkedin-in" />
                      </a>
                    </div>
                  </td>
                  <td colSpan={2} className="text-center">
                    <a
                      href="https://www.binance.com/en/live/video?roomId=2204915"
                      className="samplelink blue-gradient"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-title="Sample 1"
                      aria-label="Sample 1"
                      data-bs-original-title="Sample 1"
                    >
                      <i className="fa-solid fa-link" />
                    </a>
                  </td>
                  <td className="text-start">
                    <label className="checkbox style-d">
                      <input
                        type="hidden"
                        className="form-control quantity int-txt w-100px"
                        id="quantity_crypto_50"
                        defaultValue={1}
                        min={1}
                      />
                      <input
                        type="hidden"
                        className="form-control product_name int-txt w-100px"
                        id="product_crypto_50"
                        defaultValue="Live AMA"
                      />
                      <input
                        type="hidden"
                        className="form-control product_price int-txt w-100px"
                        id="price_crypto_50"
                        defaultValue={100}
                      />
                      <input
                        type="checkbox"
                        onclick="addToCard(this,'crypto_50')"
                        id="crypto_50"
                        data-product-id="crypto_50"
                      />
                      <span className="checkbox__checkmark checkbox-blue" />
                      <span className="checkbox__body">$100</span>
                    </label>
                  </td>
                </tr>
                <tr>
                  <td>
                    Youtube video
                    <span className="small text-muted d-block">
                      (Created &amp; Published)
                    </span>
                  </td>
                  <td className="text-center">
                    <a
                      href="https://www.youtube.com/@coingabbarofficial"
                      className="samplelink mx-1 bg-danger"
                      title="YouTube"
                      rel="noreferrer noopener"
                    >
                      <i className="fa-brands fa-youtube" />
                    </a>
                  </td>
                  <td colSpan={2} className="text-center">
                    <a
                      href="https://youtu.be/hOke6Lt3yNM?si=xKLnc5VbmrDyXEkW"
                      className="samplelink blue-gradient"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-title="Sample 1"
                      aria-label="Sample 1"
                      data-bs-original-title="Sample 1"
                    >
                      <i className="fa-solid fa-link" />
                    </a>
                    <a
                      href="https://youtu.be/siIFcimfjA8?si=KuvMxrnYD2JtCEM8"
                      className="samplelink blue-gradient"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-title="Sample 2"
                      aria-label="Sample 1"
                      data-bs-original-title="Sample 1"
                    >
                      <i className="fa-solid fa-link" />
                    </a>
                  </td>
                  <td className="text-start">
                    <label className="checkbox style-d">
                      <input
                        type="hidden"
                        className="form-control quantity int-txt w-100px"
                        id="quantity_crypto_51"
                        defaultValue={1}
                        min={1}
                      />
                      <input
                        type="hidden"
                        className="form-control product_name int-txt w-100px"
                        id="product_crypto_51"
                        defaultValue="Youtube video"
                      />
                      <input
                        type="hidden"
                        className="form-control product_price int-txt w-100px"
                        id="price_crypto_51"
                        defaultValue={100}
                      />
                      <input
                        type="checkbox"
                        onclick="addToCard(this,'crypto_51')"
                        id="crypto_51"
                        data-product-id="crypto_51"
                      />
                      <span className="checkbox__checkmark checkbox-blue" />
                      <span className="checkbox__body">$100</span>
                    </label>
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td>Add ons with Presale / ICO Package</td>
                  <td className="fw-semibold">
                    <div className="d-flex justify-content-between align-items-center flex-wrap">
                      On Home Page
                      <div>
                        <div className="samplelink blue-gradient text-white cursor-pointer">
                          <i
                            className="fa-solid fa-image"
                            data-bs-toggle="modal"
                            data-bs-target="#banner-Modal"
                            data-img-src="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/ico-homepage-box-banner.webp"
                          />
                        </div>
                        <a
                          href="https://www.coingabbar.com"
                          className="samplelink blue-gradient"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-title="Sample 1"
                          data-bs-original-title="Sample 1"
                        >
                          <i className="fa-solid fa-link" />
                          <span className="d-none">Sample 1</span>
                        </a>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center flex-wrap">
                      On ICO Listing Table
                      <div>
                        <div className="samplelink blue-gradient text-white cursor-pointer">
                          <i
                            className="fa-solid fa-image"
                            data-bs-toggle="modal"
                            data-bs-target="#banner-Modal"
                            data-img-src="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/ico-box-banner.webp"
                          />
                        </div>
                        <a
                          href="https://www.coingabbar.com/en/crypto-latest-ico"
                          className="samplelink blue-gradient"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-title="Sample 1"
                          data-bs-original-title="Sample 1"
                        >
                          <i className="fa-solid fa-link" />
                          <span className="d-none">crypto latest ico</span>
                        </a>
                      </div>
                    </div>
                  </td>
                  <td>
                    <label className="checkbox style-d">
                      <input
                        type="hidden"
                        className="form-control quantity int-txt w-100px"
                        id="quantity_weekly_7"
                        defaultValue={1}
                        min={1}
                      />
                      <input
                        type="hidden"
                        className="form-control product_name int-txt w-100px"
                        id="product_weekly_7"
                        defaultValue="On Home Page"
                      />
                      <input
                        type="hidden"
                        className="form-control product_price int-txt w-100px"
                        id="price_weekly_7"
                        defaultValue={200}
                      />
                      <input
                        type="hidden"
                        className="form-control image int-txt w-100px"
                        id="image_weekly_7"
                        defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/ico-homepage-box-banner.webp"
                      />
                      <input
                        type="checkbox"
                        onclick="addToCard(this,'weekly_7')"
                        id="weekly_7"
                        data-product-id="weekly_52"
                      />
                      <span className="checkbox__checkmark checkbox-blue" />
                      <span className="checkbox__body">$200</span>
                      <span
                        className="small ms-1 "
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-bs-title="7 days"
                      >
                        (7 d)
                      </span>
                    </label>
                  </td>
                  <td>
                    <label className="checkbox style-d">
                      <input
                        type="hidden"
                        className="form-control quantity int-txt w-100px"
                        id="quantity_fortnightly_7"
                        defaultValue={1}
                        min={1}
                      />
                      <input
                        type="hidden"
                        className="form-control product_name int-txt w-100px"
                        id="product_fortnightly_7"
                        defaultValue="On Home Page"
                      />
                      <input
                        type="hidden"
                        className="form-control product_price int-txt w-100px"
                        id="price_fortnightly_7"
                        defaultValue={350}
                      />
                      <input
                        type="hidden"
                        className="form-control image int-txt w-100px"
                        id="image_fortnightly_7"
                        defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/ico-homepage-box-banner.webp"
                      />
                      <input
                        type="checkbox"
                        onclick="addToCard(this,'fortnightly_7')"
                        id="fortnightly_7"
                        data-product-id="fortnightly_52"
                      />
                      <span className="checkbox__checkmark checkbox-blue" />
                      <span className="checkbox__body">$350</span>
                      <span
                        className="small ms-1 "
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-bs-title="15 days"
                      >
                        (15 d)
                      </span>
                    </label>
                  </td>
                  <td>
                    <label className="checkbox style-d">
                      <input
                        type="hidden"
                        className="form-control quantity int-txt w-100px"
                        id="quantity_monthly_7"
                        defaultValue={1}
                        min={1}
                      />
                      <input
                        type="hidden"
                        className="form-control product_name int-txt w-100px"
                        id="product_monthly_7"
                        defaultValue="On Home Page"
                      />
                      <input
                        type="hidden"
                        className="form-control product_price int-txt w-100px"
                        id="price_monthly_7"
                        defaultValue={500}
                      />
                      <input
                        type="hidden"
                        className="form-control image int-txt w-100px"
                        id="image_monthly_7"
                        defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/ico-homepage-box-banner.webp"
                      />
                      <input
                        type="checkbox"
                        onclick="addToCard(this,'monthly_7')"
                        id="monthly_7"
                        className=""
                        data-product-id="monthly_52"
                      />
                      <span className="checkbox__checkmark checkbox-blue" />
                      <span className="checkbox__body">$500</span>
                      <span
                        className="small ms-1 "
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-bs-title="30 days"
                      >
                        (30 d)
                      </span>
                    </label>
                  </td>
                </tr>
              </tfoot>
            </table>
            <div className="text-center mb-3">
              <span className="rounded-3 h5 px-4 py-1 text-white red-gradient">
                Event Campaign
              </span>
            </div>
            <table
              className="table-striped table table-bordered table-responsive d-block d-sm-table border advertisment-tbl mb-5"
              id="list-item-6"
            >
              <thead className="text-center text-wrap red-gradient">
                <tr>
                  <th rowSpan={2}>Event Campaign</th>
                  <th>Link</th>
                  <th rowSpan={2}>Sample</th>
                  <th>Crypto</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={4}>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="fs-5">
                        Event Campaign
                        <a
                          href="https://t.me/Event_Gabbar"
                          title="Book Now"
                          className="advertisment-btn red-gradient rounded-2 small-btn ms-2"
                        >
                          Book Now{" "}
                          <i className="fa-solid fa-paper-plane small ms-2" />
                        </a>
                      </span>
                      <label className="checkbox style-d">
                        <input
                          type="hidden"
                          className="form-control quantity int-txt w-100px"
                          id="quantity_crypto_53"
                          defaultValue={1}
                          min={1}
                        />
                        <input
                          type="hidden"
                          className="form-control product_name int-txt w-100px"
                          id="product_crypto_53"
                          defaultValue="Event Campaign"
                        />
                        <input
                          type="hidden"
                          className="form-control product_price int-txt w-100px"
                          id="price_crypto_53"
                          defaultValue={250}
                        />
                        <input
                          type="checkbox"
                          onclick="addToCard(this,'crypto_53')"
                          id="crypto_53"
                          data-product-id="crypto_53"
                        />
                        <span className="checkbox__checkmark checkbox-red" />
                        <span className="checkbox__body">$250</span>
                      </label>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Featured Listing at top on Event Page</td>
                  <td className="text-center">
                    <a
                      href="https://www.coingabbar.com/en/coin-events-calendar"
                      title="Website Link"
                      className="samplelink red-gradient"
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square" />
                      <span className="d-none">coin events calendar</span>
                    </a>
                  </td>
                  <td className="text-center">
                    <div className="samplelink red-gradient text-white cursor-pointer">
                      <i
                        className="fa-solid fa-image"
                        data-bs-toggle="modal"
                        data-bs-target="#banner-Modal"
                        data-img-src="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/event-featured-listing.webp"
                      />
                    </div>
                  </td>
                  <td className="text-start">
                    <label className="checkbox style-d">
                      <input
                        type="hidden"
                        className="form-control quantity int-txt w-100px"
                        id="quantity_crypto_54"
                        defaultValue={1}
                        min={1}
                      />
                      <input
                        type="hidden"
                        className="form-control product_name int-txt w-100px"
                        id="product_crypto_54"
                        defaultValue="Featured Listing at top on Event Page"
                      />
                      <input
                        type="hidden"
                        className="form-control product_price int-txt w-100px"
                        id="price_crypto_54"
                        defaultValue={50}
                      />
                      <input
                        type="hidden"
                        className="form-control image int-txt w-100px"
                        id="image_crypto_54"
                        defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/event-featured-listing.webp"
                      />
                      <input
                        type="checkbox"
                        onclick="addToCard(this,'crypto_54')"
                        id="crypto_54"
                        data-product-id="crypto_54"
                      />
                      <span className="checkbox__checkmark checkbox-red" />
                      <span className="checkbox__body">$50</span>
                    </label>
                  </td>
                </tr>
                <tr>
                  <td>Banner on Event Page</td>
                  <td className="text-center">
                    <a
                      href="https://www.coingabbar.com/en/coin-events-calendar"
                      title="Website Link"
                      className="samplelink red-gradient"
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square" />
                    </a>
                  </td>
                  <td className="text-center">
                    <div className="samplelink red-gradient text-white cursor-pointer">
                      <i
                        className="fa-solid fa-image"
                        data-bs-toggle="modal"
                        data-bs-target="#banner-Modal"
                        data-img-src="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/event-banner.webp"
                      />
                    </div>
                  </td>
                  <td className="text-start">
                    <label className="checkbox style-d">
                      <input
                        type="hidden"
                        className="form-control quantity int-txt w-100px"
                        id="quantity_crypto_55"
                        defaultValue={1}
                        min={1}
                      />
                      <input
                        type="hidden"
                        className="form-control product_name int-txt w-100px"
                        id="product_crypto_55"
                        defaultValue="Banner on Event Page"
                      />
                      <input
                        type="hidden"
                        className="form-control product_price int-txt w-100px"
                        id="price_crypto_55"
                        defaultValue={150}
                      />
                      <input
                        type="hidden"
                        className="form-control image int-txt w-100px"
                        id="image_crypto_55"
                        defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/event-banner.webp"
                      />
                      <input
                        type="checkbox"
                        onclick="addToCard(this,'crypto_55')"
                        id="crypto_55"
                        data-product-id="crypto_55"
                      />
                      <span className="checkbox__checkmark checkbox-red" />
                      <span className="checkbox__body">$150</span>
                    </label>
                  </td>
                </tr>
                <tr>
                  <td>Mailing to 50k+ Reg. users</td>
                  <td className="text-center">-</td>
                  <td className="text-center">
                    <div className="samplelink red-gradient text-white cursor-pointer">
                      <i
                        className="fa-solid fa-image"
                        data-bs-toggle="modal"
                        data-bs-target="#banner-Modal"
                        data-img-src="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/email-reg-user-mail.webp"
                      />
                    </div>
                  </td>
                  <td className="text-start">
                    <label className="checkbox style-d">
                      <input
                        type="hidden"
                        className="form-control quantity int-txt w-100px"
                        id="quantity_crypto_56"
                        defaultValue={1}
                        min={1}
                      />
                      <input
                        type="hidden"
                        className="form-control product_name int-txt w-100px"
                        id="product_crypto_56"
                        defaultValue="Mailing to 50k+ Reg. users"
                      />
                      <input
                        type="hidden"
                        className="form-control product_price int-txt w-100px"
                        id="price_crypto_56"
                        defaultValue={50}
                      />
                      <input
                        type="hidden"
                        className="form-control image int-txt w-100px"
                        id="image_crypto_56"
                        defaultValue="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/email-reg-user-mail.webp"
                      />
                      <input
                        type="checkbox"
                        onclick="addToCard(this,'crypto_56')"
                        id="crypto_56"
                        data-product-id="crypto_56"
                      />
                      <span className="checkbox__checkmark checkbox-red" />
                      <span className="checkbox__body">$50</span>
                    </label>
                  </td>
                </tr>
                <tr>
                  <td>Sharing on Social Media</td>
                  <td className="text-center">
                    <div className="d-flex justify-content-center align-items-center">
                      <a
                        href="https://x.com/coin_gabbar_"
                        className="samplelink mx-1 bg-dark"
                        title="Twitter"
                        rel="noreferrer noopener"
                      >
                        <i className="fa-brands fa-x-twitter" />
                      </a>
                      <a
                        href="https://t.me/gabbarcommunity"
                        className="samplelink mx-1 tele-bg"
                        title="Telegram"
                        rel="noreferrer noopener"
                      >
                        <i className="fa-solid fa-paper-plane small" />
                      </a>
                      <a
                        href="https://www.linkedin.com/company/79924225/admin/feed/posts/"
                        className="samplelink mx-1 linkdin-bg"
                        title="Linkedin"
                        rel="noreferrer noopener"
                      >
                        <i className="fa-brands fa-linkedin-in" />
                      </a>
                      <a
                        href="https://www.instagram.com/coingabbar/"
                        className="samplelink mx-1 insta-bg"
                        title="Instagram"
                        rel="noreferrer noopener"
                      >
                        <i className="fa-brands fa-instagram" />
                      </a>
                    </div>
                  </td>
                  <td className="text-center">-</td>
                  <td className="text-start">
                    <label className="checkbox style-d">
                      <input
                        type="hidden"
                        className="form-control quantity int-txt w-100px"
                        id="quantity_crypto_57"
                        defaultValue={1}
                        min={1}
                      />
                      <input
                        type="hidden"
                        className="form-control product_name int-txt w-100px"
                        id="product_crypto_57"
                        defaultValue="Sharing on Social Media"
                      />
                      <input
                        type="hidden"
                        className="form-control product_price int-txt w-100px"
                        id="price_crypto_57"
                        defaultValue={50}
                      />
                      <input
                        type="checkbox"
                        onclick="addToCard(this,'crypto_57')"
                        id="crypto_57"
                        data-product-id="crypto_57"
                      />
                      <span className="checkbox__checkmark checkbox-red" />
                      <span className="checkbox__body">$50</span>
                    </label>
                  </td>
                </tr>
                <tr>
                  <td>
                    Press Release
                    <span className="small text-muted d-block">
                      (2 Nos, one pre event &amp; one post event)
                    </span>
                  </td>
                  <td className="text-center">-</td>
                  <td className="text-center">
                    <a
                      href="https://www.coingabbar.com/en/crypto-press-release"
                      className="samplelink red-gradient"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-title="Sample 1"
                      data-bs-original-title="Sample 1"
                    >
                      <i className="fa-solid fa-link" />
                      <span className="d-none">crypto press release</span>
                    </a>
                  </td>
                  <td className="text-start">
                    <label className="checkbox style-d">
                      <input
                        type="hidden"
                        className="form-control quantity int-txt w-100px"
                        id="quantity_crypto_58"
                        defaultValue={1}
                        min={1}
                      />
                      <input
                        type="hidden"
                        className="form-control product_name int-txt w-100px"
                        id="product_crypto_58"
                        defaultValue="Press Release"
                      />
                      <input
                        type="hidden"
                        className="form-control product_price int-txt w-100px"
                        id="price_crypto_58"
                        defaultValue={150}
                      />
                      <input
                        type="checkbox"
                        onclick="addToCard(this,'crypto_58')"
                        id="crypto_58"
                        data-product-id="crypto_58"
                      />
                      <span className="checkbox__checkmark checkbox-red" />
                      <span className="checkbox__body">$150</span>
                    </label>
                  </td>
                </tr>
                <tr>
                  <td>Live AMA</td>
                  <td className="text-center">
                    <div className="d-flex justify-content-center align-items-center">
                      <a
                        href="https://www.binance.com/en/square/profile/coingabbar"
                        className="samplelink mx-1 bg-bnb align-middle"
                        title="Binance"
                        rel="noreferrer noopener"
                      >
                        <img
                          src="https://www.coingabbar.com/new/images/bnb-icon.svg"
                          alt="Binance"
                          width={15}
                          height={15}
                        />
                      </a>
                      <a
                        href="https://x.com/coin_gabbar_"
                        className="samplelink mx-1 bg-dark"
                        title="Twitter"
                        rel="noreferrer noopener"
                      >
                        <i className="fa-brands fa-x-twitter" />
                      </a>
                      <a
                        href="https://www.youtube.com/@coingabbarofficial"
                        className="samplelink mx-1 bg-danger"
                        title="YouTube"
                        rel="noreferrer noopener"
                      >
                        <i className="fa-brands fa-youtube" />
                      </a>
                      <a
                        href="https://www.linkedin.com/company/79924225/admin/feed/posts/"
                        className="samplelink mx-1 linkdin-bg"
                        title="Linkedin"
                        rel="noreferrer noopener"
                      >
                        <i className="fa-brands fa-linkedin-in" />
                      </a>
                    </div>
                  </td>
                  <td className="text-center">
                    <a
                      href="https://www.binance.com/en/live/video?roomId=2209177"
                      className="samplelink red-gradient"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-title="Sample 1"
                      aria-label="Sample 1"
                      data-bs-original-title="Sample 1"
                    >
                      <i className="fa-solid fa-link" />
                    </a>
                  </td>
                  <td className="text-start">
                    <label className="checkbox style-d">
                      <input
                        type="hidden"
                        className="form-control quantity int-txt w-100px"
                        id="quantity_crypto_59"
                        defaultValue={1}
                        min={1}
                      />
                      <input
                        type="hidden"
                        className="form-control product_name int-txt w-100px"
                        id="product_crypto_59"
                        defaultValue="Live AMA"
                      />
                      <input
                        type="hidden"
                        className="form-control product_price int-txt w-100px"
                        id="price_crypto_59"
                        defaultValue={100}
                      />
                      <input
                        type="checkbox"
                        onclick="addToCard(this,'crypto_59')"
                        id="crypto_59"
                        data-product-id="crypto_59"
                      />
                      <span className="checkbox__checkmark checkbox-red" />
                      <span className="checkbox__body">$100</span>
                    </label>
                  </td>
                </tr>
                <tr>
                  <td>
                    Youtube video posting
                    <span className="small text-muted d-block">
                      (Video to be shared by Event)
                    </span>
                  </td>
                  <td className="text-center">
                    <a
                      href="https://www.youtube.com/@coingabbarofficial"
                      className="samplelink mx-1 bg-danger"
                      title="YouTube"
                      rel="noreferrer noopener"
                    >
                      <i className="fa-brands fa-youtube" />
                    </a>
                  </td>
                  <td className="text-center">
                    <a
                      href="https://youtu.be/hOke6Lt3yNM?si=xKLnc5VbmrDyXEkW"
                      className="samplelink red-gradient"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-title="Sample 1"
                      aria-label="Sample 1"
                      data-bs-original-title="Sample 1"
                    >
                      <i className="fa-solid fa-link" />
                    </a>
                    <a
                      href="https://youtu.be/siIFcimfjA8?si=KuvMxrnYD2JtCEM8"
                      className="samplelink red-gradient"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-title="Sample 2"
                      aria-label="Sample 1"
                      data-bs-original-title="Sample 1"
                    >
                      <i className="fa-solid fa-link" />
                    </a>
                  </td>
                  <td className="text-start">
                    <label className="checkbox style-d">
                      <input
                        type="hidden"
                        className="form-control quantity int-txt w-100px"
                        id="quantity_crypto_60"
                        defaultValue={1}
                        min={1}
                      />
                      <input
                        type="hidden"
                        className="form-control product_name int-txt w-100px"
                        id="product_crypto_60"
                        defaultValue="Youtube video posting"
                      />
                      <input
                        type="hidden"
                        className="form-control product_price int-txt w-100px"
                        id="price_crypto_60"
                        defaultValue={100}
                      />
                      <input
                        type="checkbox"
                        onclick="addToCard(this,'crypto_60')"
                        id="crypto_60"
                        data-product-id="crypto_60"
                      />
                      <span className="checkbox__checkmark checkbox-red" />
                      <span className="checkbox__body">$100</span>
                    </label>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="text-center mb-3">
              <span className="rounded-3 h5 px-4 py-1 text-white sel-gradient">
                Monthly Content Package
              </span>
            </div>
            <table
              className="table-striped table table-bordered table-responsive d-block d-sm-table border advertisment-tbl mb-5"
              id="list-item-7"
            >
              <thead className="text-center text-wrap sel-gradient">
                <tr>
                  <th rowSpan={2}>Monthly Content Package</th>
                  <th>Link</th>
                  <th rowSpan={2}>Sample</th>
                  <th>Crypto</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={4}>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="fs-5">
                        Monthly Content Package
                        <a
                          href="https://t.me/Content_coingabbar"
                          title="Book Now"
                          className="advertisment-btn sel-gradient rounded-2 small-btn ms-2"
                        >
                          Book Now{" "}
                          <i className="fa-solid fa-paper-plane small ms-2" />
                        </a>
                      </span>
                      <label className="checkbox style-d">
                        <input
                          type="hidden"
                          className="form-control quantity int-txt w-100px"
                          id="quantity_crypto_61"
                          defaultValue={1}
                          min={1}
                        />
                        <input
                          type="hidden"
                          className="form-control product_name int-txt w-100px"
                          id="product_crypto_61"
                          defaultValue="Monthly Content Package"
                        />
                        <input
                          type="hidden"
                          className="form-control product_price int-txt w-100px"
                          id="price_crypto_61"
                          defaultValue={800}
                        />
                        <input
                          type="checkbox"
                          onclick="addToCard(this,'crypto_61')"
                          id="crypto_61"
                          data-product-id="crypto_61"
                        />
                        <span className="checkbox__checkmark checkbox-sel mt-1" />
                        <span className="checkbox__body fs-5">$800</span>
                      </label>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    Organic Blog
                    <span className="small text-muted d-block">
                      (4 Nos English - Weekly)
                    </span>
                  </td>
                  <td className="text-center">-</td>
                  <td className="text-center">
                    <a
                      href="https://www.coingabbar.com/en/crypto-blogs-english"
                      className="samplelink sel-gradient"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-title="Sample 1"
                      aria-label="Sample 1"
                      data-bs-original-title="Sample 1"
                    >
                      <i className="fa-solid fa-link" />
                      <span className="d-none">crypto blogs english</span>
                    </a>
                  </td>
                  <td className="text-center">-</td>
                </tr>
                <tr>
                  <td>
                    Press Release
                    <span className="small text-muted d-block">
                      (2 Nos English - Every Fortnight)
                    </span>
                  </td>
                  <td className="text-center">-</td>
                  <td className="text-center">
                    <a
                      href="https://www.coingabbar.com/en/crypto-press-release"
                      className="samplelink sel-gradient"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-title="Sample 1"
                      aria-label="Sample 1"
                      data-bs-original-title="Sample 1"
                    >
                      <i className="fa-solid fa-link" />
                      <span className="d-none">crypto-press-release</span>
                    </a>
                  </td>
                  <td className="text-center">-</td>
                </tr>
                <tr>
                  <td>
                    Price Prediction for Token
                    <span className="small text-muted d-block">
                      (2 Nos - Fortnightly)
                    </span>
                  </td>
                  <td className="text-center">-</td>
                  <td className="text-center">
                    <a
                      href="https://www.coingabbar.com/en/price-prediction"
                      className="samplelink sel-gradient"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-title="Sample 1"
                      aria-label="Sample 1"
                      data-bs-original-title="Sample 1"
                    >
                      <i className="fa-solid fa-link" />
                      <span className="d-none">price-prediction</span>
                    </a>
                  </td>
                  <td className="text-center">-</td>
                </tr>
                <tr>
                  <td>Magazine Cover Page in Next edition</td>
                  <td className="text-center">-</td>
                  <td className="text-center">
                    <a
                      href="https://d3iuzwoiyg9qa8.cloudfront.net/webadmin/storage/public/monthlyNewsletters/July2024/KRKMRiV1jONHC6MeURpoDPIOTlgsNnz5Xrg4qbce.pdf"
                      className="samplelink sel-gradient"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-title="Sample 1"
                      aria-label="Sample 1"
                      data-bs-original-title="Sample 1"
                    >
                      <i className="fa-solid fa-link" />
                    </a>
                  </td>
                  <td className="text-center">-</td>
                </tr>
                <tr>
                  <td>
                    Live AMA
                    <span className="small text-muted d-block">(1 Nos)</span>
                  </td>
                  <td className="text-center">
                    <div className="d-flex justify-content-center align-items-center">
                      <a
                        href="https://www.binance.com/en/square/profile/coingabbar"
                        className="samplelink mx-1 bg-bnb align-middle"
                        title="Binance"
                        rel="noreferrer noopener"
                      >
                        <img
                          src="https://www.coingabbar.com/new/images/bnb-icon.svg"
                          alt="Binance"
                          width={15}
                          height={15}
                        />
                      </a>
                      <a
                        href="https://x.com/coin_gabbar_"
                        className="samplelink mx-1 bg-dark"
                        title="Twitter"
                        rel="noreferrer noopener"
                      >
                        <i className="fa-brands fa-x-twitter" />
                      </a>
                      <a
                        href="https://www.youtube.com/@coingabbarofficial"
                        className="samplelink mx-1 bg-danger"
                        title="YouTube"
                        rel="noreferrer noopener"
                      >
                        <i className="fa-brands fa-youtube" />
                      </a>
                      <a
                        href="https://www.linkedin.com/company/79924225/admin/feed/posts/"
                        className="samplelink mx-1 linkdin-bg"
                        title="Linkedin"
                        rel="noreferrer noopener"
                      >
                        <i className="fa-brands fa-linkedin-in" />
                      </a>
                    </div>
                  </td>
                  <td className="text-center">
                    <a
                      href="https://www.binance.com/en/live/video?roomId=2209177"
                      className="samplelink sel-gradient"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-title="Sample 1"
                      aria-label="Sample 1"
                      data-bs-original-title="Sample 1"
                    >
                      <i className="fa-solid fa-link" />
                    </a>
                  </td>
                  <td className="text-center">-</td>
                </tr>
                <tr>
                  <td>Social Media Post</td>
                  <td className="text-center">
                    <div className="d-flex justify-content-center align-items-center">
                      <a
                        href="https://x.com/coin_gabbar_"
                        className="samplelink mx-1 bg-dark"
                        title="Twitter"
                        rel="noreferrer noopener"
                      >
                        <i className="fa-brands fa-x-twitter" />
                      </a>
                      <a
                        href="https://t.me/gabbarcommunity"
                        className="samplelink mx-1 tele-bg"
                        title="Telegram"
                        rel="noreferrer noopener"
                      >
                        <i className="fa-solid fa-paper-plane small" />
                      </a>
                      <a
                        href="https://www.linkedin.com/company/79924225/admin/feed/posts/"
                        className="samplelink mx-1 linkdin-bg"
                        title="Linkedin"
                        rel="noreferrer noopener"
                      >
                        <i className="fa-brands fa-linkedin-in" />
                      </a>
                      <a
                        href="https://www.instagram.com/coingabbar/"
                        className="samplelink mx-1 insta-bg"
                        title="Instagram"
                        rel="noreferrer noopener"
                      >
                        <i className="fa-brands fa-instagram" />
                      </a>
                    </div>
                  </td>
                  <td className="text-center">-</td>
                  <td className="text-center">-</td>
                </tr>
                <tr>
                  <td>Email to Users</td>
                  <td className="text-center">-</td>
                  <td className="text-center">
                    <div className="samplelink sel-gradient text-white">
                      <i
                        className="fa-solid fa-image"
                        data-bs-toggle="modal"
                        data-bs-target="#banner-Modal"
                        data-img-src="https://d3iuzwoiyg9qa8.cloudfront.net/advertise-banner/email-reg-user-mail.webp"
                      />
                    </div>
                  </td>
                  <td className="text-center">-</td>
                </tr>
                <tr>
                  <td>
                    Listicle Blog
                    <span className="small text-muted d-block">
                      (Top 5 Tokens to Buy - weekly)
                    </span>
                  </td>
                  <td className="text-center">
                    <a
                      href="https://www.coingabbar.com/en/crypto-blogs-details/explore-hidden-gems-with-top-5-crypto-tokens"
                      className="samplelink sel-gradient"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-title="English Link"
                      aria-label="English Link"
                      data-bs-original-title="English Link"
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square" />
                      <span className="d-none">crypto-blogs-details</span>
                    </a>
                    <a
                      href="https://www.coingabbar.com/en/crypto-blogs-details/top-telegram-bots-token-to-buy-now"
                      className="samplelink sel-gradient"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-title="Hindi Link"
                      aria-label="Hindi Link"
                      data-bs-original-title="Hindi Link"
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square" />
                      <span className="d-none">crypto-blogs-details</span>
                    </a>
                  </td>
                  <td className="text-center">-</td>
                  <td className="text-center">-</td>
                </tr>
                <tr>
                  <td>
                    Youtube video
                    <span className="small text-muted d-block">
                      (Created &amp; Published)
                    </span>
                  </td>
                  <td className="text-center">
                    <a
                      href="https://www.youtube.com/@coingabbarofficial"
                      className="samplelink mx-1 bg-danger"
                      title="YouTube"
                      rel="noreferrer noopener"
                    >
                      <i className="fa-brands fa-youtube" />
                    </a>
                  </td>
                  <td className="text-center">
                    <a
                      href="https://youtu.be/hOke6Lt3yNM?si=xKLnc5VbmrDyXEkW"
                      className="samplelink sel-gradient"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-title="Sample 1"
                      aria-label="Sample 1"
                      data-bs-original-title="Sample 1"
                    >
                      <i className="fa-solid fa-link" />
                    </a>
                    <a
                      href="https://youtu.be/siIFcimfjA8?si=KuvMxrnYD2JtCEM8"
                      className="samplelink sel-gradient"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-title="Sample 1"
                      aria-label="Sample 1"
                      data-bs-original-title="Sample 1"
                    >
                      <i className="fa-solid fa-link" />
                    </a>
                  </td>
                  <td className="text-center">-</td>
                </tr>
              </tbody>
            </table>
            <div className="text-center mb-3">
              <span className="rounded-3 h5 px-4 py-1 text-white purple-gradient">
                Monthly Social Media Management
              </span>
            </div>
            <table
              className="table-striped table table-bordered table-responsive d-block d-sm-table border advertisment-tbl mb-5"
              id="list-item-8"
            >
              <thead className="text-center text-wrap purple-gradient">
                <tr>
                  <th rowSpan={2}>Monthly Social Media Management</th>
                  <th>Link</th>
                  <th rowSpan={2}>Sample</th>
                  <th>Crypto</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={4}>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="fs-5">
                        Social Media Campaign
                        <span
                          title="Book Now"
                          className="advertisment-btn purple-gradient rounded-2 small-btn ms-2"
                        >
                          Book Now{" "}
                          <i className="fa-solid fa-paper-plane small ms-2" />
                        </span>
                      </span>
                      <label className="d-flex align-items-center my-1 checkbox style-d">
                        <input
                          type="hidden"
                          className="form-control quantity int-txt w-100px"
                          id="quantity_crypto_71"
                          defaultValue={1}
                          min={1}
                        />
                        <input
                          type="hidden"
                          className="form-control product_name int-txt w-100px"
                          id="product_crypto_71"
                          defaultValue="Social Media Campaign"
                        />
                        <input
                          type="hidden"
                          className="form-control product_price int-txt w-100px"
                          id="price_crypto_71"
                          defaultValue={1000}
                        />
                        <input
                          type="checkbox"
                          onclick="addToCard(this,'crypto_61')"
                          id="crypto_61"
                          data-product-id="crypto_71"
                        />
                        <span className="checkbox__checkmark checkbox-purple mt-1 ms-2" />
                        <span className="checkbox__body fs-5">$1000</span>
                      </label>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    Daily 1 Post
                    <span className="small text-muted d-block">
                      (Content, Creation, Posting for user engagement)
                    </span>
                  </td>
                  <td className="text-center">-</td>
                  <td className="text-center">
                    <span
                      className="samplelink purple-gradient"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-title="Sample 1"
                      aria-label="Sample 1"
                      data-bs-original-title="Sample 1"
                    >
                      <i className="fa-solid fa-link" />
                    </span>
                  </td>
                  <td className="text-center">-</td>
                </tr>
                <tr>
                  <td>
                    Daily 1 Post
                    <span className="small text-muted d-block">
                      (Content, Creation, Posting regarding Project)
                    </span>
                  </td>
                  <td className="text-center">-</td>
                  <td className="text-center">
                    <span
                      className="samplelink purple-gradient"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-title="Sample 1"
                      aria-label="Sample 1"
                      data-bs-original-title="Sample 1"
                    >
                      <i className="fa-solid fa-link" />
                    </span>
                  </td>
                  <td className="text-center">-</td>
                </tr>
              </tbody>
            </table>
            <div className="text-center">
              <a
                href="https://www.coingabbar.com/en/book-crypto-web3-blockchain-marketing-campaign-with-coingabbar-packages-effective-promotion"
                title="View Cart"
                className="janurayblue-btn"
              >
                <i className="fa-solid fa-cart-shopping me-2" />
                View Cart &amp; Proceed For Payment{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*?php include_once('include/footer') ?*/}
</>

  )
}

export default Advertise
