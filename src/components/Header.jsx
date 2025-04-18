"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaSearch } from "react-icons/fa";
import Logos from "../images/presale.png";
import { useAuth } from "../hooks/authContext";
import Topbanner from "../images/topbanner.png";
import coinImage from "@/images/altcoin.webp";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchRef = useRef(null);
  const { isAuthenticated, logout, user } = useAuth();

  // Handle click outside of search results
  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchFocused(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Search coins based on input
  useEffect(() => {
    const fetchCoins = async () => {
      if (searchQuery.trim().length === 0) {
        setSearchResults([]);
        return;
      }

      try {
        const response = await fetch(
          `/api/search/coins?q=${encodeURIComponent(searchQuery)}`
        );
        const data = await response.json();
        setSearchResults(data.coins);
      } catch (error) {
        console.error("Error searching coins:", error);
        setSearchResults([]);
      }
    };

    // Add debounce to prevent too many API calls
    const timeoutId = setTimeout(() => {
      fetchCoins();
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle search form submission
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Implement your search submission logic here
    console.log("Searching for:", searchQuery);
    // You could redirect to a search results page
    // router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <>
      <section className="topbar_changes">
        <div className="container">
          <div className="topbar-inner">
            <div>
              <Image src={Topbanner} alt="" height={60} width={60} />{" "}
              <span className="sponsored">Ad</span>
            </div>
            <p>
              BTCBULL: New Meme Coin Rewards Holders with Bitcoin - Raises Over
              $3 Mil!
            </p>
            <button
              className="btn btn-rounded"
              style={{ backgroundColor: "#ffffff" }}
            >
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
            <div
              className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`}
              id="ftco-nav"
            >
              <ul className="navbar-nav">
                {/* Search Form (Mobile) */}
                <form
                  action="#"
                  className="searchform d-block d-lg-none"
                  onSubmit={handleSearchSubmit}
                >
                  <div
                    className="form-group d-flex position-relative"
                    ref={searchRef}
                  >
                    <input
                      type="text"
                      className="form-control pl-3"
                      placeholder="Search Coins"
                      value={searchQuery}
                      onChange={handleSearchChange}
                      onFocus={() => setIsSearchFocused(true)}
                    />
                    <button type="submit" className="search">
                      <i className="fa fa-search"></i>
                    </button>

                    {/* Dropdown results for mobile */}
                    {isSearchFocused && searchResults.length > 0 && (
                      <div
                        className="search-results-dropdown position-absolute w-100"
                        style={{
                          top: "100%",
                          left: 0,
                          zIndex: 1000,
                          backgroundColor: "#fff",
                          borderRadius: "4px",
                          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                          marginTop: "2px"
                        }}
                      >
                        {searchResults.map((coin) => (
                          <Link
                            key={coin.id}
                            href={`/crypto-ico-details/${coin.slug}`}
                            className="d-block p-2 text-decoration-none"
                            style={{
                              color: "#333",
                              borderBottom: "1px solid #eee"
                            }}
                            onClick={() => setIsSearchFocused(false)}
                          >
                            <div className="d-flex align-items-center">
                              <Image
                                src={
                                  coin.image
                                    ? coin.image.startsWith(
                                        "https://d3iuzwoiyg9qa8.cloudfront.net/"
                                      )
                                      ? coin.image
                                      : `https://d3iuzwoiyg9qa8.cloudfront.net/webadmin/storage/${coin.image}`
                                    : coinImage
                                }
                                alt={coin.img_alt_title}
                                height={30}
                                width={30}
                                className="rounded-circle"
                              />
                             
                              <span className="ml-2">{coin.name}</span>
                              <span>{`(${coin.alias})`}</span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </form>

                <li className="nav-item">
                  <Link className="nav-link" href="/presale">
                    Presales
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/ico">
                    ICO
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/ido">
                    IDO
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/ieo">
                    IEO
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/project_review">
                    Project Review
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/listicle">
                    Listicle
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/press_release">
                    Press Release
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/guestpost">
                    Guest Post
                  </Link>
                </li>
              </ul>
            </div>

            {/* Search Form (Desktop) */}
            <form
              action="#"
              className="searchform d-none d-lg-block"
              onSubmit={handleSearchSubmit}
            >
              <div
                className="form-group d-flex position-relative"
                ref={searchRef}
              >
                <input
                  type="text"
                  className="form-control pl-3"
                  placeholder="Search Coins"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  onFocus={() => setIsSearchFocused(true)}
                />
                <button type="submit" className="search">
                  <svg
                    stroke="white"
                    fill="white"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                  </svg>
                </button>

                {/* Dropdown results for desktop */}
                {isSearchFocused && searchResults.length > 0 && (
                  <div
                    className="search-results-dropdown position-absolute w-100"
                    style={{
                      top: "100%",
                      left: 0,
                      zIndex: 1000,
                      backgroundColor: "#fff",
                      borderRadius: "4px",
                      boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                      marginTop: "2px"
                    }}
                  >
                    {searchResults.map((coin) => (
                      <Link
                        key={coin.id}
                        href={`/crypto-ico-details/${coin.slug}`}
                        className="d-block p-2 text-decoration-none"
                        style={{
                          color: "#333",
                          borderBottom: "1px solid #eee"
                        }}
                        onClick={() => setIsSearchFocused(false)}
                      >
                        <div className="d-flex align-items-center">
                          <Image
                            src={
                              coin.image
                                ? coin.image.startsWith(
                                    "https://d3iuzwoiyg9qa8.cloudfront.net/"
                                  )
                                  ? coin.image
                                  : `https://d3iuzwoiyg9qa8.cloudfront.net/webadmin/storage/${coin.image}`
                                : coinImage
                            }
                            alt={coin.img_alt_title}
                            height={30}
                            width={30}
                            className="rounded-circle"
                          />
                       
                          <span className="ml-2">{coin.name}</span>
                          <span >{`(${coin.alias})`}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </form>

            {/* Conditional Auth Button: Sign In/Register or Logout */}
            {isAuthenticated ? (
              <button onClick={logout} className="btn-main danger-btn me-2">
                <span>Logout</span>
              </button>
            ) : (
              <Link href="/login" className="btn-main primary-btn me-2">
                <span>Sign In/Register</span>
              </Link>
            )}
          </div>
        </nav>
      </header>
    </>
  );
}

// "use client"
// import { useState, useEffect, useRef } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { FaBars, FaSearch } from "react-icons/fa";
// import Logos from "../images/presale.png";
// import { useAuth } from '../hooks/authContext';
// import Topbanner from "../images/topbanner.png"

// export default function Header({ coinData = [] }) {
//   const [isNavOpen, setIsNavOpen] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [suggestions, setSuggestions] = useState([]);
//   const [showSuggestions, setShowSuggestions] = useState(false);
//   const { isAuthenticated, logout } = useAuth();
//   const searchRef = useRef(null);

//   // Filter coins based on search term
//   useEffect(() => {
//     if (searchTerm.trim() === "") {
//       setSuggestions([]);
//       return;
//     }

//     const filteredCoins = coinData.filter(coin =>
//       coin.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     // Limit to first 5 results
//     setSuggestions(filteredCoins.slice(0, 5));
//   }, [searchTerm, coinData]);

//   // Close suggestions when clicking outside
//   useEffect(() => {
//     function handleClickOutside(event) {
//       if (searchRef.current && !searchRef.current.contains(event.target)) {
//         setShowSuggestions(false);
//       }
//     }

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value);
//     setShowSuggestions(true);
//   };

//   const handleSearchSubmit = (e) => {
//     e.preventDefault();
//     // Implement your search redirect logic here
//     // Example: router.push(`/search?q=${searchTerm}`);
//     console.log("Searching for:", searchTerm);
//     setShowSuggestions(false);
//   };

//   const handleSuggestionClick = (coinName) => {
//     setSearchTerm(coinName);
//     setShowSuggestions(false);
//     // Optionally redirect to the coin's page
//     // router.push(`/coin/${coinName}`);
//   };

//   return (
//     <>
//       <section className="topbar_changes">
//         <div className="container">
//           <div className="topbar-inner">
//             <div><Image src={Topbanner} alt="" height={60} width={60}/> <span className="sponsored">Ad</span></div>
//             <p>BTCBULL: New Meme Coin Rewards Holders with Bitcoin - Raises Over $3 Mil!</p>
//             <button className="btn btn-rounded" style={{backgroundColor: "#ffffff"}}>
//               Buy $BTCBULL Now
//             </button>
//           </div>
//         </div>
//       </section>
//       <header className="ftco-section">
//         <nav className="navbar navbar-expand-lg bg-gradient py-3">
//           <div className="container">
//             {/* Mobile Navbar Toggle */}
//             <button
//               className="navbar-toggler"
//               type="button"
//               onClick={() => setIsNavOpen(!isNavOpen)}
//               aria-controls="ftco-nav"
//               aria-expanded={isNavOpen}
//               aria-label="Toggle navigation"
//             >
//               <span className="navbar-toggler-icon">
//                 <FaBars className="text-white" />
//               </span>
//             </button>

//             {/* Logo */}
//             <div className="logo me-4">
//               <Link href="/" className="text-decoration-none">
//                 <Image
//                   src={Logos}
//                   alt="Logo"
//                   width={180}
//                   height={53}
//                   priority
//                 />
//               </Link>
//             </div>

//             {/* Navbar Links */}
//             <div className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`} id="ftco-nav">
//               <ul className="navbar-nav">
//                 {/* Search Form (Mobile) */}
//                 <form
//                   onSubmit={handleSearchSubmit}
//                   className="searchform d-block d-lg-none position-relative"
//                   ref={searchRef}
//                 >
//                   <div className="form-group d-flex">
//                     <input
//                       type="text"
//                       className="form-control pl-3"
//                       placeholder="Search Coins"
//                       value={searchTerm}
//                       onChange={handleSearchChange}
//                       onFocus={() => setShowSuggestions(true)}
//                     />
//                     <button type="submit" className="search">
//                       <i className="fa fa-search"></i>
//                     </button>
//                   </div>
//                   {showSuggestions && suggestions.length > 0 && (
//                     <div className="suggestions-dropdown">
//                       {suggestions.map((coin, index) => (
//                         <div
//                           key={index}
//                           className="suggestion-item"
//                           onClick={() => handleSuggestionClick(coin.name)}
//                         >
//                           {coin.name}
//                         </div>
//                       ))}
//                     </div>
//                   )}
//                 </form>

//                 <li className="nav-item">
//                   <Link className="nav-link" href="/presale">Presales</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" href="/ico">ICO</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" href="/ido">IDO</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" href="/ieo">IEO</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" href="/project_review">Project Review</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" href="/listicle">Listicle</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" href="/blog">Press Release</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" href="/guestpost">Guest Post</Link>
//                 </li>
//               </ul>
//             </div>

//             {/* Search Form (Desktop) */}
//             <form
//               onSubmit={handleSearchSubmit}
//               className="searchform d-none d-lg-block position-relative"
//               ref={searchRef}
//             >
//               <div className="form-group d-flex">
//                 <input
//                   type="text"
//                   className="form-control pl-3"
//                   placeholder="Search Coins"
//                   value={searchTerm}
//                   onChange={handleSearchChange}
//                   onFocus={() => setShowSuggestions(true)}
//                 />
//                 <button type="submit" className="search">
//                   <svg stroke="white" fill="white" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
//                   </svg>
//                 </button>
//               </div>
//               {showSuggestions && suggestions.length > 0 && (
//                 <div className="suggestions-dropdown">
//                   {suggestions.map((coin, index) => (
//                     <div
//                       key={index}
//                       className="suggestion-item"
//                       onClick={() => handleSuggestionClick(coin.name)}
//                     >
//                       {coin.name}
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </form>

//             {/* Conditional Auth Button: Sign In/Register or Logout */}
//             {isAuthenticated ? (
//               <button
//                 onClick={logout}
//                 className="btn-main danger-btn me-2"
//               >
//                 <span>Logout</span>
//               </button>
//             ) : (
//               <Link href="/login" className="btn-main primary-btn me-2">
//                 <span>Sign In/Register</span>
//               </Link>
//             )}
//           </div>
//         </nav>
//       </header>

//       {/* Add this CSS */}
//       <style jsx>{`
//         .position-relative {
//           position: relative;
//         }
//         .suggestions-dropdown {
//           position: absolute;
//           top: 100%;
//           left: 0;
//           right: 0;
//           background-color: white;
//           border: 1px solid #ddd;
//           border-radius: 0 0 4px 4px;
//           max-height: 200px;
//           overflow-y: auto;
//           z-index: 1000;
//           box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//         }
//         .suggestion-item {
//           padding: 10px 15px;
//           cursor: pointer;
//           border-bottom: 1px solid #eee;
//         }
//         .suggestion-item:hover {
//           background-color: #f8f9fa;
//         }
//         .suggestion-item:last-child {
//           border-bottom: none;
//         }
//       `}</style>
//     </>
//   );
// }
