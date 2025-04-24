
import Image from 'next/image';
import Link from 'next/link';
import ClientSideICO from './ClientSideICO';

// This is a Server Component that fetches data
async function fetchInitialData() {
  try {
    // Default to "ongoing" type for initial load
    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/crypto-icos-icoanoucement?skip=0&limit=15&ico_ido_type=0&type=ongoing`;
    
    const response = await fetch(apiUrl, {
      cache: 'no-store', // Don't cache the response
      next: { tags: ['idos'] } // Optional: Add tags for revalidation
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status}`);
    } 
    
    return await response.json();
  } catch (error) {
    console.error("Error fetching IDO data:", error);
    return { success: false, data: [], total: 0 }; // Return empty data in case of error
  }
}

export default async function ICOPage() {
  // Fetch data on the server
  const initialData = await fetchInitialData();
  
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
        <ClientSideICO initialData={initialData.data || []} />

       
      </div>
    </>
  );
}