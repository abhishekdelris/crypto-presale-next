// "use client";

// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import altcoinImage from "../images/altcoin.webp";
// import { useRouter } from "next/navigation";
// import { useAuth } from "../hooks/authContext";
// import Link from "next/link";
// import axios from 'axios';
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import LoginModal from "./LoginModal"; 


// export default function ClientSideICO({ icoData }) {
//   const [selectedType, setSelectedType] = useState("");
//   const [selectedLaunchpad, setSelectedLaunchpad] = useState(0);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [tempSearchQuery, setTempSearchQuery] = useState(""); // For immediate input changes
//   const router = useRouter();
//   const [visibleData, setVisibleData] = useState(15);
//   const [dateRange, setDateRange] = useState([null, null]);
//   const [startDate, endDate] = dateRange;
//   const [launchpads, setLaunchpads] = useState([]);
//   const { isAuthenticated,  user } = useAuth();
//   const [isLoading, setIsLoading] = useState(false);
//   const [showLoginModal, setShowLoginModal] = useState(false);
//   const [pendingLikeAction, setPendingLikeAction] = useState(null);
//   const [userLikes, setUserLikes] = useState({});

//   const handleOpenLoginModal = () => setShowLoginModal(true);
//   const handleCloseLoginModal = () => setShowLoginModal(false);

 

//   // Modified to handle pending like action after login
//   const handleLoginSuccess = (userData) => {
//     console.log('User logged in successfully:', userData);
//     router.reload();
    
//     // Check if there was a pending like action
//     if (pendingLikeAction) {
//       handleLike(pendingLikeAction.ico_id, pendingLikeAction.pre_like);
//       setPendingLikeAction(null);
//     }
//   };

//   const handleSelectChange = (event) => {
//     setSelectedType(event.target.value);
//   };

//   const handleLaunchpadChange = (event) => {
//     setSelectedLaunchpad(Number(event.target.value));
//   };

//   const handleSearchInputChange = (event) => {
//     setTempSearchQuery(event.target.value);
//   };

//   // Function to be called when search button is clicked
//   const handleSearch = () => {
//     setSearchQuery(tempSearchQuery);
//   };

//   // Also handle Enter key press on the search input
//   const handleKeyPress = (event) => {
//     if (event.key === "Enter") {
//       handleSearch();
//     }
//   };

//   function formatNumber(num) {
//     if (num >= 1e9) {
//       return (num / 1e9).toFixed(2).replace(/\.00$/, "") + "B";
//     } else if (num >= 1e6) {
//       return (num / 1e6).toFixed(2).replace(/\.00$/, "") + "M";
//     } else if (num >= 1e3) {
//       return (num / 1e3).toFixed(2).replace(/\.00$/, "") + "K";
//     }
//     return num.toString() ? num.toString() : num;
//   }

//   function calculateSingleDateDifference(startDate, endDate) {
//     const start = new Date(startDate);
//     const end = new Date(endDate);

//     if (end < start) {
//       return "End date must be greater than start date.";
//     }

//     const timeDifference = end - start;
//     const totalDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

//     const totalMonths = Math.floor(totalDays / 30);
//     const totalWeeks = Math.floor(totalDays / 7);

//     if (totalMonths > 0) {
//       return `${totalMonths} month${totalMonths !== 1 ? "s" : ""}`;
//     } else if (totalWeeks > 0) {
//       return `${totalWeeks} week${totalWeeks !== 1 ? "s" : ""}`;
//     } else {
//       return `${totalDays} day${totalDays !== 1 ? "s" : ""}`;
//     }
//   }

//   // Filter the data based on search, type, launchpad and date range
//   const filteredData = (icoData?.data || []).filter((ico) => {
//     // Text search filter
//     const matchesSearch =
//       searchQuery === "" ||
//       (ico.name &&
//         ico.name.toLowerCase().includes(searchQuery.toLowerCase())) ||
//       (ico.alias &&
//         ico.alias.toLowerCase().includes(searchQuery.toLowerCase()));

