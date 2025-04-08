// "use client"
// import React,{useState} from 'react'
// import altcoinImage from "../images/altcoin.webp";
// import Image from 'next/image';
// import Link from 'next/link';
// import { useRouter } from "next/navigation";

// function ICO() {
//   const [selectedOption, setSelectedOption] = useState('option1');
//  const router = useRouter();
//   const handleSelectChange = (event) => {
//     setSelectedOption(event.target.value);
//   };
//   return (
//     <>
//      <section className="brdcrumb">
//         <div className="container">
//           <ul className="mb-0">
//             <li><Link href="/" title="Home">Home</Link></li>
//             <li>Crypto ICO</li> 
//           </ul>
//         </div>
//       </section>
//       {/* Main Content */}
//       <div className="container py-4">
//         <h1 className="h2 mb-2">Crypto ICO</h1>
//         <p className="text-muted mb-4">
//           Check out our curated ICO list and ICO calendar for the best
//           investment opportunities. Explore cutting-edge blockchain projects and
//           discover the best tokens for your portfolio. Ideal for crypto ICO
//           investors looking to maximize returns with promising new projects.
//         </p>
//         {/* Promo Banner */}
//         <div className="banner text-white mb-4">
//           <div className="banner-content d-flex justify-content-between align-items-center">
//             <div className="banner-text">
//               <h2 className="h4 mb-1">SEXP Presale</h2>
//               <p className="h5 mb-1">LIVE NOW</p>
//               <div className="dates small">11 MAR - 11 APR | 2025</div>
//             </div>
//             <div className="goal-box">
//               <h3>GOAL</h3>
//               <p className="h5 mb-0 text-white">200,000 XRP</p>
//             </div>
//           </div>
//         </div>
//         {/* Filter Tabs */}
//         <div className="btn-group mb-4">
//           <button className="btn btn-light tab-button">All</button>
//           <button className="btn btn-light tab-button active-tab">
//             Crypto ICO
//           </button>
//           <button className="btn btn-light tab-button" onClick={() => router.push("/ido")}>Crypto IDO</button>
//           <button className="btn btn-light tab-button" onClick={() => router.push('/ieo')}>Crypto IEO</button>
//           <button className="btn btn-light tab-button" onClick={() => router.push('/listings')}>Crypto Presale</button>
//         </div>
//         {/* Search Bar */}
//         <div className="row mb-4">
//           <div className="col-md-5">
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Search By Keyword..."
//             />
//           </div>
//           <div className="col-md-3">
//           <select value={selectedOption} onChange={handleSelectChange} className="form-select">
//       <option value="option1">selected Date</option>
//       <option value="option2">Option 2</option>
//       <option value="option3">Option 3</option>
//     </select>
           
