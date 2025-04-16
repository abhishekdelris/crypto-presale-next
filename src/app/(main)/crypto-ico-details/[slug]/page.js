
// import { notFound } from 'next/navigation';
// import Link from 'next/link';
// import Image from 'next/image'; 
// import { Upcoming } from '@mui/icons-material';
// import FAQAccordion from "@/components/FAQAccordion";
// import altcoinImage from "@/images/altcoin.webp"

// // Server-side data fetching for a single blog article
// async function fetchCryptoDetails(slug) {
//   try {
//     const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/crypto-icos-icoanoucement/${slug}`, {
//       next: { revalidate: 60 } 
//     });
     
    
//     if (!response.ok) {
//       throw new Error(`API responded with status: ${response.status}`);
//     }
    
//     const data = await response.json();
//     // console.log("this is a slug data...",data.data);
    
//     return {
//       success: true,
//       data: data.data
//     };
//   } catch (error) {
//     console.error("Error fetching Crypto Details :", error);
//     return {
//       success: false,
//       error: "Failed to fetch Crypto Details"
//     };
//   }
// }

// async function fetchFaqData() {
//   try {
//     const response = await fetch(process.env.NEXT_PUBLIC_API_URL+"/api/faqs?page=2&limit=4", {   //&type=ongoing
//       // next: { revalidate: 5, tags: ['featuredData'] }, // ISR with tag
//       cache: 'no-store',
//     })
    
//     if (!response.ok) {
//       throw new Error(`Failed to fetch: ${response.status}`);
//     }
//     const result = await response.json();
//     // console.log("this is result .....",result);
    
//     return result;
//   } catch (error) {
//     console.error("Error fetching ICO data:", error);
//     return { data: [] }; // Return empty data in case of error
//   }
// }

 
  

// async function cryptoIcodetails({ params }) {
//   const { slug} = params;
//   const cryptoDetails = await fetchCryptoDetails(slug);
//   const cryptoDetailsInfo = cryptoDetails.data;
//   const faqData = await fetchFaqData();
  
//   if (!cryptoDetails || !cryptoDetails.success) {
//     return notFound();
//   }
  
//   // function formatNumberWithCommas(number) {
//   //   console.log(number.toLocaleString());
    
//   //   return number.toLocaleString();
//   // }
//   function formatNumberWithCommas(number) {
//     return Number(number).toLocaleString("en-US");
//   }
  
  

  
//   const handleType = (type) => {
//     switch (type) {
//       case 0:
//         return "ICO ";
//       case 1:
//         return "IDO";
//       case 2:
//         return "IEO";
//       case 3:
//         return "Presale";
     
//       default:
//         return "ICO";
//     }
//   };
//     return ( 
//      <section>
//   <div className="container">
//     <div className="row align-items-center">
//       <div className="col-xl-12 col-md-12 col-sm-12 pb-3">
//         <div className="text-center mb-3">
//         </div>
//         <div className="d-flex justify-content-between align-items-center flex-wrap mb-3">
//           <div className="d-flex align-items-center">
                                            
//             <Image src={
//             cryptoDetailsInfo.image
//            ? cryptoDetailsInfo.image.startsWith('https://d3iuzwoiyg9qa8.cloudfront.net/')
//              ? cryptoDetailsInfo.image
//             : `https://d3iuzwoiyg9qa8.cloudfront.net/webadmin/storage/${cryptoDetailsInfo.image}`
//            : altcoinImage
//            } className="object-fit-cover rounded-3 me-3 ico-detail-logo" alt={cryptoDetailsInfo.img_alt_title} title={cryptoDetailsInfo.img_alt_title} width={80} height={80} />
//             <div className="xl-size">
//               <h2 className="fw-bold mb-0">{cryptoDetailsInfo.name} ({cryptoDetailsInfo.alias})  {handleType(cryptoDetailsInfo.ico_ido_type)}</h2>
//               <div className="fs-6">Token Sale : {cryptoDetailsInfo.start_time}
//                 –
//                  {cryptoDetailsInfo.end_time}
//                 <div className=" d-inline-block mb-1 align-middle lh-0">
//                   <button className="btn btn-outline-light p-0 ms-1 lh-0" type="button" data-bs-toggle="dropdown" aria-expanded="false" title="Calendar">
//                     <i className="fa-solid fa-calendar-days text-downriver" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Add to Calendar" />
//                   </button>
//                   <ul className="dropdown-menu">
//                     <li>
//                       <a className="dropdown-item" href="https://calendar.google.com/calendar/render?action=TEMPLATE&text= ()&dates=19700101/19700101&ctz=&details=&sprop=&sprop=" title="Google" target="_blank" rel="noopener">Google</a>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
          
