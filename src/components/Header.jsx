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


// "use client"; // Required for interactive components
// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { FaBars, FaSearch } from "react-icons/fa"; // Using react-icons for FontAwesome
// import Logos from "../images/presale.png";
// export default function Header() {
//   const [isNavOpen, setIsNavOpen] = useState(false);

//   return (
//     <header className="ftco-section">
//       <nav className="navbar navbar-expand-lg bg-gradient py-3">
//         <div className="container">
     
//           {/* Mobile Navbar Toggle */}
//           <button
//             className="navbar-toggler"
//             type="button"
//             onClick={() => setIsNavOpen(!isNavOpen)}
//             aria-controls="ftco-nav"
//             aria-expanded={isNavOpen}
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon">
//               <FaBars className="text-white" />
//             </span>
//           </button>

//           {/* Logo */}
//           <div className="logo me-4">
//             <Link href="/" className="text-decoration-none">
//               <Image
//                 src={Logos}
//                 alt="Logo"
//                 width={180}
//                 height={53}
//                 priority
//               />
//             </Link>
//           </div>

//           {/* Navbar Links */}
//           <div className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`} id="ftco-nav">
//             <ul className="navbar-nav">
//               {/* Search Form (Mobile) */}
//               <form action="#" className="searchform d-block d-lg-none">
//                 <div className="form-group d-flex">
//                   <input type="text" className="form-control pl-3" placeholder="Search Coins" />
//                   <button type="submit" className="search">
//                     {/* <FaSearch /> */}
//                     <i class="fa fa-search"></i>
//                   </button>
//                 </div>
//               </form>

//               <li className="nav-item">
//                 <Link className="nav-link" href="/listings">Presales</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" href="/listings">Best Crypto Presale</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" href="/project_review">Project Review</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" href="/listicle">Listicle</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" href="/blog">Press Release</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" href="/guestpost">Guest Post</Link>
//               </li>
//             </ul>
//           </div>

//           {/* Search Form (Desktop) */}
//           <form action="#" className="searchform d-none d-lg-block">
//             <div className="form-group d-flex">
//               <input type="text" className="form-control pl-3" placeholder="Search Coins" />
//               <button type="submit" className="search">
//               <svg stroke="white" fill="white" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg>
//               </button>
//             </div>
//           </form>

//           {/* Sign In/Register Button */}
//           <Link href="/login" className="btn-main primary-btn me-2">
//             <span>Sign In/Register</span>
//           </Link>
//         </div>
//       </nav>
//     </header>
//   );
// }

// "use client"; // Required for interactive components
// import { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { FaBars, FaSearch } from "react-icons/fa"; // Using react-icons for FontAwesome
// import Logos from "../images/presale.png";
// import axios from "axios"; // Import axios for API calls

// export default function Header() {
//   const [isNavOpen, setIsNavOpen] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
  
//   // Check if user is logged in on component mount
//   useEffect(() => {
//     checkLoginStatus();
//   }, []);
  
//   // Function to check login status
//   const checkLoginStatus = async () => {
//     try {
//       // Option 1: Check with the server if user is logged in
//       const response = await axios.get('/api/auth/me', {
//         withCredentials: true // Important for cookie-based auth
//       });
      
//       if (response.data) {
//         setIsLoggedIn(true);
//       } else {
//         setIsLoggedIn(false);
//       }
//     } catch (error) {
//       // If API call fails, user is not logged in
//       setIsLoggedIn(false);
//       console.log("Not logged in or error checking status:", error);
      
//       // Option 2: As fallback, check localStorage
//       const token = localStorage.getItem('userToken');
//       if (token) {
//         setIsLoggedIn(true);
//       }
//     }
//   };
  
//   // Handle logout with API call
//   const handleLogout = async () => {
//     try {
//       // Make API call to logout endpoint
//       const response = await axios({
//         method: 'post',
//         url: '/api/auth/logout',
//         // Ensure credentials are included so cookies are sent with the request
//         withCredentials: true
//       });
      
//       // If logout successful
//       if (response.data) {
//         console.log('Logout successful:', response.data);
        
//         // Remove any local storage items
//         localStorage.removeItem('userToken');
        
//         // Update state to reflect logged out status immediately
//         setIsLoggedIn(false);
        
//         // No page refresh needed as the state update will trigger React to re-render
//       }
//     } catch (error) {
//       console.error('Logout failed:', error);
//       alert('Logout failed. Please try again.');
//     }
//   };

//   return (
//     <header className="ftco-section">
//       <nav className="navbar navbar-expand-lg bg-gradient py-3">
//         <div className="container">
//           {/* Mobile Navbar Toggle */}
//           <button
//             className="navbar-toggler"
//             type="button"
//             onClick={() => setIsNavOpen(!isNavOpen)}
//             aria-controls="ftco-nav"
//             aria-expanded={isNavOpen}
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon">
//               <FaBars className="text-white" />
//             </span>
//           </button>