//           </div>
//           <div className="col-md-3">
//           <select value={selectedOption} onChange={handleSelectChange} className="form-select">
//       <option value="option1">selected Date</option>
//       <option value="option2">Option 2</option>
//       <option value="option3">Option 3</option>
//     </select>
//           </div>
//           <div className="col-md-1">
//             <button className="btn btn-primary w-100">
//               <i className="bi bi-search" />
//             </button>
//           </div>
//         </div>
//         {/* ICO Table */}
//         <div className="table-responsive">
//           <table className="table table-hover">
//             <thead className="table-light">
//               <tr>
//                 <th>Name</th>
//                 <th>Stage</th>
//                 <th>Launchpad</th>
//                 <th>Upvotes</th>
//                 <th>End In</th>
//                 <th>Tokens for Sale</th>
//                 <th>Rate</th>
//                 <th>Fundraising Goal</th>
//                 <th>Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>
//                   <div className="d-flex align-items-center">
//                     <Image
//                        src={altcoinImage}
//                       alt="Cryptelo"
//                       className="project-icon me-2"
//                     />
//                     Cryptelo Moneta Mash
//                     <span className="featured-tag ms-2">Featured</span>
//                   </div>
//                 </td>
//                 <td>ICO</td>
//                 <td>On Website</td>
//                 <td>
//                   <button className="upvote-btn">
//                     <i className="bi bi-hand-thumbs-up" /> 1075
//                   </button>
//                 </td>
//                 <td>1 week</td>
//                 <td>3.30 B</td>
//                 <td>0.0018 (USDT)</td>
//                 <td>5.94 M (USDT)</td>
//                 <td>
//                   <div className="info-circle">
//                     <i className="bi bi-info" />
//                   </div>
//                 </td>
//               </tr>
//               <tr>
//                 <td>
//                   <div className="d-flex align-items-center">
//                     <Image
//                      src={altcoinImage}
//                       alt="Ovation"
//                       className="project-icon me-2"
//                     />
//                     Ovation Network
//                     <span className="featured-tag ms-2">Featured</span>
//                   </div>
//                 </td>
//                 <td>ICO</td>
//                 <td>On Website</td>
//                 <td>
//                   <button className="upvote-btn">
//                     <i className="bi bi-hand-thumbs-up" /> 1079
//                   </button>
//                 </td>
//                 <td>1 week</td>
//                 <td>90.00 M</td>
//                 <td>0.02 (USDT)</td>
//                 <td>1.80 M (USDT)</td>
//                 <td>
//                   <div className="info-circle">
//                     <i className="bi bi-info" />
//                   </div>
//                 </td>
//               </tr>
//               <tr>
//                 <td>
//                   <div className="d-flex align-items-center">
//                     <Image
//                        src={altcoinImage}
//                       alt="Gateway"
//                       className="project-icon me-2"
//                     />
//                     GatewayToFortune
//                     <span className="featured-tag ms-2">Featured</span>
//                   </div>
//                 </td>
//                 <td>ICO</td>
//                 <td>On Website</td>
//                 <td>
//                   <button className="upvote-btn">
//                     <i className="bi bi-hand-thumbs-up" /> 1029
//                   </button>
//                 </td>
//                 <td>1 week</td>
//                 <td>250.00 M</td>
//                 <td>0.0408 (USDT)</td>
//                 <td>10.20 M (USDT)</td>
//                 <td>
//                   <div className="info-circle">
//                     <i className="bi bi-info" />
//                   </div>
//                 </td>
//               </tr>
//               <tr>
//                 <td>
//                   <div className="d-flex align-items-center">
//                     <Image
//                        src={altcoinImage}
//                       alt="EarnPark"
//                       className="project-icon me-2"
//                     />
//                     EarnPark
//                     <span className="featured-tag ms-2">Featured</span>
//                   </div>
//                 </td>
//                 <td>ICO</td>
//                 <td>On Website</td>
//                 <td>
//                   <button className="upvote-btn">
//                     <i className="bi bi-hand-thumbs-up" /> 1028
//                   </button>
//                 </td>
//                 <td>4 weeks</td>
//                 <td>110.00 M</td>
//                 <td>0.01 (USDT)</td>
//                 <td>1.10 M (USDT)</td>
//                 <td>
//                   <div className="info-circle">
//                     <i className="bi bi-info" />
//                   </div>
//                 </td>
//               </tr>
//               <tr>
//                 <td>
//                   <div className="d-flex align-items-center">
//                     <Image
//                       src={altcoinImage}
//                       alt="Hop Cash"
//                       className="project-icon me-2"
//                     />
//                     Hop Cash
//                     <span className="featured-tag ms-2">Featured</span>
//                   </div>
//                 </td>
//                 <td>ICO</td>
//                 <td>On Website</td>
//                 <td>
//                   <button className="upvote-btn">
//                     <i className="bi bi-hand-thumbs-up" /> 1061
//                   </button>
//                 </td>
//                 <td>1 month</td>
//                 <td>210.00 M</td>
//                 <td>0.012 (USDT)</td>
//                 <td>2.52 M (USDT)</td>
//                 <td>
//                   <div className="info-circle">
//                     <i className="bi bi-info" />
//                   </div>
//                 </td>
//               </tr>
//               <tr>
//                 <td>
//                   <div className="d-flex align-items-center">
//                     <Image
//                        src={altcoinImage}
//                       alt="CardSync"
//                       className="project-icon me-2"
//                     />
//                     CardSync
//                     <span className="featured-tag ms-2">Featured</span>
//                   </div>
//                 </td>
//                 <td>ICO</td>
//                 <td>On Website</td>
//                 <td>
//                   <button className="upvote-btn">
//                     <i className="bi bi-hand-thumbs-up" /> 1082
//                   </button>
//                 </td>
//                 <td>2 months</td>
//                 <td>500.00 M</td>
//                 <td>0.04 (solana)</td>
//                 <td>20.00 M (solana)</td>
//                 <td>
//                   <div className="info-circle">
//                     <i className="bi bi-info" />
//                   </div>
//                 </td>
//               </tr>
//               <tr>
//                 <td>
//                   <div className="d-flex align-items-center">
//                     <Image
//                        src={altcoinImage}
//                       alt="FULL Cash"
//                       className="project-icon me-2"
//                     />
//                     FULL Cash
//                   </div>
//                 </td>
//                 <td>ICO</td>
//                 <td>Coinpad</td>
//                 <td>
//                   <button className="upvote-btn">
//                     <i className="bi bi-hand-thumbs-up" /> 1021
//                   </button>
//                 </td>
//                 <td>9 hours</td>
//                 <td>7.25 M</td>
//                 <td>0.1 (USDT)</td>
//                 <td>725,000.00 (USDT)</td>
//                 <td>
//                   <div className="info-circle">
//                     <i className="bi bi-info" />
//                   </div>
//                 </td>
//               </tr>
//               <tr>
//                 <td>
//                   <div className="d-flex align-items-center">
//                     <Image
//                        src={altcoinImage}
//                       alt="Mynalar"
//                       className="project-icon me-2"
//                     />
//                     Mynalar Strike
//                   </div>
//                 </td>
//                 <td>ICO</td>
//                 <td>OpenRaRaise</td>
//                 <td>
//                   <button className="upvote-btn">
//                     <i className="bi bi-hand-thumbs-up" /> 1068
//                   </button>
//                 </td>
//                 <td>1 day</td>
//                 <td>129.50 B</td>
//                 <td>0.21 (solana)</td>
//                 <td>27.20 M (solana)</td>
//                 <td>
//                   <div className="info-circle">
//                     <i className="bi bi-info" />
//                   </div>
//                 </td>
//               </tr>
//               <tr>
//                 <td>
//                   <div className="d-flex align-items-center">
//                     <Image
//                        src={altcoinImage}
//                       alt="CrypKeys"
//                       className="project-icon me-2"
//                     />
//                     CrypKeys
//                   </div>
//                 </td>
//                 <td>ICO</td>
//                 <td>On Website</td>
//                 <td>
//                   <button className="upvote-btn">
//                     <i className="bi bi-hand-thumbs-up" /> 1031
//                   </button>
//                 </td>
//                 <td>6 days</td>
//                 <td>254.40 M</td>
//                 <td>0.02 (USDT)</td>
//                 <td>5.09 M (USDT)</td>
//                 <td>
//                   <div className="info-circle">
//                     <i className="bi bi-info" />
//                   </div>
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//         {/* Load More Button */}
//         <div className="text-center mt-4 mb-5">
//           <button className="btn btn-primary px-4">Load More</button>
//         </div>
//         {/* Content Sections */}
//         <div className="row mb-5 d-none">
//           <div className="col-12">
//             <h2 className="h3 mb-3">
//               Crypto ICO List &amp; Guide to Initial Coin Offerings 2025
//             </h2>
//             <p className="mb-4">
//               ICOs, or Initial Coin Offerings, are a new way to raise money in
//               blockchain and cryptocurrency. As we near 2025, interest in active
//               crypto ICOs, upcoming token ICOs, and crypto ICO lists has grown.
//               This guide gives you insights into Initial Coin Offerings (ICOs)
//               in 2025. It covers their benefits, risks, and the top platforms
//               for new listings. We also find a complete list of ICOs for tokens.
//             </p>
//             <h2 className="h4 mb-3 mt-4">What is an ICO?</h2>
//             <p>
//               An Initial Coin Offering (ICO) raises funds for blockchain and
//               cryptocurrency projects. Companies raise funds by selling digital
//               tokens or coins. Investors pay with established cryptocurrencies
//               like Bitcoin (BTC) or Ethereum (ETH). Sometimes, they use fiat
//               currencies like USD. These tokens can represent utility, allow
//               access to ecosystems, or act as equity shares.
//             </p>
//             <p>
//               You can track ICOs with an ICO cryptocurrency tracker or a 2025
//               ICO calendar. These tools help you stay updated on upcoming token
//               ICO dates.
//             </p>
//             <h2 className="h4 mb-3 mt-4">How Does an ICO Work?</h2>
//             <p>
//               The process of launching an ICO typically involves the following
//               steps:
//             </p>
//             <h3 className="h5 mb-2 mt-3">White Paper Creation:</h3>
//             <p>
//               Companies write a clear white paper. The project explains its
//               goals, how tokens are shared, how they're used, and the problem it
//               solves. Crypto tokens are created on blockchains like Ethereum
//               using rules like ERC-20. They can be part of new crypto projects
//               launching in 2025 and beyond.
//             </p>
//             <h3 className="h5 mb-2 mt-3">Pre-Sale and Marketing:</h3>
//             <p>
//               Teams organize ads and gather funds. Many companies do pre-sales.
//               They focus on institutional investors. Good marketing attracts
//               people who want to invest in popular new crypto projects.
//             </p>
//             <h3 className="h5 mb-2 mt-3">ICO Launch:</h3>
//             <p>
//               Tokens are sold at a predefined price during the ICO phase. The
//               funds raised are allocated for project development, marketing, and
//               operational costs. This information is often included in token ICO
//               updates and ICO calendars.
//             </p>
//             <h3 className="h5 mb-2 mt-3">Exchange Listing:</h3>
//             <p>
//               After the ICO, tokens go on cryptocurrency exchanges. This lets
//               investors trade them. Where to find upcoming ICOs often includes
//               exchange announcements.
//             </p>
//             <h2 className="h4 mb-3 mt-4">Benefits of ICOs</h2>
//             <p>
//               ICOs provide several advantages for both companies and investors:
//             </p>
//             <h3 className="h5 mb-2 mt-3">Accessibility:</h3>
//             <p>
//               ICOs democratize investment, allowing anyone with internet access
//               and cryptocurrency to participate.
//             </p>
//             <h3 className="h5 mb-2 mt-3">Global Reach:</h3>
//             <p>
//               With no geographical restrictions, ICOs attract a diverse investor
//               base worldwide.
//             </p>
//             <h3 className="h5 mb-2 mt-3">Quick Fundraising:</h3>
//             <p>
//               Startups can raise a lot of money quickly. They avoid the red tape
//               of traditional funding options.
//             </p>
//             <h2 className="h4 mb-3 mt-4">Risks and Challenges</h2>
//             <p>
//               While ICOs offer exciting opportunities, they come with
//               significant risks:
//             </p>
//             <h3 className="h5 mb-2 mt-3">Regulatory Uncertainty:</h3>
//             <p>
//               Many places do not have clear rules for ICOs. This can lead to
//               legal risks for both issuers and investors.
//             </p>
//             <h3 className="h5 mb-2 mt-3">Fraud and Scams:</h3>
//             <p>
//               ICOs are often unregulated. This can lead to scams. Many projects
//               don't deliver what they promise.
//             </p>
//             <h3 className="h5 mb-2 mt-3">Market Volatility:</h3>
//             <p>
//               ICO token values can change rapidly. They are often driven by
//               speculation, not by underlying fundamentals.
//             </p>
//             <h3 className="h5 mb-2 mt-3">Technical Risks:</h3>
//             <p>
//               Projects may face development challenges, leaving investors with
//               worthless tokens.
//             </p>
//             <h2 className="h4 mb-3 mt-4">How to Track and Discover ICOs</h2>
//             <p>
//               Keeping track of upcoming token ICOs and top projects in 2025 is
//               key for smart investing. Here are some tips:
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default ICO