//             <div className="d-flex align-items-center mt-2 gap-1">
//               <button title="Submit ICO / IDO" className="btn-main primary-btn small btn-second_main px-2 py-1">
//                 Submit                            </button>
//               <button className="btn-main primary-btn small btn-second_main px-2 py-1"> Edit</button>
//               <button  title="Advertise ICO / IDO" className="btn-main primary-btn small btn-second_main px-2 py-1">
//                 Advertise    </button>
//             </div>
//           </div>
    
       
//         <div className="accordion faq-acordion mb-4" id="accordion1">
//           <div className="accordion-item">
//             <div className="accordion-header123 ico-acordian-hdr">
              
//                 <button className="btn w-100 p-3"style={{backgroundColor:"#0d2156",color:"#fff"}}>
//                         <div className='d-flex flex-row justify-content-between align-items-center '>
//                             <h3 className='m-0 fs-5 fw-semi-bold'>Crypto ICO</h3>
//                             <p className='my-1'>{cryptoDetailsInfo.start_time} To  {cryptoDetailsInfo.end_time}</p>
//                             <span className='white-btn small-btn ms-3 px-3 rounded-5 border border-warning-subtle'> {cryptoDetailsInfo.type===1 ? "Upcoming" : "Ongoing"}</span>
//                         </div>
//                     </button>
             
//             </div>
//             <div id="collapse0" className="accordion-collapse collapse  show " data-bs-parent="#accordion1">
//               <div className="accordion-body">
//                 <div className="row row-cols-1 row-cols-md-2">
//                   <div className="col">
//                     <table className="table table-striped rounded-4 shadow-sm overflow-hidden align-middle mb-4 mb-md-0">
//                       <tbody>
//                         <tr>
//                           <th className="text-start fw-semibold" scope="col"> Launchpad</th>
//                           <td className="text-end">
//                            {cryptoDetailsInfo.launchpad ? cryptoDetailsInfo.launchpad  : "On Website"}              </td>
//                         </tr>
//                         <tr>
//                           <td className="text-start fw-semibold">Buy {cryptoDetailsInfo.alias} Now</td>
//                           <td className="text-end">
//                             <a href={cryptoDetailsInfo.where_to_buy} title="Buy Now" className="text-decoration-none" target="_blank" rel="noopener">
//                               <i className="fa-solid fa-link-slash me-2" />Buy Here
//                             </a>
//                           </td>
//                         </tr>
//                         <tr>
//                           <td className="text-start fw-semibold">Total Supply Qty</td>
//                           {/* <td className="text-end">{formatNumberWithCommas(10000000000)}</td> */}
//                           <td className="text-end">{formatNumberWithCommas(cryptoDetailsInfo.total_coin)}</td>
//                         </tr>
//                         <tr>
//                           <td className="text-start fw-semibold">Tokens for Sale</td>
//                           <td className="text-end"> {formatNumberWithCommas(cryptoDetailsInfo.quantity_of_coin)}</td>
//                         </tr>
//                         <tr>
//   <td className="text-start fw-semibold">% of Supply</td>
//   <td className="text-end">
//     {cryptoDetailsInfo.quantity_of_coin !== 'TBA' && parseFloat(cryptoDetailsInfo.total_coin) ? (
//       `${((parseFloat(cryptoDetailsInfo.quantity_of_coin) / parseFloat(cryptoDetailsInfo.total_coin)) * 100).toFixed(2)}%`
//     ) : (
//       'TBA'
//     )}
//   </td>
// </tr>

