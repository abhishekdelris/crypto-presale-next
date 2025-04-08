import React from 'react'
import PresaleFilters from "./PresaleFilters";
import FAQAccordion from "./FAQAccordion";
import Coin from "./Coin";
import Link from 'next/link';


async function fetchCOINData() {
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_API_URL+"/api/crypto-icos-icoanoucement?skip=0&limit=15", {   //&type=ongoing
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

export default async function BestPresale() {
    const CoinData = await fetchCOINData();
    const faqData = await fetchFaqData();
  return (
    <>
        <section className="brdcrumb">
        <div className="container">
          <ul className="mb-0">
            <li><Link href="/" title="Home">Home</Link></li>
            <li>Best Presale</li> 
          </ul>
        </div> 
      </section>

      {/* Main Content */}
      
        <div className="container mt-4">
       
            <div className="section-title">
              <h5 className="h4 fw-semibold">Best Presale to Buy</h5>
              <p>
              Looking for the best presale to buy right now?
               This standout project is gaining traction for its cutting-edge blockchain use case, 
               transparent team, and promising growth potential. With early access pricing, limited supply, 
               and strong community backing, it offers a golden opportunity for early investors to maximize returns. Whether 
               you're a seasoned trader or just entering the crypto space, this presale combines high utility with future scalability —
               making it one of the smartest buys in the current market. Don’t wait — get in early and ride the wave of innovation!
              </p>
           
          </div>
 
     
      
        <PresaleFilters />
   <Coin CoinData={CoinData}/>
    <FAQAccordion  faqData={faqData}/>
    </div>
    </>
  )
}


