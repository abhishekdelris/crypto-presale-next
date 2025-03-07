// "use client";

// import Link from "next/link";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
// import { faSearch } from '@fortawesome/free-solid-svg-icons';

// const Header = () => {
//   return (
//     <header className="ftco-section mt-2">
//       <div className="container mb-2">
//         <div className="row justify-content-between">
//           <div className="col-md-8 order-md-last">
//             <div className="row">
//               <div className="col-md-6 text-center">
//                 <Link className="navbar-brand" href="/">
//                   Crypto <span>Presale</span>
//                 </Link>
//               </div> 
//               <div className="col-md-6 d-flex justify-content-end mb-md-0 mb-3">
//                 <form action="#" className="searchform order-lg-last">
//                   <div className="form-group d-flex">
//                     <input type="text" className="form-control pl-3" placeholder="Search Coins" />
//                     <button type="submit" className="form-control search">
//                       <FontAwesomeIcon icon={faSearch} />
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-4 d-flex">
//             <div className="social-media">
//               <p className="mb-0 d-flex">
//                 <Link href="https://facebook.com" className="d-flex align-items-center justify-content-center">
//                   <FontAwesomeIcon icon={faFacebookF} />
//                 </Link>
//                 <Link href="https://twitter.com" className="d-flex align-items-center justify-content-center">
//                   <FontAwesomeIcon icon={faTwitter} />
//                 </Link>
//                 <Link href="https://instagram.com" className="d-flex align-items-center justify-content-center">
//                   <FontAwesomeIcon icon={faInstagram} />
//                 </Link>
//                 <Link href="https://linkedin.com" className="d-flex align-items-center justify-content-center">
//                   <FontAwesomeIcon icon={faLinkedinIn} />
//                 </Link>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <nav className="navbar navbar-expand-lg bg-gradient">
//         <div className="container">
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="ftco-nav">
//             <ul className="navbar-nav">
//               <li className="nav-item">
//                 <Link className="nav-link" href="/">
//                   Home
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" href="/listings">
//                   New listings
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" href="/submit_coin">
//                   Submit Coin
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" href="/update_request">
//                   Update Request
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" href="/advertise">
//                   Advertise
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" href="/guestpost">
//                   Guest Post
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" href="/blog">
//                   Blog
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" href="/contactus">
//                   Contact Us
//                 </Link>
//               </li>
//             </ul>
//           </div>
//           <Link href="/login" className="btn-main primary-btn me-2">
//             <span>Sign In</span>
//           </Link>
//           <Link href="/signup" className="btn-main primary-btn">
//             <span>Sign Up</span>
//           </Link>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;


"use client"; // Required for interactive components
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaSearch } from "react-icons/fa"; // Using react-icons for FontAwesome
import Logos from "../images/logo1.png";
export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header className="ftco-section">
      <nav className="navbar navbar-expand-lg bg-gradient py-3">
        <div className="container">
          {/* Mobile Navbar Toggle */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setIsNavOpen(!isNavOpen)}
            aria-controls="ftco-nav"
            aria-expanded={isNavOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <FaBars className="text-white" />
            </span>
          </button>

          {/* Logo */}
          <div className="logo me-4">
            <a href="/" className="text-decoration-none">
              <Image
                src={Logos}
                alt="Logo"
                width={180}
                height={53}
                priority
              />
            </a>
          </div>

          {/* Navbar Links */}
          <div className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`} id="ftco-nav">
            <ul className="navbar-nav">
              {/* Search Form (Mobile) */}
              <form action="#" className="searchform d-block d-lg-none">
                <div className="form-group d-flex">
                  <input type="text" className="form-control pl-3" placeholder="Search Coins" />
                  <button type="submit" className="search">
                    {/* <FaSearch /> */}
                    <i class="fa fa-search"></i>
                  </button>
                </div>
              </form>

              <li className="nav-item">
                <a className="nav-link" href="/listings">Presales</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/listings">Best Crypto Presale</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/submit_coin">Project Review</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/advertise">Listicle</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/blog">Press Release</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/guestpost">Guest Post</a>
              </li>
            </ul>
          </div>

          {/* Search Form (Desktop) */}
          <form action="#" className="searchform d-none d-lg-block">
            <div className="form-group d-flex">
              <input type="text" className="form-control pl-3" placeholder="Search Coins" />
              <button type="submit" className="search">
              <svg stroke="white" fill="white" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg>
              </button>
            </div>
          </form>

          {/* Sign In/Register Button */}
          <a href="/login" className="btn-main primary-btn me-2">
            <span>Sign In/Register</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