//                         {/* <tr>
//                           <td className="text-start fw-semibold">% of Supply</td>
//                           <td className="text-end"> {cryptoDetailsInfo.total_supply_percent ? cryptoDetailsInfo.total_supply_percent : 0 }%</td>
//                         </tr> */}
//                         <tr>
//                           <td className="text-start fw-semibold">Stage</td>
//                           <td className="text-end">{handleType(cryptoDetailsInfo.ico_ido_type)}</td>
//                         </tr>
//                       </tbody>
//                     </table>
//                   </div>
//                   <div className="col">
//                     <table className="table table-striped rounded-4 shadow-sm overflow-hidden align-middle mb-0">
//                       <tbody>
//                         <tr>
//                           <th className="text-start fw-semibold" scope="col">Fundraising Goal</th>
//                           <td className="price_in_mb text-end" val={cryptoDetailsInfo.fund_asking_for}>
//                            {formatNumberWithCommas(cryptoDetailsInfo.fund_asking_for)}
//                           </td>
//                         </tr>
//                         <tr>
//                           <td className="text-start fw-semibold">{cryptoDetailsInfo.alias} {handleType(cryptoDetailsInfo.ico_ido_type)}   Price</td>
//                           <td className="text-end">
//                             {cryptoDetailsInfo.ico_price ? `${cryptoDetailsInfo.ico_price} (${cryptoDetailsInfo.accept_type || "USDT"})` : "N/A"}
//                           </td>
//                         </tr>
//                         <tr>
//   <td className="text-start fw-semibold">1 USDT</td>
//   <td className="text-end">
//     {cryptoDetailsInfo.ico_price === 'TBA' ? (
//       'TBA'
//     ) : cryptoDetailsInfo.one_usdt ? (
//       cryptoDetailsInfo.one_usdt
//     ) : cryptoDetailsInfo.ico_price &&
//       !isNaN(parseFloat(cryptoDetailsInfo.ico_price)) &&
//       parseFloat(cryptoDetailsInfo.ico_price) !== 0 ? (
//       (1 / parseFloat(cryptoDetailsInfo.ico_price)).toFixed(4)
//     ) : (
//       'TBA'
//     )}
//   </td>
// </tr>

//                         {/* <tr>
//                           <td className="text-start fw-semibold">1 USDT</td>
//                           <td className="text-end">{cryptoDetailsInfo.one_usdt}</td>
//                         </tr> */}
//                         <tr>
//                           <td className="text-start fw-semibold">Soft Cap</td>
//                           <td className="text-end">
//                              {cryptoDetailsInfo.soft_cap ? `${cryptoDetailsInfo.soft_cap} (${cryptoDetailsInfo.accept_type || "USDT"})` : "N/A"}                                      </td>
//                         </tr>
//                         <tr>
//                           <td className="text-start fw-semibold">Hard Cap</td>
//                           <td className="text-end">
//                              {cryptoDetailsInfo.hard_cap ? `${cryptoDetailsInfo.hard_cap} (${cryptoDetailsInfo.accept_type || "USDT"})` : "N/A"}                                 </td>
//                         </tr>
//                         <tr>
//                           <td className="text-start fw-semibold">Personal Cap</td>
//                           <td className="text-end">
//                           {cryptoDetailsInfo.personal_cap ? `${cryptoDetailsInfo.personal_cap} (${cryptoDetailsInfo.accept_type || "USDT"})` : "N/A"}                    </td>
//                         </tr>
//                       </tbody>
//                     </table>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-12">
//             <div className="d-inline-flex flex-wrap heading-bdr-left">
//               <h4 className="h5 d-inline">{cryptoDetailsInfo.name}  ({cryptoDetailsInfo.alias})  {handleType(cryptoDetailsInfo.ico_ido_type)}  Crypto</h4>
//               <span className="h5 text-downriver fw-semibold">- Project Details</span>
//             </div>
//             <div className="row">
//               <div className="col-xxl-6 col-lg-6 col-12 my-1">
//                 <table className="table table-striped rounded-4 shadow-sm overflow-hidden mb-4">
//                   <tbody>
//                     <tr>
//                       <th scope="col" className="text-start fw-semibold">{cryptoDetailsInfo.alias} Project Category</th>
//                       <td className="text-end">Blockchain</td>
//                     </tr>
//                     <tr>
//                       <td className="fw-semibold">{cryptoDetailsInfo.alias} Contract Address</td>
//                       <td className="text-end">
//                         <span className="text-capitalize fw-semibold" title>{cryptoDetailsInfo.blockchain}</span>
                      