//     // Type filter
//     let matchesType = true;
//     if (selectedType === "ongoing") {
//       const now = new Date();
//       const startTime = new Date(ico.start_time);
//       const endTime = new Date(ico.end_time);
//       matchesType = now >= startTime && now <= endTime;
//     } else if (selectedType === "upcoming") {
//       const now = new Date();
//       const startTime = new Date(ico.start_time);
//       matchesType = startTime > now;
//     } else if (selectedType === "ended") {
//       const now = new Date();
//       const endTime = new Date(ico.end_time);
//       matchesType = endTime < now;
//     }

//     // Launchpad filter
//     let matchesLaunchpad = true;
//     if (selectedLaunchpad !== 0) {
//       matchesLaunchpad = ico.launchpad === selectedLaunchpad;
//     }

//     // Date range filter
//     let matchesDateRange = true;
//     if (startDate && endDate) {
//       const icoStartDate = new Date(ico.start_time);
//       const icoEndDate = new Date(ico.end_time);

//       // Check if the ICO period overlaps with the selected date range
//       matchesDateRange = icoStartDate <= endDate && icoEndDate >= startDate;
//     }
//     return (
//       ico.is_review === 1 && 
//       matchesSearch && 
//       matchesType && 
//       matchesLaunchpad &&
//       matchesDateRange
//     );
//   });

//   // Sort the filtered data: Featured first, then others
//   const sortedData = filteredData.sort((a, b) => b.featured - a.featured);

//   // Paginate the data
//   const paginatedData = sortedData.slice(0, visibleData);

//   // Load More function
//   const handleLoadMore = () => {
//     setVisibleData((prev) => prev + 15);
//   };

//   // Modified to show login modal instead of redirecting
//   const handleLike = async (ico_id, pre_like) => {
//     if (!isAuthenticated) {
//       // Store the pending like action for after login
//       setPendingLikeAction({ ico_id, pre_like });
//       handleOpenLoginModal();
//       return;
//     }

//     try {
//       const res = await fetch("/api/like_counts", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//           ico_id,
//           user_id: user.id,
//           pre_like
//         })
//       });

//       const data = await res.json();

//       if (data.success) {
//         // Update local state to show liked status
//         setUserLikes(prev => ({
//           ...prev,
//           [ico_id]: true
//         }));
        
//         // Update the UI without full refresh
//         const updatedIcoData = { ...icoData };
//         const icoIndex = updatedIcoData.data.findIndex(ico => ico.id === ico_id);
//         if (icoIndex !== -1) {
//           updatedIcoData.data[icoIndex].likes_counts = data.new_count || (pre_like + 1);
//         }
//       } else {
//         alert(data.message);
//       }
//     } catch (error) {
//       console.error("Error liking ICO:", error);
//       alert("Failed to like. Please try again.");
//     }
//   };

//   // Fetch user likes when user is authenticated
//   useEffect(() => {
//     const fetchUserLikes = async () => {
//       if (isAuthenticated && user) {
//         try {
//           const res = await fetch(`/api/user_likes?user_id=${user.id}`);
//           const data = await res.json();
          
//           if (data.success) {
//             // Convert array of liked ico_ids to an object for easier lookup
//             const likesObj = {};
//             data.likes.forEach(like => {
//               likesObj[like.ico_id] = true;
//             });
//             setUserLikes(likesObj);
//           }
//         } catch (error) {
//           console.error("Error fetching user likes:", error);
//         }
//       }
//     };
    
//     fetchUserLikes();
//   }, [isAuthenticated, user]);

//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchLaunchpads = async () => {
//       try {
//         setLoading(true);
//         // Replace with your actual API endpoint
//         const response = await axios.get('/api/admin/launchpad');
//         setLaunchpads(response.data.data);
//         setLoading(false);
//       } catch (err) {
//         setError('Failed to fetch launchpad data');
//         setLoading(false);
//         console.error('Error fetching launchpad data:', err);
//       }
//     };
//     fetchLaunchpads();
//   }, []);

