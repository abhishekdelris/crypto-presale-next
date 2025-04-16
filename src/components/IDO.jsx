import Image from 'next/image';
import Link from 'next/link';
import ClientSideIDO from './ClientSideIDO';

// This is a Server Component that fetches data
async function fetchICOData() {
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL+"/api/crypto-icos-icoanoucement?skip=0&limit=155&ico_ido_type=1", {   //&type=ongoing
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

export default async function IDOPage() {
  // Fetch data on the server
  const icoData = await fetchICOData();
  
  return (
    <>
      <section className="brdcrumb">
        <div className="container">
          <ul className="mb-0">
            <li><Link href="/" title="Home">Home</Link></li>
            <li>Crypto IDO</li> 
          </ul>
        </div>
      </section>
      
      {/* Main Content */}
      <div className="container py-4">
        <h1 className="h2 mb-2">Crypto IDO</h1>
        <p className="text-muted mb-4">
        Keep ahead with our curated IDO Calendar. Find upcoming IDO projects, 
       gain access to get real-time updates on crypto IDO 2025 opportunities, 
       and stay informed on the newest launches to maximize your investments.
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
        <ClientSideIDO icoData={icoData} />

       
      </div>
    </>
  );
}