//                         <button type="button" className="bg-transparent p-0 border-0" tabIndex={0} roles="button" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-placement="top" data-bs-title="Copied" onclick="copySingleContractAddress()" aria-label="Copy" data-bs-original-title="Copy">
//                           <i className="fa-regular fa-copy text-downriver ms-1 me-2" />
//                         </button>
//                       </td>
//                     </tr>
//                   </tbody>
//                 </table>
//               </div>
//               <div className="col-xxl-6 col-lg-6 col-12 my-1">
//                 <table className="table table-striped rounded-4 shadow-sm overflow-hidden mb-4">
//                   <tbody>
//                     <tr>
//                       <th scope="col" className="text-start fw-semibold">WHITE PAPER</th>
//                       <td className="text-end">
//                         <a href={cryptoDetailsInfo.white_paper_url} title="WHITE PAPER" className="white-btn small-btn" target="_blank" rel="noopener">
//                           <i className="fa-regular fa-file-lines me-2 fw-normal" />{cryptoDetailsInfo.name}  WHITE PAPER                                        </a>
//                       </td>
//                     </tr>
//                     <tr>
//                       <td className="text-start fw-semibold">Website</td>
//                       <td className="text-end">
//                         <a href={cryptoDetailsInfo.website} title="Visit Website" className="white-btn small-btn" target="_blank" rel="noopener">
//                           <i className="fa-solid fa-link me-2" />{cryptoDetailsInfo.name}  Website
//                         </a>
//                       </td>
//                     </tr>
//                     <tr>
//                       <td className="text-start fw-semibold">Social Media</td>
//                       <td>
//                         <ul className="list-unstyled d-flex justify-content-end mb-0">
//                         {
//                           cryptoDetailsInfo.twitter ? <li className="mx-1">
//                           <a href={cryptoDetailsInfo.twitter} target="_blank" rel="noopener" className="twitter-clr" title="Share on Twitter">
//                             <i className="fa-brands fa-x-twitter" />
//                           </a>
//                         </li> : ''
//                         }
//                      {
//                        cryptoDetailsInfo.discord  ? <li className="mx-1">
//                        <a href={cryptoDetailsInfo.discord} target="_blank" rel="noopener" className="discord-clr" title="Share on Discord">
//                          <i className="fa-brands fa-discord" />
//                        </a>
//                      </li> : ''
//                      }
//                        {
//                          cryptoDetailsInfo.youtube_link ? <li className="mx-1">
//                          <a href={cryptoDetailsInfo.youtube_link} className="youtube-clr" title="Share on Youtube" target="_blank" rel="noopener">
//                            <i className="fa-brands fa-youtube" />
//                          </a>
//                        </li> : ''
//                        }
//                         {
//                           cryptoDetailsInfo.telegram ?  <li className="mx-1">
//                           <a href={cryptoDetailsInfo.telegram} className="tele-clr" title="Telegram Group" target="_blank" rel="noopener">
//                             <i className="fa-brands fa-telegram" />
//                           </a>
//                         </li> : ''
//                         }
//                         </ul>
//                       </td>
//                     </tr>
//                   </tbody>
//                 </table>
//               </div>
//             </div> 
//           </div>
//         </div>
//         {/* Content */}
//         <div className="row">
//           <div className="col-12 my-2 text-center  d-block">
//           </div>
//           <div className="col-12 mb-3 mt-3 mt-lg-0">
//             <div>
//               <h5 className="h5 heading-bdr-left">About {cryptoDetailsInfo.name}  ({cryptoDetailsInfo.alias}) Project</h5>
//               <div className="details-page"

//                  dangerouslySetInnerHTML={{ __html: cryptoDetailsInfo.description }}
//               >
                
//               </div>
//               <FAQAccordion  faqData={faqData}/>
//             </div>
//           </div>
//         </div>
        
//       </div>
     
//     </div>
//   </div>
// </section>

//   )
// }



// export default cryptoIcodetails


// 'use client';

// import { notFound } from 'next/navigation';
// import { useRouter } from 'next/navigation';
// import Image from 'next/image';
// import FAQAccordion from "@/components/FAQAccordion";
// import altcoinImage from "@/images/altcoin.webp";
// import { useState, useEffect } from 'react';
// import { useCallback } from 'react';

// // Helper functions
// const formatNumberWithCommas = (number) => {
//   if (!number || number === 'TBA') return 'TBA';
//   return Number(number).toLocaleString("en-US");
// };

// const getTokenType = (type) => {
//   const types = {
//     0: "ICO",
//     1: "IDO",
//     2: "IEO",
//     3: "Presale"
//   };
//   return types[type] || "ICO";
// };

// const getImageUrl = (image) => {
//   if (!image) return altcoinImage;
  
//   return image.startsWith('https://d3iuzwoiyg9qa8.cloudfront.net/')
//     ? image
//     : `https://d3iuzwoiyg9qa8.cloudfront.net/webadmin/storage/${image}`;
// };

// // Component for crypto details
// export default function CryptoIcoDetails({ params }) {
//   const { slug } = params;
//   const router = useRouter();
//   const [cryptoDetailsInfo, setCryptoDetailsInfo] = useState(null);
//   const [faqData, setFaqData] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Navigation handlers
//   const handleNavigation = useCallback((path) => {
//     router.push(path);
//   }, [router]);