// app/ico/page.js - Server Component
import Image from 'next/image';
import Link from 'next/link';
import ClientSideICO from './ClientSideICO';

// This is a Server Component that fetches data
async function fetchICOData() {
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL+"/api/crypto-icos-icoanoucement?skip=0&limit=155&ico_ido_type=0", {   //&type=ongoing
      // cache: 'no-store' // Don't cache the response
       next: { revalidate: 60 } 
    })
  
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error("Error fetching ICO data:", error); 
    return { data: [] }; // Return empty data in case of error
  }
}

export default async function ICOPage() {
  // Fetch data on the server
  const icoData = await fetchICOData();
  
  return (
    <>
      <section className="brdcrumb">
        <div className="container">
          <ul className="mb-0">
            <li><Link href="/" title="Home">Home</Link></li>
            <li>Crypto ICO</li> 
          </ul>
        </div>
      </section>
      
      {/* Main Content */}
      <div className="container py-4">
        <h1 className="h2 mb-2">Crypto ICO</h1>
        <p className="text-muted mb-4">
          Check out our curated ICO list and ICO calendar for the best
          investment opportunities. Explore cutting-edge blockchain projects and
          discover the best tokens for your portfolio. Ideal for crypto ICO
          investors looking to maximize returns with promising new projects.
        </p>
        
        {/* Promo Banner */}
        <div className="banner text-white d-none mb-4">
          <div className="banner-content d-flex justify-content-between align-items-center">
            <div className="banner-text">
              <h2 className="h4 mb-1">SEXP Presale</h2>
              <p className="h5 mb-1">LIVE NOW</p>
              <div className="dates small">11 MAR - 11 APR | 2025</div>
            </div>
            <div className="goal-box">
              <h3>GOAL</h3>
              <p className="h5 mb-0 text-white">200,000 XRP</p>
            </div>
          </div>
        </div>
        
        {/* Client-side component for interactive elements */}
        <ClientSideICO icoData={icoData} />

       
      </div>
    </>
  );
}