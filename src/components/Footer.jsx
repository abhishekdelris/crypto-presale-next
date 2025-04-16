import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

function Footer() {
  return (
    <>
     <footer className="footer-04">
        
        <div className="container"> 
            <div className="row">
                <div className="col-md-6 col-lg-3 mb-md-0 mb-4">
                    <h2 className="footer-heading"><Link href="#" className="logo">Crypto Presale</Link></h2>
                    <p>Crypto presales are offering opportunities for early investment in various projects.
                         emphasizing potential growth and innovative features 
                         like Layer 1 Web3 aggregation and DeFi wallet technology. </p>
                </div>
                <div className="col-md-6 col-lg-4 mb-md-0 mb-4">
                    <h2 className="footer-heading">Categories</h2>
                        <ul className="footermenu">
                        {/* <li> <Link href="/">Home</Link> </li> */}
                        <li><Link className="d-block" href="/listings">New listings</Link></li>
                        <li><Link className="d-block" href="/submit_coin">Submit Coin</Link></li>
                        <li><Link className="d-block" href="/edit-ico-presale-coins">Update Request</Link></li>
                        <li><Link className="d-block " href="/contactus">Contact Us</Link></li>
                        <li><Link className="d-block" href="/advertise">Advertise</Link></li>
                        <li><Link className="d-block" href="/blog">Blog</Link></li>
                      
                
                    </ul>
                </div>
                <div className="col-md-6 col-lg-2 mb-md-0 mb-4">
                    <h2 className="footer-heading">Follow us</h2>
                    <ul className="ftco-footer-social p-0 main_flex_Gap">
                        <li className="ftco-animate"><Link href="#" title="Twitter"><i className="fa-brands fa-x-twitter"></i></Link></li>
                        <li className="ftco-animate"><Link href="#" title="Facebook"><i className="fa-brands fa-facebook-f"></i></Link></li>
                        <li className="ftco-animate"><Link href="#" title="Instagram"><i className="fa-brands fa-instagram"></i></Link></li>
                        <li className="ftco-animate"><Link href="#" title="Linkedin"><i className="fa-brands fa-linkedin-in"></i></Link></li>
                    </ul>
                </div>
                <div className="col-md-6 col-lg-3 mb-md-0 mb-4">
                    <h2 className="footer-heading">Subcribe</h2>
                    <form action="#" className="subscribe-form">
                        <div className="form-group d-flex">
                            <input type="text" className="form-control rounded-left" placeholder="Enter email address"/>
                            <button type="submit" className="form-control submit rounded-right"><span className="sr-only">Submit</span><i className="fa-solid fa-paper-plane"></i></button>
                        </div>
                    </form>
                    
                </div>
            </div>
        </div>
        <div className="w-100 mt-5 border-top py-2">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <p className="copyright mb-0">
                            Copyright © 2025 Crypto Presale. All Rights Reserved.
                        </p>
                    </div>
                    
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer
 

// import React from 'react'

// function Footer() {
//   return (
//     <>
//       <div>
//   {/* Footer */}
//   <footer>
//     <div className="container">
//       <div className="footer-container">
//         {/* About Section */}
//         <div className="footer-section">
//           <div className="footer-logo">
//             <img src="/api/placeholder/100/36" alt="Crypto Presale Logo" />
//             <span>PRESALE</span>
//           </div>
//           <p>The premiere platform for discovering and participating in the best crypto presales and ICOs. Join our community of investors to get early access to promising blockchain projects.</p>
//           <div className="social-links">
//             <a href="#" aria-label="Twitter">
//               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
//                 <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.1 10.1 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
//               </svg>
//             </a>
//             <a href="#" aria-label="Facebook">
//               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
//                 <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
//               </svg>
//             </a>
//             <a href="#" aria-label="Instagram">
//               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
//                 <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0z" />
//                 <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8z" />
//                 <circle cx="18.406" cy="5.594" r="1.44" />
//               </svg>
//             </a>
//             <a href="#" aria-label="LinkedIn">
//               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
//                 <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
//               </svg>
//             </a>
//           </div>
//         </div>
//         {/* Categories Section */}
//         <div className="footer-section">
//           <h3>Categories</h3>
//           <ul className="footer-links">
//             <li>
//               <a href="#">
//                 <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16">
//                   <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
//                 </svg>
//                 Home
//               </a>
//             </li>
//             <li>
//               <a href="#">
//                 <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16">
//                   <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
//                 </svg>
//                 New listings
//               </a>
//             </li>
//             <li>
//               <a href="#">
//                 <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16">
//                   <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
//                 </svg>
//                 Submit Coin
//               </a>
//             </li>
//             <li>
//               <a href="#">
//                 <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16">
//                   <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
//                 </svg>
//                 Update Request
//               </a>
//             </li>
//             <li>
//               <a href="#">
//                 <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16">
//                   <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
//                 </svg>
//                 Best Crypto Presale
//               </a>
//             </li>
//           </ul>
//         </div>
//         {/* Quick Links Section */}
//         <div className="footer-section">
//           <h3>Quick Links</h3>
//           <ul className="footer-links">
//             <li>
//               <a href="#">
//                 <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16">
//                   <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
//                 </svg>
//                 Contact Us
//               </a>
//             </li>
//             <li>
//               <a href="#">
//                 <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16">
//                   <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
//                 </svg>
//                 Advertise
//               </a>
//             </li>
//             <li>
//               <a href="#">
//                 <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16">
//                   <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
//                 </svg>
//                 Blog
//               </a>
//             </li>
//             <li>
//               <a href="#">
//                 <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16">
//                   <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
//                 </svg>
//                 Press Release
//               </a>
//             </li>
//             <li>
//               <a href="#">
//                 <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16">
//                   <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
//                 </svg>
//                 Guest Post
//               </a>
//             </li>
//           </ul>
//         </div>
//         {/* Newsletter Section */}
//         <div className="footer-section">
//           <h3>Newsletter</h3>
//           <p>Subscribe to our newsletter to receive updates on new listings, exclusive presale opportunities, and industry insights.</p>
//           <div className="newsletter">
//             <div className="newsletter-form">
//               <input type="email" placeholder="Enter email address" />
//               <button type="submit">
//                 <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16">
//                   <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Footer Bottom */}
//       <div className="copyright">
//         <div className="footer-bottom">
//           <p>Copyright © 2025 Coin Gabbar. All Rights Reserved.</p>
//           <div className="footer-bottom-links">
//             <a href="#">Privacy Policy</a>
//             <a href="#">Terms of Service</a>
//             <a href="#">Disclaimer</a>
//             <a href="#">Sitemap</a>
//           </div>
//         </div>
//       </div>
//     </div>
//   </footer>
//   {/* Back to top button */}
//   <a href="#" className="back-to-top" aria-label="Back to top">
//     <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16">
//       <path fillRule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" />
//     </svg>
//   </a>
// </div>

//     </>
//   )
// }

// export default Footer