//   // Calculate supply percentage
//   const calculateSupplyPercentage = (quantity, total) => {
//     if (quantity === 'TBA' || !parseFloat(total)) return 'TBA';
//     return `${((parseFloat(quantity) / parseFloat(total)) * 100).toFixed(2)}%`;
//   };

//   // Calculate token per USDT
//   const calculateTokensPerUsdt = (icoPrice) => {
//     if (icoPrice === 'TBA') return 'TBA';
//     if (!isNaN(parseFloat(icoPrice)) && parseFloat(icoPrice) !== 0) {
//       return (1 / parseFloat(icoPrice)).toFixed(4);
//     }
//     return 'TBA';
//   };

//   // Format price with currency
//   const formatPriceWithCurrency = (price, currency = "USDT") => {
//     if (!price) return "N/A";
//     return `${price} (${currency})`;
//   };

//   // Copy contract address to clipboard
//   const copyContractAddress = (address) => {
//     navigator.clipboard.writeText(address);
//     // You would implement a toast notification here
//   };

//   // Fetch data
//   useEffect(() => {
//     const fetchData = async () => {
//       setIsLoading(true);
//       try {
//         // Fetch crypto details
//         const response = await fetch(
//           `${process.env.NEXT_PUBLIC_API_URL}/api/crypto-icos-icoanoucement/${slug}`
//         );
        
//         if (!response.ok) {
//           throw new Error(`API responded with status: ${response.status}`);
//         }
        
//         const data = await response.json();
//         setCryptoDetailsInfo(data.data);
        
//         // Fetch FAQ data
//         const faqResponse = await fetch(
//           `${process.env.NEXT_PUBLIC_API_URL}/api/faqs?page=2&limit=4`,
//           { cache: 'no-store' }
//         );
        
//         if (!faqResponse.ok) {
//           throw new Error(`Failed to fetch FAQs: ${faqResponse.status}`);
//         }
        
//         const faqResult = await faqResponse.json();
//         setFaqData(faqResult.data || []);
        
//       } catch (err) {
//         console.error("Error fetching data:", err);
//         setError(err.message);
//       } finally {
//         setIsLoading(false);
//       }
//     };
    
//     fetchData();
//   }, [slug]);

//   // Show loading state
//   if (isLoading) {
//     return (
//       <div className="container py-5 text-center">
//         <div className="spinner-border text-primary" role="status">
//           <span className="visually-hidden">Loading...</span>
//         </div>
//       </div>
//     );
//   }

//   // Show error state
//   if (error || !cryptoDetailsInfo) {
//     return notFound();
//   }

//   // Get accept type for currency display
//   const acceptType = cryptoDetailsInfo.accept_type || "USDT";

//   return (
//     <section>
//       <div className="container">
//         <div className="row align-items-center">
//           <div className="col-xl-12 col-md-12 col-sm-12 pb-3">
//             <div className="text-center mb-3">
//             </div>
            
//             {/* Header with logo and title */}
//             <div className="d-flex justify-content-between align-items-center flex-wrap mb-3">
//               <div className="d-flex align-items-center">
//                 <Image 
//                   src={getImageUrl(cryptoDetailsInfo.image)}
//                   className="object-fit-cover rounded-3 me-3 ico-detail-logo" 
//                   alt={cryptoDetailsInfo.img_alt_title || cryptoDetailsInfo.name} 
//                   title={cryptoDetailsInfo.img_alt_title || cryptoDetailsInfo.name} 
//                   width={80} 
//                   height={80} 
//                 />
//                 <div className="xl-size">
//                   <h2 className="fw-bold mb-0">
//                     {cryptoDetailsInfo.name} ({cryptoDetailsInfo.alias}) {getTokenType(cryptoDetailsInfo.ico_ido_type)}
//                   </h2>
//                   <div className="fs-6">
//                     Token Sale: {cryptoDetailsInfo.start_time} – {cryptoDetailsInfo.end_time}
//                     <div className="d-inline-block mb-1 align-middle lh-0">
//                       <button 
//                         className="btn btn-outline-light p-0 ms-1 lh-0" 
//                         type="button" 
//                         data-bs-toggle="dropdown" 
//                         aria-expanded="false" 
//                         title="Calendar"
//                       >
//                         <i 
//                           className="fa-solid fa-calendar-days text-downriver" 
//                           data-bs-toggle="tooltip" 
//                           data-bs-placement="top" 
//                           data-bs-title="Add to Calendar" 
//                         />
//                       </button>
//                       <ul className="dropdown-menu">
//                         <li>
//                           <a className="dropdown-item" title="Google" target="_blank" rel="noopener">Google</a>
//                         </li>
//                       </ul>
//                     </div>
//                   </div>
//                 </div>
//               </div>
              
