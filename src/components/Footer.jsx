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