//   const launchpadOptions = [
//     { value: 0, label: "All Launchpads" },
//     ...launchpads.map(launchpad => ({
//       value: launchpad.id,
//       label: launchpad.title
//     }))
//   ];

//   return (
//     <>
//       {/* Filter Tabs */}
//       <div className="btn-group mb-4">
//         <button
//           className="btn btn-light tab-button"
//           onClick={() => router.push("/crypto-token-ico-ido-ieo-presale")}
//         >
//           All
//         </button>
//         <button
//           className="btn btn-light tab-button "
//           onClick={() => router.push("/ico")}
//         >
//           Crypto ICO
//         </button>
//         <button
//           className="btn btn-light tab-button"
//           onClick={() => router.push("/ido")}
//         >
//           Crypto IDO
//         </button>
//         <button
//           className="btn btn-light tab-button active-tab"
//           onClick={() => router.push("/ieo")}
//         >
//           Crypto IEO
//         </button>
//         <button
//           className="btn btn-light tab-button "
//           onClick={() => router.push("/presale")}
//         >
//           Crypto Presale
//         </button>
//       </div>

      
//             {/* Search and Filter Bar */}
//             <div className="row mb-4">
//               <div className="col-md-3">
//                 <input
//                   type="text"
//                   className="form-control"
//                   placeholder="Search By Keyword..."
//                   value={tempSearchQuery}
//                   onChange={handleSearchInputChange}
//                   onKeyPress={handleKeyPress}
//                 />
//               </div>
             
//               <div className="col-md-3"> 
//                 <select
//                   value={selectedLaunchpad}
//                   onChange={handleLaunchpadChange}
//                   className="form-select mb-2"
//                 >
//                  {launchpadOptions.map((option) => (
//                     <option key={option.value} value={option.value}>
//                       {option.label}
//                     </option>
//                   ))}
//                 </select>
                
             
//               </div>
//               <div className="col-md-2">
//                 <select
//                   value={selectedType}
//                   onChange={handleSelectChange}
//                   className="form-select"
//                 >
//                   <option value="">Select Type</option>
//                   <option value="ongoing">Ongoing</option>
//                   <option value="upcoming">Upcoming</option>
//                   <option value="ended">Ended</option>
//                 </select>
//               </div>
//               <div className="col-md-3">
//                 <DatePicker
//                   selectsRange={true}
//                   startDate={startDate}
//                   endDate={endDate}
//                   className="form-select"
//                   onChange={(update) => setDateRange(update)}
//                   isClearable={true}
//                   placeholderText="Select Date Range"
//                 />
//               </div>
//               <div className="col-md-1">
//                 <button className="btn bg-gradient text-light w-100" onClick={handleSearch}>
//                   <i className="bi bi-search" />
//                 </button>
//               </div>
//             </div>
      
//             {/* Results Summary */}
//             <div className="mb-3">
//               <p>
//                 Showing {paginatedData.length} of {sortedData.length} results
//                 {selectedLaunchpad !== 0 && ` for ${launchpadOptions.find(o => o.value === selectedLaunchpad)?.label}`}
//                 {searchQuery && ` matching "${searchQuery}"`}
//               </p>
//             </div> 