//               {/* Action buttons */}
//               <div className="d-flex align-items-center mt-2 gap-1">
//                 <button 
//                   title="Submit ICO / IDO" 
//                   onClick={() => handleNavigation('/submit_coin')} 
//                   className="btn-main primary-btn small btn-second_main px-2 py-1"
//                 >
//                   Submit
//                 </button>
//                 <button 
//                   className="btn-main primary-btn small btn-second_main px-2 py-1" 
//                   onClick={() => handleNavigation('/edit-ico-presale-coins')}
//                 >
//                   Edit
//                 </button>
//                 <button 
//                   title="Advertise ICO / IDO" 
//                   className="btn-main primary-btn small btn-second_main px-2 py-1" 
//                   onClick={() => handleNavigation('/advertise')}
//                 >
//                   Advertise
//                 </button>
//               </div>
//             </div>
       
//             {/* Crypto ICO Accordion */}
//             <div className="accordion faq-acordion mb-4" id="accordion1">
//               <div className="accordion-item">
//                 <div className="accordion-header123 ico-acordian-hdr">
//                   <button 
//                     className="btn w-100 p-3"
//                     style={{backgroundColor:"#0d2156", color:"#fff"}}
//                   >
//                     <div className='d-flex flex-row justify-content-between align-items-center'>
//                       <h3 className='m-0 fs-5 fw-semi-bold'>Crypto ICO</h3>
//                       <p className='my-1'>{cryptoDetailsInfo.start_time} To {cryptoDetailsInfo.end_time}</p>
//                       <span className='white-btn small-btn ms-3 px-3 rounded-5 border border-warning-subtle'>
//                         {cryptoDetailsInfo.type === 1 ? "Upcoming" : "Ongoing"}
//                       </span>
//                     </div>
//                   </button>
//                 </div>
//                 <div id="collapse0" className="accordion-collapse collapse show" data-bs-parent="#accordion1">
//                   <div className="accordion-body">
//                     <div className="row row-cols-1 row-cols-md-2">
//                       {/* First column of details */}
//                       <div className="col">
//                         <table className="table table-striped rounded-4 shadow-sm overflow-hidden align-middle mb-4 mb-md-0">
//                           <tbody>
//                             <tr>
//                               <th className="text-start fw-semibold" scope="col">Launchpad</th>
//                               <td className="text-end">
//                                 {cryptoDetailsInfo.launchpad || "On Website"}
//                               </td>
//                             </tr>
//                             <tr>
//                               <td className="text-start fw-semibold">Buy {cryptoDetailsInfo.alias} Now</td>
//                               <td className="text-end">
//                                 <a 
//                                   href={cryptoDetailsInfo.where_to_buy} 
//                                   title="Buy Now" 
//                                   className="text-decoration-none" 
//                                   target="_blank" 
//                                   rel="noopener"
//                                 >
//                                   <i className="fa-solid fa-link-slash me-2" />Buy Here
//                                 </a>
//                               </td>
//                             </tr>
//                             <tr>
//                               <td className="text-start fw-semibold">Total Supply Qty</td>
//                               <td className="text-end">{formatNumberWithCommas(cryptoDetailsInfo.total_coin)}</td>
//                             </tr>
//                             <tr>
//                               <td className="text-start fw-semibold">Tokens for Sale</td>
//                               <td className="text-end">{formatNumberWithCommas(cryptoDetailsInfo.quantity_of_coin)}</td>
//                             </tr>
//                             <tr>
//                               <td className="text-start fw-semibold">% of Supply</td>
//                               <td className="text-end">
//                                 {calculateSupplyPercentage(cryptoDetailsInfo.quantity_of_coin, cryptoDetailsInfo.total_coin)}
//                               </td>
//                             </tr>
//                             <tr>
//                               <td className="text-start fw-semibold">Stage</td>
//                               <td className="text-end">{getTokenType(cryptoDetailsInfo.ico_ido_type)}</td>
//                             </tr>
//                           </tbody>
//                         </table>
//                       </div>
                      
