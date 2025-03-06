"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className="ftco-section mt-2">
      <div className="container mb-2">
        <div className="row justify-content-between">
          <div className="col-md-8 order-md-last">
            <div className="row">
              <div className="col-md-6 text-center">
                <Link className="navbar-brand" href="/">
                  Crypto <span>Presale</span>
                </Link>
              </div> 
              <div className="col-md-6 d-flex justify-content-end mb-md-0 mb-3">
                <form action="#" className="searchform order-lg-last">
                  <div className="form-group d-flex">
                    <input type="text" className="form-control pl-3" placeholder="Search Coins" />
                    <button type="submit" className="form-control search">
                      <FontAwesomeIcon icon={faSearch} />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex">
            <div className="social-media">
              <p className="mb-0 d-flex">
                <Link href="https://facebook.com" className="d-flex align-items-center justify-content-center">
                  <FontAwesomeIcon icon={faFacebookF} />
                </Link>
                <Link href="https://twitter.com" className="d-flex align-items-center justify-content-center">
                  <FontAwesomeIcon icon={faTwitter} />
                </Link>
                <Link href="https://instagram.com" className="d-flex align-items-center justify-content-center">
                  <FontAwesomeIcon icon={faInstagram} />
                </Link>
                <Link href="https://linkedin.com" className="d-flex align-items-center justify-content-center">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg bg-gradient">
        <div className="container">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" href="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/listings">
                  New listings
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/submit_coin">
                  Submit Coin
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/update_request">
                  Update Request
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/advertise">
                  Advertise
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/guestpost">
                  Guest Post
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/blog">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/contactus">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <Link href="/login" className="btn-main primary-btn me-2">
            <span>Sign In</span>
          </Link>
          <Link href="/signup" className="btn-main primary-btn">
            <span>Sign Up</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