//       {/* ICO Table with Server-fetched Data */}
//       <div className="table-responsive">
//         <table className="table table-hover">
//           <thead className="table-light">
//             <tr>
//               <th>Name</th>
//               <th>Stage</th>
//               <th>Launchpad</th>
//               <th>Upvotes</th>
//               <th>End In</th>
//               <th>Tokens for Sale</th>
//               <th>Rate</th>
//               <th>Fundraising Goal</th>
//               <th>Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {paginatedData.length > 0 ? (
//               paginatedData.map((ico, index) => (
//                 <tr key={ico.id || index}>
//                   <td>
//                     <div className="d-flex align-items-center">
//                       <Image
//                         src={
//                           ico.image
//                             ? ico.image.startsWith(
//                                 "https://d3iuzwoiyg9qa8.cloudfront.net/"
//                               )
//                               ? ico.image
//                               : `https://d3iuzwoiyg9qa8.cloudfront.net/webadmin/storage/${ico.image}`
//                             : altcoinImage
//                         }
//                         alt={ico.img_alt_title || "ICO Project"}
//                         width={32}
//                         height={32}
//                         className="project-icon me-2"
//                       />
//                       <div className="set_ico_name">
//                         {" "}
//                        <Link href={`/crypto-ico-details/${ico.slug}`} className="text_customization">
//                         {ico.name || "Unnamed Project"}
//                         </Link>
//                         <label className="set_alias">
//                           {ico.alias ? `(${ico.alias})` : ""}
//                         </label>
//                       </div>
//                       {ico.featured === 1 ? (
//                         <span className="featured-tag ms-2">Featured</span>
//                       ) : (
//                         ""
//                       )}
//                     </div>
//                   </td>
//                   <td>{ico.ico_ido_type === 2 ? "IEO" : "presalse"}</td>
//                   <td>
//                     {launchpadOptions.find(option => option.value === ico.launchpad)?.label || 'On Website'}
//                   </td>
//                   <td>
//                     <button
//                       className={`upvote-btn ${userLikes[ico.id] ? 'liked' : ''}`}
//                       onClick={() => handleLike(ico.id, ico.likes_counts || 0)}
//                     >
//                       <i className={`bi ${userLikes[ico.id] ? 'bi-hand-thumbs-up-fill text-primary' : 'bi-hand-thumbs-up'}`} />{" "}
//                       {ico.likes_counts || 0}
//                     </button>
//                   </td>
//                   <td>
//   <span
//     data-bs-toggle="tooltip"
//     data-bs-placement="top"
//     title={`Start from ${ico.start_time} to ${ico.end_time}`}
//     className="custom-tooltip"
//   >
//     {calculateSingleDateDifference(ico.start_time, ico.end_time) || "N/A"}
//   </span>
// </td>
//                   <td>{formatNumber(ico.fund_asking_for) || "N/A"}</td>
//                   <td>
//                     {ico.ico_price
//                       ? `${ico.ico_price} (${ico.accept_type || "USDT"})`
//                       : "N/A"}
//                   </td>
//                   <td>
//                     {ico.fund_asking_for
//                       ? `${formatNumber(ico.fund_asking_for)} (${
//                           ico.accept_type || "USDT"
//                         })`
//                       : "N/A"}
//                   </td>
//                   <td>
//                     <div className="info-circle">
//                       <Link href={`/crypto-ico-details/${ico.slug}`}>
//                         <i className="fa-solid fa-arrow-up-right-from-square hyperlink"></i>
//                       </Link>
//                     </div>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="9" className="text-center py-4">
//                   No ICO data available
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Load More Button */}
//       {visibleData < sortedData.length && (
//         <div className="text-center mt-4 mb-5">
//           <button className="btn bg-gradient px-4 text-light" onClick={handleLoadMore}>
//             Load More
//           </button>
//         </div> 
//       )} 

//       {/* Login Modal */}
//       {showLoginModal && <LoginModal 
//   show={showLoginModal} 
//   handleClose={handleCloseLoginModal}  // or 'close' instead of 'handleClose'
//   onLoginSuccess={handleLoginSuccess}
// />}
//     </>
//   );
// }



"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import altcoinImage from "../images/altcoin.webp";
import { useRouter } from "next/navigation";
import { useAuth } from "../hooks/authContext";
import Link from "next/link";
import axios from 'axios';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import LoginModal from "./LoginModal";
import SearchableDropdown from "./SearchableDropdown";