//                       {/* Second column of details */}
//                       <div className="col">
//                         <table className="table table-striped rounded-4 shadow-sm overflow-hidden align-middle mb-0">
//                           <tbody>
//                             <tr>
//                               <th className="text-start fw-semibold" scope="col">Fundraising Goal</th>
//                               <td className="price_in_mb text-end">
//                                 {formatNumberWithCommas(cryptoDetailsInfo.fund_asking_for)}
//                               </td>
//                             </tr>
//                             <tr>
//                               <td className="text-start fw-semibold">
//                                 {cryptoDetailsInfo.alias} {getTokenType(cryptoDetailsInfo.ico_ido_type)} Price
//                               </td>
//                               <td className="text-end">
//                                 {formatPriceWithCurrency(cryptoDetailsInfo.ico_price, acceptType)}
//                               </td>
//                             </tr>
//                             <tr>
//                               <td className="text-start fw-semibold">1 USDT</td>
//                               <td className="text-end">
//                                 {cryptoDetailsInfo.one_usdt || calculateTokensPerUsdt(cryptoDetailsInfo.ico_price)}
//                               </td>
//                             </tr>
//                             <tr>
//                               <td className="text-start fw-semibold">Soft Cap</td>
//                               <td className="text-end">
//                                 {formatPriceWithCurrency(cryptoDetailsInfo.soft_cap, acceptType)}
//                               </td>
//                             </tr>
//                             <tr>
//                               <td className="text-start fw-semibold">Hard Cap</td>
//                               <td className="text-end">
//                                 {formatPriceWithCurrency(cryptoDetailsInfo.hard_cap, acceptType)}
//                               </td>
//                             </tr>
//                             <tr>
//                               <td className="text-start fw-semibold">Personal Cap</td>
//                               <td className="text-end">
//                                 {formatPriceWithCurrency(cryptoDetailsInfo.personal_cap, acceptType)}
//                               </td>
//                             </tr>
//                           </tbody>
//                         </table>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
            
//             {/* Project Details Section */}
//             <div className="row">
//               <div className="col-12">
//                 <div className="d-inline-flex flex-wrap heading-bdr-left">
//                   <h4 className="h5 d-inline">
//                     {cryptoDetailsInfo.name} ({cryptoDetailsInfo.alias}) {getTokenType(cryptoDetailsInfo.ico_ido_type)} Crypto
//                   </h4>
//                   <span className="h5 text-downriver fw-semibold">- Project Details</span>
//                 </div>
//                 <div className="row">
//                   {/* Project Category & Contract Address */}
//                   <div className="col-xxl-6 col-lg-6 col-12 my-1">
//                     <table className="table table-striped rounded-4 shadow-sm overflow-hidden mb-4">
//                       <tbody>
//                         <tr>
//                           <th scope="col" className="text-start fw-semibold">
//                             {cryptoDetailsInfo.alias} Project Category
//                           </th>
//                           <td className="text-end">Blockchain</td>
//                         </tr>
//                         <tr>
//                           <td className="fw-semibold">{cryptoDetailsInfo.alias} Contract Address</td>
//                           <td className="text-end">
//                             <span className="text-capitalize fw-semibold">
//                               {cryptoDetailsInfo.blockchain}
//                             </span>
//                             <button 
//                               type="button" 
//                               className="bg-transparent p-0 border-0" 
//                               onClick={() => copyContractAddress(cryptoDetailsInfo.contract_address)}
//                               aria-label="Copy"
//                             >
//                               <i className="fa-regular fa-copy text-downriver ms-1 me-2" />
//                             </button>
//                           </td>
//                         </tr>
//                       </tbody>
//                     </table>
//                   </div>
                  
//                   {/* White Paper & Website Links */}
//                   <div className="col-xxl-6 col-lg-6 col-12 my-1">
//                     <table className="table table-striped rounded-4 shadow-sm overflow-hidden mb-4">
//                       <tbody>
//                         <tr>
//                           <th scope="col" className="text-start fw-semibold">WHITE PAPER</th>
//                           <td className="text-end">
//                             <a 
//                               href={cryptoDetailsInfo.white_paper_url} 
//                               title="WHITE PAPER" 
//                               className="white-btn small-btn" 
//                               target="_blank" 
//                               rel="noopener"
//                             >
//                               <i className="fa-regular fa-file-lines me-2 fw-normal" />
//                               {cryptoDetailsInfo.name} WHITE PAPER
//                             </a>
//                           </td>
//                         </tr>
//                         <tr>
//                           <td className="text-start fw-semibold">Website</td>
//                           <td className="text-end">
//                             <a 
//                               href={cryptoDetailsInfo.website} 
//                               title="Visit Website" 
//                               className="white-btn small-btn" 
//                               target="_blank" 
//                               rel="noopener"
//                             >
//                               <i className="fa-solid fa-link me-2" />
//                               {cryptoDetailsInfo.name} Website
//                             </a>
//                           </td>
//                         </tr>
//                         <tr>
//                           <td className="text-start fw-semibold">Social Media</td>
//                           <td>
//                             <ul className="list-unstyled d-flex justify-content-end mb-0">
//                               {cryptoDetailsInfo.twitter && (
//                                 <li className="mx-1">
//                                   <a 
//                                     href={cryptoDetailsInfo.twitter} 
//                                     target="_blank" 
//                                     rel="noopener" 
//                                     className="twitter-clr" 
//                                     title="Share on Twitter"
//                                   >
//                                     <i className="fa-brands fa-x-twitter" />
//                                   </a>
//                                 </li>
//                               )}
                              
