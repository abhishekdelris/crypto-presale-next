import React from 'react'
import Promoted from './Promoted'
import FAQAccordion from './FAQAccordion'
import Favorite from './Favorite'
import Link from 'next/link'


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

async function fetchFeturedData() {
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL+"/api/featured?skip=0", {   //&type=ongoing
      next: { revalidate: 5, tags: ['featuredData'] }, // ISR with tag
    })
   
    
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status}`);
    }
    const datainfor = await response.json();
   
    return datainfor;
  } catch (error) {
    console.error("Error fetching ICO data:", error);
    return { data: [] }; // Return empty data in case of error
  }
}

export default async function Listings() {
  const feturedData = await fetchFeturedData(); 
  const faqData = await fetchFaqData();

  return (
    <>
      <section className="brdcrumb">
    <div className="container">
        <ul className="mb-0">
            <li><Link href="/" title="Home">Home</Link></li>
            <li>Listings</li>
        </ul>
    </div>
</section>
    {/* <!-- third section --> */}
   <Promoted feturedData={feturedData}/>
    {/* <!-- faq section --> */}
   <FAQAccordion  faqData={faqData}/>
    {/* <!--  --> */}
   <Favorite />
    </>
  )
} 