export default function ClientSideIDO({ initialData }) {
  const [selectedType, setSelectedType] = useState("ongoing"); // Default to ongoing
  const [selectedLaunchpad, setSelectedLaunchpad] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [tempSearchQuery, setTempSearchQuery] = useState("");
  const router = useRouter();
  const [visibleData, setVisibleData] = useState(15);
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const [launchpads, setLaunchpads] = useState([]);
  const { isAuthenticated, user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [pendingLikeAction, setPendingLikeAction] = useState(null);
  const [userLikes, setUserLikes] = useState({});
  
  // State for API-based data
  const [icoData, setIcoData] = useState(initialData?.data || []);
  const [totalCount, setTotalCount] = useState(initialData?.total || 0); 
  const [skip, setSkip] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  const handleOpenLoginModal = () => setShowLoginModal(true);
  const handleCloseLoginModal = () => setShowLoginModal(false);

  // Modified to handle pending like action after login
  const handleLoginSuccess = (userData) => {
    console.log('User logged in successfully:', userData);
    router.reload();
    // Check if there was a pending like action
    if (pendingLikeAction) { 
      handleLike(pendingLikeAction.ico_id, pendingLikeAction.pre_like);
      setPendingLikeAction(null);
    }
  };

  const handleSelectChange = (event) => {
    setSelectedType(event.target.value);
    resetFilters();
  };

  const handleLaunchpadChange = (event) => {
    setSelectedLaunchpad(Number(event.target.value));
    resetFilters();
  };

  const handleSearchInputChange = (event) => {
    setTempSearchQuery(event.target.value);
  };

  // Function to be called when search button is clicked
  const handleSearch = () => {
    setSearchQuery(tempSearchQuery);
    resetFilters();
  };

  // Reset filters and fetch new data
  const resetFilters = () => {
    setSkip(0);
    setVisibleData(15);
    setHasMore(true);
    // fetchData will be called by the useEffect
  };

  // Also handle Enter key press on the search input
  // const handleKeyPress = (event) => {
  //   if (event.key === "Enter") {
  //     handleSearch();
  //   }
  // };

  function formatNumber(num) {
    if (!num) return "N/A";
    if (num >= 1e9) {
      return (num / 1e9).toFixed(2).replace(/\.00$/, "") + "B";
    } else if (num >= 1e6) {
      return (num / 1e6).toFixed(2).replace(/\.00$/, "") + "M";
    } else if (num >= 1e3) {
      return (num / 1e3).toFixed(2).replace(/\.00$/, "") + "K";
    }
    return num.toString();
  }

  const formatToYYYYMMDD = (inputDate) => {
    const date = new Date(inputDate);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const getTimeAgo = (timestamp) => {
    if (!timestamp) return "Unknown time";
   const formate =  formatToYYYYMMDD(timestamp)
    const created = new Date(formate);
    const now = new Date();
  
    if (isNaN(created)) return "Invalid date";
  
    const diffInMs = created - now;
    const isFuture = diffInMs > 0;
  
    const absMinutes = Math.floor(Math.abs(diffInMs) / (1000 * 60));
    const absHours = Math.floor(absMinutes / 60);
    const absDays = Math.floor(absMinutes / (60 * 24));
    const absWeeks = Math.floor(absDays / 7);
    const absMonths = Math.floor(absDays / 30); // Approximation
  
    // const suffix = isFuture ? "from now" : "ago";
  
    if (absMinutes < 60) {
      return `${absMinutes} minute${absMinutes !== 1 ? "s" : ""} `;
    } else if (absHours < 24) {
      return `${absHours} hour${absHours !== 1 ? "s" : ""} `;
    } else if (absDays < 7) {
      return `${absDays} day${absDays !== 1 ? "s" : ""} `;
    } else if (absWeeks < 4) {
      return `${absWeeks} week${absWeeks !== 1 ? "s" : ""} `;
    } else {
      return `${absMonths} month${absMonths !== 1 ? "s" : ""} `;
    }
  };

  function calculateSingleDateDifference(startDate, endDate) {
    if (!startDate || !endDate) return "N/A";
    
    const start = new Date(startDate);
    const end = new Date(endDate);

    if (end < start) {
      return "End date must be greater than start date.";
    }

    const timeDifference = end - start;
    const totalDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    const totalMonths = Math.floor(totalDays / 30);
    const totalWeeks = Math.floor(totalDays / 7);

    if (totalMonths > 0) {
      return `${totalMonths} month${totalMonths !== 1 ? "s" : ""}`;
    } else if (totalWeeks > 0) {
      return `${totalWeeks} week${totalWeeks !== 1 ? "s" : ""}`;
    } else {
      return `${totalDays} day${totalDays !== 1 ? "s" : ""}`;
    }
  }

  // Load More function - now uses API
  const handleLoadMore = () => {
    const newSkip = skip + visibleData;
    setSkip(newSkip);
    // fetchData will be called by the useEffect when skip changes
  };

  // Modified to show login modal instead of redirecting
  const handleLike = async (ico_id, pre_like) => {
    if (!isAuthenticated) {
      // Store the pending like action for after login
      setPendingLikeAction({ ico_id, pre_like });
      handleOpenLoginModal();
      return;
    }

    try {
      const res = await fetch("/api/like_counts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ico_id,
          user_id: user.id,
          pre_like
        })
      });

      const data = await res.json();

      if (data.success) {
        // Update local state to show liked status
        setUserLikes(prev => ({
          ...prev,
          [ico_id]: true
        }));
        
        // Update the UI without full refresh
        const updatedData = [...icoData];
        const icoIndex = updatedData.findIndex(ico => ico.id === ico_id);
        if (icoIndex !== -1) {
          updatedData[icoIndex].likes_counts = data.new_count || (pre_like + 1);
          setIcoData(updatedData);
        }
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error liking ICO:", error);
      alert("Failed to like. Please try again.");
    }
  };

  // Fetch user likes when user is authenticated
  useEffect(() => {
    const fetchUserLikes = async () => {
      if (isAuthenticated && user) {
        try {
          const res = await fetch(`/api/user_likes?user_id=${user.id}`);
          const data = await res.json();
          
          if (data.success) {
            // Convert array of liked ico_ids to an object for easier lookup
            const likesObj = {};
            data.likes.forEach(like => {
              likesObj[like.ico_id] = true;
            });
            setUserLikes(likesObj);
          }
        } catch (error) {
          console.error("Error fetching user likes:", error);
        }
      }
    };
    
    fetchUserLikes();
  }, [isAuthenticated, user]);

  // Fetch launchpads
  useEffect(() => {
    const fetchLaunchpads = async () => {
      try {
        const response = await axios.get('/api/admin/launchpad');
        const result = response.data.data || [];
        const sortedData = result.sort((a, b) => 
          a.title.localeCompare(b.title)
        );
        setLaunchpads(sortedData);
      } catch (err) {
        console.error('Error fetching launchpad data:', err);
      }
    };
    fetchLaunchpads();
  }, []);

  // Fetch data function
  const fetchData = async () => {
    setIsLoading(true);
    try {
      // Construct query parameters
      const params = new URLSearchParams();
      params.append('ico_ido_type', '2'); // IDO type
      params.append('skip', skip.toString());
      params.append('limit', visibleData.toString());
      
      if (searchQuery) {
        params.append('search', searchQuery);
      }
      
      if (selectedType) {
        params.append('type', selectedType);
      }
      
      if (selectedLaunchpad !== 0) {
        params.append('launchpad', selectedLaunchpad.toString());
      }
      
      if (startDate && endDate) {
        params.append('start_date', startDate.toISOString().split('T')[0]);
        params.append('end_date', endDate.toISOString().split('T')[0]);
      }

      const response = await fetch(`/api/crypto-icos-icoanoucement?${params.toString()}`);
      
      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }
      
      const result = await response.json();
      
      if (result.success) {
        // For initial load or filter reset, replace data
        // For "load more", append data
        if (skip === 0) {
          setIcoData(result.data);
        } else {
          setIcoData(prev => [...prev, ...result.data]);
        }
        
        setTotalCount(result.total);
        
        // Check if we've loaded all the data
        setHasMore(skip + visibleData < result.total);
      } else {
        console.error("API returned error:", result.message);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    } 
  };

  // Effect to fetch data when filters or pagination changes
  useEffect(() => {
    fetchData();
  }, [skip, searchQuery, selectedType, selectedLaunchpad, startDate, endDate]);

  const launchpadOptions = [
    { value: 0, label: "All Launchpads" },
    ...launchpads.map(launchpad => ({
      value: launchpad.id,
      label: launchpad.title
    }))
  ];

  return (
    <>
      {/* Filter Tabs */}
      <div className="btn-group mb-4">
        <button
          className="btn btn-light tab-button"
          onClick={() => router.push("/crypto-token-ico-ido-ieo-presale")}
        >
          All
        </button>
        <button
          className="btn btn-light tab-button "
          onClick={() => router.push("/ico")}
        >
          Crypto ICO
        </button>
        <button
          className="btn btn-light tab-button"
          onClick={() => router.push("/ido")}
        >
          Crypto IDO
        </button>
        <button
          className="btn btn-light tab-button active-tab"
          onClick={() => router.push("/ieo")}
        >
          Crypto IEO
        </button>
        <button
          className="btn btn-light tab-button"
          onClick={() => router.push("/presale")}
        >
          Crypto Presale
        </button>
      </div>

      {/* Search and Filter Bar */}
      <div className="row mb-4">
        <div className="col-md-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search By Keyword..."
            value={tempSearchQuery}
            onChange={handleSearchInputChange}
            // onKeyPress={handleKeyPress}
          />
        </div>
        
        <div className="col-md-3"> 
        <SearchableDropdown
  options={launchpadOptions}
  placeholder="Select Launchpad"
  handleData={(selected) => {
    setSelectedLaunchpad(selected.value);
    handleLaunchpadChange(selected);
  }}
/>
          {/* <select
            value={selectedLaunchpad}
            onChange={handleLaunchpadChange}
            className="form-select mb-2"
          >
          {launchpadOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select> */}
        </div>
        <div className="col-md-2">
          <select
            value={selectedType}
            onChange={handleSelectChange}
            className="form-select"
          >
            <option value="">Select Type</option>
            <option value="ongoing">Ongoing</option>
            <option value="upcoming">Upcoming</option>
            <option value="ended">Ended</option>
          </select>
        </div>
        <div className="col-md-3">
          <DatePicker
            selectsRange={true}
            startDate={startDate}
            endDate={endDate}
            className="form-select"
            onChange={(update) => {
              setDateRange(update);
              if (update[0] !== null && update[1] !== null) {
                resetFilters();
              }
            }}
            isClearable={true}
            placeholderText="Select Date Range"
          />
        </div>
        <div className="col-md-1">
          <button className="btn bg-gradient text-light w-100" onClick={handleSearch}>
            <i className="bi bi-search" />
          </button>
        </div>
      </div>
      
      {/* Results Summary */}
      <div className="mb-3">
        <p>
          Showing {icoData.length} of {totalCount} results
          {selectedLaunchpad !== 0 && ` for ${launchpadOptions.find(o => o.value === selectedLaunchpad)?.label}`}
          {searchQuery && ` matching "${searchQuery}"`}
        </p>
      </div>

      {/* ICO Table with Server-fetched Data */}
      <div className="table-responsive">
        <table className="table table-hover">
          <thead className="table-light">
            <tr>
              <th>Name</th>
              <th>Stage</th>
              <th>Launchpad</th>
              <th>Upvotes</th>
              <th>End In</th>
              <th>Tokens for Sale</th>
              <th>Rate</th>
              <th>Fundraising Goal</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {icoData.length > 0 ? (
              icoData.map((ico, index) => (
                <tr key={ico.id || index}>
                  <td>
                    <div className="d-flex align-items-center">
                      <Image
                        src={
                          ico.image
                            ? ico.image.startsWith(
                                "https://d3iuzwoiyg9qa8.cloudfront.net/"
                              )
                              ? ico.image 
                              : `https://d3iuzwoiyg9qa8.cloudfront.net/webadmin/storage/${ico.image}`
                            : altcoinImage
                        }
                        alt={ico.img_alt_title || "ICO Project"}
                        width={32}
                        height={32}
                        className="project-icon me-2"
                      />
                      <div className="set_ico_name">
                        {" "}
                        <Link href={`/crypto-ico-details/${ico.slug}`} className="text_customization">
                          {ico.name || "Unnamed Project"}
                        </Link>
                        <label className="set_alias">
                          {ico.alias ? `(${ico.alias})` : ""}
                        </label>
                      </div>
                      {ico.featured === 1 ? (
                        <span className="featured-tag ms-2">Featured</span>
                      ) : (
                        ""
                      )}
                    </div>
                  </td>
                  <td>{ico.ico_ido_type === 2 ? "IEO" : "presale"}</td>
                  <td>
                    {launchpadOptions.find(option => option.value === ico.launchpad)?.label || 'On Website'}
                  </td>
                  <td>
                    <button
                      className={`upvote-btn ${userLikes[ico.id] ? 'liked' : ''}`}
                      onClick={() => handleLike(ico.id, ico.likes_counts || 0)}
                    >
                      <i className={`bi ${userLikes[ico.id] ? 'bi-hand-thumbs-up-fill text-primary' : 'bi-hand-thumbs-up'}`} />{" "}
                      {ico.likes_counts || 0}
                    </button>
                  </td>
                  <td>
                    <span
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title={`Start from ${formatToYYYYMMDD(ico.start_time)} to ${formatToYYYYMMDD(ico.end_time)}`}
                      className="custom-tooltip"
                    >
                     {getTimeAgo(ico.end_time)}
                    </span>
                  </td>
                  <td>{formatNumber(ico.fund_asking_for)}</td>
                  <td>
                    {ico.ico_price
                      ? `${ico.ico_price} (${ico.accept_type || "USDT"})`
                      : "N/A"}
                  </td>
                  <td>
                    {ico.fund_asking_for
                      ? `${formatNumber(ico.fund_asking_for)} (${
                          ico.accept_type || "USDT"
                        })`
                      : "N/A"}
                  </td>
                  <td>
                    <div className="info-circle">
                      <Link href={`/crypto-ico-details/${ico.slug}`}>
                        <i className="fa-solid fa-arrow-up-right-from-square hyperlink"></i>
                      </Link>
                    </div>
                  </td> 
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9" className="text-center py-4">
                  {isLoading ? (
                    <div className="spinner-border text-primary" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  ) : (
                    "No IDO data available"
                  )}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Loading Indicator */}
      {isLoading && icoData.length > 0 && (
        <div className="text-center py-4">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      {/* Load More Button */}
      {hasMore && !isLoading && (
        <div className="text-center mt-4 mb-5">
          <button className="btn bg-gradient px-4 text-light" onClick={handleLoadMore}>   
            Load More
          </button>
        </div>
      )}

      {/* Login Modal */}
      {showLoginModal && <LoginModal 
        show={showLoginModal} 
        handleClose={handleCloseLoginModal}
        onLoginSuccess={handleLoginSuccess}
      />}
    </>
  );
}