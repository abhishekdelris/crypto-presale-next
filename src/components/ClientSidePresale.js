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


export default function ClientSideICO({ icoData }) {
  const [selectedType, setSelectedType] = useState("");
  const [selectedLaunchpad, setSelectedLaunchpad] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [tempSearchQuery, setTempSearchQuery] = useState(""); // For immediate input changes
  const router = useRouter();
  const [visibleData, setVisibleData] = useState(15);
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const [launchpads, setLaunchpads] = useState([]);
  const { isAuthenticated,  user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [pendingLikeAction, setPendingLikeAction] = useState(null);
  const [userLikes, setUserLikes] = useState({});

  const handleOpenLoginModal = () => setShowLoginModal(true);
  const handleCloseLoginModal = () => setShowLoginModal(false);

 

  // Modified to handle pending like action after login
  const handleLoginSuccess = (userData) => {
    console.log('User logged in successfully:', userData);
    handleCloseLoginModal();
    
    // Check if there was a pending like action
    if (pendingLikeAction) {
      handleLike(pendingLikeAction.ico_id, pendingLikeAction.pre_like);
      setPendingLikeAction(null);
    }
  };

  const handleSelectChange = (event) => {
    setSelectedType(event.target.value);
  };

  const handleLaunchpadChange = (event) => {
    setSelectedLaunchpad(Number(event.target.value));
  };

  const handleSearchInputChange = (event) => {
    setTempSearchQuery(event.target.value);
  };

  // Function to be called when search button is clicked
  const handleSearch = () => {
    setSearchQuery(tempSearchQuery);
  };

  // Also handle Enter key press on the search input
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  function formatNumber(num) {
    if (num >= 1e9) {
      return (num / 1e9).toFixed(2).replace(/\.00$/, "") + "B";
    } else if (num >= 1e6) {
      return (num / 1e6).toFixed(2).replace(/\.00$/, "") + "M";
    } else if (num >= 1e3) {
      return (num / 1e3).toFixed(2).replace(/\.00$/, "") + "K";
    }
    return num.toString() ? num.toString() : num;
  }

  function calculateSingleDateDifference(startDate, endDate) {
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

  // Filter the data based on search, type, launchpad and date range
  const filteredData = (icoData?.data || []).filter((ico) => {
    // Text search filter
    const matchesSearch =
      searchQuery === "" ||
      (ico.name &&
        ico.name.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (ico.alias &&
        ico.alias.toLowerCase().includes(searchQuery.toLowerCase()));

    // Type filter
    let matchesType = true;
    if (selectedType === "ongoing") {
      const now = new Date();
      const startTime = new Date(ico.start_time);
      const endTime = new Date(ico.end_time);
      matchesType = now >= startTime && now <= endTime;
    } else if (selectedType === "upcoming") {
      const now = new Date();
      const startTime = new Date(ico.start_time);
      matchesType = startTime > now;
    } else if (selectedType === "ended") {
      const now = new Date();
      const endTime = new Date(ico.end_time);
      matchesType = endTime < now;
    }

    // Launchpad filter
    let matchesLaunchpad = true;
    if (selectedLaunchpad !== 0) {
      matchesLaunchpad = ico.launchpad === selectedLaunchpad;
    }

    // Date range filter
    let matchesDateRange = true;
    if (startDate && endDate) {
      const icoStartDate = new Date(ico.start_time);
      const icoEndDate = new Date(ico.end_time);

      // Check if the ICO period overlaps with the selected date range
      matchesDateRange = icoStartDate <= endDate && icoEndDate >= startDate;
    }
    return (
      ico.is_review === 1 && 
      matchesSearch && 
      matchesType && 
      matchesLaunchpad &&
      matchesDateRange
    );
  });

  // Sort the filtered data: Featured first, then others
  const sortedData = filteredData.sort((a, b) => b.featured - a.featured);

  // Paginate the data
  const paginatedData = sortedData.slice(0, visibleData);

  // Load More function
  const handleLoadMore = () => {
    setVisibleData((prev) => prev + 15);
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
        const updatedIcoData = { ...icoData };
        const icoIndex = updatedIcoData.data.findIndex(ico => ico.id === ico_id);
        if (icoIndex !== -1) {
          updatedIcoData.data[icoIndex].likes_counts = data.new_count || (pre_like + 1);
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

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchLaunchpads = async () => {
      try {
        setLoading(true);
        // Replace with your actual API endpoint
        const response = await axios.get('/api/admin/launchpad');
        setLaunchpads(response.data.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch launchpad data');
        setLoading(false);
        console.error('Error fetching launchpad data:', err);
      }
    };
    fetchLaunchpads();
  }, []);

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
          className="btn btn-light tab-button "
          onClick={() => router.push("/ieo")}
        >
          Crypto IEO
        </button>
        <button
          className="btn btn-light tab-button active-tab"
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
                     onKeyPress={handleKeyPress}
                   />
                 </div>
                
                 <div className="col-md-3"> 
                   <select
                     value={selectedLaunchpad}
                     onChange={handleLaunchpadChange}
                     className="form-select mb-2"
                   >
                    {launchpadOptions.map((option) => (
                       <option key={option.value} value={option.value}>
                         {option.label}
                       </option>
                     ))}
                   </select>
                   
                
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
                     onChange={(update) => setDateRange(update)}
                     isClearable={true}
                     placeholderText="Select Date Range"
                   />
                 </div>
                 <div className="col-md-1">
                   <button className="btn btn-primary w-100" onClick={handleSearch}>
                     <i className="bi bi-search" />
                   </button>
                 </div>
               </div>
         
               {/* Results Summary */}
               <div className="mb-3">
                 <p>
                   Showing {paginatedData.length} of {sortedData.length} results
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
            {paginatedData.length > 0 ? (
              paginatedData.map((ico, index) => (
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
                        {ico.name || "Unnamed Project"}
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
                  <td>{ico.ico_ido_type === 3 ? "Presale" : "ICO"}</td>
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
    title={`Start from ${ico.start_time} to ${ico.end_time}`}
    className="custom-tooltip"
  >
    {calculateSingleDateDifference(ico.start_time, ico.end_time) || "N/A"}
  </span>
</td>
                  <td>{formatNumber(ico.fund_asking_for) || "N/A"}</td>
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
                  No ICO data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

       {/* Load More Button */}
       {visibleData < sortedData.length && (
        <div className="text-center mt-4 mb-5">
          <button className="btn btn-primary px-4" onClick={handleLoadMore}>
            Load More
          </button>
        </div>
      )} 

      {/* Login Modal */}
      {showLoginModal && <LoginModal 
  show={showLoginModal} 
  handleClose={handleCloseLoginModal}  // or 'close' instead of 'handleClose'
  onLoginSuccess={handleLoginSuccess}
/>}
    </>
  );
}
