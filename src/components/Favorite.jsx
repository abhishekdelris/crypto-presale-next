'use client'
import Link from 'next/link'
import React,{ useState, useEffect }from 'react'
import LoginModal from './LoginModal';

function Favorite() {
    const [showLoginModal, setShowLoginModal] = useState(false);
    const handleOpenLoginModal = () => setShowLoginModal(true);
    const handleCloseLoginModal = () => setShowLoginModal(false);

    const handleLoginSuccess = (userData) => {
        console.log('User logged in successfully:', userData);
        // You can add custom logic here after successful login
        // For example, update the UI to show the user is logged in
      };
  return (
    <div>
       <section className="listingblock">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-5">
                    <div className="listing_box box_left">
                        <div className="contentview">
                            <h5 className="h3">Your Favorite Coin Missing?</h5>
                            <p>Can't find your coin? List your favorite coin now!
                                Get your community to vote for your coin and gain exposure.</p>
                            <Link href="/submit_coin" className="btn-main primary-btn shadow">Submit Coin</Link>
                        </div>
                    </div>
                </div>
                <div className="col-xl-5"> 
                    <div className="listing_box ">
                        <div className="contentview">
                            <h5 className="h3">View New Listings</h5><br/>
                            <p>Click the button below to view the New Listings!images
                                These coins were just submitted.</p><br/>
                                <button  onClick={handleOpenLoginModal}>clickMe</button>
                            <Link href="/listings" className="btn-main primary-btn shadow">View New Listings</Link>
                        </div>
                    </div>
                </div>
                <div className="col-xl-12 mt-4">
                    <h5 className="h3 text-white mb-3">Find the best new cryptocurrency projects</h5>
                    <p className="text-white">Did ever you wonder where people find the best new cryptocurrency projects, coins and tokens like Doge and Shiba Inu? They use websites like crypto presale. Cryptocurrency projects are listed here before CoinMarketCap, CoinGecko and major exchanges. Find the best crypto moonshots on our website.
                        However: before investing always do your own research (DYOR)! Listing on crypto presale does NOT mean we endorse the project, they could be scams. Be careful with your investments.</p>
                    <h5 className="h3 text-white">How does Crypto Presale work?</h5>
                    <p className="text-white">Did ever you wonder where people find the best new cryptocurrency projects, coins and tokens like Doge and Shiba Inu? They use websites like crypto presale. Cryptocurrency projects are listed here before CoinMarketCap, CoinGecko and major exchanges. Find the best crypto moonshots on our website.
                        However: before investing always do your own research (DYOR)! Listing on crypto presale does NOT mean we endorse the project, they could be scams. Be careful with your investments.</p>
                </div>
            </div>
        </div>
        <LoginModal 
        show={showLoginModal} 
        handleClose={handleCloseLoginModal}
        onLoginSuccess={handleLoginSuccess}
      />
    </section>
    </div>
  )
}

export default Favorite
