import React from 'react'
import PresaleFilters from "./PresaleFilters";
import FAQAccordion from "./FAQAccordion";
import Coin from "./Coin";
import Link from 'next/link';


async function fetchTrendingData() {
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL+"/api/trending_presale", {   //&type=ongoing
      // next: { revalidate: 5, tags: ['featuredData'] }, // ISR with tag
      cache: 'no-store',
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
  async function fetchFaqData() {
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_API_URL+"/api/faqs?page=2&limit=4", {   //&type=ongoing
        // next: { revalidate: 5, tags: ['featuredData'] }, // ISR with tag
        cache: 'no-store',
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

export default async function TrendingPresale() {
  const trendingData = await fetchTrendingData();
  const tradeData = trendingData.trending || []; 
  console.log("this is a treanding data....",trendingData);
  
    const faqData = await fetchFaqData();
  return (
    <>
        <section className="brdcrumb">
        <div className="container">
          <ul className="mb-0">
            <li><Link href="/" title="Home">Home</Link></li>
            <li>Trending Presale</li> 
          </ul>
        </div> 
      </section>

      {/* Main Content */}
      
        <div className="container mt-4">
       
            <div className="section-title">
              <h5 className="h4 fw-semibold">Trending Presale 2025</h5>
              <p>
              Discover the most trending crypto coin presales and ICOs that 
        are making waves in the market! These early-stage opportunities offer investors a chance to get 
        in before the hype, often at the lowest prices. Whether you're looking for innovative blockchain projects
         or the next big utility token, staying ahead with presales can lead to massive potential gains. 
        Don’t miss your shot to be part of the next crypto success story — explore the hottest ICOs happening right now!
              </p>
           
          </div>
 
     
      
        <PresaleFilters />
   <Coin CoinData={tradeData}/>
    <FAQAccordion  faqData={faqData}/>
    </div>
    </>
  )
}