//                               {cryptoDetailsInfo.discord && (
//                                 <li className="mx-1">
//                                   <a 
//                                     href={cryptoDetailsInfo.discord} 
//                                     target="_blank" 
//                                     rel="noopener" 
//                                     className="discord-clr" 
//                                     title="Share on Discord"
//                                   >
//                                     <i className="fa-brands fa-discord" />
//                                   </a>
//                                 </li>
//                               )}
                              
//                               {cryptoDetailsInfo.youtube_link && (
//                                 <li className="mx-1">
//                                   <a 
//                                     href={cryptoDetailsInfo.youtube_link} 
//                                     className="youtube-clr" 
//                                     title="Share on Youtube" 
//                                     target="_blank" 
//                                     rel="noopener"
//                                   >
//                                     <i className="fa-brands fa-youtube" />
//                                   </a>
//                                 </li>
//                               )}
                              
//                               {cryptoDetailsInfo.telegram && (
//                                 <li className="mx-1">
//                                   <a 
//                                     href={cryptoDetailsInfo.telegram} 
//                                     className="tele-clr" 
//                                     title="Telegram Group" 
//                                     target="_blank" 
//                                     rel="noopener"
//                                   >
//                                     <i className="fa-brands fa-telegram" />
//                                   </a>
//                                 </li>
//                               )}
//                             </ul>
//                           </td>
//                         </tr>
//                       </tbody>
//                     </table>
//                   </div>
//                 </div> 
//               </div>
//             </div>
            
//             {/* Project Description and FAQ */}
//             <div className="row">
//               <div className="col-12 my-2 text-center d-block">
//               </div>
//               <div className="col-12 mb-3 mt-3 mt-lg-0">
//                 <div>
//                   <h5 className="h5 heading-bdr-left">About {cryptoDetailsInfo.name} ({cryptoDetailsInfo.alias}) Project</h5>
//                   <div 
//                     className="details-page"
//                     dangerouslySetInnerHTML={{ __html: cryptoDetailsInfo.description }}
//                   />
//                   <FAQAccordion faqData={faqData} />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import CryptoIcoDetailsClient from '@/components/CryptoIcoDetailsClient';

// Server Component
export default async function CryptoIcoDetailsPage({ params }) {
  const { slug } = params;
  
  // Fetch data server-side
  const cryptoDetails = await fetchCrypto_Detail(slug);
  const faqData = await fetch_FaqData();
  
  // Handle error case
  if (!cryptoDetails || !cryptoDetails.success) {
    return <div className="container py-5 text-center">
      <h2>Crypto project not found</h2>
      <p>The requested crypto project could not be found.</p>
    </div>;
  }
  
  // Pass data to client component
  return (
    <CryptoIcoDetailsClient 
      cryptoDetailsInfo={cryptoDetails.data} 
      faqData={faqData} 
    />
  );
}

// Utility functions for server
async function fetchCrypto_Detail(slug) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/crypto-icos-icoanoucement/${slug}`, {
      cache: 'no-store',
      // next: { revalidate: 60 } 
    });
       
    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`);
    }
    
    const data = await response.json();
    
    return {
      success: true,
      data: data.data
    };
  } catch (error) {
    console.error("Error fetching Crypto Details:", error);
    return {
      success: false,
      error: "Failed to fetch Crypto Details"
    };
  }
}

async function fetch_FaqData() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/faqs?page=2&limit=4`, {
      cache: 'no-store',
      // next: { revalidate: 300 }
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status}`);
    }
    
    const result = await response.json();
    
    return result;
  } catch (error) {
    console.error("Error fetching FAQ data:", error);
    return { data: [] }; // Return empty data in case of error
  }
}