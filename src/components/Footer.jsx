import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <>
     <footer className="footer-04">
        
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-lg-3 mb-md-0 mb-4">
                    <h2 className="footer-heading"><a href="#" className="logo">Crypto Presale</a></h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
                <div className="col-md-6 col-lg-4 mb-md-0 mb-4">
                    <h2 className="footer-heading">Categories</h2>
                        <ul className="footermenu">
                        <li> <a href="/">Home</a> </li>
                        <li><a className="d-block" href="listings">New listings</a></li>
                        <li><a className="d-block" href="submit_coin">Submit Coin</a></li>
                        <li><a className="d-block" href="update_request">Update Request</a></li>
                        <li><a className="d-block " href="contactus">Contact Us</a></li>
                        <li><a className="d-block" href="advertise">Advertise</a></li>
                        <li><a className="d-block" href="blog">Blog</a></li>
                      
                
                    </ul>
                </div>
                <div className="col-md-6 col-lg-2 mb-md-0 mb-4">
                    <h2 className="footer-heading">Follow us</h2>
                    <ul className="ftco-footer-social p-0 main_flex_Gap">
                        <li className="ftco-animate"><a href="#" title="Twitter"><FontAwesomeIcon icon={faTwitter} /></a></li>
                        <li className="ftco-animate"><a href="#" title="Facebook"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                        <li className="ftco-animate"><a href="#" title="Instagram"><FontAwesomeIcon icon={faInstagram} /></a></li>
                        <li className="ftco-animate"><a href="#" title="Linkedin"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
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
                            Copyright © 2025 Coin Gabbar. All Rights Reserved.
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
 