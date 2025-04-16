
// app/ico/page.js - Server Component
import Image from 'next/image';
import Link from 'next/link';
import ClientSidePresale from './ClientSidePresale';

// This is a Server Component that fetches data
async function fetchICOData() {
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL+"/api/crypto-icos-icoanoucement?skip=0&limit=155&ico_ido_type=3&type=ongoing", {
      cache: 'no-store' // Don't cache the response
      // next: { revalidate: 60 } 
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error("Error fetching ICO data:", error);
    return { data: [] }; // Return empty data in case of error
  }
}

export default async function CryptoPresale() {
  // Fetch data on the server
  const icoData = await fetchICOData();
  
  return (
    <>
      <section className="brdcrumb">
        <div className="container">
          <ul className="mb-0">
            <li><Link href="/" title="Home">Home</Link></li>
            <li>Crypto Presale</li> 
          </ul>
        </div>
      </section>
      
      {/* Main Content */}
      <div className="container py-4">
        <h1 className="h2 mb-2">Crypto Presale</h1>
        <p className="text-muted mb-4">
        Find top presale crypto list & crypto tokens with our updated list 2025.
         Invest early in cutting-edge projects at exclusive prices. Secure high-potential opportunities 
         and gain insights into blockchain innovations.
         Stay informed with Presale Calendar and capitalize on presales before public token releases.
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
        <ClientSidePresale icoData={icoData} />

       
      </div>
    </>
  );
}