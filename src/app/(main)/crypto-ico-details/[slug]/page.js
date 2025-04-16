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