import React from 'react'
import EditListings from '../../../components/EditListings';
import Link from 'next/link';

// This is a Server Component that fetches data
async function fetchICOData() {
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_API_URL+"/api/crypto-icos-icoanoucement?type=ongoing", {   //&type=ongoing
        cache: 'no-store' // Don't cache the response
        //  next: { revalidate: 60 } 
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

export default async function EditIcoPresaleCoins() {
    const icoData = await fetchICOData();
  return (
    <>
      <section className="brdcrumb">
        <div className="container">
          <ul className="mb-0">
            <li><Link href="/" title="Home">Home</Link></li>
            <li>Edit your Crypto Presale, ICO, IDO, IEO</li> 
          </ul>
        </div> 
      </section>

      {/* Main Content */}
      
        <div className="container mt-4">
       
            <div className="section-title row">
              <div className='col-8'><h5 className="h4 fw-semibold">Edit ICO/IDO</h5>
              <p>
              At Crypto Presale, take control of your cryptocurrency presale, ICO, IDO, or IEO listings effortlessly. 
              Update and enhance your project's visibility within the vibrant crypto community. 
              Edit your Presale, ICO, IDO, IEO listings now and pave the way for success in the fast-paced realm of digital currencies.
              </p></div>
              <div className='col-4' >
                <button className='btn-main primary-btn small px-4 btn-second_main m-2'> + Add ICO</button>
                <button className='btn-main primary-btn small px-4 btn-second_main m-2'>Edit you Presale</button>
              </div>
           
          </div>
          
          <EditListings icoData={icoData} />
          </div>
    </>
  )
}