//           {/* Logo */}
//           <div className="logo me-4">
//             <Link href="/" className="text-decoration-none">
//               <Image
//                 src={Logos}
//                 alt="Logo"
//                 width={180}
//                 height={53}
//                 priority
//               />
//             </Link>
//           </div>

//           {/* Navbar Links */}
//           <div className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`} id="ftco-nav">
//             <ul className="navbar-nav">
//               {/* Search Form (Mobile) */}
//               <form action="#" className="searchform d-block d-lg-none">
//                 <div className="form-group d-flex">
//                   <input type="text" className="form-control pl-3" placeholder="Search Coins" />
//                   <button type="submit" className="search">
//                     <i className="fa fa-search"></i>
//                   </button>
//                 </div>
//               </form>

//               <li className="nav-item">
//                 <Link className="nav-link" href="/listings">Presales</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" href="/listings">Best Crypto Presale</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" href="/project_review">Project Review</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" href="/listicle">Listicle</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" href="/blog">Press Release</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" href="/guestpost">Guest Post</Link>
//               </li>
//             </ul>
//           </div>

//           {/* Search Form (Desktop) */}
//           <form action="#" className="searchform d-none d-lg-block">
//             <div className="form-group d-flex">
//               <input type="text" className="form-control pl-3" placeholder="Search Coins" />
//               <button type="submit" className="search">
//                 <svg stroke="white" fill="white" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
//                 </svg>
//               </button>
//             </div>
//           </form>

//           {/* Conditional Auth Button: Sign In/Register or Logout */}
//           {isLoggedIn ? (
//             <button 
//               onClick={handleLogout} 
//               className="btn-main danger-btn me-2"
//             >
//               <span>Logout</span>
//             </button>
//           ) : (
//             <Link href="/login" className="btn-main primary-btn me-2">
//               <span>Sign In/Register</span>
//             </Link>
//           )}
//         </div>
//       </nav>
//     </header>
//   );
// }

// Header.jsx
"use client"
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaSearch } from "react-icons/fa";
import Logos from "../images/presale.png";
import { useAuth } from '../hooks/authContext';
import Topbanner from "../images/topbanner.png"

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { isLoggedIn, logout } = useAuth();

  return (
    <>
    <section className="topbar_changes">
    <div className="container">
            <div className="topbar-inner">
                <div><Image src={Topbanner} alt="" height={60} width={60}/> <span className="sponsored">Ad</span></div>
                <p>BTCBULL: New Meme Coin Rewards Holders with Bitcoin - Raises Over $3 Mil!</p>
                <button className="btn btn-rounded" style={{backgroundcolor: "#ffffff"}}>
                    Buy $BTCBULL Now
                </button>
            </div>
        </div>
        </section>
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
            <Link href="/" className="text-decoration-none">
              <Image
                src={Logos}
                alt="Logo"
                width={180}
                height={53}
                priority
              />
            </Link>
          </div>

          {/* Navbar Links */}
          <div className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`} id="ftco-nav">
            <ul className="navbar-nav">
              {/* Search Form (Mobile) */}
              <form action="#" className="searchform d-block d-lg-none">
                <div className="form-group d-flex">
                  <input type="text" className="form-control pl-3" placeholder="Search Coins" />
                  <button type="submit" className="search">
                    <i className="fa fa-search"></i>
                  </button>
                </div>
              </form>

              <li className="nav-item">
                <Link className="nav-link" href="/presale">Presales</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/ico">ICO</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/ido">IDO</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/ieo">IEO</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/project_review">Project Review</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/listicle">Listicle</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/blog">Press Release</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/guestpost">Guest Post</Link>
              </li>
            </ul>
          </div>

          {/* Search Form (Desktop) */}
          <form action="#" className="searchform d-none d-lg-block">
            <div className="form-group d-flex">
              <input type="text" className="form-control pl-3" placeholder="Search Coins" />
              <button type="submit" className="search">
                <svg stroke="white" fill="white" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                </svg>
              </button>
            </div>
          </form>

          {/* Conditional Auth Button: Sign In/Register or Logout */}
          {isLoggedIn ? (
            <button 
              onClick={logout} 
              className="btn-main danger-btn me-2"
            >
              <span>Logout</span>
            </button>
          ) : (
            <Link href="/login" className="btn-main primary-btn me-2">
              <span>Sign In/Register</span>       
              {/* Sign In/Register */}
            </Link>
          )}
        </div>
      </nav>
    </header>
    </>
  );
}